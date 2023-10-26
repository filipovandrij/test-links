import tabsConfig from '../../config/tabs.json'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <ul>
                            {tabsConfig
                                .sort((a, b) => a.order - b.order)
                                .map((tab) => (
                                    <li key={tab.id}>
                                        <Link to={`/${tab.id}`}>
                                            <Button
                                                variant="contained"
                                                color="success"
                                            >
                                                {tab.title}
                                            </Button>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

export default Header
