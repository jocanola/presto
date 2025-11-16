import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/src/shared/constants/Colors";
import { Typography } from "@/src/shared/constants/Typography";
import { AnimatedPressable } from "@/src/shared/components/Button/AnimatedPressable";
import Animated from "react-native-reanimated";
import { entrances } from "@/src/shared/animation/entrances";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Animated.View entering={entrances.fadeInUp(280, 0)} style={styles.brandRow}>
        <Image
          source={require("@/src/assets/images/presto-logo.png")}
          style={styles.brandIcon}
          resizeMode="contain"
          accessibilityLabel="App logo"
        />
        <Text style={styles.brandText}>Presto</Text>
      </Animated.View>

      <Animated.View entering={entrances.fadeInUp(320, 50)} style={styles.illustrationWrap}>
        <Image
          source={require("@/src/assets/images/young-man-carrying-some-heavy-600nw-1477503662.webp")}
          style={styles.illustration}
          resizeMode="contain"
          accessibilityLabel="Illustration of a person carrying credit cards"
        />
      </Animated.View>

      <Animated.Text entering={entrances.fadeIn(220, 90)} style={styles.description}>
        <Text style={styles.descriptionBold}>Presto</Text>
        <Text>
          {" "}
          is a comprehensive user-friendly app for seamless trading of gift
          cards and cryptocurrencies for{" "}
        </Text>
        <Text style={styles.descriptionBold}>cash</Text>
        <Text>.</Text>
      </Animated.Text>

      <Animated.View entering={entrances.fadeInUp(320, 120)} style={styles.actions}>
        <AnimatedPressable
          style={styles.primaryBtn}
          accessibilityLabel="Login to Presto"
          entering={entrances.fadeInUp(300, 140)}
          onPress={() => router.push("/signin")}
        >
          <Text style={styles.primaryBtnText}>Login</Text>
        </AnimatedPressable>

        <AnimatedPressable
          style={styles.outlineBtn}
          accessibilityLabel="Register a new Presto account"
          entering={entrances.fadeInUp(300, 160)}
          onPress={() => {}}
        >
          <Text style={styles.outlineBtnText}>Register</Text>
        </AnimatedPressable>
      </Animated.View>

      <Animated.Image
        source={require("@/src/assets/images/wavy-bottom.png")}
        style={styles.wave}
        resizeMode="stretch"
        accessibilityLabel="Decorative wavy bottom"
        entering={entrances.fadeIn(300, 180)}
      />
    </View>
  );
}

const BTN_HEIGHT = 52;
const H_PADDING = 24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  brandRow: {
    flex: 0.5,
    paddingHorizontal: H_PADDING,
    paddingTop: 28,
    flexDirection: "row",
    // alignItems: "center",
    gap: 10,
  },
  brandIcon: {
    width: 32,
    height: 32,
  },
  brandText: {
    color: Colors.primaryBrand,
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize["3xl"],
    letterSpacing: Typography.letterSpacing.tight,
  },
  illustrationWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  illustration: {
    width: "82%",
    height: 230,
  },
  description: {
    paddingHorizontal: H_PADDING,
    marginTop: 24,
    color: Colors.textSecondary,
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.md,
    lineHeight: 22,
  },
  descriptionBold: {
    color: Colors.textPrimary,
    fontFamily: Typography.fontFamily.bold,
  },
  actions: {
    paddingHorizontal: H_PADDING,
    marginTop: 18,
    gap: 14,
  },
  primaryBtn: {
    height: BTN_HEIGHT,
    borderRadius: 14,
    backgroundColor: Colors.textPrimary,
    alignItems: "center",
    justifyContent: "center",
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
  outlineBtn: {
    height: BTN_HEIGHT,
    borderRadius: 14,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.textPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
  outlineBtnText: {
    color: Colors.textPrimary,
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.md,
  },
  wave: {
    position: "absolute",
    left: 0,
    right: 20,
    bottom: -70,
    width: "120%",
    height: 120,
  },
});
