import { useState } from "react";
import MainGrid from "../../common/MainGrid";
import { Link } from "react-router-dom";

export default function CatalogModules({ course }: { course: Course }) {
  return (
    <>
      <MainGrid>
        <div className="row-start-1 col-span-3">
          <div className="px-12 py-4 bg-blue-300 rounded-full text-center">
            <span className="text-lg text-purple-900 font-medium">
              {course.name}
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
        <div className="row-start-3 col-span-2 pt-6">
          <ModulesSideNavigation
            key="module-side-nav"
            modules={course.modules}
          />
        </div>
        <div className="row-start-3 col-start-3 col-span-8 pt-6">
          <ModulesMainContent key="module-cards" modules={course.modules} />
        </div>
      </MainGrid>
    </>
  );
}

function ModulesMainContent({ modules }: { modules: Module[] }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {modules.map((module) => (
        <ModulesMainContentCard key={module.id} module={module} />
      ))}
    </div>
  );
}

function ModulesMainContentCard({ module }: { module: Module }) {
  return (
    <>
      <div className="p-2 bg-blue-200 rounded-2xl">
        <div>head</div>
        <div className="px-2 py-4 flex flex-col gap-4">
          <div className="h-[80px]">
            <h4 className="text-purple-900 font-medium"></h4>
          </div>
          <p className="overflow-ellipsis whitespace-nowrap w-[360px] h-[52px] text-neutral-800 text-sm font-normal line-clamp-2">
            Простою мовою ми вчимося цифрам, щоб потім рахувати реальні формули,
            реальні події, показання в астрології. Система зв'язків домів.
          </p>
          <div className="px-9 py-4 bg-purple-700 rounded-full text-center">
            <Link
              to={`/products/courses/${module.courseId}/modules/${module.id}`}
              className="text-white-200 font-medium text-base leading-none w-full h-full"
            >
              Детальніше
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ModulesSideNavigation({ modules }: { modules: Module[] }) {
  const [active, setActive] = useState(modules[0]);

  if (active.id == 0 && modules[0].id != 0) {
    setActive(modules[0]);
  }

  return (
    <div className="flex flex-col gap-2">
      {modules.map((module) => (
        <ModulesSideNavigationItem
          key={module.id}
          module={module}
          active={active.id === module.id}
        />
      ))}
    </div>
  );
}

function ModulesSideNavigationItem({
  module,
  active,
}: {
  module: Module;
  active: boolean;
}) {
  return (
    <div
      key={module.id}
      className={`px-6 py-[14px] text-sm font-medium border rounded-full w-fit ${
        active
          ? "border-purple-600 text-purple-600"
          : "border-transparent text-purple-900"
      }`}
    >
      {module.name}
    </div>
  );
}
