import "../footer/footer.css"

import {FaLinkedinIn} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"


function Footer(){





    return(
        <div>
           <hr />
           <div className="footer-div">
            <div className="text-div">Copyright © 2022 fashionables.com | Managed by Ashutosh Birthare.</div>
            <div className="contact-div">
                <a href="https://www.linkedin.com/in/ashutosh-birthare/" className="contact-link"> <FaLinkedinIn /> </a>
                <a href="https://github.com/ashuashu2" className="contact-link"> <BsGithub /></a>
                <a href="https://twitter.com/AshuBirthare123"  className="contact-link"> <AiOutlineTwitter /></a>
                <a  href="https://t.me/ashutoshbirthare" className="contact-link"> <FaTelegramPlane /></a>

            </div>
           </div>

        </div>
    )
}
export {Footer}