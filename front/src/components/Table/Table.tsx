import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import  axios, { AxiosError, AxiosResponse } from 'axios';
import Typography from '@mui/material/Typography';

const TableData: React.FC = () => {

    const[data, setData]= useState<[]>([]);

    const nav = useNavigate();

    useEffect( () => {

        const getData = async () =>{
            await axios.get('https://localhost:7125/api/Foods', {
            })
            .then( (res: AxiosResponse) => {
                if( res.data ) {
                setData(res.data);
                console.log(res.data);
                }
            })
            .catch( (error: AxiosError) => {
             console.log(error.status);
            });   
        }

        getData();

    }, []);

    const handleDetails = (id:number) =>{
        nav('/Details', {state:{id}} );
    }

    return(
        <Container component='main' sx ={{
            marginTop: 20
        }}>
        <Link to='/Add'> Add Food </Link>
        <TableContainer component={Paper}>
            <Typography align='center' variant='h4'>List of Foods</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='center'>Food (100g serving) Press for details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { data.map( ({id,name}:any) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }
                }}
                hover={true}
                onClick = { () => {handleDetails(id)}}
              >
                <TableCell component="th" scope="row" align='center'>
                  {name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    );
}

export default TableData;