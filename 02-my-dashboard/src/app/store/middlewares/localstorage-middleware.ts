import { Dispatch, MiddlewareAPI, Action } from "@reduxjs/toolkit";

export const localStorageMiddleware = ( state: MiddlewareAPI ) => {
    
    return ( next: Dispatch ) => ( action: Action ) => {

        next(action)

        console.log({ state: state.getState() });
        
    }
}