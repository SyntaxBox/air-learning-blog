import Container from "@/UI/layout/Container";
import HeroCard from "../HeroCard/HeroCard";

function Hero() {
  return (
    <div className="w-full h-[1024px] md:h-[512px] mt-[-32px] md:mt-0 ">
      <Container>
        <div className="flex flex-col md:flex-row gap-3 w-full h-full">
          <HeroCard
            img={"/s1.jpg"}
            title={"Samsung officially unveils this year's S phone series"}
            author={"kosei"}
            time={Date.now()}
            className="w-full md:w-[60%] h-full"
            slug="Samsung-officially-unveils-this-year's-S-phone-series"
          />
          <div className="flex flex-col gap-3 w-full md:w-[40%] h-full">
            <HeroCard
              img={"/iphone-se.jpg"}
              title={
                "Reports: Apple will launch iPhone SE 2 in 2020 with a similar design to the iPhone 8"
              }
              author={"kosei"}
              time={Date.now()}
              className="w-full h-full"
              slug="Samsung-officially-unveils-this-year's-S-phone-series"
            />
            <HeroCard
              img={"/tech2.png"}
              title={"Samsung officially unveils Galaxy Z Flip folding phone"}
              author={"kosei"}
              time={Date.now()}
              className="w-full h-full"
              slug="Samsung-officially-unveils-this-year's-S-phone-series"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
