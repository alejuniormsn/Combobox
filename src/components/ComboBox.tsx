/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { api } from '../service/api';
import { Cards } from "./Cards";
import { Grid } from "@material-ui/core";

interface cardsData {
  id: number,
  flagPais: string,
  nomePais: string,
  local: string,
  meta: string
}

const dbCards =
  [
    {
      id: 1,
      flagPais: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
      nomePais: 'Afeganistão',
      local: 'Kabul',
      meta: '12/2092'
    },
    {
      id: 2,
      flagPais: 'https://flagcdn.com/w320/al.png',
      nomePais: 'Albania',
      local: 'Tirana',
      meta: '12/2029'
    },
    {
      id: 3,
      flagPais: 'https://flagcdn.com/w320/ar.png',
      nomePais: 'Argentina',
      local: 'Buenos Aires',
      meta: '12/2029'
    }
  ]

interface Top85Films {
  id: number,
  title: string,
  year: number
}

export function ComboBox() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [top85Films, setTop85Films] = useState<Top85Films[]>([]);

  useEffect(() => {
    api.get('top85Films')
      .then(response => setTop85Films(response.data))
  }, []);

  return (
    <>
      <Autocomplete
        open={open}
        onOpen={() => {
          if (inputValue) {
            setOpen(true);
          }
        }}
        onClose={() => setOpen(false)}
        inputValue={inputValue}
        onInputChange={(e, value, reason) => {
          setInputValue(value);

          if (!value) {
            setOpen(false);
          }
        }}
        options={top85Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 303, height: 48, padding: 50 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      {/* Componente Cards */}
      <Grid container>
        {dbCards.map((card) => {
          return <Cards key={card.id} card={card} classes/>
        })}
      </Grid>
    </>
  );
}

