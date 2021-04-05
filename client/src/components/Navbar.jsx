import { Link } from 'react-router-dom'
import Logo from '../images/stonkhub.png'
import GoogleLogin from 'react-google-login'


function Navbar(props) {
    const loggedIn = (
        <div className="navlogo-container">
            <Link to='/' id="mainNavLink"><img class="App-logo" src={Logo} alt="Logo" /></Link>
            <nav className="mainNavList">

                <Link to='/'><h3 class="NavText"> Account Overview</h3></Link>

                <Link to='/'> <h3 class="NavText">Place a Trade</h3></Link>

                <Link to='/'> <h3 class="NavText">Explore</h3></Link>

                <Link to='/'> <h3 class="NavText" onClick={props.handleLogout}>Log Out</h3></Link>




            </nav>
        </div>
    )

    const handleFailedLogin = () => {
        props.handleLogout()
        throw ("WARNING. FAILED LOGIN. PLEASE INVESTIGATE --henry")
    }

    const loggedOut = (
        <div>
            <nav className="mainNavList">

                <h1>This should display if user is logged out </h1>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log in with Google"
                    onSuccess={props.handleLoginWithGoogle}
                    onFailure={handleFailedLogin}
                    cookiePolicy={'single_host_origin'}
                />
                <Link to='/'> <h class="NavText">Sign Up</h></Link>
                <Link to='/'> <h class="NavText"> Log In</h></Link>


                <h1>{props.currentUser.isLoggedIn}</h1>
            </nav>

        </div>
    )

    return (
        <div>

            {props.currentUser.isLoggedIn ? loggedIn : loggedOut}
        </div>
    )
}

export default Navbar