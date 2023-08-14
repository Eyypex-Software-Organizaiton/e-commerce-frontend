import { useState, createContext, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getMe } from '../utils/getMe'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const BASE_URL = 'http://127.0.0.1:8000/'

  // Bu fonksiyon login sayfasına import edilip kullanıcı bilgileri api documanından bakılaraka uygun formatta gönderilerek kullanıcı girişi sağlanır.

  // const userInfo={
  //   "email": "selman@gmail.com",
  //   "password": "selman1234."
  // }

  const login = async userInfo => {
    setLoading(true)

    const requestData = userInfo

    try {
      const response = await axios.post(
        `${BASE_URL}api/auth/login`,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      console.log(response.data) // Handle the response data here
      setLoading(false)
      setLoggedIn(true) // Set loggedIn to true after successful login
      const user = await getMe(
        response.data.access,
        setLoading,
        `${BASE_URL}api/user/me`
      )
      console.log(user)

      setUser(user);
      // navigate('/') // Navigate to a different page after successful login

      // You might want to store the user information from the response in the state as well
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }

  // Bu fonksiyon register sayfasına import edilip kullanıcı bilgileri api documanından bakılaraka uygun formatta gönderilerek kullanıcı kaydı sağlanır.

  const register = async userInfo => {
    setLoading(true)

    const requestData = {
      email: userInfo.email,
      password: userInfo.password,
      kvkk: true,
      is_membership: true,
    }

    try {
      const response = await axios.post(
        `${BASE_URL}api/auth/register`,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      console.log(response.data) // Handle the response data here

      // status true dönerse register başarılı logine yönlendir
      if (response.data.status) {
        console.log('User registered successfully')
        // navigate("/login")
      }

      setLoading(false)

      navigate('/') // Navigate to a different page if needed
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }

  // Bu fonksiyon logout sayfasına import edilip kullanıcı bilgileri api documanından bakılaraka uygun formatta gönderilerek kullanıcı çıkışı sağlanır.

  const logout = async accessToken => {
    setLoading(true)

    try {
      await axios.post('http://127.0.0.1:8000/logout/', null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      setLoading(false)
      // Handle any actions needed after successful logout
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }

  const refresh = async refreshToken => {
    setLoading(true)

    const requestData = {
      refresh: refreshToken,
    }

    try {
      const response = await axios.post(
        `${BASE_URL}api/auth/refresh`,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      console.log(response.data) // Handle the response data here
      setLoading(false)
      // You might want to handle the refreshed token or other data here
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }

  const values = {
    loggedIn,
    user,
    login,
    logout,
    register,
    refresh,
  }

  // if (loading) {
  //   return (
  //     <div className='flex justify-center items-center h-screen'>
  //       <div
  //         className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  //         role="status"
  //       >
  //         <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
  //           Loading...
  //         </span>
  //       </div>
  //     </div>
  //   )
  // }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
