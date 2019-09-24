<<<<<<< HEAD
import React from 'react';
import { Container } from './styles';
import Icon from '../../../src/assets/icon.jpg';

export default function Header() {
  return (
    <Container id="header">
      <img src={Icon} alt="icon" />
      <p>Matrix experience</p>
    </Container>
  )
}
=======
import React, { Component } from 'react';
import { Background } from './styles';


export default class Header extends Component {

  render() {
    return (
      <Background>
        <h1>Matrix experience</h1>
        <div>Div</div>
      </Background>
    )
  }
}






>>>>>>> origin/master
