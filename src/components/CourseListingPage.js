// src/components/CourseListingPage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCourses } from '../actions/courseActions';
import mockData from '../mockdata/mockData'; 
import { useNavigate } from 'react-router-dom';
import '../App.css';

function CourseListingPage() {
  const courses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const viewCourseDetails = (courseId) => {
    // Navigate to the Course Details Screen with the course ID as a URL parameter
    navigate(`/course/${courseId}`);
};
const viewDashboard = () => {
  // Navigate to the Course Details Screen with the course ID as a URL parameter
  navigate('/dashboard');
};
  useEffect(() => {
    // Instead of fetching from an actual API, use the mock data
    dispatch(setCourses(mockData.courses));
  }, [dispatch]);

  const filteredCourses = courses.filter((course) => {
    // Filter courses based on course name and instructor
    return (
      course.name.toLowerCase().includes(searchText.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div >
      <div className='clp'>
      <h1 className='clp-hd'>Course Listing Page</h1>
      <button onClick={() => viewDashboard()}>Go To Dashboard</button> 
      <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/dashboard-3460150-2895295.png?f=webp&w=256' alt='dashboard' onClick={() => viewDashboard()}/>
      <input
        type="text"
        placeholder="Search for courses"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      </div>
      <div className="course-list">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={course.name} />
            <div className="course-details">
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Duration: {course.duration}</p>
              <p>Status: {course.enrollmentStatus}</p>
              <button onClick={() => viewCourseDetails(course.id)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseListingPage;
