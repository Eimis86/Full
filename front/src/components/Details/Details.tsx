import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import  axios, { AxiosError, AxiosResponse } from 'axios';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Typography from '@mui/material/Typography';

interface LocaitonState{
        id:number;
}

interface food{
    id:number,
    name:string,
    calories:number,
    fat:number,
    carbs:number,
    protein:number,
}

const Details: React.FC = () => {

    const { state } = useLocation();

    const[details, setDetails]= useState<food>({} as food);

    useEffect( () => {
        const {id} = state as LocaitonState;
        const getDataId = async () =>{
            await axios.get(`https://localhost:7125/api/Foods/${id}`, {
            })
            .then( (res: AxiosResponse) => {
                if( res.data ) {
                setDetails(res.data);
                }
            })
            .catch( (error: AxiosError) => {
             console.log(error.status);
            });   
        }

        getDataId();

    },);

    return(
        <Container component='main' sx ={{
            marginTop: 20
        }}>
        <TableContainer component={Paper}>
            <Typography align='center' variant='h4' >Details</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Food (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow
                key={details.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }
                }}
              >
                <TableCell component="th" scope="row">
                  {details.name}
                </TableCell>
                <TableCell align="right">{details.calories}</TableCell>
                <TableCell align="right">{details.fat}</TableCell>
                <TableCell align="right">{details.carbs}</TableCell>
                <TableCell align="right">{details.protein}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Link to='/'> Back To List </Link>
      </Container>
    );
}

export default Details;