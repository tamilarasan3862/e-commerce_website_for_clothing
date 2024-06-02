import Item from "../../Items/Item.jsx";
import data_product from "../asset/data.js";
import "./Relatedproducts.css";
function Relatedproducts(){
    return(
        <div className="relatedproducts">
            <h1>relatedproducts</h1>
            <hr/>
            <div className="relatedproducts-item">
                {
                    data_product.map((item,i)=>{
                        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div>
        </div>
    )
}
export default Relatedproducts;