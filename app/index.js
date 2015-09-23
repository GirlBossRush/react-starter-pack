import "babel-core/polyfill"
import "./index.styl"

import React from "react"
import Application from "./components/application"

// Uncomment when you've added a favicon
//
// import favicon from "./images/favicon.png"
// const link = Object.assign(document.createElement("link"), {
//   href: favicon,
//   rel: "shortcut icon",
//   sizes: "70x70",
//   type: "image/x-icon"
// })

// document.head.appendChild(link)

document.addEventListener("DOMContentLoaded", () => {
  React.render(<Application />, document.querySelector("main"))
})
