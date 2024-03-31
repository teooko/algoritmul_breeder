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
    
  return (
    <div>
        Fittest individual: <Individual redness={1} roundness={1} size={1} />
        <div>
            {allGenerations.map(generation => <Generation geneArrays={generation} setAllGenerations={setAllGenerations}/>)}
        </div>
    </div>
  );
}

export default App;
