import styled from "styled-components";

const green = `#36d643`;

export const Container = styled.div`
    width:100%;
    height:100px;
    margin: 0 auto;
    padding: 10% 30%;
    display:flex;
    justify-content: space-between;

    @media (max-width: 800px){
        flex-direction: column;
    }
`;

export const Text = styled.div`
      font-family: 'Economica', sans-serif;
      font-size: 25px;
      z-index:2;
      position:relative;
      
      &::before{
        content: '';
        position:absolute;
        z-index: -1;
        width:8em;
        height:2.5em;
        left:-0.8em;
        top:-0.6em;
        background-color: ${green};
        border-radius:50px;
      }
    @media (max-width: 800px){
        margin-bottom: 50px;
    }
    @media (max-width: 392px){
         &::before{
            height:4em;
            left:-1.5em;
        }
    }
`;
export const Button = styled.button`
    display:flex;
    background-color: black;
    color:white;
    width:100px;
    height:70px;
    justify-content:center;
    text-align:center;
    border: 2px ${green} solid;
    border-radius: 25px;
    font-family: 'Economica', sans-serif;
    font-size: 20px;
    transition: .2s ease-in;
    margin-top:-.7em;
   
    
    &:hover{
        background-color: ${green};
        border-color: none;
        color: black;
    }
`;
