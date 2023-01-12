import React, { memo, useContext, useEffect, useMemo } from "react";
import { FlexBox } from "../styled/styled.module";
import { FeedContext } from "../context/FeedContext";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styled from "../styled/home/home.module.css";

const Pagination = ({ page, setPage }) => {
  const length = useContext(FeedContext).state.bread?.length || 0;

  const limit = useMemo(() => {
    return Math.floor(length / 10);
  }, [length]);

  return (
    <FlexBox style={{ gap: "10px" }}>
      <button
        className={styled.leftrightbtn}
        disabled={page == 1}
        onClick={() => setPage((curr) => curr - 1)}
      >
        {" "}
        <AiFillCaretLeft />{" "}
      </button>
      <button className={styled.count}> {page} </button>
      <button
        className={styled.leftrightbtn}
        disabled={page == limit}
        onClick={() => setPage((curr) => curr + 1)}
      >
        <AiFillCaretRight />
      </button>
    </FlexBox>
  );
};

export default memo(Pagination);
