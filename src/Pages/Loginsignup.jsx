import "./Loginsignup.css"
function Loginsignup(){
    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>Sign Up</h1>
                <div className='loginsignup-fields'>
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="password"/>
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
                <div className='lognisignup-agree'>
                <input type="checkbox" name="" id=''/>
                <p>By contious,i agree to the terms of use & privacy policy.</p>
                </div>
            </div>

        </div>
    )
}
export default Loginsignup;