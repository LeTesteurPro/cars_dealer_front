import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Fav() {
  const [voitures, setFavoris] = useState([]);

  useEffect(() => {
    axios.get('https://carsdealerwebservice-production-1aa2.up.railway.app/listFavoris')
      .then(response => {
        setFavoris(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des favoris :', error);
      });
  }, []);
  
    return (
        <div className="container-xxl py-5">
            {
                 <div className="container">
                 <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                     <h1 className="mb-5">Liste des favoris</h1>
                 </div>
                    <div className="row g-4">
                    {voitures.map(favori => (
                        <>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="carousel-bg carousel-bg-1" style={{ minHeight: "100px" }}></div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="fw-bold mb-0">{favori.idvoiture}</h5>
                                    <small>Par :<strong> {favori.iduser} </strong></small>
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

export default Fav;
