export const CONTENT_ANIMATION = {
  unMounted: { opacity: 1, scale: 0 },
  mounted: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const LEFT_CONTAINER_ANIMATION = {
  unMounted: { y: -20, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
  },
};

export const RIGHT_CONTAINER_ANIMATION = {
  unMounted: { y: 20, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
  },
};
