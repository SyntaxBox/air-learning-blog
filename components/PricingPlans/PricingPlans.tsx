import React from "react";
import plans from "./plans";
import PricingPlan from "../PricingPlan/PricingPlan";
import H2 from "@/UI/H2";
import P from "@/UI/P";
import Container from "@/UI/Container";

function PricingPlans() {
  return (
    <Container>
      <H2>Our pricing plans</H2>
      <P>
        Revolutionary services that exceed expectations, offering cutting-edge
        solutions to meet diverse needs and drive success. services that exceed
        expectations.
      </P>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6 max-w-[1200px]">
        {plans.map((plan, i) => {
          const { badge, title, features, price } = plan;
          return (
            <PricingPlan
              featured={i === 1}
              key={i}
              title={title}
              badge={badge}
              price={price}
              features={features}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default PricingPlans;
