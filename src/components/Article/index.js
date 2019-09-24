<<<<<<< HEAD
import * as React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { Container } from './styles';
import Neo from '../../../src/assets/neo.jpg';
import Morpheus from '../../../src/assets/Morpheus.PNG';
import Niobe from '../../../src/assets/niobe.jpg';
import Smith from '../../../src/assets/smith.jpg';

export default function Article() {
  const [index, setIndex] = React.useState(0);

  const images = [
    { src: Neo },
    { src: Morpheus },
    { src: Niobe },
    { src: Smith }
  ];

  return (
    <>

      <Container>
        <Gallery
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}
        >
          {images.map(img => (
            <GalleryImage objectFit="contain"
              key={img.src}
              src={img.src}
            />
          ))}
        </Gallery>
      </Container>

    </>
  );
}

=======
import styled from 'styled-components';
>>>>>>> origin/master
