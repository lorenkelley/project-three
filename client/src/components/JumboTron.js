import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom'


const Tron = (props) => {
  return (
    <div>
  
        <Jumbotron className='trom'>
       <h3>We Create Connections!</h3>
        <p className="lead">Studio-U Is Designed For Creatives Both Professionals And Novice Looking For Unique Spaces To Spark Imagination. Studio-U Is A Platform Designed Specifically For Users Looking To Shoot Films, Music Videos And Photography.</p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
       
        <Link to='/sign-in'> <Button color='light'>Learn More</Button></Link> 
       
        </p>
      </Jumbotron>
    </div>
  );
};

export default Tron;