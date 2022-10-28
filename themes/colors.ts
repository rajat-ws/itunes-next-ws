/**
 * This file contains the application's colors.
 *
 * Define color here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

const primary = "#3c4048";
const primaryDark = "#16213E";
const text = "#69353F";
const primaryLink = "#1D1CE5";
const textSecondary = "#f2f2f2";
const secondary = "#EFF8E2";
const success = "#749F82";
const successLight = "#82CD47";
const error = "#ED474A";
const gotoStories = "#594545";

const colors = {
  transparent: "rgba(0,0,0,0)",
  // Example colors:
  text,
  textSecondary,
  primary,
  primaryDark,
  secondary,
  primaryLink,
  success,
  successLight,
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
