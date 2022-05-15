import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import  axios, { AxiosError, AxiosResponse } from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Add: React.FC = () => {

    const[Name, setName] = useState<string>('');
    const[Calories, setCalories] = useState<number>(0);
    const[Fat, setFat] = useState<number>(0);
    const[Carbs, setCarbs] = useState<number>(0);
    const[Protein, setProtein] = useState<number>(0);

    const nav = useNavigate();

    const handleSend = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            await axios.post('https://localhost:7125/api/Foods', {
                Name: Name,
                Calories: Calories,
                Fat: Fat,
                Carbs: Carbs,
                Protein: Protein,
            })
            .then( (res: AxiosResponse) => {
                if( res.data ) {
                    console.log(res);  
                    nav('/');
                }
            })
            .catch( (error: AxiosError) => {
                console.log(error.status);
            });
    }

    return(
        <Container component='main' maxWidth='xs'>
            <Box 
            component='form'
            sx={{ marginTop: 20 }}
            onSubmit={handleSend}
            >
                    <TextField
                        required
                        label='Name'
                        name='Name'
                        autoFocus
                        margin='normal'
                        fullWidth
                        onChange={ (e) => {
                            setName(e.target.value);
                        }}
                    />
                    <TextField
                        required
                        label='Calories'
                        margin='normal'
                        name='Calories'
                        type='number'
                        fullWidth
                        onChange={ (e) => {
                            const number = Number(e.target.value);
                            setCalories(number);
                        }}
                    />
                    <TextField
                        required
                        label='Fat'
                        name='Fat'
                        autoFocus
                        margin='normal'
                        fullWidth
                        type='number'
                        onChange={ (e) => {
                            const number = Number(e.target.value);
                            setFat(number);
                        }}
                    />
                    <TextField
                        required
                        label='Carbs'
                        name='Carbs'
                        autoFocus
                        margin='normal'
                        fullWidth
                        type='number'
                        onChange={ (e) => {
                            const number = Number(e.target.value);
                            setCarbs(number);
                        }}
                    />
                    <TextField
                        required
                        label='Protein'
                        name='Protein'
                        autoFocus
                        margin='normal'
                        fullWidth
                        type='number'
                        onChange={ (e) => {
                            const number = Number(e.target.value);
                            setProtein(number);
                        }}
                    />
                    <Button 
                    type='submit'
                    variant='contained'
                    fullWidth
                    > 
                    Submit data 
                    </Button>
                    <Link to='/'> Back to List </Link>
            </Box>
        </Container>
    );
}

export default Add;

