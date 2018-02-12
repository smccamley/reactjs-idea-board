import React, { Component } from 'react'
import './IdeaBoard.css'

import FontAwesome from 'react-fontawesome'
import Idea from '../../components/Idea'
import {connect} from 'react-redux';
import { createIdea } from '../../store/actions/Ideas'

class IdeaBoard extends Component {
  constructor(){
    super()
    this.state = {
      ideas:[]
    }
  }
  addIdea(){
    this.props.dispatch(createIdea())
  }
  render() {
    console.log(this.props)
    return (
      <div className="IdeaBoard">
        {this.props.ideas.data.map(idea => <Idea key={idea.id} idea={idea}></Idea>)}
        <div className="newIdea" onClick={this.addIdea.bind(this)}>
          <FontAwesome className="plusIcon" name='plus' />
          <span>Add idea</span>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  console.log(state)
  return {
      ideas: state.ideas
  }
})(IdeaBoard)
