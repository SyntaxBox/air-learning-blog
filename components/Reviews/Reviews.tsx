import Container from "@/UI/Container";
import H2 from "@/UI/H2";
import P from "@/UI/P";
import Avatars from "../Avatars/Avatars";
import Rating from "../Rating/Rating";
import Money from "../Money/Money";
import Separator from "@/UI/Separator";

function Reviews() {
  return (
    <Container>
      <div className="flex flex-col gap-8 items-center">
        <H2>What our costumers say</H2>
        <P>
          Revolutionary services that exceed expectations, offering cutting-edge
          solutions to meet diverse needs and drive success. services that
          exceed expectations.
        </P>
        <div className="flex flex-col md:flex-row max-w-[430px] md:max-w-[1200px] items-center justify-between gap-8">
          <Avatars />
          <Rating />
          <Money />
        </div>
      </div>
    </Container>
  );
}

export default Reviews;
