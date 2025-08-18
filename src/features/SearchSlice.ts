import { createSlice } from "@reduxjs/toolkit";
import type { SearchInitState } from "../types/SearchInitState";


const initialState: SearchInitState = {
    term: "",
    searchedTerms: []
}

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        addTerm: (state, action) => {
            state.term = action.payload;
        },
        addSearchedTerms: (state, action) => {
            state.searchedTerms.push(action.payload)
        }
    }
});



export const { addTerm, addSearchedTerms } = SearchSlice.actions;
export default SearchSlice.reducer;