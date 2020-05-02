import styled from 'styled-components';

const green = '#36d643';

export const FormDiv = styled.div`
    width:100%;
    margin: 5% auto;
    position: absolute;
    font-family: 'Economica', sans-serif;
    font-size:25px;
    display:flex;
    flex-direction: column;
    align-items:center;
    
    @media(max-width: 600px){
        margin: 15% auto 5%;
        
        h1{ font-size:30px;}
    }
`;
export const FormInputs = styled.div`
    display: grid;
`;
export const Input = styled.input`
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    margin: 5px;
    width:600px;
    height:60px;
    font-size:1.3rem;
    padding:15px;
    
    &:focus{
        outline:none;
    }
     @media(max-width: 600px){
        width:300px;
     }
`;
export const EachInput = styled.div`
    display:flex;
    flex-direction: column;  
    margin-bottom:20px;
`;
export const Label = styled.label`
    color: ${green};
`;