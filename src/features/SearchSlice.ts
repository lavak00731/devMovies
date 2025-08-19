import { createSlice } from "@reduxjs/toolkit";
import type { SearchInitState } from "../types/SearchInitState";


const initialState: SearchInitState = {
    term: "",
    searchedTerms: [],
    isSearching: false,
    isGoodResponse: false,
    movies: []
}

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        addTerm: (state, action) => {
            state.term = action.payload;
        },
        addSearchedTerms: (state, action) => {
            const isNotOnTheList = state.searchedTerms.find((term) => term === action.payload );
            if(!isNotOnTheList) {
               state.searchedTerms.push(action.payload)
            }
        },
        addMovies: (state, action) => {
            const isNotOnTheList = state.movies.find((movie) => movie.imdbID === action.payload.imdbID );
            if(!isNotOnTheList) {
                state.movies.unshift(action.payload);
            }
        },
        searching: (state, action) => {
            state.isSearching = action.payload
        },
        responseType: (state, action) => {
            state.isGoodResponse = action.payload
        }
    }
});



export const { addTerm, addSearchedTerms, addMovies, searching, responseType } = SearchSlice.actions;
export default SearchSlice.reducer;