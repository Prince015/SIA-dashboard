import { Button, DatePicker, Form, Input, InputNumber, Select, TimePicker } from 'antd'
import React, { useState } from 'react'
import './AddNewFacilityTypes.css'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import CustomIcon from 'components/util-components/CustomIcon';
import { Verified } from 'assets/svg/icon';
import TextArea from 'antd/lib/input/TextArea';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function AddNewFacilityTypes() {

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        handleOk()
    };

    const onChange = (time, timeString) => {
        // console.log(time, timeString);
    };

    const handleOk = () => {
        setTimeout(() => {
            setIsModalOpen(false);
        }, 10000)
    };

    const handleCancelModal = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div style={{ width: "200px" }} >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const { Option } = Select;

    return (
        <Form layout='vertical'>
            <div>
                <div style={{ gap: "20px" }} className='d-flex'>
                    <div style={{ flex: "0.7" }}>
                        <div className='border rounded p-3 py-4'>
                            <h4 className='font-weight-bold'>Add New Facility Type</h4>
                            <Form.Item name='facilityTypeId' label="Facility Type Id" rules={[{ required: true, message: 'Please enter facility type id!', type: 'text' }]}>
                                <Input placeholder='Item Name' />
                            </Form.Item>
                            <Form.Item
                                name="facility"
                                label="Facility"
                                rules={[{ required: true, message: 'Please select facility!' }]}
                            >
                                <Select placeholder="Event Facility">
                                    <Option value="Sports Facility">Sports Facility</Option>
                                    <Option value="Resturant & Bar">Resturant & Bar</Option>
                                    <Option value="Dancing Facility">Dancing Facility</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="facilityTypeName" label="Facility Type Name" rules={[{ required: true, message: 'Please input facility type name!' }]}>
                                <Input placeholder='Facility Type Name' />
                            </Form.Item>
                            <Form.Item name="date-picker" label="Business Days" >
                                <DatePicker format={['DD/MM/YYYY', 'DD/MM/YY']} placeholder='DD/MM/YYYY' style={{ width: "100%" }} />
                            </Form.Item>
                            <Form.Item name="time-picker" label="Business Time" rules={[{ type: 'array', required: true, message: 'Please select business time!' }]}>
                                <TimePicker use12Hours format="h:mm a" style={{ width: "100%" }} onChange={onChange} />
                            </Form.Item>
                            
                            <Form.Item name="event_fee_members" label="Event Fee/Pax (For Members)" >
                                <InputNumber placeholder='Event Fee' style={{ width: "100%" }} min={0} />
                            </Form.Item>
                            <Form.Item name="event_fee_non_members" label="Event Fee/Pax (For Non-Members)" >
                                <InputNumber placeholder='Event Fee' style={{ width: "100%" }} min={0} />
                            </Form.Item>
                        </div>
                        <Form.Item className='border rounded p-3 py-4 mt-4' name="facilityAmenities" label="Facility Amenities" >
                            <TextArea rows={8} placeholder='Type Here' style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item className='border rounded p-3 py-4 mt-4' name="facilityDescription" label="Facility Description" >
                            <TextArea rows={8} placeholder='Type Here' style={{ width: "100%" }} />
                        </Form.Item>
                    </div>
                    <div style={{ flex: "0.3", minWidth: "300px", height: "280px" }} className='border rounded p-3 py-4'>
                        <h4 className='font-weight-bold'>Add Images</h4>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}

                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                            <img
                                alt="example"
                                style={{
                                    width: '100%',
                                }}
                                src={previewImage}
                            />
                        </Modal>
                    </div>
                </div>
                <Form.Item >
                    <div style={{ gap: "10px" }} className='mt-5 d-flex justify-content-end'>
                        <Button className='px-4 font-weight-semibold' htmlType="button">
                            Back
                        </Button>
                        <Button className='px-4 font-weight-semibold' htmlType="button" >
                            Clear All
                        </Button>
                        <Button onClick={showModal} className="px-4 font-weight-semibold text-white bg-info" htmlType="submit" >
                            Save
                        </Button>
                    </div>
                </Form.Item>
            </div>
            <Modal width={400} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancelModal}>
                <div className='d-flex my-3 align-items-center flex-column justify-content-center'>
                    <CustomIcon svg={Verified} />
                    <h3 className='font-weight-bold mt-4'>New Facility Type Added!</h3>
                    <span className='text-center font-size-sm w-75 font-weight-semibold'>Facility Type Id #123 Indoor Hall for Events Facility
                        Added Successfully.</span>
                </div>
            </Modal>
        </Form>
    )
}

export default AddNewFacilityTypes