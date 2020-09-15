import React, {useEffect} from 'react';
import BaseRouter from "./routes";
import { useDataLayerValue } from './DataLayer';
import axios from "axios";

import {productListURL} from './constraints'

function App() {
  const [{product_list}, dispatch] = useDataLayerValue()

  useEffect(() => {
    axios
      .get(productListURL)
      .then(res => {
        dispatch({
          type: "SET_PRODUCT_LIST",
          product_list: res.data
        })
      })

  }, [dispatch])

  return (
      <div>        
        <BaseRouter />
      </div>
  );
}

export default App;
