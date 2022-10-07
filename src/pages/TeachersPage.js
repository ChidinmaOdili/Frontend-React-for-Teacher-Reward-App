import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DashboardAppBar from '../components/dashbord_components/DashboardAppBar'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios'
import { SchoolSharp } from '@mui/icons-material'
import DashboardSideNav from '../components/dashbord_components/DashboardSideNav'
import { studentDashBoard } from '../Utility/DashboardUtilities'
//import DashboardAppBar from '../components/dashbord_components/DashboardAppBar'
function TeachersPage() {
  const [teachers, setTeachers] = useState([])
  const [searchTeachers, setSearchTeachers] = useState("")
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(30)
  const [sortBy, setSortBy] = useState("fgc")
  const[token , setToken] = useState("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW11ZWwxQGdtYWlsLmNvbSIsImV4cCI6MTY2NTEzOTUzMSwiaWF0IjoxNjY1MTAzNTMxfQ.SDjh0BH0C3ZXbAgRxAsiFU5SeiSGWQo6sWNfJ0E3HOE")
  ///getAllWithPagination/{pageNo}/{pageSize}/{schoolName}"
  const columns = [
    { field: 'name', headerName: 'name', width: 300 },
    { field: 'School', headerName: 'school', width: 300 },
    { field: 'role', headerName: 'role', width: 150 },
    { field: 'teachingPeriod', headerName: 'Period', width: 150 },
  ];
  const search = ( word) => {
    
    teachers.filter((item) => {
      let searchResults = [];
      
      if (item === word) {
        setTeachers(searchResults)
        console.log(item)
        }
    })
  
      
  }
  useEffect(() => {
    
    axios.get('http://localhost:8085/api/getAllWithPagination/' + pageNo + '/' + pageSize + '/' + sortBy, {headers : {"Authorization" : `Bearer ${token}`}})
      .then(response => {
      
        console.log(response.data.content)
        setTeachers(response.data.content)
      })
    
    

  } ,[])
  return (
     <>
        <DashboardAppBar />
      <Grid container>
        <Grid item  md={3} lg={3} xs={4} sm={4}>
          <DashboardSideNav navlink={studentDashBoard} />
        </Grid>
        <Grid style={{ height: 450, width: '100%' }} item md={8} lg={8} xs={4} sm={4}>
          <Typography sx={{ mt : 15, color : '#55a630', mb : 3 }}>All Teachers</Typography>
          <Grid container >
              <Grid item  md={3} lg={9} xs={4} sm={4}>
                <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                fullWidth
                value={searchTeachers}
                onChange={(e) => {
                  setSearchTeachers(e.target.value)
                  
                }}
                onKeyDown={//
                  //search(searchTeachers)
                  ()=>search(searchTeachers)
                  
                }
                sx={{ mb : 5 }}
              />
            </Grid>
            <Grid item  md={3} lg={3} xs={4} sm={4}>
            <Button
              variant="outlined"
                sx={{ height: '30px', pb: 3.3, pt: 3.3, ml: 15 }}
                
              >Filter <TuneIcon />
            </Button>
      
             </Grid>
          </Grid>
            
            
          <DataGrid
            
            columns={ columns }
            rows={ teachers } 
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
          />
        </Grid>
        <Grid item md={1} lg={1} xs={1} sm={1}>
      
        </Grid>
      </Grid>
     
     </>
   
     

  )
}
// const TeacherStyle = styled.div`
// Width:100%;
// Height:1024px;
// border:3px solid yellow;
// `

export default TeachersPage