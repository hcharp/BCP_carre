import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './login.css'

const login = () => {
  return (
    <div className='login'>
      <Form className='login__form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Identifiant</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre identifiant" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de Passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Se connecter
        </Button>
      </Form>
    </div>
  )
}

export default login