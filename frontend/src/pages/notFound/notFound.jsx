import React from 'react'
import { Link } from 'react-router-dom'

import './notFound.css'

const notFound = () => {
  return (
    <div className='notFound__container'>
      <h2>Erreur 404</h2>
      <p>Oups... Il semblerait que cette page n'existe pas.</p>
      <Link className='notFound__btn' to="/home">Retour à l'accueil</Link>
    </div>
  )
}

export default notFound