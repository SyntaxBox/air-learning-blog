import Container from "@/UI/Container"
import HeroCard from "../HeroCard/HeroCard"

function Hero() {
  return (
    <div className="w-full h-[500px]">
    <Container>
      <div className="flex gap-3 w-full h-full">
        <HeroCard img={"/tech2.png"} title={""} author={""} time={""} className="w-[60%] h-full"/>
        <div className="flex flex-col gap-3 w-[40%] h-full">
          <HeroCard img={"/tech2.png"} title={""} author={""} time={""} className="w-full h-full"/>
          <div className="h-full flex gap-3">
            <HeroCard img={"/tech.jpg"} title={""} author={""} time={""} className="w-full h-full"/>
            <HeroCard img={"/tech.jpg"} title={""} author={""} time={""} className="w-full h-full"/>
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default Hero