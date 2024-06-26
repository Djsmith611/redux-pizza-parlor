import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reduxStore from './redux/store.js';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </React.StrictMode>
);

export {default as Admin} from './components/Admin/Admin.jsx';
export {default as AnimatedRoutes} from './components/App/AnimatedRoutes.jsx'
export {default as Checkout} from './components/Checkout/Checkout.jsx';
export {default as CustomerInfo} from './components/CustomerInfo/CustomerInfo.jsx';
export {default as Header} from './components/Header/Header.jsx';
export {default as LandingPage} from './components/LandingPage/LandingPage.jsx';
export {default as OrderTable} from './components/Admin/OrderTable/OrderTable.jsx';
export {default as OrderTableItem} from './components/Admin/OrderTable/OrderTableItem/OrderTableItem.jsx';
export {default as Pizza_Map} from './components/Select_Pizza/Pizza_Map/Pizza_Map.jsx';
export {default as Select_Pizza} from './components/Select_Pizza/Select_Pizza.jsx';
export {default as OrderDetails} from './components/Admin/OrderDetails/OrderDetails.jsx';
