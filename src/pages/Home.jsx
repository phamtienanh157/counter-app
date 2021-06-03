import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import CounterList from "../components/CounterList";

export default function Home() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);
  const reload = () => {
    window.location.reload();
  };
  const handleInc = (counter) => {
    const list = [...counters];
    const index = list.indexOf(counter);
    list[index].value += 1;
    setCounters(list);
  };
  const handleDec = (counter) => {
    const list = [...counters];
    const index = list.indexOf(counter);
    list[index].value -= list[index].value > 0 ? 1 : 0;
    setCounters(list);
  };
  const handleDel = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };
  return (
    <div className="container d-flex flex-column align-items-center ">
      <Navbar number={counters.filter((counter) => counter.value > 0).length} />
      <CounterList
        counters={counters}
        reload={reload}
        handleInc={handleInc}
        handleDec={handleDec}
        handleDel={handleDel}
      />
    </div>
  );
}
