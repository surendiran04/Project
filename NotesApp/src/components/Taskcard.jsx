import React from "react";
import {
  Card,
  Button,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";
import DatePicker from "react-datepicker";


export default function TaskCard({
  handleChange = () => {},
  values = {},
  type = "Task",
  handleSubmit = () => {},
}) {
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
          value={values["title"]}
          onChange={handleChange}
          style={{ border: "none", background: "#F1F2F6",}}
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder={`Add a ${type}...`}
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
      />
      <Row lg={12}>
        <Col lg={{ size: 2, order: 1, offset: 10 }}>
          <Button
            style={{
              width: "100%",
              backgroundColor: "#203562",
            }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
