import Container from "@/UI/layout/Container";
import React from "react";
import MainCard from "../MainCard/MainCard";
import FeaturedSide from "../FeaturedSide/FeaturedSide";
import Title from "../Title/Title";

function Featured() {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <Title title="Featured Posts" />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full flex flex-col gap-6 md:gap-3 md:flex-row">
            <MainCard
              description={
                "Sony announced that it had crossed the threshold of 100 million copies sold for the PS4 three months ago, and in the last quarter achieved sales of 2.8 million additional copies."
              }
              img={"/s1.jpg"}
              title={"Samsung officially unveils this year's S phone series"}
              author={"kosei"}
              time={Date.now()}
              className="h-[240px]"
              slug="Samsung-officially-unveils-this-year's-S-phone-series"
            />
            <MainCard
              description={
                "Sony announced that it had crossed the threshold of 100 million copies sold for the PS4 three months ago, and in the last quarter achieved sales of 2.8 million additional copies."
              }
              img={"/s1.jpg"}
              title={"Samsung officially unveils this year's S phone series"}
              author={"kosei"}
              time={Date.now()}
              className="h-[240px]"
              slug="Samsung-officially-unveils-this-year's-S-phone-series"
            />
          </div>
          <div className="lg:w-[550px] flex flex-col md:flex-row lg:flex-col w-full gap-6">
            <FeaturedSide
              description={
                "Sony announced that it had crossed the threshold of 100 million copies sold for the PS4 three months ago, and in the last quarter achieved sales of 2.8 million additional copies."
              }
              title={"Samsung officially unveils this year's S phone series"}
              slug="Samsung-officially-unveils-this-year's-S-phone-series"
            />
            <FeaturedSide
              description={
                "Sony announced that it had crossed the threshold of 100 million copies sold for the PS4 three months ago, and in the last quarter achieved sales of 2.8 million additional copies."
              }
              title={"Samsung officially unveils this year's S phone series"}
              slug="Samsung-officially-unveils-this-year's-S-phone-series"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Featured;
