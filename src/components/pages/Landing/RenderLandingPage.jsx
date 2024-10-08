// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';
// import { Button } from '../../common';
import { Button } from 'antd';

function RenderLandingPage(props) {

  return (<>
    <div >
      <h3>Hi {props.username}, you are login!</h3>
      <div>

        <p>
          <Link to="/user-list">UserList</Link>
        </p>
        <p>
          <Link to="/users">(demo: UserList via Redux legacy)</Link>
        </p>

      </div> 
      <Button
        type="primary"
        // // onClick={() => authService.logout()}
        // onClick={() => logout()}
        >
        Logout
      </Button>
      
    </div>      
  </>);
}

// Define prop types for the component
RenderLandingPage.propTypes = {
  username: PropTypes.string.isRequired, // Add username as a required string prop
};

export default RenderLandingPage;