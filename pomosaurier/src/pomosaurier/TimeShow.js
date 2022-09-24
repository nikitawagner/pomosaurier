export default function TimeShow({
  timers,
  run,
  reset,
  notify,
  numTimer,
  notifyWork,
  CountdownWorkBreak,
}) {
  return (
    <div className="workBreakTimerText">
      <span>
        {numTimer === 0
          ? "work"
          : numTimer === 1
          ? "break"
          : numTimer === 2
          ? "work"
          : numTimer === 3
          ? "break"
          : numTimer === 4
          ? "work"
          : numTimer === 5
          ? "break"
          : numTimer === 6
          ? "work"
          : "long break"}
      </span>
      <CountdownWorkBreak
        timers={timers}
        run={run}
        reset={reset}
        notify={() => notifyWork()}
        numTimer={numTimer}
      />
    </div>
  );
}
