import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:500px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
`;

const Text = styled.div`
      font-family: 'Economica', sans-serif;
      font-size: 25px;
`;
const Button = styled.div`
    
`;
export default function SeeCars() {
    return(
        <Container>
            <Text>
                Wanna see our cars?
            </Text>
            <Button>
                Button
            </Button>
        </Container>
    )
}
