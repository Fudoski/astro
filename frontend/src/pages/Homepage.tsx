import MainHeader from "../components/header/MainHeader";
import HeroContainer from "../components/hero/HeroContainer";

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col gap-6">
        <HeroContainer />
      </div>
    </>
  );
}
