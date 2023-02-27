import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    nom: '',
    description: '',
    prix: '',
    marque: '',
    categorie: ''
  });


  const API = axios.create({ baseURL: 'http://localhost:3000/' });

  const addProduct = async () => {
    try {
      await API.post('/products/', product);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === 'prix') value = parseFloat(value)

    console.log(value)
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!product.nom || !product.description || !product.prix || !product.marque || !product.categorie) {
      alert('Please fill in all fields.');
      return;
    }
    addProduct();
    navigate('/')
  };

  return (
<div className="container">
  <h2 className="mb-4">Ajouter un nouveau produit</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="nom">Nom :</label>
      <input type="text" className="form-control" name="nom" value={product.nom} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="description">Description :</label>
      <input type="text" className="form-control" name="description" value={product.description} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="prix">Prix :</label>
      <input type="number" className="form-control" name="prix" value={product.prix} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="marque">Marque :</label>
      <input type="text" className="form-control" name="marque" value={product.marque} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="categorie">Categorie :</label>
      <input type="text" className="form-control" name="categorie" value={product.categorie} onChange={handleChange} /><br />
    </div>
    <button type="submit" className="btn btn-primary mr-2">Add Product</button>
    <button className="btn btn-danger" onClick={() => navigate('/')}>Cancel</button>
  </form>
</div>

  );
}
