import React, {ChangeEvent, useState} from 'react';


export type InputType = {
  className: string
  onChange: (text: string) => void
  name: string
  value:string
}

export const Input: React.FC<InputType> = ({className, onChange, name,value}) => {

  const [text, setText] = useState<string>('')
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }


  return (
    <div>
      {/*<span>{name}</span>*/}
      <input
        type="text"
        value={value}
        className={className}
        onChange={handleOnChange}
      />
    </div>
  );
};

