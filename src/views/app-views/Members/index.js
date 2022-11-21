import { Modal } from 'antd'
import React, { useState } from 'react'
import { clients } from '../data'
import Helper from '../Helper'
import './Members.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import CustomIcon from 'components/util-components/CustomIcon'
import { Export, History } from 'assets/svg/icon'
export default function Members() {

  const [membersData, setMembersData] = useState(clients)

  const onDeleteData = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setMembersData((pre) => {
          return pre.filter((member) => member.id !== record.id)
        })
      }
    })
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: "Member Name",
      dataIndex: 'name',
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
      title: "Last Activity",
      dataIndex: 'lastActive',
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
                  <Link to='members/membersdetails' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record)}> <DeleteOutlined className='mr-2 ' />Delete</span>
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
        <Helper clients={membersData} attribiue={columns} />
      </div>
    </div>
  )
}
