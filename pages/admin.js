import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Card from 'react-bootstrap/Card';
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Admin(props){
    return(
        <main className={styles.main2}>
          

        <Container>
      <Row>
        <Col style={{    alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
        <h3 className={styles.title2}>
            Bienvenido Administrador
        </h3>
  
          <p className={styles.description2}>
          Seleccione el módulo que requiere utilizar:
          </p>

          <Card style={{ width: '27rem' }}>
        
        <Card.Body>
        <Card.Title>Administrador:</Card.Title>
        <Card.Text>En cada módulo puede crear, modificar o eliminar los registros según el caso.</Card.Text>
        <Link href="/admin/asignatura">
        <button type="button" className="btn btn-primary">
                Asignaturas
                </button>
        </Link>
        <Link href="/admin/docentes">
        <button type="button" className="btn btn-primary" style={{marginLeft: "2px"}}>
                Docentes
                </button>
        </Link>
        <Link href="/admin/grupos">
        <button type="button" className="btn btn-primary" style={{marginLeft: "2px"}}>
                Grupos
                </button>
        </Link>
        <Link href="/admin/estudiantes">
        <button type="button" className="btn btn-primary" style={{marginLeft: "2px"}}>
                Estudiantes
                </button>
        </Link>
        </Card.Body>
        </Card>

        </Col>
      </Row>
      <div>
      <p>
                
          </p>
          
            <Button href="/login" className="btn btn-success" style={{marginLeft: "680px"}}>
              Salir
            </Button> 
          
               
      </div>
    </Container>
    </main>
    );
}