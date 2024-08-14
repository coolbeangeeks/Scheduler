import React from 'react';

const StudentList = ({ students, selectStudent }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-2">Select a Student</h2>
      <ul className="space-y-2">
        {students.map((student) => (
          <li key={student.id} className="p-2 border rounded-md hover:bg-blue-100 cursor-pointer" onClick={() => selectStudent(student)}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
