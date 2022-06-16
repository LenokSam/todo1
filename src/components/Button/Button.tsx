import React from 'react';

type ButtonType ={
  name: string
  callback:()=>void
}

const Button:React.FC<ButtonType> = ({name, callback}) => {


  return (
    <button onClick={callback}>
      {name}
    </button>
  );
};

export default Button;