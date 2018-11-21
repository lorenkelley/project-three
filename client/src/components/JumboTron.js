import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom'

const Tron = (props) => {
  return (
    <div>
  
        <Jumbotron className='tromn'>
       
        <p className="lead">Studio U is designed for creatives both professionals and novice looking for unique spaces to spark imagination.We are a platform designed specifically for users looking to shoot films, music videos and photography.</p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
        <Link to='/'> <Button color='light'>Learn More</Button></Link> 
        </p>
      </Jumbotron>
    </div>
  );
};

export default Tron;