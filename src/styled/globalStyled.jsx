import styled, {createGlobalStyle} from "styled-components";
import * as calors from "../config/colors"
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline: none;
       box-sizing: border-box;
       
   }

    body{
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        background: ${calors.primaryDarkColor};
        color: ${calors.primaryColor};
    }

    html, body, #root{
        height: 100%;
    }

    button{
        cursor: pointer;
        background: ${calors.primaryColor};
        border: none;
        color: #fff;
        padding: 10px 10px;
        border-radius: 4px;
        font-weight: 700;
    }

    a{
        text-decoration: none;
        color: ${calors.primaryColor};
    }

    ul{
        list-style: none;
    }


`;

export const Container = styled.section`
    max-width: 480px;
    background: #fff;
    margin: 30px auto;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;