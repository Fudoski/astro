import { Link } from "react-router-dom";

export default function PrimaryButton() {
  return (
    <Link to="/cabinet" className="flex gap-2 px-6 py-3 border border-purple-600 rounded-full text-base leading-none items-center">
      <img className="w-6 h-6" src="/Icon/24px/User.svg" />
      <span>Особистий кабінет</span>
    </Link>
  );
}
