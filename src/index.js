import React, { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Suspense fallback={<div>Loading</div>}>
            <Router>
                <App />
            </Router>
        </Suspense>
);

reportWebVitals();
