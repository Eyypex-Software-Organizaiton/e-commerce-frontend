import axios from "axios"

export const getBasket = async (url) => {
 
  try {
    const response = await axios.get(url)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
}
