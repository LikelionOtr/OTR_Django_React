import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompletedPopup.css';
import { Link } from 'react-router-dom';

class CompletedPopup extends React.Component {
  constructor()
  {
    super()
    this.state={
      show:false
    }
  }
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
  render () {
    return (
     <div>
      <Button variant="secondary" onClick={()=>{this.handleModal()}}> μ μ₯νκΈ° </Button>
      <Modal show={this.state.show} onHide={()=>this.handleModal()}>
        <div id="container">
        <Modal.Header className="modal-header">
        <div class="popup-notice">
        <br/>πμΆνν©λλ€! <span class="violet">7μΌ κ°μ λ¬Έλ΅</span>μ λͺ¨λ μμ±νμ΅λλ€.
        <br/>λ§μ§λ§ λ¨κ³λ‘, μ μλ₯Ό μμ±ν΄λ³ΌκΉμ?
        <br/>
        </div>
        </Modal.Header>
        </div>
        <div id="container">
        <Modal.Body className="modal-body"> 
          <br/><br/><img className="rainbow" alt="rainbow" src="img/rainbow7.png" /><br/><br/>
        </Modal.Body>
        </div>
        <div id="container">
        <Modal.Footer>
          <div className="save-button">
              <Link to = "/creatingpage">
              <Button class="white-button" variant="outline-dark">&nbsp;μ μ μ°λ¬ κ°κΈ°&nbsp;</Button>
              </Link>
          </div>
        </Modal.Footer>
        </div>
      </Modal>
      </div>
    );
  }
}   
export default CompletedPopup;