import React, { useState } from 'react';
import StudentList from './StudentCard';
import MentorCard from './MentorCard';
import Paymentpage from './Paymentpage';


const Scheduler = () => {
    const [students] = useState([
      {
        id: 1,
        name: 'John Doe',
        areaOfInterest: 'Digital Marketing',
        availability: ['Sunday', 'Monday', 'Wednesday']
      },
      {
        id: 2,
        name: 'Jane Smith',
        areaOfInterest: 'FMCG Sales',
        availability: ['Tuesday', 'Thursday', 'Saturday']
      }
    ]);
  
    const [mentors] = useState([
      {
        id: 1,
        name: 'Alice Johnson',
        areaOfExpertise: ['Digital Marketing'],
        availability: ['Sunday', 'Saturday']
      },
      {
        id: 2,
        name: 'Bob Brown',
        areaOfExpertise: ['FMCG Sales'],
        availability: ['Monday', 'Wednesday', 'Friday']
      }
    ]);
  
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [duration, setDuration] = useState(30);
  
    const handleSchedule = () => {
      if (selectedStudent && selectedMentor) {
        const commonAvailability = selectedStudent.availability.filter(day => 
          selectedMentor.availability.includes(day)
        );
  
        if (commonAvailability.length > 0) {
          console.log('Scheduled 1x1 session on:', commonAvailability);
        } else {
          console.log('No common availability found. Please select another mentor or student.');
        }
      }
    };
  
    return (
      <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-md shadow-md mt-6">
        <StudentList students={students} selectStudent={setSelectedStudent} />
        <MentorCard mentors={mentors} selectMentor={setSelectedMentor} selectedStudent={selectedStudent} />
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Choose Duration</h3>
          <select 
            className="mt-2 p-2 border rounded-md w-full" 
            value={duration} 
            onChange={(e) => setDuration(parseInt(e.target.value))}
          >
            <option value={30}>30 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
        </div>
  
        <button 
          className="mt-6 bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 transition-colors" 
          onClick={handleSchedule}
        >
          Schedule 1x1 Session
        </button>
  
        {selectedStudent && selectedMentor && (
          <Paymentpage student={selectedStudent} mentor={selectedMentor} duration={duration} />
        )}
      </div>
    );
  };

export default Scheduler;
