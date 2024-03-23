import React,{createContext, useReducer} from "react";

export const AppContext = createContext();

const initialState ={
    loggedIn: false,
    user:null,
}

function reduceFn(state, action){
    switch (action.type){
        case "login": {
            return { user: action.payload, loggedIn: true};
        }
        case "logout": {
            return initialState;
        }
    default:{
        return state;
    }
    }
}

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reduceFn, initialState); // Burayı düzelttim
    
    return <AppContext.Provider value={{ state, dispatch }}>
        {children}
    </AppContext.Provider>
}
