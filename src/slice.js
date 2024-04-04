import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    generation: [],
    allGenerations: 
    [
        [{
        parent1: null,
        parent2: null,
        position: null,
        geneArray: [Math.random(), Math.random(), Math.random()],
        },
        {
            parent1: null,
            parent2: null,
            position: null,
            geneArray: [Math.random(), Math.random(), Math.random()],
        },
        {
            parent1: null,
            parent2: null,
            position: null,
            geneArray: [Math.random(), Math.random(), Math.random()],
        },
        {
            parent1: null,
            parent2: null,
            position: null,
            geneArray: [Math.random(), Math.random(), Math.random()],
        },
        {
            parent1: null,
            parent2: null,
            position: null,
            geneArray: [Math.random(), Math.random(), Math.random()],
        },
        {
            parent1: null,
            parent2: null,
            position: null,
            geneArray: [Math.random(), Math.random(), Math.random()],
        },
        {
            parent1: null,
            parent2: null,
            position: null,
            geneArray: [Math.random(), Math.random(), Math.random()],
        }],
    ],
    latestGeneration: 0
}

const slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        addNewIndividual(state, {payload})
        {
            state.generation.push(payload);
        },
        setIndividualCoordinates(state, {payload})
        {
            state.allGenerations[state.latestGeneration][payload.index].position = payload.position;
        },
        addNewGeneration(state, {payload})
        {
            state.allGenerations.push(state.generation);
            state.latestGeneration = state.latestGeneration + 1;
            state.generation = [];
        },
        
    }
})

export const {addNewIndividual, setIndividualCoordinates, addNewGeneration} = slice.actions;
export default slice.reducer;