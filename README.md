# Simple Store Mobile

This project is an Expo/React Native app with a clean, modern architecture and a simple onboarding and authentication UI. It uses file‑based routing, local query persistence, and animated UI components.

## Tech Stack & Architecture
- Framework: React Native with Expo
- Navigation: Expo Router (file‑based; typed routes enabled)
- Data: TanStack Query with AsyncStorage persister
- Networking: Axios (`src/shared/libs/axiosInstance.ts`) with `https://fakestoreapi.com` as base URL
- UI/Animations: React Native Reanimated and Gesture Handler
- Styling: React Native StyleSheet
- Icons: React Native Vector Icons and Expo Vector Icons
- Notifications: react-native-toast-notifications

### Project Structure
Feature‑based structure for maintainability and scalability.

```
/app                      # Expo Router pages and layout
  _layout.tsx             # Providers (ReactQuery, Toast), splash handling, SafeArea
  index.tsx               # Entry; shows Onboarding then Welcome
  signin.tsx              # SignIn screen route
  +not-found.tsx          # 404 route
/src
  /assets                 # Images and fonts used in UI
  /features
    /Onboarding
      /components         # OnboardItem
      /screens            # Onboarding
      /types              # Slide types
      /utils              # slides constant
    /Login
      /screens            # Welcome, Signin
  /shared                 # Shared utilities/components/constants
    /animation            # entrances helpers
    /components           # AnimatedPressable, SafeAreaWrapper, Header
    /constants            # Colors, Typography
    /libs                 # ReactQueryProvider, axiosInstance, toastMessage
    /store                # notesStorage (utility store; not currently routed)
    /types                # note types
```

## Data & Providers
- React Query is initialized in `ReactQueryProvider` using `PersistQueryClientProvider` and an AsyncStorage persister.
- Default query `staleTime` is 5 minutes.
- Axios instance centralizes base URL and headers.

## Features
- Onboarding: Multi‑screen onboarding with animated slides and gestures.
- Authentication UI: Welcome (brand intro) and Sign In form.

### Routing Overview
- `/` → Onboarding (first render) then Welcome
- `/signin` → Sign In

## How to Run Locally

### Prerequisites
- Node.js (v20 or newer)
- yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Emulator or iOS Simulator

### Commands
- Install: `yarn install`
- Android: `yarn android`
- iOS (macOS): `yarn ios`
- Web: `yarn web`
- Start (Metro): `yarn start`
- Tests: `yarn test`
- Lint: `yarn lint`

## Trade‑offs & Limitations
- State management: Focused on server state via React Query; no global cart/auth state yet.
- Offline: Limited; queries persist via AsyncStorage, but most features are online‑oriented.
- Authentication: UI only, no backend integration yet.
- Testing: Basic coverage using `jest-expo` and `@testing-library/react-native`.

## Change Log
- Replaced Notes demo with an Onboarding + Login flow.
- Added React Query persistence and centralized Axios instance.
- Adopted typed routes and updated providers/layout.



