export const themes = {
  light: {
    name: "LIGHTMODE",
    logo: "/images/icon-moon.svg",
    typography: {
      p: {
        color: "#9495A5"
      }
    }
  }
};

export type Theme = typeof themes.light;