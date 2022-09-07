import useClock from "./UseClock";

const MyClock = () => {
  const [time] = useClock();
  return (
    <div className="badge bg-info text-dark">
      <span>{time}</span>
    </div>
  );
};

export default MyClock;
