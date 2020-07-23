import React, { Suspense, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import UploadExample from './uploadExample';
import GiraffeCatalog from './pages/GiraffeCatalog';
import '../css/style.css'


function App() {
    
    return (
        <GiraffeCatalog/>
    )
}

export default hot(App)