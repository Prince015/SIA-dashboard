import { Button, Form, Input, Menu, Select, Switch } from 'antd'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import React, { useState } from 'react'
import './MembershipRequest.css'
import { DeleteOutlined, CloseOutlined, EyeOutlined } from '@ant-design/icons'
import { membershipRequest } from '../data'
import CustomIcon from 'components/util-components/CustomIcon'
import { Account, Edit, Export, History, Verified } from 'assets/svg/icon'
import Helper from '../Helper'
import { Modal, Drawer } from 'antd';
// import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default function MembershipRequest() {

  const [membershipRequestData, setmembershipRequestData] = useState(membershipRequest)
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    handleOk()
  };

  const handleOk = () => {
    setTimeout(()=>{
      setIsModalOpen(false);
    },5000)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDeleteData = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setmembershipRequestData((pre) => {
          return pre.filter((member) => member.id !== record.id)
        })
      }
    })
  }

  const membershipRequestColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: "Applicant Name",
      dataIndex: 'applicant_name',
    },
    {
      title: "Phone Number",
      dataIndex: 'phone',
    },
    {
      title: "Email ID",
      dataIndex: 'email',
    },
    {
      title: "Membership Type",
      dataIndex: 'membershipType',
    },
    {
      title: "Date of Request",
      dataIndex: 'date_of_request',
    },
    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text !== "Active" ? 'text-danger' : "text-success"} font-weight-semibold`}>{text}</p>
      }
    },
    {
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
            <EllipsisDropdown menu={
              <Menu>
                <Menu.Item>
                  <span onClick={showDrawer} > <EyeOutlined className='mr-2 ' />View Details</span >
                  <Drawer
                    title={`Membership Request Details `}
                    placement='right'
                    width={400}
                    onClose={onClose}
                    visible={visible}
                    className='membershipRequestDrawer'
                  >
                    <div className='membershipRequestProfile'>
                      <div>
                        <p className='membershipRequestTitle'>Membership Request Details</p>
                        <p className='membershipRequestDesc'>Find Membership request details below.</p>
                      </div>
                      <CloseOutlined onClick={onClose} />
                    </div>
                    <div className='membershipRequestProfileLogo'>
                      <CustomIcon svg={Account} />
                      <span className='membershipRequestProfileName'>John Smith</span>
                    </div>
                    <div className='membershipRequestProfileDetail'>
                      <div className='membershipRequestProfileDetailLeft'>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Email Address</span>
                          <p className='membershipRequestProfileDetailTitleAns'>johnsmith@gmail.com</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Address</span>
                          <p className='membershipRequestProfileDetailTitleAns'>
                            15 Changi Business Park Cres Singapore
                          </p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Membership Type</span>
                          <p className='membershipRequestProfileDetailTitleAns'>New Member</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Date of Application</span>
                          <p className='membershipRequestProfileDetailTitleAns'>12/09/2022</p>
                        </div>
                      </div>
                      <div className='membershipRequestProfileDetailRight'>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Phone Number</span>
                          <p className='membershipRequestProfileDetailTitleAns num'>+65 123456789</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Gender</span>
                          <p className='membershipRequestProfileDetailTitleAns'>Male</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Membership Plan</span>
                          <p className='membershipRequestProfileDetailTitleAns'>Plan1</p>
                        </div>
                      </div>
                    </div>
                    <div className='membershipRequestProfileDetailForm'>
                      <Form layout="vertical">
                        <Form.Item name='membership_status' label="Membership Status" rules={[{ required: true, message: 'Please select membership status!' }]}>
                          <Select placeholder="Active">
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="inactive">Inactive</Select.Option>
                            <Select.Option value="pending">Pending</Select.Option>
                            <Select.Option value="rejected">Rejected</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name='remarks' label="Remarks" >
                          <Input placeholder='Type Here' />
                        </Form.Item>
                        <Form.Item className='d-flex flex-row-reverse align-items-center' name="sendMail" label="Do you want to send an email to applicant ?" valuePropName="checked">
                          <Switch />
                        </Form.Item>
                        <div style={{ gap: "30px" }} className='d-flex justify-content-center'>
                          <Form.Item>
                            <Button onClick={onClose} htmlType="button">Cancel</Button>
                          </Form.Item>
                          <Form.Item>
                            <Button onClick={showModal} type="primary" htmlType="submit">
                              Submit
                            </Button>
                          </Form.Item>
                        </div>
                      </Form>
                    </div>
                    <Modal  width={400} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <div className='d-flex my-3 align-items-center flex-column justify-content-center'>
                        <CustomIcon svg={Verified} />
                        <h3 className='font-weight-bold mt-4'>Membership Request Approved</h3>
                        <span className='text-center font-size-sm w-75 font-weight-semibold'>Request Id #123 for membership plan 1 is
                          approved successfully. </span>
                      </div>
                    </Modal>
                  </Drawer>
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record)}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
                <Menu.Item>
                  <span className='d-flex align-items-center' ><CustomIcon className='mr-2' svg={Edit} />Edit</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  return (
    <div>
      <div className='memberDetailTableSearchFilter'>
        <form className='memberDetailSearch'>
          <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
        </form>
        <div className='memberDetailFilter'>
          <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
        </div>
        <div className='memberDetailFilter'>
          <CustomIcon svg={Export} /> <span className='memberDetailFilterText'> Export</span>
        </div>

      </div>
      <div>
        <Helper clients={membershipRequestData} attribiue={membershipRequestColumns} />
      </div>

    </div>
  )
}
