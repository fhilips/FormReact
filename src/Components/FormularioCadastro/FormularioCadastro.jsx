import React, { useState } from "react";

import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobreNome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          console.log(cpf.length)
          const ehValido = validarCPF(cpf)
          setErros({cpf: ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}            
            color="primary"
          ></Switch>
        }
      />

      <FormControlLabel
        label="Novidades"
        checked={novidades}
        control={
          <Switch
            name="novidades"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}            
            color="primary"
          ></Switch>
        }
      />
      <Button type="submit" variant="contained" color="primary">
        cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
