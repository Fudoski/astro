import CatalogHeader from "./CatalogHeader";
import CatalogModules from "./CatalogModules";
import { useEffect, useState } from "react";
import { CourseService } from "../../../service/CourseService";

export default function CatalogContainer() {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 0,
      name: "Професійний астролог",
      createdAt: "",
      updatedAt: "",
      createdBy: "",
      updatedBy: "",
      modules: [
        {
          id: 0,
          courseId: 0,
          name: "loading...",
          createdAt: "",
          updatedAt: "",
          createdBy: "",
          updatedBy: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    CourseService.getPublishedCourses().then((data) => setCourses(data));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[124px] container mx-auto">
        <CatalogHeader key="catalog-header" />
        <CatalogModules key="catalog-course-modules" course={courses[0]} />
      </div>
    </>
  );
}
