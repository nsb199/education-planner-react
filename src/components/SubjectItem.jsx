import React from 'react';

const SubjectItem = ({ subject, increaseHours, decreaseHours, removeSubject }) => {
  return (
    <div className="subject-item">
      <span>{subject.name}</span>
      <span>{subject.hours} hours</span>
      <div className="subject-controls">
        <button onClick={() => increaseHours(subject.name)}>+</button>
        <button onClick={() => decreaseHours(subject.name)}>-</button>
        <button onClick={() => removeSubject(subject.name)} className="remove">x</button>
      </div>
    </div>
  );
};

export default SubjectItem;
