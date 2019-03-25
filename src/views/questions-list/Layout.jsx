import React from 'react';
import { Link } from "react-router-dom";
import { Dimmer, Segment, Loader, Card, Icon, Label, Divider, Responsive, Button } from 'semantic-ui-react';
import { ViewContainer, QuestionCard } from "Components";
import "./style.css";

const ListHeader = () =>
  <React.Fragment>
    <Label color='blue' size='large' ribbon>
      Questions
    </Label>
    <Button floated="right" basic>
      <Link to="questioninsert">
        <Icon name="add" /> Add question
    </Link>
    </Button>
  </React.Fragment>

const Layout = ({ isLoading, questions }) =>
  <ViewContainer>
    <ListHeader />
    <Divider />
    <Segment basic>
      <Dimmer active={isLoading} inverted>
        <Loader inverted />
      </Dimmer>
      <Responsive
        as={Card.Group}
        {...Responsive.onlyMobile}
        itemsPerRow={1}>
        {questions.map((item, index) => <QuestionCard key={item.url + index} item={item} />)}
      </Responsive>
      <Responsive
        as={Card.Group}
        minWidth={Responsive.onlyTablet.minWidth}
        itemsPerRow={4}>
        {questions.map((item, index) => <QuestionCard key={item.url + index} item={item} />)}
      </Responsive>
    </Segment>
  </ViewContainer>

export default Layout;
