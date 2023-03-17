const plans: {
  title: string;
  badge: string;
  price: number;
  features: (string | boolean)[][];
}[] = [
    {
      title: "Basic package",
      badge: "basic",
      price: 59.99,
      features: [
        [true, "Access to all courses"],
        [true, "5 database clusters"],
        [false, "data backup"],
        [false, "priority support"],
        [false, "Exclusive content"]
      ]
    }, {
      title: "Personal Package",
      badge: "advanced",
      price: 99.99,
      features: [
        [true, "Access to all courses"],
        [true, "15 database clusters"],
        [true, "2 data backup"],
        [true, "priority support"],
        [false, "Exclusive content"]
      ]
    }, {
      title: "Professional package",
      badge: "pro",
      price: 199.99,
      features: [
        [true, "Access to all courses"],
        [true, "50 database clusters"],
        [true, "20 data backup"],
        [true, "priority support"],
        [true, "Exclusive content"]
      ]
    }
  ]

export default plans