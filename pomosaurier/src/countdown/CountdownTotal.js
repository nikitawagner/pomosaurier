import Countdown from "./Countdown";

export default function CountdownTotal({ totalTimeMin, run, reset, notify }) {
  return <Countdown timeInSec={totalTimeMin * 60} run={run} reset={reset} notify={notify}/>;
}
