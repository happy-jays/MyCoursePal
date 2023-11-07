// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseListingPage from './components/CourseListingPage';
import CourseDetailsScreen from './components/CourseDetailsScreen';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CourseListingPage />} />
        <Route path="/course/:id" element={<CourseDetailsScreen />} />
        <Route path="/dashboard" element={<StudentDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
