import '../style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from "react";
import { Header } from './Header';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { NotFound } from '../pages/NotFound';

export const SearchContext = createContext();

function App() {
    const [search, setSearch] = useState('')

    return (
        <div className="App">
            <div className="wrapper">
                <SearchContext.Provider value={{ search, setSearch }}>
                    <Header />
                    <div className="content">
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    </div>
                </SearchContext.Provider>
            </div>
        </div>
    );
}

export default App;
