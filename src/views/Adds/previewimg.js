import React, { useState, useEffect } from 'react';


const ImageUploadForm = () => {
  const [images, setImages] = useState(Array(20).fill(null));
  const [productInfo, setProductInfo] = useState({
    title: '',
    description: '',
    price: '',
  });

  const handleImageUpload = (index, event) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(newImages);
  };

  const handleInputChange = (field, value) => {
    setProductInfo({ ...productInfo, [field]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Implement your logic to upload all images and productInfo
    console.log("Uploading all images:", images);
    console.log("Product Info:", productInfo);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Product Information */}
      <label>
        Title:
        <input
          type="text"
          value={productInfo.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={productInfo.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          value={productInfo.price}
          onChange={(e) => handleInputChange('price', e.target.value)}
        />
      </label>

      {/* Image Upload Boxes */}
      {images.map((image, index) => (
        <div key={index}>
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageUpload(index, event)}
            />
            {image ? <img src={image} alt={`Product ${index + 1}`} /> : "Upload Image"}
          </label>
        </div>
      ))}

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageUploadForm;
