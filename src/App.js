import Individual from "./components/Individual";
import Generation from "./components/Generation";
import {useState} from "react";

function App() {
    const geneArrays = [
        [[Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()]]
    ]
    
    const [allGenerations, setAllGenerations] = useState(geneArrays);
    const [latestGeneration, setLatestGeneration] = useState(0);
    
  return (
    <div>
        Fittest individual: <Individual redness={1} roundness={1} size={1} />
        <div style={{display: "flex", flexDirection: "row", overflow: "scroll", gap: "20px"}}>
            {allGenerations.map((generation, index) => <Generation geneArrays={generation} setAllGenerations={setAllGenerations} latestGeneration={latestGeneration} setLatestGeneration={setLatestGeneration} index={index}/>)}
        </div>
    </div>
  );
}

export default App;
