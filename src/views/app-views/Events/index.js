import { Menu, Modal } from 'antd'
import { Export, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Events.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { membershipEventBooking } from '../data'
import Helper from '../Helper'



export default function Events() {

  const [MembershipDetailBookingData, setMembershipDetailDataBookingData] = useState(membershipEventBooking)
  

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

    const membershipBookingColumns = [
        {
          title: 'Event Id',
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
          title: "Event Date",
          dataIndex: 'event_date',
        },
        {
          title: "Event Time",
          dataIndex: 'event_time',
        },
        {
          title: "Event Address",
          dataIndex: 'event_address',
        },
        {
          title: "Event Fee/Pax",
          dataIndex: 'payment_amount',
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
                      <Link to='/app/events' > <EyeOutlined className='mr-2 ' />View Details</Link >
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

  return (
    <div>
      <div className='d-flex justify-content-between mb-3'>
        <div className='membershipPlanTableSearchFilter'>

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
        <Link to='event_list/add_new' className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'>Add New</Link>
      </div>
      <div>
      <Helper clients={MembershipDetailBookingData} attribiue={membershipBookingColumns} />
      </div>

    </div>
  )
}
