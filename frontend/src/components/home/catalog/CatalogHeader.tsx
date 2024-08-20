import { useState } from "react";

export default function CatalogHeader() {
  const [activeItem, setActiveItem] = useState("courses");
  return (
    <header className="flex flex-col gap-6 px-[124px]">
      <h3 className="text-purple-900 font-medium">
        Найкращий час обрати Ваш формат та відкрити нові знання
      </h3>
      <div className="flex justify-evenly bg-purple-100 rounded-3xl text-purple-900 text-lg font-medium text-center">
        <CatalogHeaderItem
          key="courses"
          text="Курси"
          active={"courses" === activeItem}
          onClick={() => setActiveItem("courses")}
        />
        <CatalogHeaderItem
          key="books"
          text="Книги"
          active={"books" === activeItem}
          onClick={() => setActiveItem("books")}
        />
        <CatalogHeaderItem
          key="marathons"
          text="Марафони"
          active={"marathons" === activeItem}
          onClick={() => setActiveItem("marathons")}
        />
        <CatalogHeaderItem
          key="consultations"
          text="Консультації"
          active={"consultations" === activeItem}
          onClick={() => setActiveItem("consultations")}
        />
      </div>
    </header>
  );
}

function CatalogHeaderItem({
  text,
  active,
  onClick,
}: {
  text: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`basis-1/4 px-16 py-3 rounded-3xl transition-colors ease-out duration-300 ${
        active ? "bg-purple-400" : "hover:bg-violet-200"
      }`}
    >
      {text}
    </button>
  );
}
