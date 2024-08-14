import React, { useState } from 'react'
import { data } from '../utils/constant'
import MentorCard from './MentorCard';
import StudentList from './StudentCard';
import Paymentpage from './Paymentpage';
const Scheduler = () => {
    const [students, setStudents] = useState(data.students);
    const [mentors, setMentors] = useState(data.mentors);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [duration, setDuration] = useState(30);


  return (

    <div>

    </div>
  )
}

export default Scheduler