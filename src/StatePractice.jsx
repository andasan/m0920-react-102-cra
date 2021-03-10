import React from 'react'

class StatePractice extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '',
      imageWidth: ''
    }
  }

  handleEnter = (e) => {
      this.setState({
          message: ''
      })
  }

  handleFocus = (e) => {
      this.setState({
          message: "You agree to the site terms of service by filling out the form"
      })
  }

  imageLoad = (event) => {
      const imgWidth = event.target.width
      if(imgWidth > 100){
        console.log("Your image is big!")
      }
  }

  render() {
    return (
      <div>
        <input type='text' onFocus={this.handleFocus} />
        <h3 onMouseEnter={this.handleEnter} >{this.state.message}</h3>
        <img src="https://picsum.photos/200" alt="random" onLoad={this.imageLoad} />
      </div>
    )
  }
}

export default StatePractice
