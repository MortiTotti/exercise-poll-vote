import React from 'react';
import { Card, Icon, Container, Label, Segment, Divider, Responsive, Button } from 'semantic-ui-react'
import CardView from "./Card-View";

const Layout = ({ questions }) => (
  <Container style={{ marginTop: '20px' }} as={Segment}>
    <Label color='red' size='big' ribbon>
      Questions
    </Label>
    <Button floated='right' color='red'>
      <Icon name="add"/> Add question
    </Button>
    <Divider />
    <Responsive maxWidth={500} >
      <Card.Group itemsPerRow={1}>
        {questions.map((item, index) => <CardView key={item.url + index} item={item} />)}
      </Card.Group>
    </Responsive>
    <Responsive {...Responsive.onlyMobile} >
      <Card.Group itemsPerRow={2}>
        {questions.map((item, index) => <CardView key={item.url + index} item={item} />)}
      </Card.Group>
    </Responsive>
    <Responsive {...Responsive.onlyTablet} >
      <Card.Group itemsPerRow={3}>
        {questions.map((item, index) => <CardView key={item.url + index} item={item} />)}
      </Card.Group>
    </Responsive>
    <Responsive {...Responsive.onlyComputer} >
      <Card.Group itemsPerRow={4}>
        {questions.map((item, index) => <CardView key={item.url + index} item={item} />)}
      </Card.Group>
    </Responsive>
  </Container>
);

export default Layout;
