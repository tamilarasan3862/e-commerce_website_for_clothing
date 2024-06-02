import "./Newsletter.css"
function Newsletter(){
    return(
        <div className='newsletter'>
            <h1>get Exclusive offers on your email</h1>
            <p>subscribe to our newsletter & stay update</p>
            <div>
                <input type="email" placeholder="your mail id"/>
                <button>subscribe</button>
            </div>
        </div>
    )
}
 export default Newsletter;