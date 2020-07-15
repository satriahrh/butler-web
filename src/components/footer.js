import React from "react";
import {Container} from 'react-bootstrap'

import module from './footer.module.scss'

export function Footer() {
  return (
    <footer className={module.footer}>
      <Container>
        <p>c 2020 by <a href="https://satriahrh.github.io">satriahrh.github.io</a></p>
      </Container>
    </footer>
  )
}
