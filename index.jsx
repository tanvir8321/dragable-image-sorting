import React, { useState } from "react";

export default function AddressAddEdit() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://aequilibrium-dataset.s3.ap-southeast-1.amazonaws.com/partners/file-1713763645950.jpg",
      alt: "image1.jpg",
    },
    {
      id: 2,
      src: "https://aequilibrium-dataset.s3.ap-southeast-1.amazonaws.com/partners/file-1711352127735.jpg",
      alt: "image2.jpg",
    },
    {
      id: 3,
      src: "https://aequilibrium-dataset.s3.ap-southeast-1.amazonaws.com/partners/file-1711540260980.jpg",
      alt: "image3.jpg",
    },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const oldIndex = parseInt(e.dataTransfer.getData("index"));
    const draggedImage = images[oldIndex];
    let updatedImages = [...images];
    updatedImages.splice(oldIndex, 1);
    updatedImages.splice(newIndex, 0, draggedImage);
    setImages(updatedImages);
  };

  const handleSubmit = () => {
    console.log(images?.map((item) => item?.alt));
  };

  return (
    <>
      <div className="d-flex">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              width: "100px",
              height: "100px",
              margin: "5px",
              border: "1px solid #ddd",
            }}
          />
        ))}
      </div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
