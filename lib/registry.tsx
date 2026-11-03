"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { LightMode } from "@/styles/theme";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const withTheme = <ThemeProvider theme={LightMode}>{children}</ThemeProvider>;

  if (typeof window !== "undefined") return <>{withTheme}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {withTheme}
    </StyleSheetManager>
  );
}
