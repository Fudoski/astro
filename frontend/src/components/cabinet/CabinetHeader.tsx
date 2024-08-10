export default function CabinetHeader() {
  return (
    <div className="px-12 py-2 flex bg-purple-300 items-center">
      <div className="text-lg font-medium text-purple-900 grow ">
        Привіт, Олено!
      </div>
      <div className="flex gap-8 items-center">
        <span className="text-base font-medium text-purple-900">
          Четвер, 17.10.2023
        </span>
        <div className="w-12 h-12 bg-neutral-100 rounded-full flex flex-col items-center justify-center relative">
          <img src="/Icon/48px/Bell.svg" />
          <div className="min-w-4 max-w-9 bg-red-300 rounded-full px-1 text-[11px] leading-4 text-center absolute top-2 right-2 text-white-100">
            3
          </div>
        </div>
      </div>
    </div>
  );
}
