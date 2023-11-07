import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { enrollCourse } from '../actions/courseActions';
import '../App.css';

function CourseDetailsScreen() {
  const { id } = useParams(); // Get the course ID from the URL parameter
  const course = useSelector((state) =>
    state.course.courses.find((c) => c.id.toString() === id)
  );
  const navigate = useNavigate();
  const viewDashboard = (courseId) => {
    // Navigate to the Course Details Screen with the course ID as a URL parameter
    navigate('/dashboard');
  };
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.course.enrolledCourses);

  const isEnrolled = enrolledCourses.includes(course.id); // Check if the course is already enrolled

  const handleEnroll = (courseId) => {
    dispatch(enrollCourse(courseId));
  };

  if (!course) {
    return <div>Course not found</div>;
  }
 
  return (
    <div className='course-details-container'>
      <h1>Course Details</h1>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>

      <h3>Syllabus:</h3>
      <ul>
        {course.syllabus.map((item) => (
          <li key={item.week}>
            <strong>Week {item.week}:</strong> {item.topic}
            <p>{item.content}</p>
          </li>
        ))}
      </ul>

      <button onClick={() => handleEnroll(course.id)} disabled={isEnrolled}>
        {isEnrolled ? 'Enrolled' : 'Enroll'}
      </button>
      <button onClick={() => viewDashboard()}>Go To Dashboard</button> 
    </div>
  );
}

export default CourseDetailsScreen;
