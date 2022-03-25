import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material" 
import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function App() {
  const [table,setTable]=React.useState(false)
  // const [page,setPage]=React.useState(1)
  const [data,setData]=React.useState([])
  const [pageSize,setPageSize]=React.useState(5)
  const getData=async()=>{
    setTable(true)
    const response= await axios.get(`https://hack2skill-backend.herokuapp.com/getData`)
    console.log(response.data.data)
    setData(response.data.data)
  }
  
  const columns=[
    {
      field:"full_name",
      headerName:"Full Name",
      width:230,
    },
    {
      field:"email",
      headerName:"Email",
      width:270,
    },
    {
      field:"number",
      headerName:"Number",
      width:180,
    },
    {
      field:"city",
      headerName:"City",
      width:180,
    },
    {
      field:"teamDetails",
      headerName:"Team Name",
      width:180,
      valueGetter: (params) => params.row.teamData.team_name
    },
    {
      field:"url",
      headerName:"URL",
      width:398,
    }
  ]
  return (
    <div className='flex justify-center h-screen items-center'>
      {table?
      <div className='h-3/4 w-3/4'>
        <DataGrid
        sx={{textAlign:"center",color:"black"}}
        headerHeight={70}
        showColumnRightBorder
        rowCount={1000}
        showCellRightBorder
        rowHeight={58.7}
        getRowId={row => row.email}
        columns={columns}
        rows={data}
        pageSize={10}
        pagination
        {...data}
      /> 
      </div>
      :
      <Button variant='contained' size="large" onClick={getData}>Get Data</Button> } 
    </div>
  );
}

export default App;
