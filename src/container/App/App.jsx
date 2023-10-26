import LazyLoadComponent from '../../components/LazyLoadComponent'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'

import tabsConfig from '../../config/tabs.json'

function App() {
    return (
        <>
            <Header />
            <Routes>
                {tabsConfig.map((tab) => (
                    <Route
                        key={tab.id}
                        path={`/${tab.id}`}
                        element={<LazyLoadComponent path={tab.path} />}
                    />
                ))}
            </Routes>
        </>
    )
}

export default App
