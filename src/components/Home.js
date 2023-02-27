import React, { Component } from 'react'
import ProductFilter from './ProductFilter'
import ProductList from './ProductList'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Home() {

  const [data, setData] = useState([]);
  const API = axios.create({ baseURL: 'http://localhost:3000' });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await API.get('/products');
      setData(res.data);
      //console.log(data)
    } catch (err) {
      console.log(err);
    }
  };
  

    return (
      <div>
        <div>
            <ProductFilter data={data} setData={setData} />
        </div>
        <div>
            <ProductList data={data} />
        </div>
      </div>
    )
  }


export default Home
