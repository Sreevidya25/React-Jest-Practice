import React, { useState } from 'react';
import axios from 'axios';

const Button = ({ label, disabled }) => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');


    const handleClick = async () => {
        // setCount(count+1);
        try{
            const res = await axios.get('/api/data');
            setData(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <>
    <button disabled={disabled} data-testid='button' 
    onClick={handleClick}>{label}</button>
    {/* <p>{count}</p> */}
    <p>Data: {data}</p>
    </>
    
  )
  
};
export default Button