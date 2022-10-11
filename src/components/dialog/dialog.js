import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";





export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        nome: props.nome,
        sexo: props.sexo,
        data_nascimento: props.data_nascimento,
        email: props.email,
        telefone: props.telefone,
        cidade: props.cidade,
        alteracao: props.alteracao,
        foto_perfil: props.foto_perfil,
        id: props.id
    });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditContact = () => {
    
    axios.put("https://gabriellgomess.com/api_php/update.php", {
        id: editValues.id,
        nome: editValues.nome,
        sexo: editValues.sexo,
        data_nascimento: editValues.data_nascimento,        
        email: editValues.email,
        telefone: editValues.telefone,
        cidade: editValues.cidade,
        alteracao: editValues.alteracao,
        foto_perfil: editValues.foto_perfil,
        curriculo: editValues.curriculo    
    }).then(() => {
      props.setListContato(
        props.listContato?.map((value) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                nome: editValues.nome,
                sexo: editValues.sexo,
                data_nascimento: editValues.data_nascimento,      
                email: editValues.email,
                telefone: editValues.telefone,
                cidade: editValues.cidade,
                alteracao: editValues.alteracao,
                foto_perfil: editValues.foto_perfil,
                curriculo: editValues.curriculo   
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteContact = () => {
    axios.post("https://gabriellgomess.com/api_php/delete.php", {
      id: props.id,
    }).then(() => {
      props.setListContato(
        props.listContato?.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
  };


  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome"
            defaultValue={props.nome}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="sexo"
            label="Sexo"
            defaultValue={props.sexo}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          /> */}
          <TextField
            autoFocus
            margin="dense"
            id="data_nascimento"
            label="Data de Nascimento"
            defaultValue={props.data_nascimento}
            type="date"
            onChange={handleChangeValues}
            fullWidth
          />
        <FormControl>
            <FormLabel id="sexo">Gênero</FormLabel>
            <RadioGroup
                row
                aria-labelledby="sexo"
                defaultValue={props.sexo}
                name="sexo"
                id="sexo"
                onChange={handleChangeValues}
              >
                <FormControlLabel value="feminino" control={<Radio id="sexo"  />} label="Feminino" />
                <FormControlLabel value="masculino" control={<Radio id="sexo" />} label="Masculino" />
                <FormControlLabel value="outro" control={<Radio id="sexo" />} label="Outro" />
            </RadioGroup>
        </FormControl>

          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            defaultValue={props.email}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="telefone"
            label="Telefone"
            defaultValue={props.telefone}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cidade"
            label="Cidade"
            defaultValue={props.cidade}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={() => handleDeleteContact()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditContact()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}