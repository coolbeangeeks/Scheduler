import React from 'react';

const MentorCard = ({ mentors, selectMentor,selectedStudent }) => {
    
    const filteredMentors = selectedStudent
    ? mentors.filter((mentor) => 
        mentor.areaOfExpertise.includes(selectedStudent.areaOfInterest)
      )
    : mentors;

  return (
    <div className="p-4 bg-white shadow-md rounded-md mt-4">
      <h2 className="text-xl font-bold mb-4">Select a Mentor</h2>
      <ul className="space-y-2">
        {filteredMentors.map((mentor) => (
          <li 
            key={mentor.id} 
            className="p-2 border rounded-md hover:bg-blue-100 cursor-pointer transition-colors"
            onClick={() => selectMentor(mentor)}
          >
            {mentor.name} - {mentor.areaOfExpertise.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorCard;
