import React from 'react';
import { Form, Ref, Icon, Button, Table } from 'semantic-ui-react';

const QuestionChoiceTitleInput = React.forwardRef((props, ref) => (
    <div style={{ width: '100%' }}>
        <input
            {...props} ref={ref} />
    </div>
))

const QuestionChoiceList = ({ choices, removeChoice, setQuestionChoiceInputRef, addQuestionChoice }) => (
    <Table compact stackable>
        <Table.Header fullWidth>
            <Table.Row>
                <Table.HeaderCell colSpan='2'>
                    <Form.Group widths='equal' inline>
                        <Ref innerRef={setQuestionChoiceInputRef}>
                            <QuestionChoiceTitleInput placeholder='Enter question choice title' />
                        </Ref>
                        <Form.Button floated="right" onClick={addQuestionChoice}>Add Question Choice</Form.Button>
                    </Form.Group>
                    Question Choices
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                choices.map((choice, index) =>
                    <Table.Row key={index}>
                        <Table.Cell>{choice}</Table.Cell>
                        <Table.Cell collapsing>
                            <Button icon size='small' onClick={() => removeChoice(choice)}><Icon name='remove' /></Button>
                        </Table.Cell>
                    </Table.Row>
                )
            }
        </Table.Body>
    </Table>
)

export default QuestionChoiceList;
