import { Menu, Modal } from 'antd'
import { Export, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React, { useState } from 'react'
import {membershipPayment} from '../data'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Helper from '../Helper'
import './Payments.css'


export default function Payments() {

  const [MembershipDetailPayment, setMembershipDetailDataPayment] = useState(membershipPayment)
  
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

  const membershipPaymentColumns = [
    {
      title: 'Payment id',
      dataIndex: 'payment_id',
    },
    {
      title: 'Applicant Name',
      dataIndex: 'name',
      render : text =>{
        return <p style={{letterSpacing:"0.7px"}} className='text-dark font-weight-bold ' >{text}</p>
      }

    },
    {
      title: "Membership Type",
      dataIndex: 'membershipType',
    },
    {
      title: "Date of Payment",
      dataIndex: 'payment_date',
    },
    {
      title: "Payment Mode",
      dataIndex: 'payment_mode',
      render : text =>{
        return <p style={{letterSpacing:"0.7px"}} className='text-primary font-weight-bold ' >{text}</p>
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
                  <Link to='/app/membership/payments' > <EyeOutlined className='mr-2 ' />View Details</Link >
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
      <Helper clients={MembershipDetailPayment} attribiue={membershipPaymentColumns} />
      </div>

    </div>
  )
}
