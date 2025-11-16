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

        <View style={styles.welcomeBlob}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputWrap}>
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
          </View>

          <View style={styles.inputWrap}>
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
          </View>

          <AnimatedPressable
            accessibilityLabel="Forgot Password"
            style={styles.forgotBtn}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </AnimatedPressable>

          <AnimatedPressable
            style={styles.primaryBtn}
            accessibilityLabel="Sign In"
          >
            <Text style={styles.primaryBtnText}>Sign In</Text>
          </AnimatedPressable>

          <View style={styles.signupRow}>
            <Text style={styles.signupText}>New Here? </Text>
            <AnimatedPressable accessibilityLabel="Sign Up">
              <Text style={styles.signupLink}>Sign Up</Text>
            </AnimatedPressable>
          </View>
        </View>

        <Image
          source={require("@/src/assets/images/wavy-bottom.png")}
          style={styles.wave}
          resizeMode="stretch"
          accessibilityLabel="Decorative wavy bottom"
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
  welcomeBlob: {
    marginTop: 12,
    marginLeft: H_PADDING,
    width: 190,
    height: 140,
    backgroundColor: Colors.gray,
    borderRadius: 100,
    justifyContent: "center",
    paddingLeft: 18,
  },
  welcomeText: {
    color: Colors.textPrimary,
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize["2xl"],
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
    right: 0,
    bottom: 0,
    width: "100%",
    height: 120,
  },
});
