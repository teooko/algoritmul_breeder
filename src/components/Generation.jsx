import Individual from "./Individual";

const Generation = ({geneArrays}) => {
    
    return (
        <div style={{display: "flex", flexDirection: "column", gap: 20, alignItems: "center", width: 200}}>
            {geneArrays.map((geneArray) => <Individual redness={geneArray[0]} size={geneArray[1]} roundness={geneArray[2]} /> )}
        </div>
    )
}

export default  Generation;