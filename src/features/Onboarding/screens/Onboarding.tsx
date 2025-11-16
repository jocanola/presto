import React, { useMemo, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Stack } from "expo-router";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Colors } from "@/src/shared/constants/Colors";
import OnboardItem from "@/src/features/Onboarding/components/OnboardItem";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { slides } from "../utils/constant";



type Props = { onDone: () => void };

export default function Onboarding({ onDone }: Props) {


  const [index, setIndex] = useState(0);
  const { width } = Dimensions.get("window");
  const translateX = useSharedValue(0);

  const animateTo = (i: number) => {
    setIndex(i);
    translateX.value = withTiming(-i * width, { duration: 260 });
  };

  const goNext = () => {
    if (index < slides.length - 1) animateTo(index + 1);
  };
  const goBack = () => {
    if (index > 0) animateTo(index - 1);
  };
  const skipToLast = () => animateTo(slides.length - 1);

  const pan = Gesture.Pan()
    .onUpdate((g) => {
      translateX.value = -index * width + g.translationX;
    })
    .onEnd((g) => {
      const moved = g.translationX;
      const threshold = width * 0.25;
      if (moved < -threshold && index < slides.length - 1) {
        animateTo(index + 1);
      } else if (moved > threshold && index > 0) {
        animateTo(index - 1);
      } else {
        translateX.value = withTiming(-index * width, { duration: 220 });
      }
    });

  const trackStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: width * slides.length,
  }));

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.track, trackStyle]}>
          {slides.map((item, i) => (
            <View key={item.key} style={{ width }}>
              <OnboardItem
                item={{ title: item.title, description: item.description, image: item.image, cta: item.cta }}
                index={i}
                currentIndex={index}
                total={slides.length}
                onNext={goNext}
                onBack={goBack}
                onSkip={skipToLast}
                onDone={onDone}
              />
            </View>
          ))}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  track: {
    flex: 1,
    flexDirection: "row",
  },
});




