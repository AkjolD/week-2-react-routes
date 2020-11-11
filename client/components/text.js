import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import Header from './header'

const Text = () => {
  const { userName, repositoryName } = useParams()
  const [content, setContent] = useState()
  useEffect(() => {
    axios(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
    .then(it => setContent(it.data))
  }, [userName, repositoryName])
  return (
    <div id="description">
      <Header />
      <ReactMarkdown className='p-2' source={content} />
    </div>
  )
}

Text.propTypes = {}

export default React.memo(Text)
