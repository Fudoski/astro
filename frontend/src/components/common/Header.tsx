import { Link } from "react-router-dom";
import { menuItems } from "../../data/header/DataHeader";
import PrimaryButton from "../button/PrimaryButton";
import MainGrid from "../grid/MainGrid";

export default function Header() {
  return (
    <MainGrid>
      <div className="grid grid-cols-subgrid col-span-12 py-3 items-center">
        <div className="col-start-1 col-span-2">
          <Link
            to="/home"
            className="text-base leading-none font-medium text-purple-900"
          >
            Лого
          </Link>
        </div>
        <div className="hidden desktop:col-start-3 desktop:col-span-5 desktop:block">
          <div className="flex gap-8 text-base text-purple-900 leading-none">
            {renderMenuItems(menuItems)}
          </div>
        </div>
        <div className="desktop:col-start-10 desktop:col-span-3 tablet:col-start-7 tablet:col-span-6">
          <div className="flex justify-end">
            <PrimaryButton />
          </div>
        </div>
      </div>
    </MainGrid>
  );
}

function renderMenuItems(items: HeaderLink[]) {
  return items.map((item) => {
    return <HeaderLink key={item.id} id={item.id} text={item.text} />;
  });
}

function HeaderLink(item: HeaderLink) {
  return (
    <Link
      to={`/${item.id}`}
      className="transition-colors duration-300 ease-out hover:text-purple-600 active:text-purple-600"
    >
      {item.text}
    </Link>
  );
}
