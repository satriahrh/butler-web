import React from "react";


import {PublicNavigation} from "./navigation";
import {Footer} from "./footer";
import module from './page.module.scss'

export function PublicPage(props) {
  let {children} = props;
  return (
    <>
      <PublicNavigation/>
      <main className={module.children}>
        {children}
      </main>
      <Footer/>
    </>
  )
}
