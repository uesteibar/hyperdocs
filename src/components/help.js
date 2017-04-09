import React, { Component } from 'react'
import injectSheet from 'react-jss'
import urls from '../helpers/urls'

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
  },
  iframe: {
    marginTop: 20,
    height: '100vh',
    width: '100vw',
  },
}


class Help extends Component {
  render() {
    const { classes, command } = this.props
    const url = urls.url(command)

    return (
      <div className={classes.container}>
        <iframe className={classes.iframe} src={url}></iframe>
      </div>
    )
  }
}

export default injectSheet(styles)(Help)
