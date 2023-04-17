import React from 'react'
// import { user } from "../../data/users.json";

const UserPage = ({params: {user}}) => {
    return (
      <>
      <h1>User</h1>
      <div>{user.username}</div>
      </>
  )
}

export default UserPage