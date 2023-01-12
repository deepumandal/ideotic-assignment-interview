import React, { useContext, useEffect, useMemo } from "react";
import { FlexBox } from "../styled/styled.module";
import { FeedContext } from "../context/FeedContext";

const Pagination = ({ page, setPage }) => {
  const length = useContext(FeedContext).state.bread?.length || 0;

  const limit = useMemo(() => {
    return Math.floor(length / 10);
  }, [length]);







  return (
    <FlexBox style={{ gap: "10px" }}>
      <button disabled={page==1} onClick={() => setPage((curr) => curr - 1)}> left </button>
      <button> {page} </button>
      <button disabled={page==limit} onClick={() => setPage((curr) => curr + 1)}> right </button>
    </FlexBox>
  );
};

export default Pagination;
