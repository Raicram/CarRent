import styled from 'styled-components';
const lightgrey = "#e6e6e6";

export const AllCars = styled.div`
    width:100%;
    height:100%;
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
    
`;
export const Brand = styled.div`
    font-weight: bold;
`;
export const RentButton = styled.button`
    
`;