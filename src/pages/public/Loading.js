import React from "react";
import {Container, Image} from 'react-bootstrap'

import logo from '../../assets/logo.png'

export default function Loading() {
  return (
    <Container>
      <Image src={logo} />
    </Container>
  )
}