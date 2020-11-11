import React from 'react'
import {Link, useParams} from 'react-router-dom'

const Header = () => {
  const {userName} = useParams()
  return (
    <nav className="flex items-center text-white justify-between flex-wrap bg-teal-500 p-6">
      <div id='repository-name' className="flex items-center flex-shrink-0 mr-6">
        {userName}
      </div>
      <Link id='go-repository-list' to={`/${userName}`}>
        Go repository list
      </Link>
      <Link id='go-back' to='/'>
        Go back
      </Link>
    </nav>
  )
}

export default React.memo(Header)
