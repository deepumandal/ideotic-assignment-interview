import React, { useContext, useEffect, useMemo, useState } from "react";
import { FlexBox } from "../../styled/styled.module";
import styled from "../../styled/home/home.module.css";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { FeedContext } from "../../context/FeedContext";
import axios from "axios";
import DogCard from "../../components/DogCard";
const Home = () => {
  const { state, dispatch } = useContext(FeedContext);
  const [page, setPage] = useState(1);
  console.log(state);
  const render = (bread) => {
    Promise.all(
      bread.map((item) => {
        // console.log(item)
        return axios
          .get(`https://dog.ceo/api/breed/${item}/images/random`)
          .then((response) => {
            return { name: item, image: response.data.message };
          });
      })
    ).then((response) => {
      dispatch({ type: "GET_BREADDATA_SUCCESS", payload: response });
      const start = (page - 1) * 12;
      const end = start + 12;
      const current = response.slice(start, end);
      dispatch({ type: "GET_BREAD_CURRENT", payload: current });
    });
  };

  useEffect(() => {
    const response = state.data;
    const start = (page - 1) * 12;
    const end = start + 12;
    const current = response.slice(start, end);
    dispatch({ type: "GET_BREAD_CURRENT", payload: current });
  }, [page]);

  useEffect(() => {
    dispatch({ type: "FEED_LOADING" });
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((resp) => {
        const bread = Object.keys(resp.data.message);
        dispatch({ type: "FEED_BREAD_SUCCESS", payload: bread });
        render(bread);
      })
      .catch((err) => {
        dispatch({ type: "FEED_BREAD_ERROR" });
      });
  }, []);

  return (
    <FlexBox
      style={{
        flexDirection: "column",
        width: "100%",
      }}
    >
      <nav className={styled.homeNav}>
        <h1 className={styled.Heading}> Doggo </h1>
        <Search />
        <Pagination page={page} setPage={setPage} />
      </nav>
      <div className={styled.dogShowGrid}>
        {state.current.map((item, i) => {
          return <DogCard img={item.image} heading={item.name} />;
        })}
      </div>
    </FlexBox>
  );
};

export default Home;
