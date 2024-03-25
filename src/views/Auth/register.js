import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import olxBlack from '../../assets/OLX-Symbol.png'

function Register() {
    const navigate = useNavigate()
    const [fullname, setFullname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

// useEffect(()=>{
// signup()

// },[])
    async function signup() {
        try {
            const response = await fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullname, email, password }),

            });
            console.log(response)
            const data = await response.text()
            console.log(data)
            if (response.ok) {
                navigate('/login');
            } else {
                throw new Error('Registration failed');
            }
        } catch (error) {
            alert(error.message)
        }
    }


    return <>
        <div className="authBody">

            <div className="mainAuthBox">


                <div class="wrapper">

                    <div class="inner-warpper text-center">

                        <div class="olxlogo text-center">
                            <img src={olxBlack} />
                        </div>

                        <div id="formvalidate">

                            <div class="input-group">
                                <input onChange={(e) => setFullname(e.target.value)} placeholder="Your Fullname" />
                                <span class="lighting"></span>
                            </div>
                            <div class="input-group">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
                                <span class="lighting"></span>
                            </div>
                            <div class="input-group">
                                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                <span class="lighting"></span>
                            </div>
                            <button onClick={signup}>Sing Up</button>

                            <div class="clearfix supporter">
                                <div class="pull-left remember-me">
                                    <input id="rememberMe" type="checkbox" />
                                    <label for="rememberMe">Remember Me</label>
                                </div>
                                <a class="forgot pull-right" onClick={() => navigate('/reset')}>Forgot Password?</a>
                            </div>
                        </div>
                        <div class="signup-wrapper text-center">
                            <div>Have an existing account?<span onClick={(e) => navigate('/login')} className="text-primary">Login</span>
                            </div>
                        </div>



                        {/* <a href="#">Don't have an accout? <span class="text-primary">Create One</span></a> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Register