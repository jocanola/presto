import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { entrances } from "@/src/shared/animation/entrances";
import { Colors } from "@/src/shared/constants/Colors";
import { Typography } from "@/src/shared/constants/Typography";
import { AnimatedPressable } from "@/src/shared/components/Button/AnimatedPressable";

type Slide = {
  title: string;
  description: string;
  image: any;
  cta?: string;
};

type Props = {
  item: Slide;
  index: number;
  currentIndex: number;
  total: number;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
  onDone: () => void;
};

export default function OnboardItem({
  item,
  index,
  currentIndex,
  total,
  onNext,
  onBack,
  onSkip,
  onDone,
}: Props) {
  const progress = (currentIndex + 1) / total;
  const isLast = currentIndex === total - 1;
  return (
    <View style={styles.slide}>
      <Animated.View
        entering={entrances.fadeInUp(280, 0)}
        style={styles.topBar}
      >
        <View style={styles.progressTrack}>
          <View
            style={[styles.progressFill, { width: `${progress * 100}%` }]}
          />
        </View>
        {!isLast ? (
          <AnimatedPressable
            accessibilityLabel="Skip onboarding"
            onPress={onSkip}
          >
            <Text style={styles.skipText}>Skip</Text>
          </AnimatedPressable>
        ) : (
          <AnimatedPressable accessibilityLabel="Back" onPress={onBack}>
            <Text style={styles.skipText}>Back</Text>
          </AnimatedPressable>
        )}
      </Animated.View>

      <Animated.View
        entering={entrances.fadeInUp(320, 40)}
        style={styles.imageWrap}
      >
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </Animated.View>

      <Animated.View
        entering={entrances.fadeIn(260, 80)}
        style={styles.textWrap}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </Animated.View>

      <Animated.View
        entering={entrances.fadeInUp(320, 100)}
        style={styles.actions}
      >
        {!isLast ? (
          <AnimatedPressable
            style={styles.primaryBtn}
            onPress={onNext}
            accessibilityLabel="Next"
          >
            <Text style={styles.primaryBtnText}>Next</Text>
          </AnimatedPressable>
        ) : (
          <AnimatedPressable
            style={styles.primaryBtn}
            onPress={onDone}
            accessibilityLabel={item.cta ?? "Get Started"}
          >
            <Text style={styles.primaryBtnText}>
              {item.cta ?? "Get Started"}
            </Text>
          </AnimatedPressable>
        )}
      </Animated.View>
    </View>
  );
}

const BTN_HEIGHT = 52;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingHorizontal: 24,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  progressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: Colors.gray,
    borderRadius: 12,
    marginRight: 12,
  },
  progressFill: {
    height: 6,
    backgroundColor: Colors.primaryBrand,
    borderRadius: 12,
  },
  skipText: {
    color: Colors.textSecondary,
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.sm,
  },
  imageWrap: {
    alignItems: "center",
    justifyContent: "center",
    // flex: 0.5,
    marginTop: 24,
  },
  image: {
    width: "100%",
    height: 340,
  },
  textWrap: {
    marginTop: 32,
  },
  title: {
    textAlign: "center",
    color: Colors.textPrimary,
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize["3xl"],
  },
  description: {
    marginTop: 12,
    textAlign: "center",
    color: Colors.textSecondary,
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.md,
    lineHeight: 22,
  },
  actions: {
    marginTop: 24,
    paddingBottom: 12,
    alignItems: "center",
  },
  primaryBtn: {
    height: BTN_HEIGHT,
    borderRadius: 14,
    backgroundColor: Colors.textPrimary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    alignSelf: "stretch",
    width: "100%",
    shadowColor: Colors.black,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  primaryBtnText: {
    color: Colors.white,
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.md,
  },
});
