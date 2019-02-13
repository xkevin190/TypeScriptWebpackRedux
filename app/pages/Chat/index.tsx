import React from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button } from '@material-ui/core';


export default class Chat extends React.Component {
  render() {
    return (
      <Card style={{padding:40 , flex:1}}>
        <TextField
          id="outlined-dense"
          margin="dense"
          placeholder="Ingrese Nombre"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-static"
          placeholder='Comentario'
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
        />
        <div style={{ display:'flex' , flexDirection:'row-reverse' }}>
            <Button color='primary' variant='contained' >
                Submit
            </Button>  
        </div>
      </Card>
    );
  }
}
