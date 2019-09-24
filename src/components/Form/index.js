<<<<<<< HEAD
import React, { Component } from 'react';
import { Container } from './styles';
import { Form } from './styles';
import { Textbox } from './styles';
import { Botao } from './styles';


export default class Formulario extends Component {

  state = {
    nome: '',
    email: '',
    novoUsario: []
  };

  handleNameChange = event => {
    this.setState({
      nome: event.target.value
    }, () => {
      this.validateName();
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    }, () => {
      this.validateEmail();
    });
  };

  validateName = () => {
    const { nome } = this.state;
    this.setState({
      nameError: nome.length > 3 ? null : 'O nome deve ter mais de 3 caracteres'
    });
  }

  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError: email.length > 3 ? null : 'O email deve ter mais de 3 caracteres'
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { nome, email, novoUsario } = this.state
    this.setState({
      novoUsario: [...novoUsario, nome, email],
      nome: '',
      email: ''
    });
    await alert(`Obrigado pela mensagem`)
  }

  render() {

    const { nome, email } = this.state;

    return (
      <Container>
        <Form>
          <h3>Enter the Matrix</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Porro excepturi, voluptate illo laudantium commodi aliquam ad natus exercitationem!
            Debitis aperiam officiis id cupiditate, mollitia animi optio iste, temporibus excepturi, eius omnis?
            Modi eius ab quaerat harum cupiditate corporis reiciendis nam.
          </p>
          <Textbox onSubmit={this.handleSubmit}>
            <input placeholder="Nome"
              value={nome}
              onChange={this.handleNameChange}
              required />
            <input type="email" placeholder="Email"
              value={email}
              onChange={this.handleEmailChange}
              required />
            <textarea type="text" placeholder="Mensagem" />
            <Botao type="submit">Enviar</Botao>
          </Textbox>
        </Form>
      </Container>
    )
  }

}
=======
import styled from 'styled-components';
>>>>>>> origin/master
