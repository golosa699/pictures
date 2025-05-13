import axios from "axios"; 

const searchImages = async(tern) => {
    const url = 'https://api.unplash.com/search/photos/?client_id=Gn4jNLRJQLlZJXLM2NKyYKMNVOg6_9gA6W-2IWU_lKk'

    const response  = await axios.get(url, {
        params:{
            query: term
        }
    })

console.log(response)
return response.data.results

}

export default searchImages