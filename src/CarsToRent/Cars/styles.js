import styled from 'styled-components';
const lightgrey = "#e6e6e6";
const darkgrey = "#bababa";
const green = "#36d643";
const almostblack = "#383838";

export const AllCars = styled.div`
    width:100%;
    margin: 5% auto;
    position: absolute;
    font-family: 'Economica', sans-serif;
    font-size:25px;
    
`;
export const Car = styled.div`
    width:70%;
    min-height:300px;
    background-color: ${lightgrey};
    padding: 2%;
    margin:10px auto;
    -moz-box-shadow:    1px 3px 5px 5px #ccc;
    -webkit-box-shadow: 1px 3px 5px 5px #ccc;
    box-shadow:         1px 3px 5px 5px #ccc;
    transition: all .3s ease-in;
    transform-origin: center;
    
    &:hover{
       background-color: ${darkgrey};
    }
    
`;
export const Brand = styled.div`
    font-weight: bold;
`;
export const RentButton = styled.button`
    border-radius: 15px;
    width: 80px;
    height:50px;
    background-color: ${almostblack};
    color: ${lightgrey};
    position: relative;
    border: none;
    transition: all .2s ease-in;
    
    &:hover{
        background-color: ${green};
        color: ${almostblack};
        transform: scale(1.05);
    }
`;