import React, { useState } from "react";
import jaket from "../../img/ulasan.jpg";
import { Rating } from "react-simple-star-rating";

function Ulasan() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <div className="h-screen bg-indigo-50 justify-center pt-20 px-24">
      <h1 className="text-5xl text-gray-800 font-bold">
        Sweater / Crewneck Pastel Mint Blue GAP
      </h1>
      <div>
        <Rating onClick={handleRating} ratingValue={rating} />
      </div>
      <div className="flex justify-between mt-16 bg-blue-100">
        <div className="justify-start w-3/5 bg-red-500">
          <p className="text-4xl text-gray-800 font-bold">Menulis Ulasan</p>
          <div className="grid space-y-5 mt-5">
            <div className="flex space-x-36">
              <p className="text-3xl text-gray-800 font-bold">Rating</p>
              <div className="flex space-x-2">
                <div>
                  <i className="fa-solid fa-star-sharp"></i>
                </div>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp text-[200px]"></i>
                <i className="fa-solid fa-bag-shopping text-[200px]"></i>
                <i className="fa-solid fa-star-sharp"></i>
              </div>
            </div>
            <div className="flex space-x-40">
              <p className="text-3xl text-gray-800 font-bold">Judul</p>
              <div className="w-1/2">
                <input type="text" className="w-full h-12" />
              </div>
            </div>
            <div className="flex space-x-24">
              <p className="text-3xl text-gray-800 font-bold">Komentar</p>
              <div className="w-1/2">
                <input type="text" className="w-full h-48 " />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-500">
          <img src={jaket} alt="Ulasan" className="object-cover h-96 w-96" />
        </div>
      </div>
    </div>
  );
}

export default Ulasan;
