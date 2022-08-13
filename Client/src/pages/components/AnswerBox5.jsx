import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnswerBox1.css';
import SavedPopup5 from './SavedPopup5';


function AnswerBox5() {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" className="box">
        <Form.Control
          as="textarea"
          placeholder = "답변을 입력해주세요" 
          style={{ height: '300px' }}
        />
      </FloatingLabel>
      <br/><br/>
      <div className= "completed">
      <SavedPopup5/>
      </div>
    </>
  );
}

export default AnswerBox5;