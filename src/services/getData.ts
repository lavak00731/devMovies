const getData = async (query: string) => {

    const url = `https://www.omdbapi.com/?apikey=e2a237ec&t=${query}&type=movie&plot=full`
    const encoded = encodeURI(url);
    try {
        const response = await fetch(encoded);
        const jsonData = await response.json();
        return await jsonData;
    } catch (error) {
       throw new Error(String(error));
    }
}
export default getData;
