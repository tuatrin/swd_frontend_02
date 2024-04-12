import React, { useRef } from "react";
import { Form, Input, Button, DatePicker, Radio, Select, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { addPerson } from "../features/personSlice";
import type { InputRef } from "antd";

const { Option } = Select;

const AddPersonForm: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const idInput1Ref = useRef<InputRef>(null);
  const idInput2Ref = useRef<InputRef>(null);
  const idInput3Ref = useRef<InputRef>(null);
  const idInput4Ref = useRef<InputRef>(null);
  const idInput5Ref = useRef<InputRef>(null);

  const handleInputChange = (inputRef: any, nextInputRef: any) => {
    if (
      inputRef.current &&
      inputRef.current.input.value.length >= inputRef.current.input.maxLength
    ) {
      nextInputRef.current?.focus();
    }
  };

  const onFinish = (values: any) => {
    const personalId = [
      values.nationalId1,
      values.nationalId2,
      values.nationalId3,
      values.nationalId4,
      values.nationalId5,
    ].join("");

    values = { ...values, personalId };

    const newPerson = {
      ...values,
      dob: values.dob.format("MM-DD-YYYY"),
      personalId: personalId,
      id: Date.now().toString(),
    };
    dispatch(addPerson(newPerson));
    form.resetFields();
  };

  return (
    <div
      style={{
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: "10px",
        padding: "8px",
      }}
    >
      <Form
        form={form}
        name="addPersonForm"
        layout="horizontal"
        onFinish={onFinish}
        initialValues={{
          gender: "male",
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
            <Form.Item name="nationalId1" label="เลขบัตรประชาชน">
              <Input
                ref={idInput1Ref}
                maxLength={1}
                onChange={() => handleInputChange(idInput1Ref, idInput2Ref)}
              />
            </Form.Item>
          </Col>
          <Col span={1}>
            <div style={{ textAlign: "center" }}>-</div>
          </Col>
          <Col span={4}>
            <Form.Item name="nationalId2" noStyle rules={[{ required: true }]}>
              <Input
                ref={idInput2Ref}
                maxLength={4}
                onChange={() => handleInputChange(idInput2Ref, idInput3Ref)}
              />
            </Form.Item>
          </Col>
          <Col span={1}>
            <div style={{ textAlign: "center" }}>-</div>
          </Col>
          <Col span={4}>
            <Form.Item name="nationalId3" noStyle rules={[{ required: true }]}>
              <Input
                ref={idInput3Ref}
                maxLength={5}
                onChange={() => handleInputChange(idInput3Ref, idInput4Ref)}
              />
            </Form.Item>
          </Col>
          <Col span={1}>
            <div style={{ textAlign: "center" }}>-</div>
          </Col>
          <Col span={3}>
            <Form.Item name="nationalId4" noStyle rules={[{ required: true }]}>
              <Input
                ref={idInput4Ref}
                maxLength={2}
                onChange={() => handleInputChange(idInput4Ref, idInput5Ref)}
              />
            </Form.Item>
          </Col>
          <Col span={1}>
            <div style={{ textAlign: "center" }}>-</div>
          </Col>
          <Col span={2}>
            <Form.Item name="nationalId5" noStyle rules={[{ required: true }]}>
              <Input
                ref={idInput5Ref}
                maxLength={1}
                onChange={() => handleInputChange(idInput5Ref, idInput5Ref)}
              />
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
          <Col span={2} />
          <Col>
            <Form.Item>
              <Button onClick={() => form.resetFields()}>ล้างข้อมูล</Button>
            </Form.Item>
          </Col>
          <Col span={1} />
          <Col>
            <Form.Item>
              <Button htmlType="submit">บันทึก</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddPersonForm;
