import apiKey from "../../env/env"
const getData = async (query: string) => {

    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${query}&type=movie&plot=full`
    const encoded = encodeURI(url);
    try {
        const response = await fetch(encoded);
        const jsonData = await response.json();
        return await jsonData;
    } catch (error) {
       throw new Error(error);
    }
}
export default getData;
