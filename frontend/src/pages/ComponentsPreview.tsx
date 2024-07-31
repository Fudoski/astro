import { Link } from "react-router-dom";
import MainGrid from "../components/grid/MainGrid";
import MainHeader from "../components/header/MainHeader";

export default function ComponentsPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to="/home">home</Link>
      </div>
      <div>components preview</div>
      <MainGrid>
        <MainHeader />
      </MainGrid>
    </div>
  );
}
