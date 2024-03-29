import Individual from "./components/Individual";
import Generation from "./components/Generation";

function App() {
    const geneArrays = [
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
    ]
    
  return (
    <div>
        Fittest individual: <Individual redness={1} roundness={1} size={1} />
      <Generation geneArrays={geneArrays} />
        
    </div>
  );
}

export default App;
