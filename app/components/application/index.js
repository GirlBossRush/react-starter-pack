import "./application.styl"

import React from "react"

class Application extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div data-component="application">
      Welcome to React Starter Pack!
    </div>
  }
}

export default Application
