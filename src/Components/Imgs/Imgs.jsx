import { Flex } from '@chakra-ui/react';
import React from 'react'
import cono from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg';
import leche from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg';
import naranja from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg';
import azucar from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg';

function Imgs() {
  return (
    <Flex wrap={'wrap'}>
      <img src={leche} alt="leche"  width={['25%','25%','25%']}/>
      <img src={naranja} alt="naranja"  width={['25%','25%','25%']}/>
      <img src={cono} alt="cono"  width={['25%','25%','25%']}/>
      <img src={azucar} alt="azucar"  width={['25%','25%','25%']}/>
    </Flex>
  )
}

export default Imgs