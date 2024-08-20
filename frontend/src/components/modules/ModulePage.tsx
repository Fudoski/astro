import Footer from "../common/Footer";
import Header from "../common/Header";
import ModuleHero from "./ModuleHero";
import ModuleInfo from "./ModuleInfo";

export default function ModulePage() {
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
