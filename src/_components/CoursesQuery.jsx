
//Fetching data from json file

export async function fetchCourses() {
    const res = await fetch('http://localhost:5001/courses'); // Adjust the URL if needed
    const data = await res.json();
    console.log(data); // Log data to check the response format
    return data;
  }
  



//Fetch from Server

// export default async function fetchCourses() {
//     const res = await fetch('http://localhost:3001/posts'); 
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   }
  