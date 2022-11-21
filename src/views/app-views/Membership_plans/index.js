import { Menu, Modal } from 'antd'
import { Export, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React from 'react'
import { membershipDetail } from '../data'
import './MembershipPlan.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Helper from '../Helper'

export default function MembershipPlan() {

  const [MembershipDetailData, setMembershipDetailData] = useState(membershipDetail)

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
      title: 'Membership Id',
      dataIndex: 'membership_id',
    },
    {
      title: "Membership Plan",
      dataIndex: 'membershipType',
      render : text =>{
        return <p style={{letterSpacing:"0.7px"}} className='text-dark font-weight-bold ' >{text}</p>
      }
    },
    {
      title: "Membership Period",
      dataIndex: 'membership_period',
    },
    {
      title: "Amount",
      dataIndex: 'amount',
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
                  <Link to='/app/membership/membership_plans' > <EyeOutlined className='mr-2 ' />View Details</Link >
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
        <Link to='membership_plans/add_new' className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'>Add New</Link>
      </div>
      <div>
      <Helper clients={MembershipDetailData} attribiue={membershipHistoryColumns} />
      </div>

    </div>
  )
}
