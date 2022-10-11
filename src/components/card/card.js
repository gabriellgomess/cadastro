import "./card.css";
import FormDialog from '../dialog/dialog';
import { TextField, Button, IconButton, Stack, Card, CardContent, CardMedia, Divider } from '@mui/material';
import { CardActionArea, CardActions, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PhotoCamera, Delete, Edit, CalendarMonth, QueryBuilder } from '@mui/icons-material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



const CardContato = (props) => {
    const [open, setOpen] = React.useState(false);
   
    
    const handleClickCard = () => {
        setOpen(true);
    }

    const handleDelete = (id) => {
        axios.post('https://gabriellgomess.com/api_php/delete.php', {
            id: id
        }).then((response) => {
            console.log(response);
            if(props.del === false){
                props.setDel(true);
            }else{
                props.setDel(false);
            }
            document.getElementsByClassName('input--form').value = '';
        });
    }  
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
    if(props.sexo === 'masculino'){
        var bgColor = '#42a5f5';
    }else if(props.sexo === 'feminino'){
        var bgColor = '#ce93d8';
    }else{
        var bgColor = '#ffb74d';
    }
    var last_date = props.alteracao
    var data_alteracao = last_date.split(" ")
    var data = data_alteracao[0].split("-").reverse().join("/");
    var hora = data_alteracao[1]
   
    return(
        <div>
            <FormDialog
                open={open} 
                setOpen={setOpen}
                id={props.id}
                nome={props.nome}
                sexo={props.sexo}
                data_nascimento={props.data_nascimento}
                email={props.email}
                telefone={props.telefone}
                cidade={props.cidade}
                alteracao={props.alteracao}
                foto_perfil={props.foto_perfil}
                listContato={props.listContato}
                setListContato={props.setListContato}                            
            />        
                   
            <div key={props.id}>               
                <Card className="card--props" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        {/* <CardMedia component="img" height="180" image={props.foto_perfil} alt="Foto de Perfil"  /> */}
                        <Avatar className="avatar" {...stringAvatar(props.nome)} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{props.nome}</Typography>
                            <Typography className="sexo" variant="body2" color={bgColor}>{props.sexo}</Typography>
                            <Typography variant="body2" color="text.secondary">{(props.data_nascimento).split("-").reverse().join("/")}</Typography>
                            <Typography variant="body2" color="text.secondary">{props.email}</Typography>
                            <Typography variant="body2" color="text.secondary">{props.telefone}</Typography>
                            <Typography variant="body2" color="text.secondary">{props.cidade}</Typography>
                            <Divider className="divider" />
                            <Typography variant="caption" display="block" color="text.secondary" gutterBottom>Ultima alteração</Typography>
                            <Typography className="last--change" variant="caption"  color="text.secondary"><CalendarMonth />{data} <QueryBuilder />{hora}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className='container--buttons'>
                        <Button onClick={() =>handleClickCard()}  size="small" variant = "contained" color="primary" startIcon={<Edit />}>Editar</Button>
                        <Button onClick={()=>handleDelete(props.id)} size="small" variant="outlined" color = "error" startIcon={<Delete />}>Apagar</Button>
                    </CardActions>
                </Card>
                
            </div>
                
        </div>
        )
}

export default CardContato;