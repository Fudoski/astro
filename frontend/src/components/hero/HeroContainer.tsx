import MainGrid from "../grid/MainGrid";
import Hashtags from "./Hashtags";

export default function HeroContainer() {
  return (
    <div className="w-full h-[604px] p-2">
      <div className="h-full bg-[url('/images/home-page-hero-bg.png')] bg-cover bg-no-repeat rounded-3xl">
        <MainGrid px="px-[116px]" py="py-16">
          <div className="grid grid-cols-subgrid col-span-12">
            <div className="col-start-1 col-span-7">
              <div className="flex flex-col gap-[104px]">
                <Hashtags />
                <div className="flex flex-col gap-6">
                  <span className="text-neutral-100 text-lg font-normal">
                    Астролог, астропсихолог Ольга Бібік
                  </span>
                  <h2 className="text-white-200 text-[3.5rem] leading-[4.25rem]">
                    Трансформуй своє життя
                    <br />
                    за допомогою зірок
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-start-9 col-span-4">right block</div>
          </div>
        </MainGrid>
      </div>
    </div>
  );
}
