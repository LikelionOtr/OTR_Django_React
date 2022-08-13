import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnswerBox1.css';
import SavedPopup2 from './SavedPopup2';


function AnswerBox2() {
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
      <SavedPopup2/>
      </div>
    </>
  );
}

export default AnswerBox2;