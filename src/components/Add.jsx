import {Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    const [page,setPage]=useState('Anime')
    const[count,setCount]=useState(0)
    function valueAdd()
    {
        setCount(count+1)
    }
  return (
     <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}>
    
    <h1>Welcome to {page} Page</h1>
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
      </div>
      
      <div>
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
      />
       </div>
       <div>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
      />
      </div>
      <div>
        <Button variant='contained' onClick={valueAdd}>Register</Button>
        <br></br>
        <small>Button is clicked {count} times </small>
      </div>
      </Box>
  )
}

export default Add