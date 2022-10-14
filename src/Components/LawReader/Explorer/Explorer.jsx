import React from 'react'
import data from './../../../ipc.json'

const Explorer = () => {
    return (
        <div>
            <h2>Explorer - {data.title}</h2>
            {data.sections.map((section, i) => {
                console.log("Entered");
                // Return the element. Also pass key     
                return <p>{section.title}</p>
            })}
        </div>
    )
}

export default Explorer