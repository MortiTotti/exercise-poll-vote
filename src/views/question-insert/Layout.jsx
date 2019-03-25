import React from 'react';
import { Dimmer, Loader, Form } from 'semantic-ui-react';
import { ViewContainer } from "Components";
import QuestionChoiceList from "./Question-Choice-List";
import "./style.css";

const Layout = ({
  submit,
  back,
  addQuestionChoice,
  setQuestionChoiceInputRef,
  removeChoice,
  handleDataChange,
  choices,
  isSending,
  isQuestionInformationIsValid
}) =>
  <ViewContainer>
    <Dimmer active={isSending} inverted>
      <Loader inverted />
    </Dimmer>
    <Form>
      <Form.Group widths='equal'>
        <Form.Input onChange={handleDataChange} fluid label='Question' placeholder='Enter question title' />
      </Form.Group>
      <QuestionChoiceList
        choices={choices}
        removeChoice={removeChoice}
        addQuestionChoice={addQuestionChoice}
        setQuestionChoiceInputRef={setQuestionChoiceInputRef}
      />
      <Form.Group widths='equal'>
        <Form.Button onClick={back}>Back</Form.Button>
        <Form.Button
          disabled={!isQuestionInformationIsValid}
          onClick={submit}
          color="green"
          floated="right">
          Submit
        </Form.Button>
      </Form.Group>
    </Form>
  </ViewContainer>

export default Layout;
