import React, {useState, useEffect } from 'react';
import "./form.css";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { TextField, Button, IconButton, Stack, Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PhotoCamera } from '@mui/icons-material';
import CardContato from '../card/card';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';





const Form = () => {

    const [listContato, setListContato] = useState([])    
    const [del, setDel] = useState(false);
    const [open, setOpen] = useState(false);


    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        axios.post('https://gabriellgomess.com/api_php/insere.php', data)
        .then(res => {
            document.getElementsByClassName('form')[0].reset();
            if(res.data !== ""){
                toast.success("Contato cadastrado com sucesso!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            }
            console.log(res.data);
        })
    };
    useEffect(() => {
        axios.get("https://gabriellgomess.com/api_php/busca.php",{
            headers: {
                'Authorization': `Basic 123456789`
                }}).then((response) => {
            setListContato(response.data);             
        });
    }, [listContato, del]);
    return (
        <div className='wrapper--form'>    
        <div className="container--form">
            <Card className="card--form" sx={{ maxWidth: 580 }}>
            <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="form" >
                <Typography className="title_h5" variant='h5' >Formulário de Cadastro<SupervisorAccountIcon /></Typography>                       
                <TextField className='input--form input-text' name='nome' type="text" {...register('nome', {required: true, minLength: 3})}  label="Nome" variant="standard" />
                <div className='in--line'>
                    <FormControl className="container--sexo">
                    <FormLabel id="sexo">Gênero</FormLabel>
                    <RadioGroup row aria-labelledby="sexo" name="sexo">
                        <FormControlLabel name='sexo' {...register('sexo')} value="feminino" control={<Radio />} label="Feminino" />
                        <FormControlLabel name='sexo' {...register('sexo')} value="masculino" control={<Radio />} label="Masculino" />
                        <FormControlLabel name='sexo' {...register('sexo')} value="outro" control={<Radio />} label="Outro" />
                    </RadioGroup>
                    </FormControl>
                    <div className='container--nasc'>
                        <FormLabel id="data_nascimento">Data de Nascimento</FormLabel>
                        <TextField defaultValue="1980-01-01" name='data_nascimento' {...register('data_nascimento',{ required: true})} type="date" variant="standard" />
                    </div>
                </div>
                <TextField className='input--form input-text' name='email' type="text" {...register('email',{ required: true})} label="E-mail" variant="standard" />
                <TextField className='input--form input-text' name='telefone' type="text" {...register('telefone',{ required: true})} label="Telefone" variant="standard" />
                <TextField className='input--form input-text' name='cidade' type="text" {...register('cidade',{ required: true})} label="Cidade" variant="standard" />
                {/* <Stack direction="row" spacing={2} className='input--form'>
                    <IconButton color="primary" aria-label="upload picture" component="label"><input hidden type="file" name='foto_perfil' {...register('foto_perfil')} /><PhotoCamera /></IconButton>
                    <Button variant="outlined" component="label">Currículo<input hidden multiple type="file" name='curriculo' {...register('curriculo')} /></Button>
                    
                </Stack>        */}
                <Button className="button--cadastrar" type="submit" variant="contained">Cadastrar</Button>
            </form>
            </CardContent>
            </Card>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />           
        </div>
        <div className="container--cards">
        {listContato ? listContato.map((contato) => {
            return(
                <div key={contato.id}>
                <CardContato                    
                    id={contato.id}
                    nome={contato.nome}
                    sexo={contato.sexo}
                    data_nascimento={contato.data_nascimento}
                    email={contato.email}
                    telefone={contato.telefone}
                    cidade={contato.cidade}
                    foto_perfil={contato.foto_perfil}
                    curriculo={contato.curriculo}
                    alteracao={contato.alteracao} 
                    listContato={listContato}
                    setListContato={setListContato}
                    open={open}
                    setOpen={setOpen}
                    del={del}
                    setDel={setDel}                 
                />
                </div>
            )
        
        }) : <Typography variant="h5" gutterBottom>Carregando...</Typography>}
        </div>
        
        </div>        
    );
}

export default Form;


