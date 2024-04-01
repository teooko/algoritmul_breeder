import Individual from "./Individual";
import {useEffect, useState} from "react";
const Generation = ({geneArrays, setAllGenerations, latestGeneration, setLatestGeneration, index}) => {

    let fittestIndex;
    let newGeneration = [];
    
    function calculateFitness(individual) {
        return individual.reduce((acc, trait) => {
            return acc + trait;
        }, 0);
    }

    // Function to introduce mutation in a child
    const mutate = (child) => {
        // Determine mutation rate (probability of mutation per gene)
        const mutationRate = 0.05; // Example mutation rate of 10%

        for (let i = 0; i < child.length; i++) {
            // Generate a random number between 0 and 1
            const rand = Math.random();
            if (rand < mutationRate) { // If random number is less than mutation rate, mutate
                // Mutate gene by randomly changing its value
                child[i] = Math.random(); // Example: Mutate to a random value between 0 and 1
            }
        }
        return child;
    }
    const handleNextGeneration = () => {
        const eachFitness = geneArrays.map(
            geneArray => calculateFitness(geneArray)
        )

        const sortFittest = eachFitness.sort();
        //console.log(sortFittest);
        const fittestIndex = [eachFitness.indexOf(sortFittest[sortFittest.length - 1]),
            eachFitness.indexOf(sortFittest[sortFittest.length - 2]),
            eachFitness.indexOf(sortFittest[sortFittest.length - 3])];

        for(let i = 0; i < 7; i++)
        {
            const parents = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
            //console.log(generationPositions);

            //child breeding algorithm
            const child = [geneArrays[fittestIndex[parents[Math.floor(Math.random() * 2)]]][0],
                geneArrays[fittestIndex[parents[Math.floor(Math.random() * 2)]]][1],
                geneArrays[fittestIndex[parents[Math.floor(Math.random() * 2)]]][2]];

            const mutatedChild = mutate(child);

            newGeneration = [...newGeneration, child];

        }
        setAllGenerations(allGenerations => ([...allGenerations, newGeneration]));
        setLatestGeneration(latestGeneration + 1);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", gap: 20, alignItems: "center", width: 200}}>
            {latestGeneration === index && <div onClick={handleNextGeneration}>
                Next Generation
            </div>}
            {geneArrays.map((geneArray) => <Individual redness={geneArray[0]} size={geneArray[1]} roundness={geneArray[2]} />)}
        </div>
    )
}

export default  Generation;