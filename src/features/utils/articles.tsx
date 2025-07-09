import { NavLink } from "react-router-dom";
import Articles from "../home/components/articles";
import { api, Post } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearch } from "../../context/searchContext";
import Lottie from "lottie-react";
import loadingAnimation from "../../components/animations/Animation - 1749684317032.json";

const HomeArticles: React.FC = () => {
  const { searchText, setSearchText } = useSearch();

  const [pageLimit, setPageLimit] = useState<number>(5);
  const [filteredArticles, setFilteredArticles] = useState<Post[]>([]);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState<boolean>(false);

  const fetchPosts = async (): Promise<Post[]> => {
    const res = await api.get(`/articles`);
    return res.data;
  };

  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // Sort and filter when posts or searchText change
  useEffect(() => {
    const timer = setTimeout(() => {
      const sortedAndFiltered = posts
        .slice()
        .sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA; // latest first
        })
        .filter((post) =>
          Object.values(post).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
          )
        );
      setFilteredArticles(sortedAndFiltered);
    }, 500); // debounce filtering

    return () => clearTimeout(timer);
  }, [posts, searchText]);

  // Handle load more
  const handleLoadMore = () => {
    setIsLoadMoreLoading(true);
    setTimeout(() => {
      setPageLimit((prev) => prev + 5);
      setIsLoadMoreLoading(false);
    }, 1000);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="h-full py-2 flex flex-col">
      <div className="flex items-center pl-[1.1em] md:pl-0">
        <p className="text-[18px] text-gray-500">Latest News</p>
        <p className="text-2xl">🔥</p>
      </div>

      {filteredArticles.length === 0 ? (
        <p className="pl-[1.1em] pb-1 md:pl-0">
          No articles found. Back to{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => setSearchText("")}
          >
            Home
          </span>
        </p>
      ) : (
        filteredArticles.slice(0, pageLimit).map((uni) => (
          <NavLink to={`/${uni.id}`} key={uni.id}>
            <Articles
              title={uni.title}
              body={uni.body.slice(0, 150)}
              Img={uni.image}
            />
          </NavLink>
        ))
      )}

      {filteredArticles.length > pageLimit && (
        <div className="w-full h-full px-2 mt-2">
          <div
            className="w-full m-auto h-10 rounded-md content-center text-center bg-[#c4c29a] cursor-pointer"
            onClick={handleLoadMore}
          >
            {isLoadMoreLoading ? (
              <div className="flex justify-center h-fit w-full">
                <Lottie
                  animationData={loadingAnimation}
                  loop
                  className="w-7 h-7"
                />
              </div>
            ) : (
              <p className="text-sm capitalize">Load more articles</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeArticles;
