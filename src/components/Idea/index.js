import React, { Component } from 'react'
import './Idea.css'
import Delete from '../Delete'
import { connect } from 'react-redux';

import FontAwesome from 'react-fontawesome'
import {updateIdea, deleteIdea} from '../../store/actions/Ideas'


class Idea extends Component {

    constructor(){
        super()
        this.state = {
            isEditing:false,
            hovering:false
        }
    }

    componentDidMount(){
        if(this.props.idea.title === ""){
            this.startEditing()
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.isEditing && this.props.idea.title === ""){
            this.titleInput.focus()
        }
    }

    startEditing(){
        this.setState({isEditing:true})
    }
    stopEditing(){
        this.setState({isEditing:false})
    }

    updateTitle(e){
        console.log(this.props.idea, e.target.value)
        this.props.dispatch(
            updateIdea(
                Object.assign(this.props.idea, {title:e.target.value})
            )
        )
    }
    updateBody(e){
        console.log(this.props.idea, e.target.value)
        this.props.dispatch(
            updateIdea(
                Object.assign(this.props.idea, {body:e.target.value})
            )
        )
    }

    saveIdea(){
        this.stopEditing()
        // save to server
    }

    deleteIdea(){
        this.props.dispatch(deleteIdea(this.props.idea))
    }
    toggleHovering(){
        this.setState({hovering:!this.state.hovering})
    }
  render() {
    return (
      <div className={"Idea " + (this.state.hovering ? 'hovering' : "")} onMouseOver={this.toggleHovering.bind(this)} onMouseOut={this.toggleHovering.bind(this)} >
        <div className="titleContainer">
            {!this.state.isEditing && <span onClick={this.startEditing.bind(this)} className="title">{this.props.idea.title || "What's your idea?"}</span>}
            {this.state.isEditing && 
                <input 
                    ref={input => { this.titleInput = input }} 
                    type="text" 
                    className="titleInput" 
                    onFocus={this.startEditing.bind(this)}
                    defaultValue={this.props.idea.title}
                    onChange={e => this.updateTitle.call(this, e)}
                    placeholder={this.props.idea.title || "What's your idea?"}
                    onBlur={this.saveIdea.bind(this)}
                    />
            }
        </div>
        <div className="bodyContainer">
            {!this.state.isEditing && <span onClick={this.startEditing.bind(this)} className="body">{this.props.idea.body || "Please describe your idea in more detail..."}</span>}
            {this.state.isEditing && <textarea 
                className="bodyInput" 
                onFocus={this.startEditing.bind(this)}
                defaultValue={this.props.idea.body || "Please describe your idea in more detail..."}
                onChange={e => this.updateBody.call(this, e)}
                onBlur={this.saveIdea.bind(this)}>
                </textarea>
            }
        </div>
        <div className="deleteContainer">
            <div onClick={this.deleteIdea.bind(this)}>
                <Delete></Delete>
            </div>
            {this.state.isEditing && <FontAwesome name="edit" className="editing"/>}
        </div>
      </div>
    );
  }
}

export default connect()(Idea);
