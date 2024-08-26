import axios from "axios";

export const CourseService = {
  getPublishedCourses: async function () {
    return axios
      .get("/courses")
      .then((res) => res.data)
      .then((data) => data as Course[]);
  },
};
