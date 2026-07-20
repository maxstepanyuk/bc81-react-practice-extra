import axios from "axios";
import type { User } from "../types";

const url = "https://6240d2109b450ae274385b44.mockapi.io/api";
axios.defaults.baseURL = url;

export async function getUsers(): Promise<User[]> {
  const { data } = await axios.get<User[]>("/users");
  return data;
}
