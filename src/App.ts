import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border: 3px solid red;
    box-sizing: border-box;
`;

export const Logo = styled.div`
    border: 3px solid red;
    margin-left: 250px;
    .menu {
        border: 3px solid red;
        background-color: #1c1c1c;
        padding: 10px;
        transition: 0.5s;
            
        &:hover{
            border-radius: 45%;
            background-color: #666;

            cursor: pointer;

            animation: entrada 5s;
        }
    }
`;

export const Tittle = styled.h1`
    border: 3px solid red;
    color: blue;
    width: 30%;

    .menu {
        border: 3px solid red;
        color: #1c1c1c;
        background-color: aquamarine;
        padding: 10px;
        margin-bottom: -10px;
        transition: 0.5s;

        &:hover{
            border-radius: 45%;
            background-color: red;
            color: #fff;

            cursor: pointer;

            animation: entrada 5s;
        }

        @keyframes entrada{
            from {
                transform: scaleY(1);
                // opacity: 0;
            }
            to {
                transform: scaleY(1);
                // opacity: 0;
            }
        }
        
    }
`;