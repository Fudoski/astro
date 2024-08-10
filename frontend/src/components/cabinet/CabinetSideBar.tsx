import { Link } from "react-router-dom";

export default function CabinetSideBar() {
  return (
    <>
      <div className="flex flex-col px-4 py-8 bg-purple-900 items-center gap-[112px]">
        <div className="flex flex-col gap-16 text-white-100">
          <SideBarAvatar />
          <SideBarMenu />
        </div>
        <Link
          to="/home"
          className="text-purple-400 text-lg underline underline-offset-4"
        >
          До сайту
        </Link>
      </div>
    </>
  );
}

function SideBarAvatar() {
  return (
    <>
      <div className="grid grid-cols-3 text-center gap-4">
        <div className="row-start-1 col-start-2">
          <div className="bg-[url('/Icon/ProfilePicture.svg')] text-purple-900 font-medium w-16 h-16 flex flex-col items-center justify-center text-2xl">
            ОМ
          </div>
        </div>
        <div className="row-start-2 col-span-3">Олена Малахова</div>
      </div>
    </>
  );
}

function SideBarMenu() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <SideBarMenuItem
          key="main"
          text="Головна"
          icon="/Icon/24px/SidebarMain.svg"
        />
        <SideBarMenuItem
          key="courses"
          text="Мої курси"
          icon="/Icon/24px/ClipboardText.svg"
        />
        <SideBarMenuItem
          key="learning"
          text="Навчання"
          icon="/Icon/24px/BookOpen.svg"
        />
        <SideBarMenuItem
          key="certificates"
          text="Мої сертифікати"
          icon="/Icon/24px/GraduationCap.svg"
        />
      </div>
    </>
  );
}

function SideBarMenuItem({ text, icon }: { text: string; icon: string }) {
  return (
    <div className="flex gap-5 justify-start items-center px-6 py-2 border border-transparent hover:border hover:border-white-100 rounded-full w-full">
      <img className="h-6 w-6" src={icon} />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
