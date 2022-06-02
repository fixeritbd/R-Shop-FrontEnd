import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function Rating(props) {
  return (
    <div>
      <div className="product-icon">
        {props.rating >= 1 ? (
          <BsStarFill className="starIcon" />
        ) : props.rating >= 0.5 ? (
          <BsStarHalf className="starIcon" />
        ) : (
          <BsStar className="starIcon" />
        )}
        {props.rating >= 2 ? (
          <BsStarFill className="starIcon" />
        ) : props.rating >= 1.5 ? (
          <BsStarHalf className="starIcon" />
        ) : (
          <BsStar className="starIcon" />
        )}
        {props.rating >= 3 ? (
          <BsStarFill className="starIcon" />
        ) : props.rating >= 2.5 ? (
          <BsStarHalf className="starIcon" />
        ) : (
          <BsStar className="starIcon" />
        )}
        {props.rating >= 4 ? (
          <BsStarFill className="starIcon" />
        ) : props.rating >= 3.5 ? (
          <BsStarHalf className="starIcon" />
        ) : (
          <BsStar className="starIcon" />
        )}
        {props.rating >= 5 ? (
          <BsStarFill className="starIcon" />
        ) : props.rating >= 4.5 ? (
          <BsStarHalf className="starIcon" />
        ) : (
          <BsStar className="starIcon" />
        )}
      </div>
    </div>
  );
}
