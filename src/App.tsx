import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

import './scss/app.scss';

const Cart = lazy(() => import('./pages/Cart'));
const SingleProductPage = lazy(() => import('./pages/SingleProductPage'));

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <div className="content">
                        <div className="container">
                            <Routes>
                                <Route path="/" element={
                                    <Home />
                                } />
                                <Route path="/keyboards" element={
                                    <Home />
                                } />
                                <Route path="items/:id" element={
                                    <Suspense fallback={<div>Идёт загрузка...</div>}>
                                        <SingleProductPage />
                                    </Suspense>
                                } />
                                <Route path="/cart" element={
                                    <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                                        <Cart />
                                    </Suspense>
                                } />
                                <Route path="*" element={
                                    <PageNotFound />
                                } />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;