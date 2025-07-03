import { useParams } from "react-router-dom";
import { api, Post } from "../../api/api";
import img2 from "../../assets/img/pexels-pixabay-531880.jpg";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import loadingAnimation from "../../components/animations/Animation - 1749684317032.json";
import Lottie from "lottie-react";

const fetchPosts = async (): Promise<Post[]> => {
  const res = await api.get("/uni");
  return res.data;
};

const ArticlesDetails = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const {
    data: posts = [],
    isLoading: loadingPosts,
    isError: loadingPostsError,
    error: postsError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const [article, setArticle] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const articleDetail = posts.find((u) => String(u.id) === String(id));

      setArticle(articleDetail ?? null);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout); // cleanup
  }, [id, posts]);

  if (loadingPosts) return <p>Loading...</p>;
  if (loadingPostsError)
    return <p>Error: {(postsError as Error)?.message ?? "Unknown error"}</p>;

  if (loading) {
    return (
      <div className="flex justify-center h-[85vh] items-center">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="w-9 h-9"
        />
      </div>
    );
  }

  if (!article) return <p>Article not found</p>;

  return (
    <div className="w-full h-full py-4 px-5 md:px-2 flex flex-col gap-2">
      <div className="h-12 content-center border-b-[1px] border-slate-600 dotted">
        <p className="text-2xl font-semibold">{article.title}</p>
      </div>
      <p className="pt-2">{article.body.slice(0, 500)}</p>
      <img src={article.image} alt="" />
      <p>{article.body.slice(500, 1500)}</p>
      <img src={img2} alt="" className="h-80 object-contain" />
      <p>{article.body.slice(1500, 100000)}</p>
    </div>
  );
};

export default ArticlesDetails;
