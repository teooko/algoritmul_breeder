﻿import Individual from "./Individual";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewGeneration, addNewIndividual} from "../slice";
const Generation = ({lastGeneration, generationIndex}) => {

    const {generation, latestGeneration} = useSelector(state => state.slice);
    const dispatch = useDispatch();
    function calculateFitness(individual) {
        return individual.reduce((acc, trait) => {
            return acc + trait;
        }, 0);
    }

    const mutate = (child) => {
        const mutationRate = 0.05; 

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
        
        const eachFitness = lastGeneration.map(
            g => calculateFitness(g.geneArray)
        )

        const sortFittest = [...eachFitness];
        sortFittest.sort();
        //console.log(sortFittest);
        const fittestIndex = [eachFitness.indexOf(sortFittest[sortFittest.length - 1]),
            eachFitness.indexOf(sortFittest[sortFittest.length - 2]),
            eachFitness.indexOf(sortFittest[sortFittest.length - 3])];
        console.log(eachFitness);

        for(let i = 0; i < 7; i++)
        {
            const parents = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
            

            //child breeding algorithm
            const child = {
                parent1: fittestIndex[parents[0]],
                parent2: fittestIndex[parents[1]],
                position: null,
                geneArray:
                [lastGeneration[fittestIndex[parents[Math.floor(Math.random() * 2)]]].geneArray[0],
                lastGeneration[fittestIndex[parents[Math.floor(Math.random() * 2)]]].geneArray[1],
                lastGeneration[fittestIndex[parents[Math.floor(Math.random() * 2)]]].geneArray[2]
                ]
            };

            const mutatedChild = mutate(child);
            dispatch(addNewIndividual(child));

        }
        dispatch(addNewGeneration());
    }

    return (
        <div style={{display: "flex", flexDirection: "column", gap: 20, alignItems: "center", width: 200}}>
            <div style={{height: '50px'}}>
            {latestGeneration === generationIndex && <div onClick={handleNextGeneration}>
                Next Generation
            </div>}
            </div>
            {lastGeneration.map((g, index) => <Individual generationIndex={generationIndex} index={index} redness={g.geneArray[0]} size={g.geneArray[1]} parent1={g.parent1} parent2={g.parent2} roundness={g.geneArray[2]}/>)}
        </div>
    )
}

export default  Generation;