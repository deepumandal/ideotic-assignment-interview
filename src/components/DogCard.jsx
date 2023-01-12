import React from "react";
import styled from "../styled/home/home.module.css";
const DogCard = ({ heading, img }) => {
  return (
    <div className={styled.DogContainer}>
      <img className={styled.DogImage} src={img} />

      <blockquote className={styled.DogCardsHeading}> {heading} </blockquote>
    </div>
  );
};

export default DogCard;
