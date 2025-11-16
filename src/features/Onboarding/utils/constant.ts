import { Slide } from "../types/types";

 export  const slides: Slide[] =  [
      {
        key: "one",
        title: "Your best Crypto exchange buddy",
        description:
          "Welcome to Presto. Your trusted sidekick when it comes to trading your Digital assets.",
        image: require("@/src/assets/images/onboarding1.png"),
      },
      {
        key: "two",
        title: "Easy to use interface and Multi-coin function",
        description:
          "Presto supports multiple coins such as BTC, USDT, XRP, BNB, ETH and other major coins.",
        image: require("@/src/assets/images/onboarding2.png"),
      },
      {
        key: "three",
        title: "Faster and better than your regular exchanges",
        description:
          "Enjoy faster transactions and juicy rates on all your digital assets while earning as you trade.",
        image: require("@/src/assets/images/onboarding3.png"),
      },
      {
        key: "four",
        title: "Bill Payments",
        description:
          "An exchange that also doubles as your bill payment plug. Make bill payments such as Airtime, Data, Power bill and more.",
        image: require("@/src/assets/images/onboarding4.png"),
        cta: "Get Started",
      },
    ]