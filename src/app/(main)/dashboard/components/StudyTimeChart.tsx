export default function StudyTimeChart() {
  const studyTime = [120, 80, 170, 30, 240, 60, 200];
  const hours = ["16h", "12h", "8h", "4h", "0h"];
  const last7Days = [
    "Jul 1",
    "Jul 2",
    "Jul 3",
    "Jul 4",
    "Jul 5",
    "Jul 6",
    "Jul 7",
  ];
  
  return (
    <div className="p-6 mt-6 rounded bg-zinc-900 ">
      <div className="flex justify-between">
        <h2 className="text-xl">
          <span className=" font-semibold">Study Time </span>( Last 7 days )
        </h2>
        <p>
          <span className="font-bold">Total</span> : 28h 40m
        </p>
      </div>
      <div className="flex">
        <div className="mt-6 space-y-4">
          {hours.map((hour, index) => (
            <div key={index} className="pb-6">
              {hour}
            </div>
          ))}
        </div>
        <div className="ml-10 flex gap-7 items-end">
          {studyTime.map((time, index) => (
            <div
              key={index}
              style={{
                height: `${time}px`,
              }}
              className="w-10 bg-emerald-400"
            ></div>
          ))}
        </div>
      </div>

      <div className="ml-10 flex gap-7">
        {last7Days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
    </div>
  );
}
