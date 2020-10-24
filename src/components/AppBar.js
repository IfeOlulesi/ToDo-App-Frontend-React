import React from 'react'
import {Container, AppHeader} from '../styles/Styles'

const AppNav = () => {
    return <div>nav</div>
}

const AppBar = () => {
    return (
        <Container>
            <AppHeader>todo app</AppHeader>
            <AppNav></AppNav>
        </Container>
    )
}

export default AppBar
