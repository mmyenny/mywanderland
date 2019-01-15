import React, { Component } from 'react'

class Createnewalbum extends Component {
  render() {
    return (
      <div>
        <input
          className="profileBar"
          type="text"
          placeholder="Album Title"
          name="album[title]"
          autoComplete="off"
        />
        <button className="profileBar">Create Album</button>
      </div>
    )
  }
}

export default Createnewalbum
