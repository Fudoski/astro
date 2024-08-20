import { Link } from "react-scroll";
import CatalogHeader from "./CatalogHeader";
import CatalogModules from "./CatalogModules";

export default function CatalogContainer() {
  return (
    <>
      <div className="flex flex-col gap-[124px]">
        <CatalogHeader />
        <CatalogModules />
      </div>
    </>
  );
}
