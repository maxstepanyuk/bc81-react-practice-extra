import axios from "axios";
import type { Book } from "../types";

const booksApiAxios = axios.create({
  baseURL: "https://6971cf4a32c6bacb12c49096.mockapi.io",
});

export async function getAbooks(): Promise<Book[]> {
  const { data } = await booksApiAxios.get<Book[]>("/books");
  return data;
}
