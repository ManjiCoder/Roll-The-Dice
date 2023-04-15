import { trigger } from "react-native-haptic-feedback";

// optional
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

trigger("impactLight", options);