import { useState } from "react";
import "./App.css";
import { Button, Modal } from "antd";
import Login from "./components/Login";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className=" flex w-full flex-col justify-center items-center min-h-screen">
      <Button className=" bg-blue-600" type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        // title="Login"
        open={isOpen}
        className=" p-0"
        centered
        onCancel={handleCancel}
        closeIcon={null}
        bodyStyle={{ padding: '0px !important' }}
        footer={null}
        width={800}
      >
        <Login close={handleCancel} />
      </Modal>
    </div>
  );
}

export default App;
