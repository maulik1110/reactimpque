import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css"

const Rating = ({ noOfStar = 5 }) => {
  const [Rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleclick(i) {
    setRating(i)
  }

  function mouseenter(i) {
    setHover(i)
  }

  function mouseleave() {
    setHover(Rating)

  }

  return (
    <div className="star-rating" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return(
        <FaStar
          key={index}
          className={index <= (hover || Rating)  ? "active" : "inactive" }
          onClick={() => handleclick(index)}
          onMouseEnter={() => mouseenter(index)}
          onMouseLeave={() => mouseleave()}
          size={40}
        />
        );
      })}
    </div>
  );
};

export default Rating;
