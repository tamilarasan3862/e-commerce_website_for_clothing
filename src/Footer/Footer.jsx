import footer_logo from "../component/asset/logo_big.png"
import instagram_icon from "../component/asset/instagram_icon.png"
import pintester_icon from "../component/asset/pintester_icon.png"
import whatsapp_icon from "../component/asset/whatsapp_icon.png"
import "./Footer.css"
function Footer() {

    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='footer-link'>
                <li>comany</li>
                <li>products</li>
                <li>offices</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <div className='footer-social-media'>
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt="" />
                </div>
                <div className='footer-icons-container'>
                    <img src={pintester_icon} alt="" />
                </div>
                <div className='footer-icons-container'>
                    <img src={whatsapp_icon} alt="" />
                </div>

            </div>
            <div className='footer-copyright'>
                <hr />
                <p>Copyright @ 2024 - All right reserved</p>
            </div>
        </div>
    )
}
export default Footer;