import React from 'react';
//function name is same as component Name 
function Heading(){
    return(
    <h1>
        Vijay Patil IT's a Heading component
    </h1>
      )
}

function testme(){
    return "Hello Mutliple Export Fom Component"
}
export default Heading;
export {testme}