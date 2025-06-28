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
  baseURL: "http://localhost:8000",
});
