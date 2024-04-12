import React, { useEffect } from "react";
import { Form, Input, Button, DatePicker, Radio, Select, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { editPerson } from "../features/personSlice";
import moment from "moment";
import { Person } from "../interfaces/person.interface";

const { Option } = Select;

interface EditPersonFormProps {
  person: Person;
  onCancel: () => void;
}

const EditPersonForm: React.FC<EditPersonFormProps> = ({
  person,
  onCancel,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...person,
      dob: moment(person.dob),
    });
  }, [person, form]);

  const onFinish = (values: any) => {
    dispatch(
      editPerson({
        ...values,
        id: person.id,
        dob: values.dob.format("MM-DD-YYYY"),
      })
    );
    onCancel();
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      onFinish={onFinish}
      initialValues={{
        remember: true,
      }}
    >
      <Row gutter={24}>
        <Col span={4}>
          <Form.Item
            name="title"
            label="คำนำหน้า"
            rules={[{ required: true, message: "กรุณาใส่คำนำหน้า!" }]}
          >
            <Select placeholder="คำนำหน้า">
              <Option value="นาย">นาย</Option>
              <Option value="นาง">นาง</Option>
              <Option value="นางสาว">นางสาว</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name="name"
            label="ชื่อจริง"
            rules={[{ required: true, message: "กรุณาใส่ชื่อจริง!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name="surname"
            label="นามสกุล"
            rules={[{ required: true, message: "กรุณาใส่นามสกุล!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16} justify={"start"}>
        <Col span={7}>
          <Form.Item
            name="dob"
            label="วันเกิด"
            rules={[{ required: true, message: "กรุณาเลือกวันเกิด!" }]}
          >
            <DatePicker format="MM/DD/YYYY" placeholder="เดือน/วัน/ปี" />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item
            name="national"
            label="สัญชาติ"
            rules={[{ required: true, message: "กรุณาเลือกสัญชาติ!" }]}
          >
            <Select placeholder="-- กรุณาเลือก --">
              <Option value="ไทย">ไทย</Option>
              <Option value="อเมริกัน">อเมริกัน</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16} justify={"start"}>
        <Col span={5}>
          <Form.Item name="personalId" label="เลขบัตรประชาชน">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Form.Item
          name="gender"
          label="เพศ"
          rules={[{ required: true, message: "กรุณาเลือกเพศ!" }]}
        >
          <Radio.Group>
            <Radio value="ผู้ชาย">ผู้ชาย</Radio>
            <Radio value="ผู้หญิง">ผู้หญิง</Radio>
            <Radio value="ไม่ระบุ">ไม่ระบุ</Radio>
          </Radio.Group>
        </Form.Item>
      </Row>

      <Row gutter={24}>
        <Col span={4}>
          <Form.Item
            name="mobileCode"
            label="หมายเลขโทรศัพท์มือถือ"
            rules={[
              { required: true, message: "กรุณาใส่หมายเลขโทรศัพท์มือถือ!" },
            ]}
          >
            <Select>
              <Option value="66">66</Option>
              <Option value="68">68</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item name="mobileNum">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="passport" label="หนังสือเดินทาง">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="expectSalary"
            label="เงินเดือนที่คาดหวัง"
            rules={[
              { required: true, message: "กรุณาระบุเงินเดือนที่คาดหวัง!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          บันทึก
        </Button>
        <Button
          type="default"
          onClick={onCancel}
          style={{ marginLeft: "10px" }}
        >
          ยกเลิก
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditPersonForm;
