import { useState } from "react";
import SIdebar from "../components/Dashboard/SIdebar";
import Modal from "../components/Modal/Modal";
import StudentForm from "../components/StudentForm";
import FacultyForm from "../components/FacultyForm";
import AttendenceForm from "../components/AttendenceForm";
import StudentList from "../components/Dashboard/StudentList/StudentList";


function Dashboard() {
  const [isAddFacultyModalOpen, setIsAddFacultyModalOpen] = useState(false);
  const [isUpdateFacultyModalOpen, setIsUpdateFacultyModalOpen] =
    useState(false);
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [isUpdateStudentModalOpen, setIsUpdateStudentModalOpen] =
    useState(false);
  const [isTakeAttendenceModalOpen, setIsTakeAttendenceModalOpen] =
    useState(false);

  const handleOpenModal = (modalType) => {
    switch (modalType) {
      case "addFaculty":
        setIsAddFacultyModalOpen(true);
        break;
      case "updateFaculty":
        setIsUpdateFacultyModalOpen(true);
        break;
      case "addStudent":
        setIsAddStudentModalOpen(true);
        break;
      case "updateStudent":
        setIsUpdateStudentModalOpen(true);
        break;
      case "takeAttendence":
        setIsTakeAttendenceModalOpen(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setIsAddFacultyModalOpen(false);
    setIsUpdateFacultyModalOpen(false);
    setIsAddStudentModalOpen(false);
    setIsUpdateStudentModalOpen(false);
    setIsTakeAttendenceModalOpen(false);
  };

  return (
    <div className="flex">
      <SIdebar handleOpenModal={handleOpenModal} />
      <StudentList />
      <Modal isOpen={isAddFacultyModalOpen} onClose={handleCloseModal}>
        <FacultyForm />
      </Modal>
      <Modal isOpen={isTakeAttendenceModalOpen} onClose={handleCloseModal}>
        <AttendenceForm />
      </Modal>
      <Modal isOpen={isUpdateFacultyModalOpen} onClose={handleCloseModal}>
        <h2 className="text-lg font-medium text-gray-900">
          Update Faculty Modal
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          This is the content of the Update Faculty modal.
        </p>
      </Modal>
      <Modal isOpen={isAddStudentModalOpen} onClose={handleCloseModal}>
        <StudentForm />
      </Modal>
      <Modal isOpen={isUpdateStudentModalOpen} onClose={handleCloseModal}>
        <h2 className="text-lg font-medium text-gray-900">
          Update Student Modal
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          This is the content of the Update Student modal.
        </p>
      </Modal>
    </div>
  );
}

export default Dashboard;
