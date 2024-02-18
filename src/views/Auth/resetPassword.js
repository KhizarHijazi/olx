import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../config/firebase";
import olxBlack from '../../assets/OLX-Symbol.png'
import { forgotPassword } from "../../config/firebase";


function ResetPassword() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function loginfunction() {
        try {
            await forgotPassword({email})
            setTimeout(()=>{
                navigate('/login')
            },2000)
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
                                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your registered Email" />
                                <span class="lighting"></span>
                            </div>
                            <button onClick={loginfunction}>Send</button>
                        </div>
                        <div class="signup-wrapper text-center">
                            <div>Dear User! sent to your email request to create a new password.<span onClick={(e) => navigate('/login')} className="text-primary">Login?</span>
                            </div>
                        </div>



                        {/* <a href="#"> <span class="text-primary">Create One</span></a> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ResetPassword