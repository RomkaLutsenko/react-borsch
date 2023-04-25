import '../style/index.scss';
import { useEffect, useState } from 'react';
import { Header } from './Header';
import { Categories } from './Categories';
import { BorschBlock } from './BorschBlock';
import { Sort } from './Sort';
import BorschSkeleton from './BorschBlock/ui/BorschSkeleton';

function App() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://64479bb450c2533744296f40.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {isLoading
                                ? [...new Array(6)]
                                    .map((_, index) => <BorschSkeleton key={index} />)
                                : items.map((obj) => (<BorschBlock key={obj.id} {...obj} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
