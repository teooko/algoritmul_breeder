import Individual from "./components/Individual";
import Generation from "./components/Generation";
import {useState} from "react";
import {useSelector} from "react-redux";
import Line from "./components/Line";

function App() {
    const {allGenerations} = useSelector(state => state.slice);
    
  return (
    <div style={{margin: '0px', padding: '0px'}}>
        Fittest individual: <Individual redness={1} roundness={1} size={1} />
        <div style={{display: "flex", flexDirection: "row", overflow: "scroll", gap: "20px"}} >
            {allGenerations.map((lastGeneration, index) => <Generation lastGeneration={lastGeneration} generationIndex={index}/>)}
        </div>
    </div>
  );
}

export default App;
