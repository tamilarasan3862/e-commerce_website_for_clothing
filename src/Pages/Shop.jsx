import Hero from "../Hero/Hero";
import Newcollection from "../Newcollections/Newcollection";
import Newsletter from "../Newsletter/Newsletter";
import Offers from "../Offers/Offers";
import Popular from "../Popular/Popular";

function Shop(){
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollection/>
            <Newsletter/>
        </div>
    )
}
export default Shop;