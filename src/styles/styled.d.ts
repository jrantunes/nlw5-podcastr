import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    primary: string;
    secondary: string;
    text: string;
    title: string;
    border: string;
    linear: string;
  }
}