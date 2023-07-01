import React, {useState} from 'react';
import './App.css';
import WorldMap from "./WorldMap";
import DetailRouter from "./DetailRouter";

type AppStatus = "MAP" | "DETAIL";

function App() {
  const [state, setState] = useState<AppStatus>("MAP");
  const [currentDetail, setCurrentDetail] = useState("");

  if (state === "DETAIL") {
    return <DetailRouter id={currentDetail} onExit={() => setState("MAP")}/>
  }

  const onDetailSelect = (id: string) => {
    setCurrentDetail(id);
    setState("DETAIL");
  }

  return (
      <WorldMap onSelect={onDetailSelect}/>
  )
}

export default App;
