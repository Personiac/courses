"use strict";

const courseNameTitle = document.querySelector("#course-name-h1");
const courseDetails = document.querySelector("#course-details");

function loadCourseDetails(course) {
    courseDetails.innerText = ` MORE DETAILS!!! \n
    Course ID: ${course.id}
    Department: ${course.dept}
    Course Name: ${course.courseName}
    Course Number: ${course.courseNum}
    Instructor: ${course.instructor}
    Start Date: ${course.startDate}
    Number of Days: ${course.numDays}`;
}

function fetchCourseDetails(id) {
  fetch(`http://localhost:8081/api/courses/${id}`)
    .then((response) => response.json())
    .then((jsoned) => loadCourseDetails(jsoned));
}

window.addEventListener("load", (event) => {
  const urlParams = new URLSearchParams(location.search);

  let id = -1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    fetchCourseDetails(id);
  }
});
