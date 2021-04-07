import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root{
  --background-color: #f5f5f5;
   --white: #fff;
   --off-black: #333;
   --border-color: rgba(255, 255, 255, 0.9);
   --btn-color: #000;
   --ls: -0.04em;
   --maxWidth: 70rem;
   --border-radius: 5px;
   --grey: #999
}

 *,
 *::before,
 *::after {
  box-sizing: border-box;
 }

html {
   font-size: 62.5%;
   background: var(--background-color);
   scroll-behavior: smooth;
   line-height: 1.15; 
   -webkit-text-size-adjust: 100%; 

  @media (prefers-reduced-motion) {
   &:focus-within{
     scroll-behavior: auto
   }
 }

body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  font-feature-settings: "kern";
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Helvetica, -apple-system,  sans-serif;
  font-size: 1.45rem;
  line-height: 1.5; 
  overscroll-behavior-y: none;
  color: var(--off-black);
  &.no-scroll {
    overflow-y: hidden;
  }
}

h1,h2,h3,h4,h5{
  margin: 0;
  padding: 0;
}


 h1 {
   font-size: 3.052rem;
 }

 h2 {font-size: 2.441rem;}

 h3 {font-size: 1.953rem;}

 h4 {font-size: 1.563rem;}

 h5 {font-size: 1.25rem;}


 ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}


p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

button{
  font-family: -apple-system, Roboto, Oxygen, sans-serif;
  transition: all .3s ease-in-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  outline: none;
}

button:hover{
  opacity: 0.8;
}

.button {
	pointer-events: auto;
	cursor: pointer;
	background: #e7e7e7;
	border: none;
	padding: 1.5rem 3rem;
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	position: relative;
  display: inline-block;
  width: 200px;
  text-transform: uppercase
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--pan {
	font-weight: 700;
	border-radius: 999px;
	overflow: hidden;
	color: #fff;
}

.button--pan span {
	position: relative;
	mix-blend-mode: difference;
}

.button--pan::before {
	content: '';
	background: #000;
	transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--pan:hover::before {
	transform: translate3d(0,-100%,0);
}



input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
  color: inherit;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--white);
  -webkit-box-shadow: 0 0 0px 1000px var(--dark) inset;
  transition: background-color 5000s ease-in-out 0s;
}

.flex-sb{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-center{
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-fd-c{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.flex-fd-row{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.row-button{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  
  button{
    -webkit-appearance: button;
    cursor: pointer;
    background-color: var(--red);
    min-width: 38px;
    height: 35px;
    padding: 0;
    width: 40px;
    width: auto;
    border: 0;
    color: var(--white);
    font-size: 2rem;
  }

}

.container{
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1.35rem;
  padding-right: 1.35rem;
  min-height: 100vh;
}

.container-2{
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1.35rem;
  padding-right: 1.35rem;

  @media (max-width: 700px){
    padding-top: 4rem;
    margin: 0 auto;
  }
}

.hide-for-mobile {
  display: unset;
  @media (max-width: 47.9375em) {
    display: none;
  }
}

.hide-for-desktop {
  display: unset;
  @media (min-width: 48em) {
    display: none;
  }
}
`;
