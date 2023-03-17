import React from "react";
import Card from "../Card/Card";
import {
  LightningCharge,
  Lightbulb,
  PatchCheck,
  Fire,
  Coin,
  DatabaseCheck,
} from "react-bootstrap-icons";

function Cards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
      <Card
        title="Creative"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolor repellat laudantium quae ratione doloremque quod nam."
        Icon={Lightbulb}
      />
      <Card
        title="Fast"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolor repellat laudantium quae ratione doloremque quod nam."
        Icon={LightningCharge}
      />
      <Card
        title="Trusted"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolor repellat laudantium quae ratione doloremque quod nam."
        Icon={PatchCheck}
      />
      <Card
        title="trending"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolor repellat laudantium quae ratione doloremque quod nam."
        Icon={Fire}
      />
      <Card
        title="Cheap"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolor repellat laudantium quae ratione doloremque quod nam."
        Icon={Coin}
      />
      <Card
        title="Save your data"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolor repellat laudantium quae ratione doloremque quod nam."
        Icon={DatabaseCheck}
      />
    </div>
  );
}

export default Cards;
