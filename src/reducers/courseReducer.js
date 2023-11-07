// src/reducers/courseReducer.js
const initialState = {
  courses: [], // Store the list of courses
  enrolledCourses: [], // Store the courses the user is enrolled in
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COURSES':
      return { ...state, courses: action.payload };
    case 'ENROLL_COURSE':
      const courseId = action.payload;
      if (!state.enrolledCourses.includes(courseId)) {
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };
    }
    case 'COMPLETE_COURSE':
      const completedCourseId = action.payload;
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.id === completedCourseId ? { ...course, completed: true } : course
        ),
      }
    default:
      return state;
  }
};

export default courseReducer;
