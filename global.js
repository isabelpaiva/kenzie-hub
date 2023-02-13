import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --pink-primary: #ff577f;
        --pink-focus: #ff427f;
        --pink-negative: #59323f;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;
        --grey:#ffff
    }
    body {
        font-family: 'Inter';
        background-color: var(--grey-4);
    }

   
`;

export default GlobalStyle;