import React from 'react';

export type ButtonType = {
  title: string
  onClick: () => void
  className?: string
}

export const Button: React.FC<ButtonType> = ({title, onClick, className}) => {
  return (
    <button
      className={className}
      onClick={()=>onClick()}
    >
      {title}
    </button>

  );
};

