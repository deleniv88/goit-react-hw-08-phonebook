import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import {createSlice, nanoid} from '@reduxjs/toolkit'

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        filter: ''
    },
    reducers: {
            addContacts: {
            reducer(state, action){
                const existingContact = state.contacts.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())

                if (existingContact) {
                  alert(`${action.payload.name} already exists in phonebook`)
                  return;
                }
                state.contacts.push(action.payload)
            },
            prepare(name, number){
                return{
                    payload:{
                        name,
                        number,
                        id: nanoid()
                    }
                }
            }
        },
        deleteContact(state, action){
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
        },
        filterContact(state, action){
            state.filter = action.payload
        }
    }

})


export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}

export const clickReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const {addContacts, deleteContact, filterContact} = contactsSlice.actions;

