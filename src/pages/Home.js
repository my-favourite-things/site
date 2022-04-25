import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-fluid py-4 text-center">
      <h1 className="display-4">About me</h1>
      <p className="lead">Hi, my name is Emily and I am from London</p>
      <p>
        My favourite film is Shaun the Sheep: The Movie<br/>
        My favourite food is probably pasta or chips<br/>
        <Link to="/ducks" className="text-success">Ducks</Link> are some of my favourite things
      </p>
    </div>
  )
}

export default Home
