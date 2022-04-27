import React from 'react'
import {useState} from "react"
import {Modal, Button,Form} from "react-bootstrap"


export default function ModalEx() {
    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [liste, setListe] = useState([])
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }
    const descHandler = (event) => {
        setDesc(event.target.value);
    }

    const addItem = () => {
        setListe([...liste, (amount, desc)])
        amountHandler([])
        descHandler([])

        
      }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Ekle
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Harcama Girişi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

              <Form.Group className="mb-3" controlId="AmountValue">
                <Form.Label>Tutar</Form.Label>
                <Form.Control value= {amount} onChange={amountHandler} type="number" placeholder="Lütfen Tutarı Giriniz " />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="descValue">
                <Form.Label>Açıklama</Form.Label>
                <Form.Control value= {desc} onChange={descHandler} type="text" placeholder="Lütfen Harcama Detaylarını Giriniz" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              İptal
            </Button>
            <Button type="submit" variant="primary" onClick={addItem}>
              Ekle
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
