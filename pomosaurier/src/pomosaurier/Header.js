import CountdownTotal from "../countdown/CountdownTotal";

export default function Header({
  totalTimeMin,
  run,
  reset,
  notify,
  timers,
  notifyTotal,
}) {
  return (
    <div className="headerOutsideDiv">
      <span>POMOSAUR</span>
      <CountdownTotal
        totalTimeMin={timers.total}
        run={run}
        reset={reset}
        notify={() => notifyTotal()}
      />
    </div>
  );
}
