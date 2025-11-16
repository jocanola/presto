import React, { PropsWithChildren } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import Animated, {
  AnimatedProps,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

type AnimatedPressableProps = PropsWithChildren<
  AnimatedProps<Omit<PressableProps, "onPressIn" | "onPressOut">> & {
    style?: StyleProp<ViewStyle>;
    pressedScale?: number;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
  }
>;

const AnimatedPressableBase = Animated.createAnimatedComponent(Pressable);

export function AnimatedPressable({
  children,
  style,
  pressedScale = 0.97,
  onPressIn,
  onPressOut,
  ...rest
}: AnimatedPressableProps) {
  const scale = useSharedValue(1);

  const handlePressIn = (e: GestureResponderEvent) => {
    scale.value = withSpring(pressedScale, { damping: 12, stiffness: 140 });
    if (typeof onPressIn === "function") onPressIn(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    scale.value = withSpring(1, { damping: 12, stiffness: 140 });
    if (typeof onPressOut === "function") onPressOut(e);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressableBase
      {...rest}
      style={[styles.center, style, animatedStyle]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {children}
    </AnimatedPressableBase>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
  },
});

export default AnimatedPressable;
