import React from 'react'

function StudentCard() {
  return (
    <div className="card card-side flex-col text-center border bg-base-100 shadow-xl pt-10">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
          className="rounded-full w-16 h-16"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Student Name</h2>
        <p>Roll No.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">P</button>
          <button className="btn btn-primary">A</button>
          <button className="btn btn-primary">L</button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard