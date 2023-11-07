export const setCourses = (courses) => ({
    type: 'SET_COURSES',
    payload: courses,
  });
  
  export const enrollCourse = (courseId) => {
    return {
      type: 'ENROLL_COURSE',
      payload: courseId,
    };
  };
  
  export const completeCourse = (courseId) => {
    return {
    type: 'COMPLETE_COURSE',
    payload: courseId,
  };
};