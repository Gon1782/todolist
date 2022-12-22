import React from "react";
import "./modal.css";
import { useDispatch,useSelector } from "react-redux";
import { StBtn } from "../../style/styled-components";
import { hideModal } from '../../redux/modules/modalSlice';
import { useMutation, useQueryClient } from 'react-query';
import { deleteLists } from '../../api/api';

const Modal = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const modalId = useSelector((state) => state.modal.modalId);

  const deleteMutation = useMutation(deleteLists, {
    onSuccess: () => {
      queryClient.invalidateQueries("lists")
    }
  });

  const closeModalHandler = () => {
    dispatch(hideModal())
  }

  const closeModalIfClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModalHandler();
    }
  }

  const onDelete = (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className="modal_container" onClick={(e) => closeModalIfClickOutside(e)}>
      <div className="modal_box" >
        <div>정말로 삭제하시겠습니까?</div>
        <div className="modal_btn">
          <StBtn background="gray" color="white" onClick={() => closeModalHandler()}>
            취소
          </StBtn>
          <StBtn background="red" color="white" onClick={() => {
              onDelete(modalId);
              closeModalHandler();
            }}>
            삭제
          </StBtn>
        </div>
      </div>
    </div>
  );
};

export default Modal;
