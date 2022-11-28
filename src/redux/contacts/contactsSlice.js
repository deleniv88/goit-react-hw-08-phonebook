import { createSlice } from '@reduxjs/toolkit'
import { logOut } from 'redux/auth/operations';
import { addContact, deleteContact, fetchContacts } from '../contacts/operations';

const handelPending = state => {
    state.contacts.isLoading = true
};

const handelRejected = (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
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
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = payload;
        },
        [fetchContacts.rejected]: handelRejected,
        [addContact.pending]: handelPending,
        [addContact.fulfilled](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(payload)
        },
        [addContact.rejected]: handelRejected,
        [deleteContact.pending]: handelPending,
        [deleteContact.fulfilled](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            const index = state.contacts.items.findIndex(
                contact => contact.id === payload.id
            );
            state.contacts.items.splice(index, 1);
        },
        [deleteContact.rejected]: handelRejected,
        [logOut.fulfilled](state) {
            state.contacts.items = [];
            state.contacts.isLoading = false;
            state.contacts.error = false;
        }
    }
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
