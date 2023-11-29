import { Box, Button, TextField } from "@mui/material";

function Formulario (props){
    const [Cargando, setCargando] = useState(false) //['', funcion]
    const
        [DatosFormulario, setDatosFormulario] = useState({nombre: '', contraseña: ''}) //['', funcion
    const procesarFormularios = (evento) =>{
        evento.preventDefault();
        console.log(evento)
        setCargando(true)
        try{
            const response = hacerPeticion()
            //console.log(res)
            setCargando(false)
            if(DatosFormulario.nombre === response.username){
                console.log("Ok, el usuario existe ")
            }else{
                console.log("No existe el usuario")
            }
        }catch(error){
            console.log(error)
            setCargando (false)
        }
    }
    const hacerPeticion = async () =>{
        try{
            const res = await axios.get("localhost:4567")
            return res.data
        }catch(error){
            throw error
        }
    }
    const cambiosformulario = (e) =>{
        const {name, value} = e.target
        setDatosFormulario({...DatosFormulario, [name]: value})
    }
    return (
        <>  
            <h1>Inicio de sesión</h1>
            <form onSubmit={procesarFormularios}>
                <Box m = {5} >
                    <TextField> label = "Nombre: " variant = "outlined" fullWidth onChange (cambiosformulario) name = "nombre" value {DatosFormulario.nombre}</TextField>
                </Box>
                <Box m = {5}>
                    <TextField> label = "Contraseña:" variant = "outlined" fullWidth
                        onChange = {cambiosformulario} name = "contraseña" value = {DatosFormulario.contraseña} type = "password" DatosFormulario.contraseña 
                    </TextField>
                </Box>
                <Box m = {5}>
                    <Button variant = "contained" type = "submit" color = "primary" fullWidth> Iniciar sesión</Button>
                </Box>
            </form>
        </>
    )    
}

export default Formulario;

