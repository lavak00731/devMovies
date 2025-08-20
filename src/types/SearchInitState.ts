import type { MovieInterface } from "./MovieInterface"
export interface SearchInitState {
    term: string;
    searchedTerms: string[];
    isSearching: boolean;
    isGoodResponse: boolean;
    requestMovie: null | MovieInterface;
    movies:MovieInterface[];
}