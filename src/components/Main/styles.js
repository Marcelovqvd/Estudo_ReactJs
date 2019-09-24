<<<<<<< HEAD
import styled from 'styled-components';

export const Container = styled.div`
max-width: 1920px;
width: 100%;
position: relative;
    img {
    top: 0px;
    max-width: 1920px;
    width: 100%;
    height: 971px;
    opacity: 0.85;
    }
  `;

export const ImageTrinity = styled.div`
  position: absolute;
  top: 163px;
  display: flex;
  align-items: center;
  justify-content: center;
      img {  
        max-width: 1920px;        
        width: 100%;
        height: 754px;
        box-shadow: 0px 3px 6px #00000099;
        border-radius: 196px;
        opacity: 1;
      }
      h3 {
            top: 121px;
            left: 697px;
            width: 230px;
            height: 20px;
            padding: 0 0 30px 0;
            text-align: center;
            font: Bold 25px Open Sans;
            letter-spacing: 0;
            color: #FFFFFF;
            opacity: 1;
          }
      p {
        top: 945px;
        left: 825px;
        width: 271px;
        height: 121px;
        margin-left: 120px;
        padding: 20px 0 20px 0;
        text-align: center;
        font: Regular 26px Open Sans;
        letter-spacing: 0;
        color: #F0F0F2;
        text-shadow: 0px 3px 6px #00000029;
        opacity: 1;
      }
      @media only screen and (min-width: 800px) and (max-width: 1024px) {
          img {
          position: absolute;
          top: 100px;
          left: 250px;
          width: 100%;
          height: 654px;
          margin-left: 0;
          }
          p {
            position: absolute;
            top: 345px;
            left: 400px;
          }
          h3 {
            position: relative;
            top: 370px;
            left: 50px;
          }
         
        }
        @media only screen and (min-width: 640px) and (max-width: 799px) {
          img {
          position: absolute;
          top: 130px;
          right: 10px;
          width: 100%;
          height: 654px;
          margin-left: 0;
          }
        }
        @media only screen and (min-width: 320px) and (max-width: 639px) { 
          img {
          position: absolute;
          top: 160px;
          left: 40px;
          width: 500px;
          height: 554px;
          margin-left: 0;
          }
          p {
            position: absolute;
            top: -15px;
            left: 120px;
          }
        }
`;
=======
.container {
  background: red;
}
>>>>>>> origin/master
