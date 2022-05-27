import { Flex, Image } from '@chakra-ui/react';
import React from 'react'
import cono from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg';
import leche from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg';
import naranja from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg';
import azucar from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg';

function Imgs() {
  return (
    <Flex>
      <Image w={['25%','25%','25%']} h='100%' src={leche} alt="leche"/>
      <Image w={['25%','25%','25%']} h='100%' src={naranja} alt="naranja"/>
      <Image w={['25%','25%','25%']} h='100%' src={cono} alt="cono"/>
      <Image w={['25%','25%','25%']} h='100%' src={azucar} alt="azucar"/>
    </Flex>
  )
}

export default Imgs