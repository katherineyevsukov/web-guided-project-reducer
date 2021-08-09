export const addAction = (input) => {
    return ({type:"ADDITION", payload:input})
  }
  
export const subtractAction = (input) => {
    return ({type:"SUBTRACT", payload:input})
}

export const addToMemoryAction = (input) => {
    return ({type:"ADD_TO_MEMORY", payload:input})
}

export const clearAction = () => {
    return ({type:"CLEAR"})
}