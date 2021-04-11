import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    const ongId = localStorage.getItem('ongId');

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push('/profile');
    } catch (err) {
      alert('Error creating case. Please try it again.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be the Hero" />
          <h1>Insert a Case</h1>
          <p>Describe the case in details in order to find a hero for it.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Back to home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Case title..." />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Value in EUR" />

          <button className="button" type="submit">Register</button>

        </form>
      </div>
    </div>
  );
}
