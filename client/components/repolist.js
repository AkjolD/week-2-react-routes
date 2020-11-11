import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Header from './header'

const Repolist = () => {
  const {userName} = useParams()
  const [value, setValue] = useState([])
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then(it => {
        const list = it.data.map(repo => repo.name)
        setValue(list)
    })
  }, [userName])
  
  
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <ul>
            {value.map(item => {
              return (
                <li key={item.name}>
                  <Link to={`${userName}/${item}`}>{item}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

Repolist.propTypes = {}

export default React.memo(Repolist)
