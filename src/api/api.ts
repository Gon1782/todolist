import axios from "axios";
import { EachList } from '../types/interface';

export const getLists = async () => {
  const { data } = await axios.get<EachList[]>("http://localhost:3001/lists");
  return data;
};

export const postLists = (list: EachList) => {
  return axios.post("http://localhost:3001/lists", list);
};

export const deleteLists = (listId: number) => {
  return axios.delete(`http://localhost:3001/lists/${listId}`);
};

export const changeList = async (listId: number, edit: EachList) => {
  return await axios.patch(`http://localhost:3001/lists/${listId}`, edit);
};
