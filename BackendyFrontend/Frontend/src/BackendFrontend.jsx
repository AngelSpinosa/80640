import { useState } from 'react'
import axios from "axios"
import './index.css'
import { Box, Button, TextField } from "@mui/material"


function BackendFrontend(props){
  const [datosUsuario, setDatosUsuario] = useState({
      nombre: '',
      apellido: ''
  })

  const hacerPeticion = async (ex) =>{
    try {
        if(ex==1){
            const res = await axios.get('http://localhost:4567/crear',{params:datosUsuario})
            return res.data
        }
        if(ex==2){
            const res = await axios.post('http://localhost:4567/leer',{params:datosUsuario})
            return res.data
        }
        if(ex==3){
            const res = await axios.get('http://localhost:4567/actualizar',{params:datosUsuario})
            return res.data
        }
        if(ex==4){
            const res = await axios.delete('http://localhost:4567/eliminar',{params:datosUsuario})
            return res.data
        }
    } catch (error) {
        throw error
    }
}
const crearU = async (e)=>{
    e.preventDefault()
    try {
        const res = await hacerPeticion(1)
        console.log(res)
        
    } catch (error) {
        console.log(error);
    }
}
const leerU = async (e)=>{
    e.preventDefault()
    try {
        const res = await hacerPeticion(2)
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}
const actualizarU = async (e)=>{
    e.preventDefault()
    //console.log("datos Recuperados del formulario", datosUsuario)
    try {
        const res = await hacerPeticion(3)
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}
const  eliminarU= async (e)=>{
    e.preventDefault()
    try {
        const res = await hacerPeticion(4)
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}
const cambiosFormulario = (e)=>{
    const {name, value}= e.target
    setDatosUsuario({
        ...datosUsuario, [name]:value
    })
}

  return (
    <>
            <h1>FORMULARIO</h1>
            <p className='Psistemas'>Sistemas web</p>
            <form>
                <div className='Div_Fondo'>
                    <div className='Div_inputs'>
                        <Box m={5}>
                            <label htmlFor="nombre">Nombre</label>
                            <TextField className="miInput muiInput-contained" type="text" name="nombre" id="nombre" variant="outlined" fullWidth/>
                        </Box>
                        <Box m={5}>
                            <label htmlFor="apellido">Apellido</label>
                            <TextField className="miInput muiInput-contained" type="text" name="apellido" id="apellido" variant="outlined" fullWidth/>
                        </Box>
                    </div>

                    
                    <div className='Div_Buttons'>
                        <Box m={5}>
                            <Button className='miBoton muiButton-contained' variant="contained" type="submit" color="primary" onClick={crearU}>
                                Crear
                            </Button>
                        </Box>
                        <Box m={5}>
                            <Button className='miBoton muiButton-contained' variant="contained" type="submit" color="primary" onClick={leerU}>
                                Leer
                            </Button>
                        </Box>
                        <Box m={5}>
                            <Button className='miBoton muiButton-contained' variant="contained" type="submit" color="primary" onClick={actualizarU}>
                                Actualizar
                            </Button>
                        </Box>
                        <Box m={5}>
                            <Button className='miBoton muiButton-contained' variant="contained" type="submit" color="primary" onClick={eliminarU}>
                                Eliminar
                            </Button>
                        </Box>
                    </div>
                </div>
            </form>
        </>
  )
}

export default BackendFrontend