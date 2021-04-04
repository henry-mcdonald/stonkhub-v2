import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import jwt_decode from 'jwt-decode'



import './App.css';

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

  const handleLogin = () => {
    console.log("congrats on loggin in!")
    const user = {
      isLoggedIn: true
    }
    setCurrentUser(user)
  }

  return (
    <div>
      <Router>
        <header>
        <script src="https://apis.google.com/js/platform.js" async defer></script>

          <Navbar currentUser={currentUser} handleLogout={handleLogout} handleLogin={handleLogin} />
        </header>

      </Router>
    </div>
  );
}

export default App;
