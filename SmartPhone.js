import React from 'react';

const SmartPhone = (props) => {

      return(
        <div>
          <p>Technical features: </p>
          <p>{props.os}</p>
          <p>{props.model}</p>
          <p>{props.price}</p>
        </div>
      );
}

export default SmartPhone
