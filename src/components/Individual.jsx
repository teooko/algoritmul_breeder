const Individual = ({redness, size, roundness}) => {
    
    return (
        <div style={{backgroundColor: `rgb(255, ${(1 - redness) * 255}, ${(1 - redness) * 255})`, width: size * 200, height: size * 200, borderColor: "black", borderRadius: roundness * (size * 200)/2, borderWidth: 1, borderStyle: "solid" }}>
        </div>
    )
}

export default Individual;