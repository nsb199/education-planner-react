import React, { useState, useEffect } from 'react';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';
import './App.css';

const App = () => {
  const [subjects, setSubjects] = useState(() => {
    const savedSubjects = localStorage.getItem('subjects');
    return savedSubjects ? JSON.parse(savedSubjects) : [];
  });

  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = (name, hours) => {
    setSubjects([...subjects, { name, hours }]);
  };

  const increaseHours = (name) => {
    setSubjects(subjects.map(subject => 
      subject.name === name && subject.hours < 24 ? { ...subject, hours: subject.hours + 1 } : subject
    ));
  };

  const decreaseHours = (name) => {
    setSubjects(subjects.map(subject => 
      subject.name === name && subject.hours > 1 ? { ...subject, hours: subject.hours - 1 } : subject
    ));
  };

  const removeSubject = (name) => {
    setSubjects(subjects.filter(subject => subject.name !== name));
  };

  return (
    <div className="app">
      <h1>Education Planner</h1>
      <SubjectForm addSubject={addSubject} />
      <SubjectList 
        subjects={subjects} 
        increaseHours={increaseHours} 
        decreaseHours={decreaseHours} 
        removeSubject={removeSubject} 
      />
    </div>
  );
};

export default App;
