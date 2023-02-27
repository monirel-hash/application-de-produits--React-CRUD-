import React, { useState } from 'react';
import axios from 'axios';

export default function ProductFilter({ setData }) {
  const [nom, setNom] = useState('');
  const [categorie, setCategorie] = useState('');
  const [enStock, setEnStock] = useState(false);
  const [prixMin, setPrixMin] = useState('');
  const [prixMax, setPrixMax] = useState('');
  const categories = ['smartphones', 'laptops', 'skincare']

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      nom_like: nom,      
      prix_gte: prixMin === '' ? 0 : prixMin,
    }

    if(prixMax !== '')
      params['prix_lte'] = prixMax
    try {
      const { data } = await axios.get('http://localhost:3000/products', { params });
      console.log(data)
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const Clear = (event) => {
    setNom('');
    setCategorie('');
    setEnStock('');
    setPrixMin('');
    setPrixMax('');
  };


  return (
    <div className="container">
    <h2>Filter :</h2>
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-4">
        <label htmlFor="nom" className="form-label">Nom :</label>
        <input
          type="text"
          name="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="categorie" className="form-label">Catégorie :</label>
        <select
          name="categorie"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="form-select"
        >
          <option value="">catégorie</option>
          {categories?.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-4">
        <label htmlFor="enStock" className="form-label">En Stock :</label>
        <div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="enStock"
              value="true"
              checked={enStock === "true"}
              onChange={(e) => setEnStock(e.target.value)}
              className="form-check-input"
            />
            <label htmlFor="enStock" className="form-check-label">En stock</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="enStock"
              value="false"
              checked={enStock === "false"}
              onChange={(e) => setEnStock(e.target.value)}
              className="form-check-input"
            />
            <label htmlFor="enStock" className="form-check-label">Hors stock</label>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <label htmlFor="prix-min" className="form-label">Prix minimum :</label>
        <input
          type="number"
          name="prix-min"
          value={prixMin}
          onChange={(e) => setPrixMin(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="prix-max" className="form-label">Prix maximum :</label>
        <input
          type="number"
          name="prix-max"
          value={prixMax}
          onChange={(e) => setPrixMax(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-md-4">
        <button type="submit" className="btn btn-primary mt-4">Filtrer</button>
        <button onClick={Clear} type="button" className="btn btn-danger mt-4 mx-2">Clear</button>
      </div>
    </form>
  </div>
  
  );
}
