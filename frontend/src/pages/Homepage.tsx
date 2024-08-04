import MainHeader from "../components/header/MainHeader";
import HeroContainer from "../components/hero/HeroContainer";
import AboutMeContainer from "../components/home/AboutMeContainer";

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col gap-[124px]">
        <HeroContainer />
        <AboutMeContainer />
      </div>
    </>
  );
}
