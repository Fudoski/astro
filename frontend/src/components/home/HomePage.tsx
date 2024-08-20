import Footer from "../common/Footer";
import Header from "../common/Header";
import AboutMeContainer from "./AboutMeContainer";
import CatalogContainer from "./catalog/CatalogContainer";
import HeroContainer from "./HeroContainer";

export default function HomePage() {
  return (
    <>
      <Header key="header" />
      <div className="flex flex-col gap-[124px]">
        <HeroContainer />
        <AboutMeContainer />
        <CatalogContainer />
        <Footer />
      </div>
    </>
  );
}
