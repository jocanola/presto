/**
 * Typography constants for consistent text styling across the application
 */

export const Typography = {
  // Font families
  fontFamily: {
    light: "PoppinsLight",
    regular: "PoppinsRegular",
    medium: "PoppinsMedium",
    bold: "PoppinsBold",
  },

  // Font sizes
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
  },

  // Font weights
  fontWeight: {
    thin: "100",
    extraLight: "200",
    light: "300",
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    black: "900",
  } as const,

  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter spacing
  letterSpacing: {
    tighter: -0.8,
    tight: -0.4,
    normal: 0,
    wide: 0.4,
    wider: 0.8,
    widest: 1.6,
  },

  // Common text styles that can be reused
  textVariants: {
    header: {
      fontSize: 24,
      fontWeight: "700",
      lineHeight: 1.2,
    },
    subheader: {
      fontSize: 20,
      fontWeight: "600",
      lineHeight: 1.25,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      lineHeight: 1.5,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 1.5,
    },
    body: {
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 1.5,
    },
    caption: {
      fontSize: 12,
      fontWeight: "400",
      lineHeight: 1.5,
    },
    button: {
      fontSize: 16,
      fontWeight: "600",
      lineHeight: 1.25,
    },
  },
};
