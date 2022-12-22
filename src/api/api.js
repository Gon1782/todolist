import axios from "axios";

export const getLists = async () => {
  const { data } = await axios.get("http://localhost:3001/lists");
  return data;
};

export const postLists = (list) => {
  return axios.post("http://localhost:3001/lists", list);
};

export const deleteLists = (listId) => {
  return axios.delete(`http://localhost:3001/lists/${listId}`);
};

export const changeList = async (listId, edit) => {
  return await axios.patch(`http://localhost:3001/lists/${listId}`, edit);
};
