import './Breadcrum.css';
import arrow_icon from '../asset/breadcrum_arrow.png';
function Breadcrum(props){
    const {product} = props;
    return(
        <div className='bradcum'>
            HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""/> {product.category}
            <img src={arrow_icon}/> {product.name}
        </div>
    )
}
export default Breadcrum;