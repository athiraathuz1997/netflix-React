import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { action,originals } from './url';
import Popular from "./Components/Popular";
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
   
      <div>
        <Popular/>
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url={action} title='Action' isSmall/>
      </div>
   
  );
}
export default App;
