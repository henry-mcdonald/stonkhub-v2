import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import jwt_decode from 'jwt-decode'
import './App.css';
import axios from 'axios'





const defaultLoggedOutUser= {
  isLoggedIn:false
}

function App() {

  const [currentUser, setCurrentUser] = useState(defaultLoggedOutUser)

  useEffect( () => {
    const token = localStorage.getItem('jwtToken')
    if(token){
      const decoded = jwt_decode(token)
      setCurrentUser(decoded)
    } else{
      setCurrentUser(defaultLoggedOutUser)
    }
  }, [])
  
  const handleLogout = () => {
    if(localStorage.getItem('jwtToken')){
      localStorage.removeItem('jwtToken')
      setCurrentUser(defaultLoggedOutUser)
    }
  }
  const handleLoginWithGoogle = async(response) => {
    console.log(response)
    console.log("congrats on loggin in with Google")
    const infoToSendToServer= {
      token: response.tokenId
    }
    // const serverResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login-with-google`)
    const user = {
      isLoggedIn: true
    }
    setCurrentUser(user)
  }

  const handleLogin = async() => {
    console.log("congrats on loggin' in the good old fashioned way")
  }

  return (
    <div>
      <Router>
        <header>
        <script src="https://apis.google.com/js/platform.js" async defer></script>

          <Navbar currentUser={currentUser} handleLogout={handleLogout} handleLoginWithGoogle={handleLoginWithGoogle} handleLogin={handleLogin} />
        </header>

      </Router>
    </div>
  );
}

export default App;


// const google_response_object = {
  //   "Aa": "104205924244745585100",
  //   "tc": {
  //       "token_type": "Bearer",
  //       "access_token": "ya29.a0AfH6SMAtozwuiJW6_wF8VQqFVrgClrh9yPAJUEFEwzs7GI-sQrbZBgzLM94_JK5VdhLuEQYBSdpj2_c8ET5pxqVGUq_bh1GN4t45bI-EPSsotKkufrQgK6LYEVwETmrHjvPBisVgVDA8ZPV57HCYsgPJkwFVBw",
  //       "scope": "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
  //       "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cA_PAydqRWXBALoXTgsokCtQL7KjSDMn__MAuR8obuY4fud-DtzMwP5gVxk6yYY07Pkv7UqA",
  //       "expires_in": 3599,
  //       "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUxYWMzOWI2Y2NlZGEzM2NjOGNhNDNlOWNiYzE0ZjY2ZmFiODVhNGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjg2OTk0NTIwMTYzLTZyM2szZHNvZHNsOHMycTRoOTk3NHIxanZkcDRhcjMyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjg2OTk0NTIwMTYzLTZyM2szZHNvZHNsOHMycTRoOTk3NHIxanZkcDRhcjMyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0MjA1OTI0MjQ0NzQ1NTg1MTAwIiwiZW1haWwiOiJnb3JlZ2c1MTJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJQOGdueEFIOU90MklYNUZZVUhzelZBIiwibmFtZSI6IkhlbnJ5IE1jRG9uYWxkIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tT1RBZ1RnRnFIb3MvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbTBsY3pPZmVLdVBFM1JHem55ZGJXdnBlMUVjZy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiSGVucnkiLCJmYW1pbHlfbmFtZSI6Ik1jRG9uYWxkIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MTc2MDI3OTcsImV4cCI6MTYxNzYwNjM5NywianRpIjoiMDU3OTgxYTJkMmU2MWJhODRkZmM3NzM3NzA4NjNhOWFhNzBmOGRkNiJ9.am2Yy1ScEcEl9kYE0ay0ozBZ5Sqh0_bgqyDwrxw6Q9wBQ6rgiefkrTKq_Gh2rNpRXPdL6VbWl5yOtQ-L0tjxlV1i4XSarJd9usBfomTXj2L2T-vC9s8JHZNrMOEJd27Qdf2BYOrzEROrXLNAOWJAqEoEanQvYR3wPr2XuWL2WG-NPN_-vL5KM-QLvp7vt6H-Dp_UOBaq9cI8cwbGOm9h_YVZjV0DmkmRL-qdqQsWx9cx4LIC-iZIbtrJXmE4N_hoQJEAOrhfOMjQKlvp0IBrVkVPgCGeYi_7GLgtKFFZZalj0p-HdSO5r-JA1f0JikC2tsvQR77kX_sXT2FODiwryw",
  //       "session_state": {
  //           "extraQueryParams": {
  //               "authuser": "1"
  //           }
  //       },
  //       "first_issued_at": 1617602797781,
  //       "expires_at": 1617606396781,
  //       "idpId": "google"
  //   },
  //   "Qs": {
  //       "ER": "104205924244745585100",
  //       "Te": "Henry McDonald",
  //       "oT": "Henry",
  //       "kR": "McDonald",
  //       "EI": "https://lh5.googleusercontent.com/-OTAgTgFqHos/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm0lczOfeKuPE3RGznydbWvpe1Ecg/s96-c/photo.jpg",
  //       "zt": "goregg512@gmail.com"
  //   },
  //   "googleId": "104205924244745585100",
  //   "tokenObj": {
  //       "token_type": "Bearer",
  //       "access_token": "ya29.a0AfH6SMAtozwuiJW6_wF8VQqFVrgClrh9yPAJUEFEwzs7GI-sQrbZBgzLM94_JK5VdhLuEQYBSdpj2_c8ET5pxqVGUq_bh1GN4t45bI-EPSsotKkufrQgK6LYEVwETmrHjvPBisVgVDA8ZPV57HCYsgPJkwFVBw",
  //       "scope": "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
  //       "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cA_PAydqRWXBALoXTgsokCtQL7KjSDMn__MAuR8obuY4fud-DtzMwP5gVxk6yYY07Pkv7UqA",
  //       "expires_in": 3599,
  //       "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUxYWMzOWI2Y2NlZGEzM2NjOGNhNDNlOWNiYzE0ZjY2ZmFiODVhNGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjg2OTk0NTIwMTYzLTZyM2szZHNvZHNsOHMycTRoOTk3NHIxanZkcDRhcjMyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjg2OTk0NTIwMTYzLTZyM2szZHNvZHNsOHMycTRoOTk3NHIxanZkcDRhcjMyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0MjA1OTI0MjQ0NzQ1NTg1MTAwIiwiZW1haWwiOiJnb3JlZ2c1MTJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJQOGdueEFIOU90MklYNUZZVUhzelZBIiwibmFtZSI6IkhlbnJ5IE1jRG9uYWxkIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tT1RBZ1RnRnFIb3MvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbTBsY3pPZmVLdVBFM1JHem55ZGJXdnBlMUVjZy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiSGVucnkiLCJmYW1pbHlfbmFtZSI6Ik1jRG9uYWxkIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MTc2MDI3OTcsImV4cCI6MTYxNzYwNjM5NywianRpIjoiMDU3OTgxYTJkMmU2MWJhODRkZmM3NzM3NzA4NjNhOWFhNzBmOGRkNiJ9.am2Yy1ScEcEl9kYE0ay0ozBZ5Sqh0_bgqyDwrxw6Q9wBQ6rgiefkrTKq_Gh2rNpRXPdL6VbWl5yOtQ-L0tjxlV1i4XSarJd9usBfomTXj2L2T-vC9s8JHZNrMOEJd27Qdf2BYOrzEROrXLNAOWJAqEoEanQvYR3wPr2XuWL2WG-NPN_-vL5KM-QLvp7vt6H-Dp_UOBaq9cI8cwbGOm9h_YVZjV0DmkmRL-qdqQsWx9cx4LIC-iZIbtrJXmE4N_hoQJEAOrhfOMjQKlvp0IBrVkVPgCGeYi_7GLgtKFFZZalj0p-HdSO5r-JA1f0JikC2tsvQR77kX_sXT2FODiwryw",
  //       "session_state": {
  //           "extraQueryParams": {
  //               "authuser": "1"
  //           }
  //       },
  //       "first_issued_at": 1617602797781,
  //       "expires_at": 1617606396781,
  //       "idpId": "google"
  //   },
  //   "tokenId": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUxYWMzOWI2Y2NlZGEzM2NjOGNhNDNlOWNiYzE0ZjY2ZmFiODVhNGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjg2OTk0NTIwMTYzLTZyM2szZHNvZHNsOHMycTRoOTk3NHIxanZkcDRhcjMyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjg2OTk0NTIwMTYzLTZyM2szZHNvZHNsOHMycTRoOTk3NHIxanZkcDRhcjMyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0MjA1OTI0MjQ0NzQ1NTg1MTAwIiwiZW1haWwiOiJnb3JlZ2c1MTJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJQOGdueEFIOU90MklYNUZZVUhzelZBIiwibmFtZSI6IkhlbnJ5IE1jRG9uYWxkIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tT1RBZ1RnRnFIb3MvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbTBsY3pPZmVLdVBFM1JHem55ZGJXdnBlMUVjZy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiSGVucnkiLCJmYW1pbHlfbmFtZSI6Ik1jRG9uYWxkIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MTc2MDI3OTcsImV4cCI6MTYxNzYwNjM5NywianRpIjoiMDU3OTgxYTJkMmU2MWJhODRkZmM3NzM3NzA4NjNhOWFhNzBmOGRkNiJ9.am2Yy1ScEcEl9kYE0ay0ozBZ5Sqh0_bgqyDwrxw6Q9wBQ6rgiefkrTKq_Gh2rNpRXPdL6VbWl5yOtQ-L0tjxlV1i4XSarJd9usBfomTXj2L2T-vC9s8JHZNrMOEJd27Qdf2BYOrzEROrXLNAOWJAqEoEanQvYR3wPr2XuWL2WG-NPN_-vL5KM-QLvp7vt6H-Dp_UOBaq9cI8cwbGOm9h_YVZjV0DmkmRL-qdqQsWx9cx4LIC-iZIbtrJXmE4N_hoQJEAOrhfOMjQKlvp0IBrVkVPgCGeYi_7GLgtKFFZZalj0p-HdSO5r-JA1f0JikC2tsvQR77kX_sXT2FODiwryw",
  //   "accessToken": "ya29.a0AfH6SMAtozwuiJW6_wF8VQqFVrgClrh9yPAJUEFEwzs7GI-sQrbZBgzLM94_JK5VdhLuEQYBSdpj2_c8ET5pxqVGUq_bh1GN4t45bI-EPSsotKkufrQgK6LYEVwETmrHjvPBisVgVDA8ZPV57HCYsgPJkwFVBw",
  //   "profileObj": {
  //       "googleId": "104205924244745585100",
  //       "imageUrl": "https://lh5.googleusercontent.com/-OTAgTgFqHos/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm0lczOfeKuPE3RGznydbWvpe1Ecg/s96-c/photo.jpg",
  //       "email": "goregg512@gmail.com",
  //       "name": "Henry McDonald",
  //       "givenName": "Henry",
  //       "familyName": "McDonald"
  //   }
  // }

