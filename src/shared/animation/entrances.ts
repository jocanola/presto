import { FadeIn, FadeInUp, Layout } from "react-native-reanimated";

export const entrances = {
  fadeIn: (duration = 250, delay = 0) => FadeIn.duration(duration).delay(delay),
  fadeInUp: (duration = 300, delay = 0) => FadeInUp.duration(duration).delay(delay),
};

export const layouts = {
  spring: () => Layout.springify().damping(14),
};

export const staggerDelay = (base = 0, index = 0, step = 40) => base + index * step;