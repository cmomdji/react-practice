import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <hr />
        <p>This is an example footer</p>
        <a href="#" style={styles.footerLink}>Example link</a>
      </footer>
    )
  }
}

const styles = {
    footerLink: {
        color: 'red'
    }
}

export default Footer
