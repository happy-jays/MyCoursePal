# MyCoursePal (web Application for course management) 

 MyCoursePal is a dynamic and user-friendly platform that simplifies the presentation and management of educational courses. Built using React and Redux, it empowers educational institutions, online course providers, and instructors to effectively display a comprehensive list of courses. Users can effortlessly navigate the course listing page, explore detailed information about each course, and enroll in their chosen classes through the student dashboard. Leveraging Redux for state management, this application ensures seamless data handling and responsiveness on various devices, providing a versatile and modern solution for the educational sector.

![Screenshot 2023-11-07 203515](https://github.com/happy-jays/MyCoursePal/assets/56588611/63498bb6-bfb6-4c9a-8e98-21513ac88400)
## Features

- **Course Listing Page:** 
  - Fetches a list of sample courses using a mock API.
  - Displays the courses in a scrollable list with basic information.
  - Allows users to search for courses by name and instructor.
  - Users can click on a course to view its details.

- **Course Details Screen:**
  - Displays comprehensive information about a selected course, including:
    - Course name
    - Instructor's name
    - Description
    - Enrollment status (e.g., 'Open,' 'Closed,' 'In Progress')
    - Course duration
    - Schedule
    - Location
    - Pre-requisites
    - A collapsible syllabus to explore course content.

- **Student Dashboard:**
  - A user-friendly dashboard for students to view and manage their enrolled courses.
  - Lists enrolled courses with detailed information, including course name, instructor name, a thumbnail, due date, and a progress bar.
  - Students can mark courses as completed to track their progress effectively.

- **Redux State Management:**
  - The application utilizes Redux to manage the state, ensuring efficient data handling and updates.
  - Redux stores the list of courses and enrolled courses, providing a seamless user experience.

- **Mock Data:**
  - The project includes mock data to simulate course information, making it easy for users to understand how to structure course details effectively.

- **Responsive CSS Styling:**
  - The application features responsive CSS styling, ensuring an optimal user experience on various devices and screen sizes.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

To run this Project

```bash
  1. Clone the repository to your local machine.
       git clone https://github.com/happy-jays/MyCoursePal.git
  2. Navigate to the project directory
  3. Install the dependencies
       npm install
       or
       yarn install
  4. Start the development server
      npm start
      or
      yarn start
  5. Open your browser and navigate to http://localhost:3000
```
