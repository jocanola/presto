import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Stack } from "expo-router";
import { Colors } from "@/src/shared/constants/Colors";
import { Typography } from "@/src/shared/constants/Typography";
import Icon from "react-native-vector-icons/Ionicons";
import { AnimatedPressable } from "@/src/shared/components/Button/AnimatedPressable";
import Animated from "react-native-reanimated";
import { entrances } from "@/src/shared/animation/entrances";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
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

        <Animated.View entering={entrances.fadeInUp(320, 40)} style={styles.form}>
          <Animated.View entering={entrances.fadeInUp(320, 60)} style={styles.inputWrap}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor={Colors.mediumGray}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              accessibilityLabel="Email"
            />
          </Animated.View>

          <Animated.View entering={entrances.fadeInUp(320, 80)} style={styles.inputWrap}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor={Colors.mediumGray}
              secureTextEntry={!showPassword}
              style={styles.input}
              accessibilityLabel="Password"
            />
            <AnimatedPressable
              accessibilityLabel={
                showPassword ? "Hide password" : "Show password"
              }
              style={styles.eyeBtn}
              onPress={() => setShowPassword((v) => !v)}
              pressedScale={0.95}
            >
              <Icon
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color={Colors.textPrimary}
              />
            </AnimatedPressable>
          </Animated.View>

          <AnimatedPressable
            accessibilityLabel="Forgot Password"
            style={styles.forgotBtn}
            entering={entrances.fadeIn(260, 100)}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </AnimatedPressable>

          <AnimatedPressable
            style={styles.primaryBtn}
            accessibilityLabel="Sign In"
            entering={entrances.fadeInUp(320, 120)}
          >
            <Text style={styles.primaryBtnText}>Sign In</Text>
          </AnimatedPressable>

          <Animated.View entering={entrances.fadeIn(240, 140)} style={styles.signupRow}>
            <Text style={styles.signupText}>New Here? </Text>
            <AnimatedPressable accessibilityLabel="Sign Up">
              <Text style={styles.signupLink}>Sign Up</Text>
            </AnimatedPressable>
          </Animated.View>
        </Animated.View>

        <Animated.Image
          source={require("@/src/assets/images/wavy-bottom.png")}
          style={styles.wave}
          resizeMode="stretch"
          accessibilityLabel="Decorative wavy bottom"
          entering={entrances.fadeIn(300, 160)}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const H_PADDING = 24;
const BTN_HEIGHT = 52;

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
  form: {
    paddingHorizontal: H_PADDING,
    marginTop: 20,
    gap: 14,
  },
  inputWrap: {
    position: "relative",
  },
  input: {
    height: BTN_HEIGHT,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 16,
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.md,
    color: Colors.textPrimary,
    backgroundColor: Colors.white,
  },
  eyeBtn: {
    position: "absolute",
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 36,
  },
  forgotBtn: {
    alignSelf: "flex-end",
  },
  forgotText: {
    color: Colors.textPrimary,
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.base,
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
  signupRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  signupText: {
    color: Colors.textSecondary,
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.md,
  },
  signupLink: {
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
