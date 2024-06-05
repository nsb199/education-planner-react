import React, { useState } from 'react';

const SubjectForm = ({ addSubject }) => {
  const [subjectName, setSubjectName] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubject(subjectName, hours);
    setSubjectName('');
    setHours(1);
  };

  return (
    <form onSubmit={handleSubmit} className="subject-form">
      <input 
        type="text" 
        value={subjectName} 
        onChange={(e) => setSubjectName(e.target.value)} 
        placeholder="Subject Name" 
        required 
      />
      <input 
        type="number" 
        value={hours} 
        placeholder="Hours" 
        onChange={(e) => setHours(Number(e.target.value))} 
        min="1" 
        max="24" 
        required 
      />
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default SubjectForm;
