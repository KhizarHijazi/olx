import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareNodes, faLocationDot, faPhone, faComments, faChevronRight, faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import { getSingleProduct } from "../../config/firebase"

import profileIcon from '../../assets/iconProfilePicture.png'



function Details() {
    const [add, setAdd] = useState({})
    const { brand, price, thumbnail, title, description } = add

    const { adId } = useParams()

    useEffect(() => {
        getSingalAdd()
    }, [])

    async function getSingalAdd() {
        const get = await getSingleProduct(adId)
        setAdd(get)

    }
    // console.log(add)

    return <>
        <div className="bodyBox">

            <div className="maindetailBox">

                <div className="productDetailBox">
                    <div className="imgBox">
                        {add && <img src={thumbnail} />}
                        </div>

                    <div className="priceBox">
                        <div className="pricebox1">
                            <span>Rs.{price}</span>
                            <div className="iconsBox">
                                <FontAwesomeIcon icon={faHeart} className="icons" />
                                <FontAwesomeIcon icon={faShareNodes} className="icons" />
                            </div>
                        </div>
                        <div className="h1box" >{title}</div>
                        <div className="span2div">
                            <div>
                                <FontAwesomeIcon icon={faLocationDot} className="locationIcon" />
                                <span class="span2">Aziz Fatima Road, Faisalabad</span></div>
                            <div className="daysSpan">2 days ago</div>
                        </div>
                    </div>

                    <div className="detailsBox">
                        <div className="detailheading">Details</div>
                        <div className="detailbox1">
                            <span className="detailspanBoxs">Brand</span>
                            <span className="detailspanBoxs detailSpansBold">{brand}</span>
                            <span className="detailspanBoxs">Price</span>
                            <span className="detailspanBoxs detailSpansBold">Rs.{price}</span>
                            <span className="detailspanBoxs">condition</span>
                            <span className="detailspanBoxs detailSpansBold">New</span>
                        </div>
                    </div>

                    <div className="decriptionBox">
                        <div className="decriptionheading">Description</div>
                        <div className="decriptionDetails">
                            <span>{description}</span>
                        </div>



                    </div>

                </div>
                <div className="userDetailBox">
                    <div className="userProfileBox">
                        <div className="prof">
                            <img src={profileIcon} />
                            <div className="details">
                                <div className="same bold"><span>U Mobile LGF-counter # 5</span></div>
                                <div className="same s2"><span>Member since Apr 2022</span></div>
                                <div className="same bold"><span>See Profile<FontAwesomeIcon icon={faChevronRight} className="arrow" /></span></div>
                            </div>
                        </div>
                        <button className="phoneBtn"><FontAwesomeIcon icon={faPhone} className="icons" /><span>Show phone number</span></button>
                        <button className="chatBtn"><FontAwesomeIcon icon={faComments} className="icons" /><span>Chat</span></button>

                    </div>
                    <div className="emptyBox"></div>
                    <div className="locationBox">
                        <div className="heading">Location</div>
                        <div className="location"><FontAwesomeIcon icon={faLocationDot} className="icon" /><span>Township - Sector B1, Township</span></div>

                    </div>
                    <div className="idBox">
                        <div className="idNum">AD ID 1023654789</div>
                        <div className="report">
                            <FontAwesomeIcon icon={faFontAwesome} className="icon" />
                            <span>Report this ad</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>


    </>
}

export default Details