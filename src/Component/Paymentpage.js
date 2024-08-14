import React from 'react';

const Paymentpage = ({ student, mentor, duration }) => {
  const calculatePrice = () => {
    let basePrice = 2000;
    if (duration === 45) basePrice = 3000;
    else if (duration === 60) basePrice = 4000;

    return mentor ? basePrice * 1.5 : basePrice;
  };

  if (!student || !mentor) return null;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>
      <p className="text-lg mb-2">Student: {student.name}</p>
      <p className="text-lg mb-2">Mentor: {mentor.name}</p>
      <p className="text-lg mb-2">Duration: {duration} minutes</p>
      <p className="text-lg font-bold mb-4">Total Price: ₹{calculatePrice()}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Proceed to Payment
      </button>
    </div>
  );
};

export default Paymentpage;
