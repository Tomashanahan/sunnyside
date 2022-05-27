import { Flex, Image } from '@chakra-ui/react';
import React from 'react'
import cono from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg';
import leche from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg';
import naranja from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg';
import azucar from '../../sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg';

function Imgs() {
  return (
    <Flex wrap={'wrap'} w='100%'>
      <Image src={leche} alt="leche"  w={['25%','25%','25%']} h='auto'/>
      <Image src={naranja} alt="naranja"  w={['25%','25%','25%']} h='auto'/>
      <Image src={cono} alt="cono"  w={['25%','25%','25%']} h='auto'/>
      <Image src={azucar} alt="azucar"  w={['25%','25%','25%']} h='auto'/>
    </Flex>
  )
}

export default Imgs