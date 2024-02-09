import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Team() {
  const [voitures, setVoitures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/listVoiture')
      .then(response => {
        setVoitures(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des marques :', error);
      });
  }, []);
  
    return (
        <div className="container-xxl py-5">
            {
                 <div className="container">
                 <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                     <h1 className="mb-5">Liste des annonces</h1>
                 </div>
                    <div className="row g-4">
                    {voitures.map(voiture => (
                        <>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="carousel-bg carousel-bg-1" style={{ minHeight: "100px" }}></div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="fw-bold mb-0">{voiture.modele.marque.nom} {voiture.modele.nom}</h5>
                                    <p>{voiture.prix}</p>
                                    <small>Par :<strong> {voiture.user.personne.nom} {voiture.user.personne.prenom} </strong></small>
                                    <button type="button">Contacter</button>
                                </div>
                            </div>
                        </div>
                        </>
                     ))}
                 </div>
            </div>
            }
        </div>
    );
}

export default Team;