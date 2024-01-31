import { Modal } from "antd";

const HRModal = ({ isOpen, closeModal, title, children }) => {
  return (
    <Modal title={title} open={isOpen} onCancel={closeModal}>
      {children}
    </Modal>
  );
};

export default HRModal;
