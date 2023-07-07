import Container from "@/UI/layout/Container";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import MainCard from "../MainCard/MainCard";
import Loading from "@/UI/buttons/Loading";
import LoadMore from "@/UI/buttons/LoadMore";
const posts = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1,
];

enum ACTIONS {
  IDLE,
  LOADING,
  ENDED,
}

function RecentPosts() {
  const [load, setLoad] = useState(1);
  const [LoadState, setLoadState] = useState(ACTIONS.IDLE);

  const handleLoadMore = () => {
    setLoadState(ACTIONS.LOADING);
    setTimeout(() => {
      setLoad((p) => p + 1);
      setLoadState(ACTIONS.IDLE);
    }, 2000);
  };

  useEffect(() => {
    console.log(load * 6, posts.length);
    if (load * 6 > posts.length) setLoadState(ACTIONS.ENDED);
  }, [load]);

  return (
    <Container>
      <Title title="Recent Posts" />
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((_, i) => {
          if (i >= 6 * load) return null;
          return (
            <MainCard
              key={i}
              description={
                "Sony announced that it had crossed the threshold of 100 million copies sold for the PS4 three months ago, and in the last quarter achieved sales of 2.8 million additional copies."
              }
              img={"/s1.jpg"}
              title={"Samsung officially unveils this year's S phone series"}
              author={"kosei"}
              slug="Samsung-officially-unveils-this-year's-S-phone-series"
              time={Date.now()}
              className="h-[340px]"
            />
          );
        })}
      </div>
      {LoadState === ACTIONS.LOADING && <Loading />}
      {LoadState === ACTIONS.IDLE && <LoadMore onClick={handleLoadMore} />}
    </Container>
  );
}

export default RecentPosts;
