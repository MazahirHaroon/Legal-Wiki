import React from 'react'
import Content from './Content/Content'
import Explorer from './Explorer/Explorer'

const LawReader = () => {
  return (
    <div className='flex'>
        <Explorer/>
        <Content/>
    </div>
  )
}

export default LawReader