import React from 'react';
import SubjectItem from './SubjectItem';

const SubjectList = ({ subjects, increaseHours, decreaseHours, removeSubject }) => {
  return (
    <div className="subject-list">
      {subjects.map((subject, index) => (
        <SubjectItem 
          key={index} 
          subject={subject} 
          increaseHours={increaseHours} 
          decreaseHours={decreaseHours} 
          removeSubject={removeSubject} 
        />
      ))}
    </div>
  );
};

export default SubjectList;
