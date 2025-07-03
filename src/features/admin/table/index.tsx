import { useEffect, useState } from "react";
import { api, Post } from "../../../api/api";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "../../../context/searchContext";
import Lottie from "lottie-react";
import loadingAnimation from "../../../components/animations/Animation - 1749684317032.json";

const AdminTable = () => {
  const { searchText } = useSearch();

  const fetchPosts = async (): Promise<Post[]> => {
    const res = await api.get(`/uni`);
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

  useEffect(() => {
    const filtered = posts.filter((post) =>
      Object.values(post).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
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

  const handleDelete = (index: number) => {
    if (confirm("Are you sure you want to delete this article?")) {
      const updated = [...filteredArticles];
      updated.splice(index, 1);
      setFilteredArticles(updated);
    }
  };

  const handleEdit = (index: number) => {
    const newTitle = prompt("Enter new title:", filteredArticles[index].title);
    if (newTitle !== null && newTitle.trim() !== "") {
      const updated = [...filteredArticles];
      updated[index].title = newTitle.trim();
      setFilteredArticles(updated);
    }
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
          {filteredArticles.slice(0, visibleCount).map((uni, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{uni.title}</td>
              <td className="py-2 px-4 border-b">
                <span className="text-blue-600 font-medium">{uni.status}</span>
              </td>
              <td className="py-2 px-4 border-b">2025-06-20</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
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
