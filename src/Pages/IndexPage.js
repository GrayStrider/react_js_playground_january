import React from 'react'
import {Link} from "react-router-dom";
import {TiLeaf} from 'react-icons/ti'

const splash = 'Test Index Page';

const IndexPage = () => (
  <div className='IndexPage'>
    <h1>{splash}<TiLeaf/></h1>
    <div className='index_links'>
      <li><Link to={'/page2'}>Page2</Link></li>
    </div>
  </div>
);

export default IndexPage
