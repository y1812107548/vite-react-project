import React from "react";
type Theme = "light" | "dark" | "system";

export default function About({
  useGetTheme,
}: {
  useGetTheme: () => Theme;
}): JSX.Element {
  const theme = useGetTheme();
  return (
    <div>
      <h1>About</h1>
      <p>当前主题: {theme}</p>
    </div>
  );
}
