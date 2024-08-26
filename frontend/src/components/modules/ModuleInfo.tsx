import MainGrid from "../common/MainGrid";

export default function ModuleInfo() {
  return (
    <MainGrid>
      <ModuleDetails />
      <ModuleTariff />
    </MainGrid>
  );
}

function ModuleDetails() {
  return (
    <div className="col-span-6 flex flex-col gap-4 border border-blue-200 rounded-3xl">
      <div className="px-9 py-6 bg-blue-200 rounded-t-3xl ">
        <h3 className="font-medium text-purple-900">Деталі</h3>
      </div>
      <div className="flex flex-col gap-6 px-6 py-4">
        <table className="w-fit border-separate border-spacing-2">
          <tbody>
            <tr>
              <td className="text-sm text-neutral-800 font-normal">Назва:</td>
              <td className="text-base text-purple-900 font-medium">
                Сумісність
              </td>
            </tr>
            <tr>
              <td className="text-sm text-neutral-800 font-normal">Старт:</td>
              <td className="text-base text-purple-900 font-medium">
                23.11.2023
              </td>
            </tr>
            <tr>
              <td className="text-sm text-neutral-800 font-normal">Формат:</td>
              <td className="text-base text-green-500 font-medium">onlline</td>
            </tr>
            <tr>
              <td className="text-sm text-neutral-800 font-normal">Уроки:</td>
              <td className="text-base text-purple-900 font-medium">35</td>
            </tr>
            <tr>
              <td className="text-sm text-neutral-800 font-normal">
                Тривалість:
              </td>
              <td className="text-base text-purple-900 font-medium">
                3 місяці
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col gap-4">
          <div className="text-lg font-medium text-[#0D0D0D]">
            Про що цей модуль
          </div>
          <p className="text-base font-normal text-purple-900">
            Сумісність в парі, в основі - любовної, але так само і в
            партнерській, дружбі, між батьками та дітьми, колегами, партнерами
            по бізнесу.
            <br />
            У будь-якій сумісності - чи буде складно, чи легко будувати
            стосунки. Чи можливий шлюб.
            <br />
            З чим зіткнеться пара, з якими труднощами.
            <br />
            Коли відносини точно неможливо буде побудувати.
            <br />
            Чи буде розлучення.
            <br />
            Легко, чи складно спілкуватися.
            <br />
            Дружба у парі.
            <br />
            Тотальне нерозуміння та високий тип конфліктності.
            <br />
            Як знайти підхід до свого партнера.
            <br />
            Складні кармічні стосунки.
            <br />
            Карма у стосунках. + бонус цілий семінар з Ліліт у відносинах -{" "}
            <br />
            моя авторська методика.
          </p>
        </div>
      </div>
    </div>
  );
}

function ModuleTariff() {
  return (
    <div className="col-start-8 col-span-5">
      <div className="flex flex-col gap-8">
        <div className="px-9 py-6 bg-blue-200 rounded-3xl ">
          <h3 className="font-medium text-purple-900">Деталі</h3>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <div className="p-4 bg-purple-300 rounded-xl flex flex-col gap-6">
              <div className="flex justify-between">
                <h4 className="text-purple-900 font-medium">Medium</h4>
                <div className="px-3 py-2 bg-purple-600 rounded-full text-white-200">
                  1 350 $
                </div>
              </div>
              <div className="felx flex-col gap-2">
                <div className="flex gap-4">
                  <div className="text-purple-900 text-sm font-medium grow">
                    Доступ до відеоуроків
                  </div>
                  <div className="">
                    <img src="/Icon/24px/GreenCheck.svg" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-purple-900 text-sm font-medium grow">
                    Доступ до відеоуроків
                  </div>
                  <div className="">
                    <img src="/Icon/24px/GreenCheck.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
}
