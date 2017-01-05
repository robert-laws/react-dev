import React from "react";
import ReactDOM from "react-dom";
import { Header, Container, Icon } from "semantic-ui-react";

var HelloWorld = React.createClass({
    render: function() {
        return (
            <Header as="h1" color="red" textAlign="center">Hello, {this.props.greetTarget}!</Header>
        );
    }
});

ReactDOM.render(
    <Container text>
        <Icon name='user' size='massive' />
        <HelloWorld greetTarget="Bob Cobb"/>
        <HelloWorld greetTarget="Hal Hope"/>
        <HelloWorld greetTarget="Kal Kool"/>
        <HelloWorld greetTarget="Vin Vine"/>
        <HelloWorld greetTarget="Jim Jupe"/>
        <HelloWorld greetTarget="Tad Toad"/>
    </Container>, document.querySelector("#root")
);