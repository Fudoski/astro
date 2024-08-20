import { useNavigate } from "react-router-dom";
import { UserService } from "../../service/UserService";
import { useState } from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import { AuthService } from "../../service/AuthService";

export default function OpenCabinetButton() {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    const isAuthenticated: boolean = await UserService.isAuthenticated();
    if (isAuthenticated) {
      navigate("/cabinet");
    } else {
      setShowModalWindow(true);
    }
  };

  const closeModalWindow = async () => {
    setShowModalWindow(false);
  };

  const handleLoginClick = async () => {
    AuthService.login({ username: login, password: password })
      .then(() => navigate("/cabinet"))
      .catch(() => {
        setPassword("");
      });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="flex gap-2 px-6 py-3 border border-purple-600 rounded-full text-base leading-none items-center"
      >
        <img className="w-6 h-6" src="/Icon/24px/User.svg" />
        <span>Особистий кабінет</span>
      </button>
      <form
        className={`bg-white-100 border border-blue-300 rounded-3xl absolute w-[444px] top-3 right-3 flex flex-col gap-4 pb-4 ${
          showModalWindow ? "" : "hidden"
        }`}
      >
        <div className="bg-blue-200 p-6 rounded-t-3xl">
          <div className="flex gap-1 items-center justify-between">
            <h4 className="font-medium text-purple-900">
              Вхід в особистий кабінет
            </h4>
            <button
              title="close authentication form"
              type="button"
              onClick={closeModalWindow}
              className="w-12 h-12"
            >
              <img src="/Icon/48px/CloseIcon.svg" />
            </button>
          </div>
        </div>
        <div className="flex flex-col px-6 gap-8">
          <div className="">
            <div className="flex flex-col gap-[6px]">
              <label className="text-sm font-medium text-neutral-800">
                Логін
              </label>
              <input
                className="text-purple-900 p-4 text-lg leading-none font-medium border border-purple-400 outline-purple-400 rounded "
                name="login"
                type="text"
                placeholder="example@gmail.com"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-sm font-medium text-neutral-800">
                Пароль
              </label>
              <input
                className="text-purple-900 p-4 text-lg leading-none font-medium border border-purple-400 outline-purple-400 rounded"
                type="password"
                name="password"
                placeholder="****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <SecondaryButton text="Увійти" onClick={handleLoginClick} />
        </div>
      </form>
    </div>
  );
}
