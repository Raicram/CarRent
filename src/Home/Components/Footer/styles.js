import styled from "styled-components";

const lightGreen = "#b8e6bc";
const rights = "#757575";

export const Footer = styled.footer`
    height:450px;
    width:100%;
    background-color: ${lightGreen};
    font-family: 'Economica', sans-serif;
    font-size: 20px;
    padding: 3%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
`;
export const FooterList = styled.div`
    
`;
export const FooterUl = styled.ul`
    list-style: none;
    
`;
export const FooterLi = styled.li`
    text-decoration: none;
    transition: .5s;
    
    &:not(last-child){
        margin-bottom: 10px;
    }
    
    &:hover{
        font-size: 21px;
        cursor: pointer;
        font-weight: bold;
    }
`;
export const FooterCompany = styled.div`
    display: inline-grid;
    font-weight: bold;
    font-size: 30px;
    & img{
        width: 100px;
        
    }
`;
export const FooterSocials = styled.div`
    font-weight: bold;
    display: inline-grid;
    & img{
        margin-left:50px;
        width: 50px;
    }
`;
export const FooterRights = styled.div`
    margin-top:30px;
    color: ${rights};
    opacity: 0.7;
`;