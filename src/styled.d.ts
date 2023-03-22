import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: string;
    primaryGreen: string;
    primaryBlue: string;
    secondary: string;
    lightGreen: string;
    lightBlue: string;
    buttonHover: string;
    textColor: string;
    footerBgColor: string;
    bgImgRgba: string;
    opacity: number;
    invert: string;
  }
}
