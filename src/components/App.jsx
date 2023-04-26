import '../style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { NotFound } from '../pages/NotFound';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
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
            </div>
        </div>
    );
}

export default App;