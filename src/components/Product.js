import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const API = axios.create({ baseURL: 'http://localhost:3000' });
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container my-5">
      <h1 className="mb-4">{data.nom}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={data.image} alt={data.nom} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="lead">{data.description}</p>
          <ul className="list-unstyled">
            <li><strong>Brand:</strong> {data.marque}</li>
            <li><strong>Category:</strong> {data.categorie}</li>
            <li><strong>Price:</strong> {data.prix} €</li>
            <li><strong>In Stock:</strong> {data.inStock ? 'Yes' : 'No'}</li>
          </ul>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-danger" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
