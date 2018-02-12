import React, { Component } from 'react'
import IdeaStubImage from './card-design.png'
import './IdeaStub.css'

class IdeaStub extends Component {
  render() {
    return (
      <img src={IdeaStubImage} className="IdeaStub" alt="Example idea"/>
    );
  }
}

export default IdeaStub;
