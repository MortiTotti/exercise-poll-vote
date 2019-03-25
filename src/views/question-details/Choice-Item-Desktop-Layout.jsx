import React from 'react';
import { Responsive, Grid, Statistic, Table, Label, Progress } from "semantic-ui-react";

const ChoiceItemDesktopLayout = ({ item, choice, votePercentage, active, onClick }) =>
    <Responsive as={Table.Row} minWidth={Responsive.onlyTablet.minWidth} key={item.id} active={active} onClick={onClick}>
        <Table.Cell width='6'>{choice.choice}</Table.Cell>
        <Table.Cell width='5'>
            <Statistic size='mini' horizontal>
                <Statistic.Value>
                    <Label color='orange'>
                        Votes
                        <Label.Detail>
                            {choice.votes}
                        </Label.Detail>
                    </Label>
                </Statistic.Value>
            </Statistic>
        </Table.Cell>
        <Table.Cell width='5' verticalAlign='middle'>
            <Grid>
                <Grid.Row>
                    <Grid.Column width='5'>
                        {`${votePercentage} %`}
                    </Grid.Column>
                    <Grid.Column width='11'>
                        <Progress
                            style={{ margin: '0' }}
                            size='medium'
                            percent={votePercentage}
                            color='blue' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Table.Cell>
    </Responsive>

export default ChoiceItemDesktopLayout;