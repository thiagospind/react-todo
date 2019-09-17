import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>

        {/*Componente de layout para telas pequenas, medias e grandes, com os respectivos tamanhos de tela*/}
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                   placeholder='Adicione uma tarefa'
                   onChange={props.handleChange}
                   value={props.description}/>
        </Grid>


        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}/>
            <IconButton style='info' icon='search'
                onClick={props.handleSearch}/>
            <IconButton style='default' icon='close'
                onClick={props.handleClear}/>
        </Grid>
    </div>
)