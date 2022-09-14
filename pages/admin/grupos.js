import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";

export default function Grupos(props){
    const datos1=[{
        nombre:"04",
        id:"G04"
    }, {
        nombre:"05",
        id:"G05"
    }, {
        nombre:"06",
        id:"G06"
    }]
    return (
        <div className={styles.container}>
        <Head>
          <title>CICLO III MISIÓN TIC 2022</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h3 className={styles.title} style={{marginBottom:"40px"}}>
            Grupos
          </h3>

          <div>

          <button type="button" className="btn btn-primary" >
                Crear Grupo
                </button>  
          </div>
  
          <Table striped bordered hover style={{width: "400px", marginTop:"20px"}}>
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Número del Grupo</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                
               {datos1.map((dato, i) =>(
                <tr key={dato.docum}>
                <th scope="row">{dato.id}</th>
                <td>{dato.nombre}</td>
                <td>
                <button type="button" className="btn btn-primary" >
                Editar
                </button>
                <button type="button" className="btn btn-danger" >
                Eliminar
                </button>
                </td></tr> 
               ))}
               
            </tbody>
            </Table>
  
            <div>
            <Button href="/admin" className="btn btn-success" style={{marginLeft: "480px"}}>
              Regresar
            </Button> 
               
            </div>

          </main>

        
        </div>
)
}