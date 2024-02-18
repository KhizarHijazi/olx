import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft , faImage} from '@fortawesome/free-solid-svg-icons'
import olxBlack from '../../assets/OLX-Symbol.png'
import { useNavigate } from 'react-router-dom'
import {addOlxPostDataToFirestore} from '../../config/firebase'



function Postadd() {
const navigate = useNavigate()

    const [images, setImages] = useState(Array(20).fill(null));
    const [productInfo, setProductInfo] = useState({
      title: '',
      description: '',
      price: '',
    });
  
    const handleImageUpload = (index, event) => {
      const newImages = [...images];
      newImages[index] = event.target.files[0];
      
      setImages(newImages);
    };
  
    const handleInputChange = (field, value) => {
      setProductInfo({ ...productInfo, [field]: value });
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      addOlxPostDataToFirestore(productInfo, images);
      setImages(Array(20).fill(null));
    setProductInfo({
        title: '',
        description: '',
        price: '',
    });

      console.log("Uploading all images:", images);
      console.log("Product Info:", productInfo);
    };
  

    return <form onSubmit={handleFormSubmit}>
    <div className="postAddBody">

        <div className="postHeader" >
            <FontAwesomeIcon icon={faArrowLeft} className='leftArrow' 
            onClick={()=> navigate('/')}
            />
            <img src={olxBlack} />
        </div>

        <div className='postHeading'>POST YOUR AD</div>

        <div className='postDetailMainDiv'>

        <div className='headingBox'>
            <div className='div1'><span>SELECTED CATEGORY</span></div>
            <div className='div2'>
                <span className='span1st'>Mobiles / Teblets</span>
                <span className='span2nd'>Change</span>
                </div>
        </div>
        <div className='itemsBox'>
            
        <div className='box1heading'>INCLUDE SOME DETAILS</div>

        <div className='box2title'>
            <span className='title'>Ad title</span>
            <div><label> <input
          required='fill all required fields'
          type="text"
          value={productInfo.title}
          onChange={(e) => handleInputChange('title', e.target.value)}/>
          </label>
          </div>
            <span className='text'>Mention the key features of your item (e.g. brand, model, age, type)</span>
        </div>

        <div className='box3Description'>
            <span className='descriptionTitle'>Description</span>
            <div><label> <textarea
          value={productInfo.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        /></label></div>
            <span className='descriptionText'>Description should contain at least 10 alphanumeric characters. Please edit the field</span>
        </div>

        <div className='line'></div>
        <div className='priceHeading'>SET A PRICE</div>
        <div className='box3price'>
            <span className='title'>Price</span>
            <div><span>Rs</span><label><input
          type="text"
          value={productInfo.price}
          onChange={(e) => handleInputChange('price', e.target.value)}
        /></label></div>
        </div>
        <div className='line'></div>
        <div className='priceHeading'>UPLOAD UP TO 20 PHOTOS</div>
        <div className='box4image'>
        {images.map((image, index) => (
        <div className='ImgInputBox' key={index}>
          <label htmlFor={`imageInput${index}`}>
          
          {image ? <img src={URL.createObjectURL(image)} alt={`Product ${index + 1}`} /> : <FontAwesomeIcon icon={faImage} className='imageIcon' />}

          </label>
            <input 
            id={`imageInput${index}`}
              type="file"
              accept="image/*"
              onChange={(event) => handleImageUpload(index, event)}
            />
            {/* {image ? <img src={image} alt={`Product ${index + 1}`} /> : ""} */}
          
        </div>
      ))}
        </div>
        <span className='imgtext'>For the cover picture we recommend using the landscape mode.</span>

        <div className='line'></div>
        <div className='postBtnBox'>
        <button type="submit" className='postBtn'>Post now</button>
        </div>


        
        </div>

        </div>


    </div>
    </form>
}

export default Postadd

