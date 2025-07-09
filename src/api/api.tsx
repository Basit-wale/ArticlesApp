import axios from "axios";

export type Post = {
  id: number;
  title: string;
  body: string;
  image: string;
  status: string;
  date: string;
};

export const api = axios.create({
  baseURL: "https://686db143c9090c495386fbc9.mockapi.io/articles",
});
