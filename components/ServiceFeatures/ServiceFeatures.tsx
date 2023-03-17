import Container from "@/UI/Container";
import H2 from "@/UI/H2";
import P from "@/UI/P";
import React from "react";
import Cards from "../Cards/Cards";

function ServiceFeatures() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-6">
        <H2>Our service features</H2>
        <P>
          Revolutionary services that exceed expectations, offering cutting-edge
          solutions to meet diverse needs and drive success.
        </P>
      </div>
      <Cards />
    </Container>
  );
}

export default ServiceFeatures;
