import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { getDataFromFirestore } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'


const Showdata = () => {
    const navigate = useNavigate()
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        getCards()
    
    }, []);
    async function getCards() {   
        const res = await getDataFromFirestore()
        setApiData(res)
    }
    // console.log(apiData)

    // if (!apiData.length) {
    //     return <h1>Loading . . .</h1>
    //   }

    return (<>
        <div className='apiDataMainDiv'>

            <div><h1>All Categories</h1></div>
            <div className='apiDataDiv'>

                {apiData.map((data, index) => {
                    const { brand, images, price, thumbnail, title, rating ,id } = data
                    const randomNum = Math.floor(Math.random() * 6) + 1;
                    const thumbnailSrc = images && images.length > 0 ? images[0] : thumbnail;

                    return (
                        <div className='thumbnailBox' onClick={() => navigate(`details/${id}`)}>
                            <img src={thumbnailSrc} />
                            <div className='itemInfoBox'>
                                <div className='priceBox'><span>Rs. {price}</span><FontAwesomeIcon icon={faHeart} /></div>
                                <div className='brandTitle'>{brand}<span></span>{title}</div>
                                <div className='rating'><FontAwesomeIcon icon={faStar} /> {rating}<span>{randomNum} days ago</span></div>
                                <div className='randomNum'></div>
                            </div>




                        </div>
                    )


                })}
            </div>
        </div>
    </>
    )
}

export default Showdata