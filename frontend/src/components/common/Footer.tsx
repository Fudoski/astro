import PrimaryButton from "../button/PrimaryButton";
import MainGrid from "../grid/MainGrid";

export default function Footer() {
  return (
    <div className="p-2">
      <div className="desktop:bg-[url('/images/footer-desktop.png')] bg-cover bg-no-repeat rounded-3xl">
        <MainGrid py="py-16">
          <div className="grid grid-cols-16 col-span-full text-base text-white-100 gap-y-16">
            <div className="col-start-1 col-span-2 row-start-1">Лого</div>
            <div className="col-start-3 col-span-2 row-start-1">
              <div className="flex flex-col gap-4">
                <div>Курси</div>
                <div>Книги</div>
                <div>Марафони</div>
                <div>Консультаціі</div>
              </div>
            </div>
            <div className="col-start-5 col-span-2 row-start-1">
              <div className="flex flex-col gap-4">
                <div>Часті запитання</div>
                <div>Відгуки</div>
                <div>Про мене</div>
              </div>
            </div>
            <div className="col-start-9 col-span-3 row-start-1 flex flex-col gap-2">
              <div className="text-base font-medium text-disabled-dark">
                Зв’язок зі мною
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <img src="/Icon/24px/EnvelopeSimple.svg" />
                  <span>Olga_astro@i.ua</span>
                </div>
                <div className="flex gap-2">
                  <img src="/Icon/24px/TelegramLogo.svg" />
                  <span>Telegram</span>
                </div>
                <div className="flex gap-2">
                  <img src="/Icon/24px/Instagram.svg" />
                  <span>Direct Instagram</span>
                </div>
              </div>
            </div>
            <div className="col-start-12 col-span-2 row-start-1 flex flex-col gap-2">
              <div className="text-base font-medium text-disabled-dark">
                Моя сторінка
              </div>
              <div className="flex gap-2"></div>
            </div>
            <div className="col-start-14 col-span-3 row-start-1">
              <PrimaryButton />
            </div>
            <div className="row-start-2 col-span-full">test</div>
          </div>
        </MainGrid>
      </div>
    </div>
  );
}
