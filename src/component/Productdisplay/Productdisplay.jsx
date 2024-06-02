import star_icon from '../asset/star_icon.png'
import star_dull_icon from '../asset/star_dull_icon.png'
import './Productdisplay.css'
function Productdisplay(props) {
    const { product } = props
    return (
        <div className='Productdisplay'>
            <div className='Productdisplay-left'>
                <div className="Productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old"> ${product.old_price}</div>
                    <div className="productdisplay-right-price-new"> ${product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    A light, usually knitted,pullover shirt,close-fitting and with a round neckline and short sleeves,worn as an undershirt or outer garment
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='productdisplay-righ-category'><span>Category:</span>Women,T-shirt,crop top</p>
                <p className='productdisplay-righ-category'><span>tags</span>Morden,Latest</p>
            </div>

        </div>
    )
}
export default Productdisplay;