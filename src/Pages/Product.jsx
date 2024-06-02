import { useContext } from "react";
import Shopcontext from "../component/Context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../component/Breadcrum/Breadcrum";
import Productdisplay from "../component/Productdisplay/Productdisplay";
import Descriptionbox from "../component/Descriptionbox/Descriptionbox";
import Relatedproducts from "../component/Relatedproducts/Relatedproducts";

function Product(){
    const allproduct = useContext(Shopcontext);
    const {productId} = useParams();
    const product = allproduct.find((e)=>e.id===Number(productId));
    return (
        <div>
            <Breadcrum product={product}/>
            <Productdisplay product={product}/>
            <Descriptionbox/>
            <Relatedproducts/>
        </div>
    )
}
export default Product;