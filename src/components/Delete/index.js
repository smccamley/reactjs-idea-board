import React, { Component } from 'react';
import trashIcon from './trash-icon.svg';
import './Delete.css';


class Delete extends Component {

  render() {
    return (
      <div className="Delete">
        <img src={trashIcon} className="Trash-logo" alt="trash icon" />
        <span>Delete</span>
      </div>
    );
  }
}

export default Delete;
