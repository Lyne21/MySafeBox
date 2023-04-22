import React, { useContext, useEffect, useLayoutEffect } from "react"
import SecondBanner from "./SecondBanner"
import "../styles/Layout.css"
import { DocsContext } from "./DocsContext"

function Layout({ children, docs }) {
  const { setActiveDocs, setSearch, setCheckeds } = useContext(DocsContext)

  useLayoutEffect(() => {
    setActiveDocs(docs)
    setSearch("")
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setCheckeds([])
  }, [setCheckeds])

  return (
    <div className="Layout">
      <SecondBanner />
      {children}
    </div>
  )
}

export default Layout
