import MainGrid from "../../common/MainGrid";

export default function CatalogModules() {
  return (
    <>
      <MainGrid>
        <div className="row-start-1 col-span-3">
          <div className="px-12 py-4 bg-blue-300 rounded-full text-center">
            <span className="text-lg text-purple-900 font-medium">
              Професійний астролог
            </span>
          </div>
        </div>
        <div className="row-start-1 col-span-2">
          <div className="px-12 py-4 bg-disabled-light rounded-full text-center ">
            <span className="text-lg text-disabled-dark">Для себе</span>
          </div>
        </div>
        <div className="row-start-2 col-span-5 pt-14">
          <div className="px-6 py-4 bg-blue-200 rounded-xl">
            <p className="text-base font-medium text-purple-900">
              Програма складається з 9 модулів.
              <br />
              Кожен модуль - це частина того пазлу, який вам доведеться скласти.
            </p>
          </div>
        </div>
        <div className="row-start-2 col-span-5 pt-14">
          <div className="px-6 py-4 bg-blue-200 rounded-xl">
            <p className="text-base font-medium text-purple-900">
              Тому важливо проходити всі модулі по порядку. Одночасне
              проходження декількох модулів не рекомендоване.
            </p>
          </div>
        </div>
      </MainGrid>
    </>
  );
}
