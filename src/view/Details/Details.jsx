import React, { memo, useContext, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "../../styled/details/details.module.css";
import { FeedContext } from "../../context/FeedContext";

const Details = () => {
  const params = useParams();
  const { state } = useContext(FeedContext);
  let imagelink = useMemo(() => {
    return state.current.find((item) => {
      if (item.name == params.id) {
        return item.image;
      }
    }).image;
  }, [params.id]);

  return (
    <div>
      <div className={styled.container}>
        <img src={imagelink} className={styled.image} alt={(imagelink = "")} />
        <div className={styled.description}>
          <h1 className={styled.heading}> {params.id} </h1>
          <blockquote>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            culpa distinctio molestiae. Officiis ipsa fuga beatae nisi dolorum,
            ad nobis quae modi? Nobis quaerat cum laudantium recusandae delectus
            hic aliquam.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            culpa distinctio molestiae. Officiis ipsa fuga beatae nisi dolorum,
            ad nobis quae modi? Nobis quaerat cum laudantium recusandae delectus
            hic aliquam.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            culpa distinctio molestiae. Officiis ipsa fuga beatae nisi dolorum,
            ad nobis quae modi? Nobis quaerat cum laudantium recusandae delectus
            hic aliquam.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            culpa distinctio molestiae. Officiis ipsa fuga beatae nisi dolorum,
            ad nobis quae modi? Nobis quaerat cum laudantium recusandae delectus
            hic aliquam.
          </blockquote>
        </div>
      </div>
      <blockquote
        style={{
          textAlign: "center",
        }}
      >
        <Link to="/">go back</Link>
      </blockquote>
    </div>
  );
};

export default memo(Details);
