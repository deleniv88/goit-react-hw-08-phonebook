import { createSlice } from '@reduxjs/toolkit'
import { addContact, deleteContact, fetchContacts } from './operations';

const handelPending = state => {
    state.isLoading = true
};

const handelRejected = (state, action) => {
    state.isLoading = true;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [{
            items: [],
            isLoading: false,
            error: null
        }],
        filter: '',
    },
    reducers: {
        filterContacts(state, { payload }) {
            state.filter = payload
        }
    },
    extraReducers: {
        [fetchContacts.pending]: handelPending,
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.contacts = payload;
        },
        [fetchContacts.rejected]: handelRejected,
        [addContact.pending]: handelPending,
        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.contacts.push(payload)
        },
        [addContact.rejected]: handelRejected,
        [deleteContact.pending]: handelPending,
        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            const index = state.contacts.findIndex(
                contact => contact.id === payload.id
            );
            state.contacts.splice(index, 1);
        },
        [deleteContact.rejected]: handelRejected,
    }
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
