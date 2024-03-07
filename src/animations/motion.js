export const fadeIn = {
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  visible: {
    pointerEvents: 'all',
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
