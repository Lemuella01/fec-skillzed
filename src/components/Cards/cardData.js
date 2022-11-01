import { FaRunning } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { FaCamera } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";

const Data = [
  {
    id: "1",
    round: <FaRunning />,
    title: "Animation",
    desc: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    get: "Get Started",
  },

  {
    id: "2",
    round: <SiAntdesign />,
    title: "Design",
    desc: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    get: "Get Started",
  },

  {
    id: "3",
    round: <FaCamera />,
    title: "Photography",
    desc: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos..",
    get: "Get Started",
  },

  {
    id: "4",
    round: <BsCurrencyExchange />,
    title: "Crypto",
    desc: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    get: "Get Started",
  },

  {
    id: "5",
    round: <BsFillBagCheckFill />,
    title: "Business",
    desc: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    get: "Get Started",
  },
];

export default Data;
