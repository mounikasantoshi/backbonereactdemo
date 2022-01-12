import React from 'react'

class UserInfo extends React.Component {
  render() {
    const { img, name, title } = this.props
    return (
      <div>
        <img width="100" src={img} />
        <div className="name">{name}</div>
        <div className="title">{title}</div>
      </div>
    )
  }
}

export default UserInfo
