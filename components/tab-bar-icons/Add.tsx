import React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

export default function AddIcon(props: SvgProps) {
  return (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <Path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></Path>
      <Path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></Path>
    </Svg>
  );
}
