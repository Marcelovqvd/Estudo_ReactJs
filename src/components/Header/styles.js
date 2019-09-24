import styled from 'styled-components';

<<<<<<< HEAD

export const Container = styled.div`
  max-width: 1920px;
  height: 109px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
      p {
      width: 259px;
      height: 45px;
      text-align: left;
      font-weight: bold;
      font: Bold 23px/36px Montserrat;
      letter-spacing: 0.68px;
      color: #FFFFFF;
      text-transform: uppercase;
      opacity: 1;            
    }
      img {
        width: 109px;
        height: 109px;
        opacity: 1;
        @media (min-width: 800px) and (max-width: 1024px) {
          margin: 0 auto;
        }
        @media (min-width: 640px) and (max-width: 799px) {
          margin: 0 auto;   
        }
        @media (min-width: 320px) and (max-width: 639px) { 
          margin: 0 auto;    
        }
      }   
`;
=======
export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 109px;
    background: #000 0% 0% no-repeat padding-box;
    opacity: 1;
        h1 {
          top: 38px;
          left: 888px;
          width: 259px;
          height: 45px;
          text-align: left;
          font: Bold 23px/36px Montserrat;
          letter-spacing: 0.68px;
          color: #FFFFFF;
          text-transform: uppercase;
          opacity: 1;
        }
        div {
          top: 0px;
          left: 749px;
          width: 109px;
          height: 109px;
          transform: matrix(0, 1, -1, 0, 0, 0);
          background-image: url(${Icon}) transparent 0% 0% no-repeat padding-box;
          opacity: 1;
        }
`;
>>>>>>> origin/master
