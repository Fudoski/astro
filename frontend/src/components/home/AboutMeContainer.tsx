export default function AboutMeContainer() {
  return (
    <div className="px-[124px] flex flex-col gap-14 container mx-auto">
      {/* header */}
      <div className="flex flex-col gap-4">
        <h2 className="text-purple-900 font-medium">Давайте знайомитись</h2>
        <div className="h-[1px] bg-blue-400"></div>
      </div>
      <div className="flex flex-col gap-2">
        {/* row 1 */}
        <div className="flex gap-2">
          {/* left block */}
          <div className="basis-1/2">
            <div className="bg-[url('/images/home-about-me-1.png')] bg-cover bg-no-repeat h-full rounded-[32px] flex flex-col justify-end">
              <div className="bg-blue-200 rounded-b-[32px]">
                <div className="p-4">
                  <div className="px-4 py-2">
                    <button
                      type="button"
                      className="px-1 text-sm text-purple-400"
                    >
                      Ольга Бібік
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right block */}
          <div className="basis-1/2 px-6 py-4 bg-blue-200 rounded-3xl">
            <div className="flex flex-col gap-9">
              <h3 className="text-purple-900 leading-10">
                Чому я так люблю астрологію?
              </h3>
              <p className="text-lg text-neutral-800">
                Астрологія є міцною опорою в будь якій сфері:
                <br />
                від складання максимально вигідних мільйонних угод <br />
                до пошуку сенсу життя
              </p>
              <div className="flex flex-col gap-4 text-purple-900">
                <p className="text-lg font-medium">Що може астрологія?</p>
                <ul className="text-base font-medium list-disc list-inside">
                  <li>розкрити потенціал</li>
                  <li>знайти таланти та шлях особистого розвитку</li>
                  <li>ефективно сплануваит кар'єрний шлях та бізнес</li>
                  <li>покращити міжособистісні відносини</li>
                  <li>
                    спрогнозувати тенденціі і глибше розуміти світ навколо
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* row 2 */}
        <div className="flex gap-2">
          {/* left block */}
          <div className="basis-1/2 px-6 py-4 bg-blue-200 rounded-3xl">
            <div className="flex flex-col gap-9">
              <h3 className="text-purple-900 leading-10">Мої досягення</h3>
              <div className="flex flex-col gap-4 text-purple-900">
                <ul className="text-base font-medium list-disc list-inside">
                  <li>Практикуючий астролог з 2017 р. </li>
                  <li>Засновник школи астрологіі Lelyajust-Astro</li>
                  <li>Автор книги “Любовний контракт”</li>
                </ul>
              </div>
              <p className="text-lg text-neutral-800">
                За цей час більше 10 тис вдячних клієнтів,
                <br />8 успішно випущених курсів професійних астрологів, а книга
                стала серйозною підтримкою для людей, які знаходиться в важких
                стосунках, допомогла задати вірні запитання та знайти відповіді
                на них
              </p>
            </div>
          </div>
          {/* right block */}
          <div className="basis-1/2">
            <div className="bg-[url('/images/home-about-me-2.png')] bg-cover bg-no-repeat h-full rounded-[32px] flex flex-col justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
