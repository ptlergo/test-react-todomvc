import React from 'react'

export default (props: any) => {
    return (
       <input 
       className="form-control form-control-lg"
        type="text"
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
        placeholder="enter task here"
        autoFocus
       />
    )
}