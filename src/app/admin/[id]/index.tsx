// src/pages/articles/edit/[id].tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api, Post } from "../../../api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function EditArticlePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const { data: article, isLoading } = useQuery<Post>({
    queryKey: ["article", id],
    queryFn: async () => {
      const res = await api.get(`/articles/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (article) {
      setTitle(article.title || "");
      setBody(article.body || "");
      setImage(article.image || "");
    }
  }, [article]);

  const mutation = useMutation({
    mutationFn: (updatedData: Partial<Post>) =>
      api.put(`/articles/${id}`, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      alert("Article updated successfully");
      navigate("/");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      title,
      body,
      image,
    });
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Article Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border p-2 rounded"
          rows={5}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          {mutation.isPending ? "Updating..." : "Update Article"}
        </button>
      </form>
    </div>
  );
}
