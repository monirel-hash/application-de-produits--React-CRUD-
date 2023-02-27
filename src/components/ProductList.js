import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({data}) {
  return (
  <div className="container">
    <div style={{display:'flex', justifyContent:'space-between', margin:'20px 20px 20px 20px'}}>
      <h1>Liste de produits :</h1>
      <Link to="/addProduct" className="btn btn-success mb-3">Add Product</Link>
    </div>
  <ul className="list-group">
    { (data.length === 0) ? 
      <div class="alert alert-danger">
        <strong>No Products!</strong>
        </div> : data.map((product) => (
      <li key={product.id} className="list-group-item">
        <div className="border p-3">
          <div>
            <span>nom:</span> {product.nom}
          </div>
          <div>
            <span>description:</span> {product.description}
          </div>
          <div>
            <span>prix:</span> {product.prix} $
          </div>
          <div>
            <span>categorie:</span> {product.categorie}
          </div>
          <div>
            <Link to={`/productDetail/${product.id}`}>
              <button className="btn btn-success">Details</button>
              </Link>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>
  );
}
