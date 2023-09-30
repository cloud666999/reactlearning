import React, { useState } from 'react'

const useReducer = (reducer , initValue) => {
    // khai báo 1 kho chung
    const [state, setState ] = useState(initValue);

    function dispatch(action) {
        const newState  = reducer(state, action)
        setState(newState)
    }
  return [state, dispatch]
}

export default useReducer
