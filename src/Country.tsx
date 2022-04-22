import React from 'react'



interface Props{
  cName?:number;
  age?:number;
  key?:any ;
  children?: React.ReactNode
}
const Country:React.FC<Props> = ({cName, age, key}:Props) => {
  return (
    <div>
      <h2>name: {cName} age:{age}</h2>
    </div>
  )
}

export default Country