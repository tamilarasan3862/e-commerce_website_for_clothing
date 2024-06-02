import exclusive_image from "../component/asset/exclusive_image.png";
import "./Offers.css"
function Offers() {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>cleak Now</button>
            </div>
            <div className='offers-right'>
                <img src={exclusive_image} alt="" />

            </div>
        </div>
    )
}
export default Offers;