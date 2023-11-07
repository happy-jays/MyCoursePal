import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeCourse } from '../actions/courseActions';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const enrolledCourses = useSelector((state) => state.course.enrolledCourses);
  const allCourses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const viewcourselist = () => {
   
    navigate('/');
  };
  const markCourseCompleted = (courseId) => {
    // Dispatch the action to mark the course as completed
    dispatch(completeCourse(courseId));
  };

  return (
    <div>
      <div className='sd-head'>
      <IconContext.Provider value={{ color: "brown", className: "global-class-name", size: 50 }}>
      <div className='arrow' onClick={() => viewcourselist()}> 
      <AiOutlineArrowLeft />
      </div>
      </IconContext.Provider>  
      <h1  className='sd-hd' >Student Dashboard</h1>
      </div>
      {enrolledCourses.length === 0 ? (
        <p className='sd-p'>No enrolled courses yet.</p>
      ) : (
        <div className="course-list">
          {enrolledCourses.map((courseId) => {
          const enrolledCourse = allCourses.find((course) => course.id === courseId);

          if (!enrolledCourse) {
            return null; // Handle invalid course IDs if necessary
          }
          return(
            <div key={enrolledCourse.id} className="course-card">
              <img src={enrolledCourse.thumbnail} alt={enrolledCourse.name} />
              <div className="course-details">
                <h2>{enrolledCourse.name}</h2>
                <p>Instructor: {enrolledCourse.instructor}</p>
                <p>Due Date: {enrolledCourse.dueDate}</p>
                <p>Progress: {enrolledCourse.completed ? 'Completed' : 'In Progress'}</p>
                <button
                  onClick={() => markCourseCompleted(enrolledCourse.id)}
                  disabled={enrolledCourse.completed}
                >
                  Mark Completed
                </button>
              </div>
            </div>
          );})}
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
