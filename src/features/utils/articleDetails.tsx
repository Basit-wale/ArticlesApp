import { useParams } from "react-router-dom";
import { api, Post } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import loadingAnimation from "../../components/animations/Animation - 1749684317032.json";
import Lottie from "lottie-react";
import img2 from "../../assets/img/pexels-pixabay-531880.jpg";

const fetchArticleById = async (id: string): Promise<Post> => {
  const res = await api.get(`/articles/${id}`);
  return res.data;
};

const ArticlesDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: article,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticleById(id!),
    enabled: !!id,
  });

  if (isLoading) {
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

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Error: {(error as Error).message}
      </p>
    );
  }

  if (!article) {
    return <p className="text-center text-gray-500">Article not found.</p>;
  }

  return (
    <div className="w-full h-full py-4 px-5 md:px-2 flex flex-col gap-4">
      <div className="h-12 content-center border-b-[1px] border-slate-600 dotted">
        <p className="text-2xl font-semibold">{article.title}</p>
      </div>

      <p className="pt-2">{article.body.slice(0, 500)}</p>

      <img
        src={article.image}
        alt={article.title}
        className="rounded-md object-cover w-full max-h-96"
      />

      <p>{article.body.slice(500, 1500)}</p>

      <img
        src={img2}
        alt="Decorative"
        className="h-80 object-contain rounded-md"
      />

      <p>{article.body.slice(1500)}</p>
    </div>
  );
};

export default ArticlesDetails;
