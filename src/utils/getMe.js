import axios from "axios";


export const getMe = async (accessToken,setLoading,url) => {
 
  setLoading(true);

  try {
    const response = await axios.get(url, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    });

    console.log(response.data); // Handle the response data here
    setLoading(false);
    // You might want to handle the user data here
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    setLoading(false);
    return error;
  }

};