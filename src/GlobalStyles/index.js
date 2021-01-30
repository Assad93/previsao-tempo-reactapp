import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --bg-primary: #e67e22;
        --bg-secondary: #f39c12;
        --card-bg: #F8EFBA;
        --text-primary: #fff;
        --text-secondary: #000;
        --text-tertiary: #e67e22;
    }
    
    html {
        font-size: 62.5%;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        font: 1.6rem sans-serif;
    }

    #root {
        background-image: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
    }

    ul {
        list-style: none;
    }

    ::placeholder {
        color: gray;
        /**Don´t work in IE and Edge */
    }

`;