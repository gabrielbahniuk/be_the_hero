import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';

import api from '../../services/api';
import './styles.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const history = useHistory();

  async function handleRegister(evt) {
    evt.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      state,
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Your access ID: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Insert error. Please try again');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be the Hero" />
          <h1>Register</h1>
          <p>Create your account, join the platform and help people find the cases of your NGO.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Already registered?
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="NGO name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="State"
              style={{ width: 100 }}
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Register</button>

        </form>
      </div>
    </div>
  );
}
