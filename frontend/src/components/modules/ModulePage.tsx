import { useParams } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ModuleHero from "./ModuleHero";
import ModuleInfo from "./ModuleInfo";
import { CourseService } from "../../service/CourseService";
import { useEffect, useState } from "react";

const loadingModule: Module = {
  id: 0,
  courseId: 0,
  name: "loading...",
  createdAt: "",
  createdBy: "",
  updatedAt: "",
  updatedBy: ""
}

export default function ModulePage() {
  const {courseId} = useParams();
  const {moduleId} = useParams();
  const [module, setModule] = useState(loadingModule);

  useEffect(() => {

  },[]);

  return (
    <>
      <Header key="header" />
      <div className="flex flex-col gap-8">
        <ModuleHero />
        <ModuleInfo />
        <Footer />
      </div>
    </>
  );
}
