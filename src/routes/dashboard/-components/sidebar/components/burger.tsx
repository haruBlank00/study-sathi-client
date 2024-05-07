import { Variants, motion } from "framer-motion";

const topBurger: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 45,
    transformOrigin: "left",
  },
};

const midBurger: Variants = {
  initial: {
    width: "w-6",
  },
  animate: {
    width: 0,
  },
};

const bottomBurger: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: -45,
    transformOrigin: "left",
  },
};

export const Burger = () => {
  return (
    <motion.div
      className="flex flex-col gap-y-1 w-6 cursor-pointer"
      initial="initial"
      whileHover={"animate"}
    >
      <motion.span
        variants={topBurger}
        className="block h-1 w-6 bg-black"
      ></motion.span>
      <motion.span
        variants={midBurger}
        className="block h-1 w-6 bg-black"
      ></motion.span>
      <motion.span
        variants={bottomBurger}
        className="block h-1 w-6 bg-black"
      ></motion.span>
    </motion.div>
  );
};
