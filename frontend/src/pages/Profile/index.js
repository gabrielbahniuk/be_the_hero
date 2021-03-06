import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import logoImage from "../../assets/logo.svg";

import api from "../../services/api";
import "./styles.css";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });
      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert("Problem removing case. Please try again");
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be the Hero" />
        <span>{`Welcome, ${ongName}`}</span>

        <Link className="button" to="/incidents/new">
          Register new case
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Registered cases</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASE:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIPTION:</strong>
            <p>{incident.description}</p>
            <strong>VALUE:</strong>
            <p>
              {Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(incident.value)}
            </p>
            <button type="button">
              <FiTrash2
                onClick={() => handleDeleteIncident(incident.id)}
                size={24}
                color="#a8a8b3"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
