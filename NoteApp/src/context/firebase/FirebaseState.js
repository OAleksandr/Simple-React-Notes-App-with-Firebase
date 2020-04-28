import React, {useReducer} from 'react';
import axios from 'axios';
import FirebaseContext from './firebaseContext.js';
import firebaseReducer from './firebaseReducer.js';
import { SHOW_LOADER, REMOVE_NOTE, FETCH_NOTES, ADD_NOTE } from '../types.js';

const URL = 'LINK TO YOUR FIREBASE PROJECT';

const FirebaseState = ({children}) => {
   
    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchNotes = async() => {

        showLoader();
        const res = await axios.get(`${URL}/notes.json`);

        //Note: if we dont have any data in firebase, this will cause an error
         const payload = Object.keys(res.data).map(key => {
              return {
                  ...res.data[key],
                  id: key
              }
         })

        dispatch({
            type: FETCH_NOTES, 
            payload
        })
        
    }//fetchNotes End

    const addNote = async title => {
        const note = {
            title, 
            date: new Date().toDateString()
        }

        try
        {
            const res = await axios.post(`${URL}/notes.json`, note);

            const payload = {
                ...note,
                id: res.data.name
            }

            dispatch({type: ADD_NOTE, payload});
        }
        catch(e)
        {
            throw new Error(e.message);
        }

       
    }//addNote End

    const removeNote = async id => {
        await axios.delete(`${URL}/notes/${id}.json`);

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;