import React from 'react';
import { Link} from 'react-router-dom';

const Home = () => {

  return (
    <div >
        <div class="flex items-center justify-center h-screen gap-10">
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>  
    </div>
    
  );
};

export default Home;