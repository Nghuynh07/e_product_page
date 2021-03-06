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
    

    body {
        @media (min-width:90rem) {
            padding: 0 calc((100% - 1440px) / 2);
        }
    }

    .btnIsDisabled {
        opacity: 0.4
    }


    .isActive {
        border: 2px solid var(--orange);
        filter: brightness(0.9) contrast(150%);
        opacity: .3;
        @media (prefers-reduced-motion: no-preference) {
            transition: border 75ms ease-in, filter 75ms ease-in;
        }
    }
`;
