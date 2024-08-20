export default function ModuleHero() {
  return (
    <>
      <div className="container mx-auto px-2">
        <div className="px-[116px] py-14 bg-[url('/images/modules-hero-bg.png')] rounded-3xl bg-cover bg-no-repeat">
          <div className="flex flex-col justify-center gap-2">
            <div className="text-lg font-medium text-white-200">
              Курс “Професійний астролог”
            </div>
            <div className="flex justify-between">
              <h3 className="font-medium text-white-200">
                Модуль 3. Сумісність
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
