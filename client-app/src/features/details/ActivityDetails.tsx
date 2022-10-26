import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../app/modules/activity";

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity }: Props) {
    return (
        <Card fluid>
            {console.log(activity)}
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>{activity.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={3}>
                    <Button basic color="blue" content="Edit" />
                    <Button basic color="grey" content="Cancel" onClick={() => cancelSelectActivity()}/>
                </Button.Group>
            </Card.Content>
        </Card>
    );
}
