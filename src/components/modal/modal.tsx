import "./modal.css";
import { StBtn } from "../../style/styled-components";
import { hideModal } from "../../redux/modules/modalSlice";
import { useMutation, useQueryClient } from "react-query";
import { deleteLists } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

const Modal = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const modalId = useAppSelector((state) => state.modal.modalId);

  const deleteMutation = useMutation(deleteLists, {
    onSuccess: () => {
      queryClient.invalidateQueries("lists");
    },
  });

  const closeModalHandler = () => {
    dispatch(hideModal());
  };

  const closeModalIfClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModalHandler();
    }
  };

  const onDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className="modal_container" onClick={(e) => closeModalIfClickOutside(e)}>
      <div className="modal_box">
        <div>정말로 삭제하시겠습니까?</div>
        <div className="modal_btn">
          <StBtn background="gray" color="white" onClick={() => closeModalHandler()}>
            취소
          </StBtn>
          <StBtn
            background="red"
            color="white"
            onClick={() => {
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
