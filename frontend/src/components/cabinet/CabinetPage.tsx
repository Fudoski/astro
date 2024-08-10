import CabinetHeader from "./CabinetHeader";
import CabinetSideBar from "./CabinetSideBar";

export default function PersonalCabinetPage() {
  return (
    <>
      <div className="h-screen flex gap-0">
        <CabinetSideBar />
        <div className="grow">
          <CabinetHeader />
        </div>
      </div>
    </>
  );
}
