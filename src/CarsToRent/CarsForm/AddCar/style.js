import styled from "styled-components";

const lightgrey = "#e6e6e6";
const green = "#36d643";
const almostblack = "#383838";

export const AddCar = styled.div`
    background-color: ${lightgrey};
    display:flex;
    width:500px;
    height:300px;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    align-items: center;
    border: solid 1px ${almostblack};
    border-radius: 5px;
    margin: 5% auto;
    
        @media (max-width: 500px){
            width:90%;
            height:350px;
            padding:2%;
            
        }
`;

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    margin: 5px;
    width:300px;
    height:60px;
    font-size:1.3rem;
    padding:15px;
    
    &:focus{
        outline:none;
    }
`;

export const Span = styled.span`
    color: red;
    font-size: 20px;
`;

export const Button = styled.button`
    border-radius: 15px;
    width: 60px;
    height:40px;
    background-color: ${almostblack};
    color: ${lightgrey};
    border: none;
    transition: all .2s ease-in;
    margin-top: 10px;
    
    &:hover{
        background-color: ${green};
        color: ${almostblack};
        transform: scale(1.05);
    }
`;