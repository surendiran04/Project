import React, { useState }from "react";
import {
  Card,
  Button,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";
import DatePicker from "react-datepicker";
import {useDispatch } from "react-redux";
import { addTasks } from "../Redux/TaskReducer";

const INITIAL_STATE = {
  title: "",
  description: "",
  endDate: "",
  endTime: "",
};

export default function TaskCard(){
  const [formData, setFormData] = useState(INITIAL_STATE);//here,we are passing INITIAL_STATE to empty the input after hitting the save button
  const dispatcher = useDispatch();

  /*React.useEffect(() => {
    setFormData(task.title ? task : INITIAL_STATE);
    return () => {};
  }, [task]);*/


  const values={}
  function handleChange(e) {
    let formDataCopy = {
      ...formData,
    };
    formDataCopy[e.target.id] = e.target.value;
    setFormData(formDataCopy);
 
  }

  function handleSaveTask(e) {
    dispatcher(addTasks(formData));
    console.log(formData)
    setFormData(INITIAL_STATE);
    
  }
  
  return (
    <Card
      body
      className="mb-3 mt-4 pb-4 mx-3"
      style={{ textAlign: "start", background: "#F1F2F6" }}
    >
      <h5 className="mb-3 head-clr">Add a Task</h5>
      <FormGroup>
        <Input
          type="text"
         name="title"
          id="title"
          placeholder={`Title`}
          onChange={handleChange}
          style={{ border: "none", background: "#F1F2F6",}}
        
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder={`Add a Task...`}
          value={values["description"]}
          onChange={handleChange}
          style={{ border: "none", background: "#F1F2F6", }}
        />
      </FormGroup>
      <p className="mb-0" style={{fontSize:"16px"}}><i class='bx bx-calendar-alt' style={{fontSize:"16px"}}></i> Date/Time</p>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        showTimeSelect
        timeFormat="pp"
        handleChange={handleChange}
        endDate={values["endDate"]}
        endTime={values["endTime"]}
      />
      <Row lg={12}>
        <Col lg={{ size: 2, order: 1, offset: 10 }}>
          <Button
            style={{
              width: "100%",
              backgroundColor: "#203562",
            }}
            onClick={handleSaveTask}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
