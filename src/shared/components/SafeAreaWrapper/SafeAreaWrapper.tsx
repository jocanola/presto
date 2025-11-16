import React, { ReactNode } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ViewProps } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export interface SafeAreaWrapperPropsType extends ViewProps {
  children: ReactNode;
  showStatusBar?: boolean;
  containerClassName?: string;
}

const SafeAreaWrapper = ({
  children,
  containerClassName,
  showStatusBar = true,
  ...rest
}: SafeAreaWrapperPropsType) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {showStatusBar ? (
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      ) : (
        <>
        </>
      )}
      <View
        testID="SafeAreaWrapper.LayoutContainer"
        style={{ flex: 1, backgroundColor: Colors.secondaryBackground }}
        {...rest}
      >
        {children}
      </View>
    </View>
  );
};

export default SafeAreaWrapper;
