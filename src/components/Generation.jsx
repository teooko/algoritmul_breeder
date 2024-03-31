import Individual from "./Individual";
const Generation = ({geneArrays, setAllGenerations}) => {
    
    let fittestIndex;

    function calculateFitness(individual) {
        return individual.reduce((acc, trait) => {
            return acc + trait;
        }, 0);
    }
    
    const handleNextGeneration = () => {
        const eachFitness = geneArrays.map(
            geneArray => calculateFitness(geneArray)
        )
        
        const averageFitness = eachFitness.reduce((acc, fitness) => acc += fitness, 0) / eachFitness.length;
        
        
        fittestIndex = eachFitness.map((fitness, index) => {
            if(fitness > averageFitness)
                return index;
        }).filter(index => index !== undefined);
        /*
        for(let i = 0; i < 6; i++)
        {
            
        }
        */
        console.log(fittestIndex);
    }
    
    return (
        <div style={{display: "flex", flexDirection: "column", gap: 20, alignItems: "center", width: 200}}>
            <div onClick={handleNextGeneration}>
                Next Generation
            </div>
            {geneArrays.map((geneArray) => <Individual redness={geneArray[0]} size={geneArray[1]} roundness={geneArray[2]} /> )}
        </div>
    )
}

export default  Generation;