import React from 'react'
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap'

const AppNavbar = (props) => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">{props.title}</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Form pullRight>
                <FormGroup>
                    <FormControl type="text" placeholder="Find ID" />
                </FormGroup>{' '}
                <Button bsStyle='primary' type="submit">Find</Button>
                </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>
)

export default AppNavbar