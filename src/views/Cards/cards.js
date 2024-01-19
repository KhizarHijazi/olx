import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/header'
import { addDataToFireStore, getDataFromFirestore } from '../../config/firebase'


const Showdata = () => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        getCards()
        // fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        //     .then(data => setApiData(data.products))
    }, []);
    async function getCards() {
        const res = await getDataFromFirestore()
        setApiData(res)
    }
    console.log(apiData)

    // if (!apiData.length) {
    //     return <h1>Loading . . .</h1>
    //   }

    return (<>
        <Header />
        <div className='apiDataMainDiv'>

            <div><h1>All Categories</h1></div>
            <div className='apiDataDiv'>

                {apiData.map((data, index) => {
                    const { brand, category, description, discountPercenrage, images, price, thumbnail, title, rating } = data
                    const randomNum = Math.floor(Math.random() * 7) + 1;

                    return (
                        <div className='thumbnailBox'>
                            <img src={thumbnail} />
                            <div className='itemInfoBox'>
                                <div className='priceBox'><span>Rs. {price}</span><FontAwesomeIcon icon={faHeart} /></div>
                                <div className='brandTitle'>{brand}<span></span>{title}</div>
                                <div className='decription'>{description}</div>
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