import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../services/UserService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalConfirm = (props) => {
  const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } = props;

  const confirmDelete = async () => {
    if (dataUserDelete && dataUserDelete.id) {
      try {
        let res = await deleteUser(dataUserDelete.id);
        console.log("Delete response:", res); // Log response
        if (res && +res.statusCode === 204) {
          toast.success("User deleted successfully");
          handleClose();
          handleDeleteUserFromModal(dataUserDelete);
        } else {
          toast.error("Failed to delete user");
        }
      } catch (error) {
        console.error("Failed to delete user:", error);
        toast.error("Failed to delete user");
      }
    }
  };
  
  

  return (
    <>
      <ToastContainer />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete A User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataUserDelete ? (
            <div className="body-add-new">
              <div className="mb-3">
                <h5>This action can't be undone!</h5>
                Do you want to delete this user,<br />
                <b>email = {dataUserDelete.email}</b>?
              </div>
            </div>
          ) : (
            <div className="body-add-new">
              <div className="mb-3">
                <h5>No user selected for deletion.</h5>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={confirmDelete} disabled={!dataUserDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirm;
