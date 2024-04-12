import React from "react";
import { Col, Form, Input, Row } from "antd";
import { Person } from "../interfaces/person.interface";

interface ViewPersonFormProps {
  person: Person;
}

const ViewPersonForm: React.FC<ViewPersonFormProps> = ({ person }) => {
  return (
    <Form layout="horizontal">
      <Row gutter={24}>
        <Col span={4}>
          <Form.Item label="คำนำหน้า">
            <Input value={person.title} readOnly />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="ชื่อจริง">
            <Input value={person.name} readOnly />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="นามสกุล">
            <Input value={person.surname} readOnly />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16} justify={"start"}>
        <Col span={7}>
          <Form.Item label="วันเกิด">
            <Input value={person.dob} readOnly />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item label="สัญชาติ">
            <Input value={person.national} readOnly />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16} justify={"start"}>
        <Col span={5}>
          <Form.Item label="เลขบัตรประชาชน">
            <Input value={person.personalId} readOnly />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Form.Item label="เพศ">
          <Input value={person.gender} readOnly />
        </Form.Item>
      </Row>

      <Row gutter={24}>
        <Col span={4}>
          <Form.Item label="หมายเลขโทรศัพท์มือถือ">
            <Input value={person.mobileCode} readOnly />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item>
            <Input value={person.mobileNum} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="หนังสือเดินทาง">
            <Input value={person.passport} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="เงินเดือนที่คาดหวัง">
            <Input value={person.expectSalary} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ViewPersonForm;
