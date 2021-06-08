import React, {useState} from 'react'
import Axios from 'axios'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
export default function AddCountry() {
    const [country, setCountry] = useState ({countryName: ""})
    const onChangeCountry = (e) => {
        setCountry({...country,[e.target.name]: e.target.value})
    }
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (e) =>{
        e.preventDefault();          
        
        Axios.post('http://localhost:33456/api/admin/addCountry', {
            "countryName": country.countryName
        }).then((res)=>{
            console.log(res.data)
            alert("Adding Success!")
        })
        setShow(false)       
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>Thêm</Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>Thêm Quốc gia</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>Tên Quốc gia</label>
                            <input type="text" className="form-control form-control-lg" name="countryName" onChange={onChangeCountry}/>
                        </div>                      
                    </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={onSubmit}>Confirm</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

