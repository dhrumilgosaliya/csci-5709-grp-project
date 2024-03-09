import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Upload,
  Typography
} from 'antd';
import Swal from"sweetalert2";

const { TextArea } = Input;
const { Title } = Typography;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const successNotification=()=>{
    Swal.fire({
        title: "Expense Added",
        text: "Expense has been added successfully!",
        icon: "success"
      });
}

const AddExpense = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        layout="horizontal"
        style={{
          width: '40%',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title style={{ color: '#1890ff' }}>Add Expense</Title>
        </div>
        <Form.Item label="Enter Amount">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Expense Type">
          <Radio.Group>
            <Radio value="paid"> Paid </Radio>
            <Radio value="received"> Received </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Payment Medium">
          <Select style={{ width: '100%' }}>
            <Select.Option value="Credit">Credit Card</Select.Option>
            <Select.Option value="Debit">Debit Card/Bank AC</Select.Option>
            <Select.Option value="Cash">Cash</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={4} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Category">
          <Select style={{ width: '100%' }}>
            <Select.Option value="entertainment">Entertainment</Select.Option>
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="rent">Rent</Select.Option>
            <Select.Option value="car">Car</Select.Option>
            <Select.Option value="insurance">Insurance</Select.Option>
            <Select.Option value="grocery">Grocery</Select.Option>
            <Select.Option value="travel">Travel</Select.Option>
            <Select.Option value="technology">Technology</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button type="primary" onClick={successNotification}>Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddExpense;