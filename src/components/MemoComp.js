import React from 'react'

export default function MemoComp({name}) {
    console.log('***********Rendering Memo Component**********')
  return (
    <div>
        {name}
    </div>
  )
}
