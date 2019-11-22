import React from 'react'

export function HogDetails(props){
    console.log(props)
    return(<div>
        <h5>Weight:{props.weight}</h5>
        <h5>Specialty: {props.specialty}</h5>
        <h5>Medal: {props["highest medal achieved"]}</h5>
        <h5>
            {props.greased
            ? "Greased"
            : "Not Greased"
            }
        </h5>
        <button>Hide the Hog</button>
        </div>)
}