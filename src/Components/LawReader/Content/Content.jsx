import React from 'react'
import data from './../../../ipc.json'

const Content = () => {
  return (
    <div>
        <p>{data.sections[5].index}</p>
        <h1>{data.sections[5].title}</h1>
        <h2>{data.sections[5].chapter.title}</h2>
        
    </div>
  )
}

export default Content