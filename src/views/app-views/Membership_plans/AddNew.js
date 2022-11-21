import { Button, Form, Input, InputNumber, Modal } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { dollars, Verified } from 'assets/svg/icon'
import CustomIcon from 'components/util-components/CustomIcon'
import React from 'react'
import { useState } from 'react'

export default function AddNew() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        handleOk()
    };

    const handleOk = () => {
        setTimeout(() => {
            setIsModalOpen(false);
        }, 10000)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Form layout="vertical">
                <div className='border rounded p-3'>
                    <div style={{ gap: "60px" }} className='d-flex '>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='membershipId' label="Membership Id" rules={[{ required: true, message: 'Please enter Membership Id' }]} >
                                <Input placeholder="Membership Id" />
                            </Form.Item>
                            <Form.Item name='membershipPeriod' label="Membership Period" >
                                <InputNumber min={1} style={{ width: "100%" }} placeholder="Membership Period" />
                            </Form.Item>
                        </div>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='membershipType' label="Membership Type" rules={[{ required: true, message: 'Please enter Membership Type' }]} >
                                <Input placeholder="Full Name" />
                            </Form.Item>
                            <Form.Item label="Membership Amount">
                                <InputNumber min={0} style={{ width: "100%" }} prefix={<CustomIcon svg={dollars} className="site-form-item-icon" />} placeholder="Amount" />
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item label="Membership Perks">
                        <TextArea placeholder='Type here' rows={6} />
                    </Form.Item>
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

            </Form>
            <Modal width={400} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='d-flex my-3 align-items-center flex-column justify-content-center'>
                    <CustomIcon svg={Verified} />
                    <h3 className='font-weight-bold mt-4'>MembershipPlan Created!</h3>
                    <span className='text-center font-size-sm w-75 font-weight-semibold'>Membership Plan 1 crested successfully</span>
                </div>
            </Modal>
        </div>
    )
}
