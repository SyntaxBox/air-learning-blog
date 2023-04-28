import Container from "@/UI/layout/Container";
import React from "react";
import Title from "../Title/Title";
import CollectionCard from "../CollectionCard/CollectionCard";

function PostsCollection() {
  return (
    <Container>
      <Title title="Front-end Development" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-3">
        <CollectionCard
          description={
            "Sony announced that it had crossed the threshold of 100 million copies sold for the PS4 three months ago, and in the last quarter achieved sales of 2.8 million additional copies."
          }
          img={"/s1.jpg"}
          title={"Samsung officially unveils this year's S phone series"}
          author={"kosei"}
          time={Date.now()}
          className="h-[180px]"
          slug="Samsung-officially-unveils-this-year's-S-phone-series"
        />
        <CollectionCard
          description={
            "Sony announced that it had crossed the threshold of 100 million copies sold for the PS4 three months ago, and in the last quarter achieved sales of 2.8 million additional copies."
          }
          img={"/s1.jpg"}
          title={"Samsung officially unveils this year's S phone series"}
          author={"kosei"}
          time={Date.now()}
          className="h-[180px]"
          slug="Samsung-officially-unveils-this-year's-S-phone-series"
        />
        <CollectionCard
          description={
            "Sony announced that it had crossed the threshold of 100 million copies sold for the PS4 three months ago, and in the last quarter achieved sales of 2.8 million additional copies."
          }
          img={"/s1.jpg"}
          title={"Samsung officially unveils this year's S phone series"}
          author={"kosei"}
          time={Date.now()}
          className="h-[180px]"
          slug="Samsung-officially-unveils-this-year's-S-phone-series"
        />
        <CollectionCard
          description={
            "Sony announced that it had crossed the threshold of 100 million copies sold for the PS4 three months ago, and in the last quarter achieved sales of 2.8 million additional copies."
          }
          img={"/s1.jpg"}
          title={"Samsung officially unveils this year's S phone series"}
          author={"kosei"}
          time={Date.now()}
          className="h-[180px]"
          slug="Samsung-officially-unveils-this-year's-S-phone-series"
        />
      </div>
    </Container>
  );
}

export default PostsCollection;
