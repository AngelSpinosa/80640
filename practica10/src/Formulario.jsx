import { Button, TextField, Box } from "@mui/material"
import { useState } from "react"
import axios from "axios"

function Formulario (props) {
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState(
        {nombre: '',
        password: ''}
    )

    const hacerPeticion = async () => {
        try {
            const response = await axios.get('http://localhost:4567/ruta3')
            console.log(response.data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const procesarFormulario = (evento) => {
        evento.preventDefault()
        console.log("datos recuperados del formulario: ", datosFormulario)
        setCargando(true)
        try {
            const response = hacerPeticion()
            setCargando(false)
            //validar resultado con backend
            if (datosFormulario.nombre===response.alumno) {
                console.log('el que ustedes quieran')
            } else {
                console.log('error, el usuario no existe')
            }
        } catch (error) {
            console.log('error', error)
            setCargando(false)
        }
    }
    const cambiosFormulario =(evento)=> {
        const {name,value}=evento.target
        setDatosFormulario ({
            ...datosFormulario,[name]:value
        })
    }
    return (
            <>
            <form onSubmit={procesarFormulario}>
            <h1>Inicio de sesion</h1>
            <Box m={5}>
                <TextField label="nombre: " variant="outlined" fullwidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
            </Box>
            <Box m={5}>
                <TextField label="password:" variant="outlined" fullwidth onChange={cambiosFormulario} name="password" value={datosFormulario.password}></TextField>
            </Box>
            <Box m={5}>
                <Button variant="contained" type="submit" color="primary" fullwidth={Cargando} >Iniciar sesion</Button>
            </Box>
            </form>
            </>
            )
}

export default Formulario