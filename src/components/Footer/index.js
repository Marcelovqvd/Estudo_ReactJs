<<<<<<< HEAD
import React, { Component } from 'react';
import { Contain } from './styles';
import { topo } from '../../assets/up-arrow.png';

export default class Footer extends Component {
  /* initScrollSuave() {
     const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
 
     function scrollToSection(event) {
       event.preventDefault();
       const href = event.currentTarget.getAttribute('href');
       const section = document.querySelector(href);
       section.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
       });
     }
 
     linksInternos.forEach((link) => {
       link.addEventListener('click', scrollToSection);
     });
   }
   initScrollSuave()
 
 */
  render() {
    return (
      <Contain>
        <a href="#header" /*onClick={this.initScrollSuave}*/><img src={topo} alt="topo" /></a>
      </Contain >
    )
  }
};
=======
import styled from 'styled-components';
>>>>>>> origin/master
