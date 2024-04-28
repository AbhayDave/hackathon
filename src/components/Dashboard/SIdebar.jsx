// eslint-disable-next-line react/prop-types
function SIdebar({ handleOpenModal }) {
  return (
    <div className="drawer lg:drawer-open w-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li onClick={() => handleOpenModal("addFaculty")}>
            <a>Add Faculty</a>
          </li>
          <li onClick={() => handleOpenModal("addStudent")}>
            <a>Add Student</a>
          </li>
          <li onClick={() => handleOpenModal("takeAttendence")}>
            <a>Take Attendence</a>
          </li>
          <li onClick={() => handleOpenModal("updateStudent")}>
            <a>Update Student</a>
          </li>
          <li onClick={() => handleOpenModal("updateFaculty")}>
            <a>Update Faculty</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SIdebar