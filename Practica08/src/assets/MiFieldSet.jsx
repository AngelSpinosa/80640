

function MiFieldSet(props) {
    const {titulo, txt1, txt2 } = props;
    return (
        <> 
            <fieldset> 
                <legend>
                    (titulo)
                    <label htmlFor=(txt1)>(txt1): </label> 

                    <input type="text" type = id /> 

                </legend>
            </fieldset>
        </>
    )
}

export default MiFieldSet;