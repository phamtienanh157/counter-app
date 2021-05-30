import { useState } from "react";
import Navbar from "../components/Navbar";
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
  const handleInc = () => {
    return counters;
  };
  const handleDec = () => {};
  const handleDel = () => {};
  console.log(counters);
  return (
    <div className="container d-flex flex-column align-items-center ">
      <Navbar />
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
