"use strict";

const courseTblBody = document.querySelector("#course-tbl-body");

function buildCourseRow(course) {
  let row = courseTblBody.insertRow(-1);

  let anchor = document.createElement("a");
  anchor.href = `details.html?courseid=${course.id}`;
  anchor.text = "See details";

  
  console.log(course);

  row.insertCell(0).innerText = course.dept;
  row.insertCell(1).innerText = course.courseNum;

  row.insertCell(2).innerText = course.courseName;
  row.insertCell(3).appendChild(anchor);

  courseTblBody.appendChild(row);
}

function fetchAndDisplayCourses() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((content) => content.forEach(buildCourseRow));
}

fetchAndDisplayCourses();

//=============================

const urlParams = new URLSearchParams(location.search);
const courseDetails = document.querySelector("#course-details");
let courseId = urlParams.get("courseid");

// window.onload = displayCourseDetails();

function fetchCourseDetails(id) {
  fetch(`http://localhost:8081/api/courses/${id}`)
    .then((response) => response.json())
    .then((content) => buildCourseRow(content));
}

window.addEventListener("load", (event) => {
  const urlParams = new URLSearchParams(location.search);

  let id = -1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    fetchCourseDetails(id);
  }
});

/*

*/
