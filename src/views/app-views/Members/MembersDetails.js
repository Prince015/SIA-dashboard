import { Menu, Modal, Tabs } from 'antd'
import { Account, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React, { useState } from 'react'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { membershipDetail, membershipEventBooking, membershipFacilityBooking, membershipPayment } from '../data'
import './MemberDetails.css'
import Helper from '../Helper'
import { Link } from 'react-router-dom'

export default function MembersDetails() {
  const [MembershipDetailData, setMembershipDetailData] = useState(membershipDetail)
  const [MembershipDetailPayment, setMembershipDetailDataPayment] = useState(membershipPayment)
  const [MembershipDetailBookingData, setMembershipDetailDataBookingData] = useState(membershipEventBooking)
  const [MembershipDetailFacilityBookingData, setMembershipDetaDetailFacilityBookingData] = useState(membershipFacilityBooking)

  const onDeleteData = (record,dataSet,Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dataSet((pre) => {
          return pre.filter((member) => member[Id] !== record[Id])
        })
      }
    })
  }

  const membershipHistoryColumns = [
    {
      title: 'Membership id',
      dataIndex: 'membership_id',
    },
    {
      title: "Membership Type",
      dataIndex: 'membershipType',
    },
    {
      title: "Activation Date",
      dataIndex: 'activation_date',
    },
    {
      title: "Expiry Date",
      dataIndex: 'expiry_date',
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
                  <Link to='/app/membership/members/membersdetails' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record,setMembershipDetailData,"membership_id")}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]
  const membershipPaymentColumns = [
    {
      title: 'Payment id',
      dataIndex: 'payment_id',
    },
    {
      title: "Membership Type",
      dataIndex: 'membershipType',
    },
    {
      title: "Payment Date",
      dataIndex: 'payment_date',
    },
    {
      title: "Payment Amount",
      dataIndex: 'payment_amount',
    },
    {
      title: "Payment Mode",
      dataIndex: 'payment_mode',
      render : text =>{
        return <p className='text-primary font-weight-semibold ' >{text}</p>
      }
    },
    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text === "Pending" ? 'text-danger membershipPaymentPending' : "text-success membershipPaymentPaid"} font-weight-semibold`}>{text}</p>
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
                  <Link to='/app/membership/members/membersdetails' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record,setMembershipDetailDataPayment,'payment_id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]
  const membershipBookingColumns = [
    {
      title: 'Event id',
      dataIndex: 'event_id',
    },
    {
      title: "Event Name",
      dataIndex: 'event_name',
      render : text =>{
        return <p className='font-weight-bold text-dark' >{text.length>18 ? `${text.slice(0,18)}...` : text}</p>
      }
    },
    {
      title: "Booking Date",
      dataIndex: 'event_date',
    },
    {
      title: "Payment Amount",
      dataIndex: 'payment_amount',
    },
    {
      title: "No of PAX",
      dataIndex: 'no_of_pax',
    },
    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text === "Cancel" ? 'text-danger membershipPaymentPending' : "text-success membershipPaymentPaid"} font-weight-semibold`}>{text}</p>
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
                  <Link to='/app/membership/members/membersdetails' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record,setMembershipDetailDataBookingData,'event_id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]
  const membershipFacilityBookingColumns = [
    {
      title: 'Booking id',
      dataIndex: 'booking_id',
    },
    {
      title: "Facility",
      dataIndex: 'facility',
      render : text =>{
        return <p className='font-weight-bold text-dark' >{text.length>18 ? `${text.slice(0,18)}...` : text}</p>
      }
    },
    {
      title: "Facility Type",
      dataIndex: 'facility_type',
    },
    {
      title: "Payment Amount",
      dataIndex: 'payment_amount',
    },
    {
      title: "Date of Booking",
      dataIndex: 'booking_date',
    },
    {
      title: "No of Guest",
      dataIndex: 'no_of_guest',
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
                  <Link to='/app/membership/members/membersdetails' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record,setMembershipDetaDetailFacilityBookingData,'booking_id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  return (
    <div className='membershipDetailLayout'>


      <div className='membershipDetailLeft'>
        <div className='membershipDetailProfile'>
          <CustomIcon svg={Account} />
        </div>
        <p className='membershipDetailName'>John Smith</p>
        <p className='membershipDetailStatus'>Active</p>
        <hr />
        <p className='memberDetailProfileTitle'>Account Details</p>
        <p className='membershipDetailText'><CustomIcon svg={History} /> #123456</p>
        <p className='membershipDetailText'><CustomIcon svg={History} /> 19/08/1990</p>
        <hr />
        <p className='memberDetailProfileTitle'>Contact</p>
        <p className='membershipDetailText'><CustomIcon svg={History} /> +91 8767898778</p>
        <p className='membershipDetailText'><CustomIcon svg={History} /> 15 Changi Business Park
          Cres Singapore</p>
        <p className='membershipDetailText'><CustomIcon svg={History} /> johnsmith@gmail.com</p>

      </div>
      <div className='membershipDetailRight'>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={`Membership History`} key="1">
            <div className='memberDetailTableSearchFilter'>
              <form className='memberDetailSearch'>
                <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
              </form>
              <div className='memberDetailFilter'>
                <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
              </div>
            </div>
            <div className='membershipDetailTable'>
              <Helper clients={MembershipDetailData} attribiue={membershipHistoryColumns} />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Payments" key="2">
            <div className='memberDetailTableSearchFilter'>
              <form className='memberDetailSearch'>
                <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
              </form>
              <div className='memberDetailFilter'>
                <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
              </div>
            </div>
            <div className='membershipDetailTable'>
              <Helper clients={MembershipDetailPayment} attribiue={membershipPaymentColumns} />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Event Bookings" key="3">
            <div className='memberDetailTableSearchFilter'>
              <form className='memberDetailSearch'>
                <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
              </form>
              <div className='memberDetailFilter'>
                <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
              </div>
            </div>
            <div className='membershipDetailTable'>
              <Helper clients={MembershipDetailBookingData} attribiue={membershipBookingColumns} />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Facility Bookings" key="4">
            <div className='memberDetailTableSearchFilter'>
              <form className='memberDetailSearch'>
                <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
              </form>
              <div className='memberDetailFilter'>
                <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
              </div>
            </div>
            <div className='membershipDetailTable'>
              <Helper clients={MembershipDetailFacilityBookingData} attribiue={membershipFacilityBookingColumns} />
            </div>
          </Tabs.TabPane>
        </Tabs>

      </div>
    </div>
  )
}