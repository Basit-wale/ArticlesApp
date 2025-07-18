import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Article = {
  title: string;
  body: string;
  image: string;
  date: string;
  createdAt?: string; // ISO date format
};

export default function CreateArticlePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createArticleMutation = useMutation({
    mutationFn: (newArticle: Article) =>
      axios.post(
        "https://686db143c9090c495386fbc9.mockapi.io/articles/articles",
        newArticle
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      alert("Article created successfully!");
      navigate("/"); // adjust to your route
    },
    onError: (err) => {
      console.error(err);
      alert("Failed to create article. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createArticleMutation.mutate({
      title,
      body,
      image,
      date: new Date().toISOString(),
      createdAt: new Date().toISOString(), // add ISO date format
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Create New Article</h1>
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
          disabled={createArticleMutation.isPending}
          className="bg-green-600 text-white p-2 rounded w-full"
        >
          {createArticleMutation.isPending ? "Creating..." : "Create Article"}
        </button>
      </form>
    </div>
  );
}
