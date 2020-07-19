import React from "react";

import module from './page.module.scss'
import {Navigation } from "../components/navigation";
import {Footer} from "../components/footer";

export default function Page({children, appContexts}) {
  return (
    <>
      <Navigation appContexts={appContexts}/>
      <main className={module.children}>
        {children}
      </main>
      <Footer/>
    </>
  )
}
