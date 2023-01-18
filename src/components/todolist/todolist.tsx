import "../../App.css";
import { Link } from "react-router-dom";
import { StBtn } from "../../style/styled-components";
import Modal from "../modal/modal";
import { showModal } from "../../redux/modules/modalSlice";
import { useQuery, useQueryClient } from "react-query";
import { changeList, getLists } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { EachList, IsActive } from '../../types/interface';

const ToDoList = ({ isActive }: IsActive) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const modal = useAppSelector((state) => state.modal);

  const onChange = (id: number, edit: EachList) => {
    changeList(id, edit).then(() => {
      queryClient.invalidateQueries("lists");
    });
  };

  const showModalHandler = (id: number) => {
    dispatch(showModal(id));
  };

  const { isLoading, isError, data, error } = useQuery<EachList[], Error, EachList[]>("lists", getLists, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="list-container">
      <h2 className="list-title">{isActive === true ? "해야 할 일" : "완료한 일"}</h2>
      <div className="list-wrap">
        {data
          ?.filter((list: EachList) => list.isDone === !isActive)
          .map((list: EachList) => {
            return (
              <div className="list-box" key={list.id}>
                <div className="list-header">
                  <Link to={`/${list.id}`}>이동하기</Link>
                  <div>ID: {list.id}</div>
                </div>
                <div>
                  <h2>{list.title}</h2>
                  <span>{list.desc}</span>
                </div>
                <div className="btns">
                  <StBtn background="red" color="white" onClick={() => showModalHandler(list.id)}>
                    삭제하기
                  </StBtn>
                  <StBtn background={list.isDone ? "orange" : "green"} color={list.isDone ? "black" : "white"} onClick={() => onChange(list.id, { ...list, isDone: !list.isDone })}>
                    {list.isDone ? "취소" : "완료"}
                  </StBtn>
                </div>
              </div>
            );
          })}
      </div>
      {modal.show && <Modal />}
    </div>
  );
};

export default ToDoList;
