import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const ViewContainer = ({ children }) =>
    <Container style={{ marginTop: '20px' }} as={Segment}>
        {children}
    </Container>

export default ViewContainer;
