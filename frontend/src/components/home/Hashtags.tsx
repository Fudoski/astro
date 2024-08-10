export default function Hashtags() {
  return (
    <div className="flex gap-2">
      <ActiveHashtag />
      <Hashtag />
    </div>
  );
}

function ActiveHashtag() {
  return (
    <div className="px-3 py-2 bg-violet-100 rounded-full items-center justify-center text-purple-900 text-sm font-normal">
      Нові
    </div>
  );
}

function Hashtag() {
  return (
    <div className="px-3 py-2 bg-transparent rounded-full items-center justify-center text-white-200 border border-violet-100 text-sm font-normal">
      Бізнес, кар’єра
    </div>
  );
}
