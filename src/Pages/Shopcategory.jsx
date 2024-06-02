import { useContext } from 'react';
import dropdown_icon from '../component/asset/dropdown_icon.png';
import Shopcontext from '../component/Context/Shopcontext';
import Item from '../Items/Item';
import "./Shopcategory.css";
function Shopcategory(props) {
    const allprduct = useContext(Shopcontext)
    return (
        <div className='shopcategory'>
            <img className='shopcaretoryimg' src={props.banner} alt="" />
            <div className='shopcategory-indexsort'>
                <p>
                    <span>show 1-12</span>out of 36 product
                </p>
                <div className='shopcategory-sort'>
                    short by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategort-product">
                {
                    allprduct.map((item, i) => {
                        if (props.category === item.category) {
                            return (<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
                        }

                    })
                }

            </div>
            <div className='shopcategortyloadmore'>
                Expolore More
            </div>
        </div>
    )
}
export default Shopcategory;