import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIndividualCoordinates} from "../slice";
import Line from "./Line";

const Individual = ({generationIndex, index, redness, size, roundness, parent1, parent2}) => {
    const divRef = useRef(null);
    const dispatch = useDispatch();
    const {allGenerations, latestGeneration} = useSelector(state => state.slice);
    const [currentPosition, setCurrentPosition] = useState(null);
    
    useEffect(() => {
        if(index !== undefined) {
            const rect = divRef.current.getBoundingClientRect();
            dispatch(setIndividualCoordinates({index, position: [rect.left + size * 50, rect.top + size * 50]}));
            setCurrentPosition([rect.left + size * 50, rect.top + size * 50]);
        }
    }, []);
    return (
        <>
            {(generationIndex !== 0 && currentPosition && parent1 !== undefined && parent2 !== undefined) &&
                <Line
                    x1={allGenerations[generationIndex - 1][parent1].position[0]}
                    y1={allGenerations[generationIndex - 1][parent1].position[1]}
                    x2={currentPosition[0]}
                    y2={currentPosition[1]}/>
                }
            {(generationIndex !== 0 && currentPosition && parent1 !== undefined && parent2 !== undefined) &&
                <Line
                    x1={allGenerations[generationIndex - 1][parent2].position[0]}
                    y1={allGenerations[generationIndex - 1][parent2].position[1]}
                    x2={currentPosition[0]}
                    y2={currentPosition[1]}/>
            }
        <div ref={divRef} style={{backgroundColor: `rgb(255, ${(1 - redness) * 255}, ${(1 - redness) * 255})`, width: size * 100, height: size * 100, borderColor: "black", borderRadius: roundness * (size * 200)/2, borderWidth: 1, borderStyle: "solid", zIndex: 2 }}>
        </div>
        </>
    )
}

export default Individual;