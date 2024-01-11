import React, { createContext, useContext, useReducer } from "react";
// it make ready the data layer
export const StateContext = createContext();
//it make wrap our application and provide the data layer
export const StateProvider = ({ reducer, intialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, intialState)}>
            {children}
        </StateContext.Provider>
    );
};

//these is the method to pull and push in to the data layer
export const useStateValue = () => useContext(StateContext);
