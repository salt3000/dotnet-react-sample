import React from "react";
import { Button, Container, Menu, MenuMenu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="./assets/logo.png" alt="logo" style={{ marginRight: 10 }}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities"/>
                <Menu.Item>
                    <Button positive content="create activiti" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}