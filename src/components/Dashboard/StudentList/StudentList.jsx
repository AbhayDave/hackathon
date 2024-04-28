import React from 'react'
import StudentCard from './StudentCard'

function StudentList() {
  const arr = new Array(50).fill(1)
    return (
      <div className="grid grid-cols-5 gap-4 p-5">
        {arr.map((item, idx) => {
          return <StudentCard key={idx} />;
        })}
      </div>
    );
}

export default StudentList