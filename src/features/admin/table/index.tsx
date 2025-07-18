import { useEffect, useState } from "react";
import { api, Post } from "../../../api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearch } from "../../../context/searchContext";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../../../components/animations/Animation - 1749684317032.json";

const AdminTable = () => {
  const { searchText } = useSearch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const fetchPosts = async (): Promise<Post[]> => {
    const res = await api.get(`/articles`);
    return res.data;
  };

  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const [filteredArticles, setFilteredArticles] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/articles/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  useEffect(() => {
    const filtered = posts
      .filter((post) =>
        post.title?.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return dateB - dateA;
      });

    setFilteredArticles(filtered);
    setVisibleCount(10);
  }, [posts, searchText]);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(filteredArticles.length);
      setIsLoadingMore(false);
    }, 1000);
  };

  const handleViewLess = () => {
    setVisibleCount(10);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleEdit = (article: Post) => {
    navigate(`/admin/${article.id}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <Lottie animationData={loadingAnimation} loop className="w-16 h-16" />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Error: {(error as Error)?.message ?? "Something went wrong"}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto pb-3">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-2 px-4 border-b">Title</th>
            <th className="text-left py-2 px-4 border-b">Status</th>
            <th className="text-left py-2 px-4 border-b">Date</th>
            <th className="text-left py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.slice(0, visibleCount).map((uni) => (
            <tr key={uni.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{uni.title || "Untitled"}</td>
              <td className="py-2 px-4 border-b">
                <span className="text-blue-600 font-medium">
                  {uni.status || "Unknown"}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                {uni.createdAt
                  ? new Date(uni.createdAt).toLocaleDateString()
                  : uni.date
                  ? new Date(uni.date).toLocaleDateString()
                  : "N/A"}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(uni)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(String(uni.id))}
                  className="text-orange-700 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredArticles.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4">
                No articles found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {filteredArticles.length > 10 && (
        <div
          className="h-12 cursor-pointer rounded-t-md text-sm flex items-center 
          justify-center bg-blue-700/30 backdrop-blur-sm shadow-lg mt-2"
        >
          {visibleCount < filteredArticles.length ? (
            <p onClick={handleLoadMore}>
              {isLoadingMore ? (
                <Lottie
                  animationData={loadingAnimation}
                  loop
                  className="w-6 h-6"
                />
              ) : (
                "View more"
              )}
            </p>
          ) : (
            <p onClick={handleViewLess}>View less</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminTable;
