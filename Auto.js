import React from 'react';

const Auto = (props) => {
  // constructor(props){
  //     super(props)
  //     this.state = {md: ""}
  // }

      return(
        <div>
          <p>Model: {props.objAuto.model}</p>
          <p>Mark: {props.objAuto.mark}</p>
          <p>Price: {props.objAuto.price}</p>
          <input type="text" onChange={props.info} />
        </div>
      );


}

export default Auto
