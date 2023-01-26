import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice(
    {
        name: 'store',
        initialState: {
            isLogged: false,
            selectedProject: {},
            favorites: [],
            selectedRecruiter: {}
        },
        reducers: {
            changeLog: (state, action) => {
              state.isLogged = action.payload;
            },
            selectProject: (state, action) => {
                state.selectedProject = action.payload;
              },
              changeFavorites: (state, action) => {
                state.favorites = action.payload;
              },
              changeRecruiter: (state, action) => {
                state.selectedRecruiter = action.payload;
              },
        },
    }
);
export const {  changeLog, selectProject, changeFavorites, changeRecruiter } = slice.actions;

export const storeIslogged = state => state.store.isLogged;

export const storeSelectedProject = state => state.store.selectedProject;

export const storefavorites = state => state.store.favorites;

export const storeRecruiter = state => state.store.selectedRecruiter;

export default slice.reducer;