import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const getDogPic = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await response.json();
  return dog.message;
};

const DogPics = () => {
  const [dogPic, setDogPic] = useState("");
  useEffect(() => {
    getDogPic().then((pic) => setDogPic(pic));
  }, []);

  return (
    <div className="">
      <img src={dogPic} alt="" className="w-[40%] h-[40%] mb-10" />
      <button className="" onClick={async (e) => setDogPic(await getDogPic())}>
        🐶
      </button>
    </div>
  );
};

export default DogPics;
