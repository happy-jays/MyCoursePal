const mockData = {
    courses: [
      {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.',
          },
          {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.',
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
          },
          {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
          },
          // Additional enrolled students...
        ],
      },
      {
        id: 2,
        name: 'Advanced JavaScript Development',
        instructor: 'Jane Smith',
        description: 'Take your JavaScript skills to the next level with advanced topics and best practices.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2017/01/30/10/03/book-2020460_640.jpg',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Solid JavaScript foundation'],
        syllabus: [
          {
            week: 1,
            topic: 'ES6 and Beyond',
            content: 'In-depth exploration of ES6 features and modern JavaScript development.',
          },
          {
            week: 2,
            topic: 'Asynchronous Programming',
            content: 'Understanding promises, async/await, and handling asynchronous operations.',
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 201,
            name: 'Eleanor Davis',
            email: 'eleanor@example.com',
          },
          {
            id: 202,
            name: 'Charlie Brown',
            email: 'charlie@example.com',
          },
          // Additional enrolled students...
        ],
      },
      {
        id: 3,
        name: 'Web Development Fundamentals',
        instructor: 'Mary Wilson',
        description: 'Learn the basics of web development, HTML, CSS, and JavaScript.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://cdn.pixabay.com/photo/2018/10/04/14/22/reading-3723751_640.jpg',
        duration: '6 weeks',
        schedule: 'Tuesdays and Thursdays, 5:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: [],
        syllabus: [
          {
            week: 1,
            topic: 'HTML and CSS Basics',
            content: 'Introduction to HTML and CSS, creating web pages and styling.',
          },
          {
            week: 2,
            topic: 'Introduction to JavaScript',
            content: 'Getting started with JavaScript, basic scripting.',
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 301,
            name: 'Grace Lee',
            email: 'grace@example.com',
          },
          {
            id: 302,
            name: 'David Turner',
            email: 'david@example.com',
          },
          // Additional enrolled students...
        ],
      },
      {
        id: 4,
        name: 'DSA Fundamentals',
        instructor: 'ary ilson',
        description: 'Learn the basics of DSA.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_640.png',
        duration: '14 weeks',
        schedule: 'Tuesdays and Thursdays, 4:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: [],
        syllabus: [
          {
            week: 1,
            topic: 'HTML and CSS Basics',
            content: 'Introduction to HTML and CSS, creating web pages and styling.',
          },
          {
            week: 2,
            topic: 'Introduction to JavaScript',
            content: 'Getting started with JavaScript, basic scripting.',
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 301,
            name: 'Grace Lee',
            email: 'grace@example.com',
          },
          {
            id: 302,
            name: 'David Turner',
            email: 'david@example.com',
          },
          // Additional enrolled students...
        ],
      },
      {
        id: 5,
        name: 'Fundamentals',
        instructor: 'Mar Wilson',
        description: 'Learn the basics of web development, HTML, CSS, and JavaScript.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_640.jpg',
        duration: '6 weeks',
        schedule: 'Tuesdays and Thursdays, 5:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: [],
        syllabus: [
          {
            week: 1,
            topic: 'HTML and CSS Basics',
            content: 'Introduction to HTML and CSS, creating web pages and styling.',
          },
          {
            week: 2,
            topic: 'Introduction to JavaScript',
            content: 'Getting started with JavaScript, basic scripting.',
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 301,
            name: 'Grace Lee',
            email: 'grace@example.com',
          },
          {
            id: 302,
            name: 'David Turner',
            email: 'david@example.com',
          },
          // Additional enrolled students...
        ],
      },
      // Add more mock courses if needed
    ],
  };
  
  export default mockData;
  