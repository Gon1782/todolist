import axios from "axios";
import { EachList, Request } from "../types/interface";

const SERVER_ADDRESS = "https://brook-tender-dinosaur.glitch.me/lists";

export const getLists = async () => {
  const { data } = await axios.get<EachList[]>(`${SERVER_ADDRESS}`);
  return data;
};

export const postLists = (list: EachList) => {
  return axios.post(`${SERVER_ADDRESS}`, list);
};

export const deleteLists = (listId: number) => {
  return axios.delete(`${SERVER_ADDRESS}/${listId}`);
};

export const changeList = async ({ id, edit }: Request) => {
  return await axios.patch(`${SERVER_ADDRESS}/${id}`, edit);
};
