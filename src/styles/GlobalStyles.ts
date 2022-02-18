import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;

    }
    html {
      min-height: 100%;
      background: var(--primary);
    }
    *, buttom, input {
      border: 0;
      background: none;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
      color: var(--black)
    }
    ul{
      list-style: none;
    }
    :root {
    --primary: #fff;
    --black: #1b1f23;
    --gray: #586069;
    --gray-light: #6a737d;
    --gray-dark: #24292e;
    --orange: #f9826c;
    --header: #24292e;
    --logo: #fff;
    --username: #666;
    --search: rgba(255, 255, 255, 0.13);
    --search-placeholder: hsla(0,0%,100%,.75);
    --icon: #6a737d;
    --link: #0366d6;
    --border: #e1e4e8;
    --ticker: rgba(209,213,218,.5);

    --calendar-scale-1: #9BE9A8#216e3a;
    --calendar-scale-2: #3FC463#216e3a;
    --calendar-scale-3: #30A14E#216e3a;
    --calendar-scale-4: #216e3a;

    --javascript: #f1e05a;
    --typescript: #2b7489;
    --other-language: #8257e5;
    }
`;
export default GlobalStyle;
