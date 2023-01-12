import React, { memo } from "react";
import styled from "../styled/home/home.module.css";
import { Link } from "react-router-dom";
const DogCard = ({ heading, img }) => {
  
  return (
    <Link to={`/details/${heading}`}>
      <div className={styled.DogContainer}>
        <img className={styled.DogImage} alt={heading} src={img} />
        <blockquote className={styled.DogCardsHeading}> {heading} </blockquote>
      </div>
    </Link>
  );
};

export default DogCard;
