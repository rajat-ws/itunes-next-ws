/**
 * This file contains the application's colors.
 *
 * Define color here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

const primary = "#3c4048";
const text = "#69353F";
const primaryLink = "#1D1CE5";
const textSecondary = "#f2f2f2";
const secondary = "#EFF8E2";
const success = "#70A9A1";
const error = "#ED474A";
const gotoStories = "#594545";

const colors = {
  transparent: "rgba(0,0,0,0)",
  // Example colors:
  text,
  textSecondary,
  primary,
  secondary,
  primaryLink,
  success,
  error,
  gotoStories,
  theme: {
    lightMode: {
      primary,
      secondary,
    },
    darkMode: {
      primary: secondary,
      secondary: primary,
    },
  },
};

export default colors;
