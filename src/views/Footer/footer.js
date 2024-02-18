import twitter from '../../assets/footeri-round-icons/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg'
import fb from '../../assets/footeri-round-icons/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg'
import youtube from '../../assets/footeri-round-icons/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg'
import insta from '../../assets/footeri-round-icons/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg'
import GooglePlay from '../../assets/footeri-box-icons/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg'
import Applestore from '../../assets/footeri-box-icons/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg'
import AppGallery from '../../assets/footeri-box-icons/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg'

function Footer(){


    return <>
    <div className="footerMain">
    <div className="footer">
        <div className="categoriesBox">
            <span>POPULAR CATEGORIES</span>
            <ul>
                <li><span>Cars</span></li>
                <li><span>Flights for rent</span></li>
                <li><span>Mobile phones</span></li>
                <li><span>Jobs</span></li>
            </ul>
        </div>
        <div className="categoriesBox">
            <span>TRENDING SEARCHES</span>
            <ul>
                <li><span>Bikes</span></li>
                <li><span>Watches</span></li>
                <li><span>Books</span></li>
                <li><span>Dogs</span></li>
            </ul>
        </div>
        <div className="categoriesBox">
            <span>ABOUT US</span>
            <ul>
                <li><span>About Dubizzle Group</span></li>
                <li><span>Olx Blog</span></li>
                <li><span>Contact Us</span></li>
                <li><span>Olx for Businesses</span></li>
            </ul>
        </div>
        <div className="categoriesBox">
            <span>OLX</span>
            <ul>
                <li><span>Help</span></li>
                <li><span>Sitemap</span></li>
                <li><span>Terms of Use</span></li>
                <li><span>Privacy Policy</span></li>
            </ul>
        </div>
        <div className="categoriesBox footerIcons">
            <span>FOLLOW US</span>
           <div className="iconsRound">
            <img src={twitter}/>
            <img src={fb}/>
            <img src={youtube}/>
            <img src={insta}/>

           </div>
           <div className="iconsBoxes">
            <span className='firstSpan'><img src={Applestore}/></span>
            <span className='secondSpan' ><img src={GooglePlay}/></span>
            <span className='thirdSpan'><img src={AppGallery}/></span>

           </div>

        </div>

        </div>
    </div>


    <div className="footerBelow">
    <div className="innerBox">
        <span className="span1">Free Classifieds in Pakistan</span>
        <span> . © 2006-2024 OLX</span>
    </div>
    </div>

    </>
}

export default Footer