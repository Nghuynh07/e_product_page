import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *:after {
        margin:0;
        padding:0;
        list-style:none;
        text-decoration: none;
        box-sizing: border-box;
        border: none;
        outline: none;
    }


    html {
        --12px: 0.75rem;
        --13px: 0.8125rem;
        --15px: 0.9375rem;
        --44px: 2.75rem;
        --16px: 1rem;
        --28px: 1.75rem;

        --mobile-padding: 24px;
        --desktop-padding: 165px;

        --orange: hsl(26, 100%, 55%);
        --pale-orange: hsl(25, 100%, 94%);

        --very-dark-blue: hsl(220, 13%, 13%);
        --dark-grayish-blue: hsl(219, 9%, 45%);
        --grayish-blue: hsl(220, 14%, 75%);
        --light-grayish-blue: hsl(223, 64%, 98%);
        --white:  hsl(0, 0%, 100%);

        ---black: hsl(0, 0%, 0%);
        --font-family: "Kumbh Sans", sans-serif;
    }

    img {
        display: block;
    }
    

`;
