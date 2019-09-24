import styled from 'styled-components';

export const Container = styled.div`
background: #000;
position: relative;
max-width: 1920px;
height: 832px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Form = styled.form`
    width: 1082px;
    height: 832px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 6px #0000004D;
    opacity: 1;  
    display: flex;
    justify-content: flex-start;
    align-items: center;    
    flex-direction: column;         
          h3 {        
          padding: 80px 0 40px 0;  
          text-align: center;
          font: Bold 35px/46px Montserrat;
          letter-spacing: -0.88px;
          color: red;
          opacity: 1;
        }   
        p {
          padding: 0 0 51px 0; 
          top: 2346px;
          left: 612px;
          width: 746px;
          height: 77px;
          text-align: left;
          font: Regular 20px/21px Open Sans;
          letter-spacing: 0;
          line-height: 1.5;
          color: #363636;
          opacity: 1;
        }
  `;

export const Textbox = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;  
      flex-direction: column;

      input {
      top: 2474px;
      left: 696px;
      width: 249px;
      height: 48px;
      border: 1px solid #363636;
      opacity: 1;
      margin-bottom: 39px;
        ::placeholder {
         padding: 10px;
          width: 108px;
          height: 20px;
          text-align: left;
          font: Regular 18px/30px Open Sans;
          letter-spacing: 0;
          color: #363636;
          text-transform: capitalize;
          opacity: 1;
        }
      }

      textarea {
        top: 2562px;
        left: 696px;
        width: 528px;
        height: 197px;
        border: 1px solid #363636;
        opacity: 1;
        ::placeholder {
          padding: 10px;
          top: 2577px;
          left: 712px;
          width: 108px;
          height: 20px;
          text-align: left;
          font: Regular 18px/30px Open Sans;
          letter-spacing: 0;
          color: #363636;
          text-transform: capitalize;
          opacity: 1;
        }
      }
    `;

export const Botao = styled.button`
    color: yellow;
    margin-top: 48px;
    top: 2808px;
    left: 696px;
    width: 249px;
    height: 48px;
    border: 1ps solid #000;
    background: #000 0% 0% no-repeat padding-box;
    opacity: 1;

`;

