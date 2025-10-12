export async function fetchCourses() {
  const res = await fetch('http://localhost:3001/courses');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}

