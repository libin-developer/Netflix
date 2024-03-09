import React from 'react'
import { originals,actions, horror, comedy, romance } from './urls'
import Navbar from './Companants/Navbar/Navbar'
import Banner from './Companants/Banner/Banner'
import Post from './Companants/Posts/Post'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Post  urls={originals} title='Netflix Originals'/>
      <Post  urls={actions} title='actions' isSmall />
      <Post  urls={comedy} title='Comedy' isSmall />
      <Post  urls={horror} title='Hororr' isSmall />
      <Post  urls={romance} title='Romance' isSmall />
      
    </div>
  )
}
