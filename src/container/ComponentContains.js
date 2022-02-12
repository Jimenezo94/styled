import React, { Component } from 'react';
import ListasCards from '../components/ListasCards';
import NavbarComponent from '../components/NavbarComponent';

export default class ComponentContains extends Component {
  render() {
    return <div>
        <NavbarComponent/>,
        <ListasCards/>
    </div>;
  }
}
