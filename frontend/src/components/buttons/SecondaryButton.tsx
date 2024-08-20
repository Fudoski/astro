export default function SecondaryButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="text-base leading-none font-medium text-purple-900 bg-violet-200 rounded-full px-9 py-4 hover:bg-violet-100 active:bg-violet-300"
      >
        {text}
      </button>
    </>
  );
}
