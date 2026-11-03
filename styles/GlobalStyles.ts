'use client'

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        outline: 1px solid pink;
        box-sizing: border-box;

    }

    body { 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.6;
    }
`

export default GlobalStyles;