import { Menu, Modal } from 'antd'
import { Export, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React from 'react'
import { Link } from 'react-router-dom'
import { membershipFacilityBooking } from '../data'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import Helper from '../Helper'
import './FacilityBooking.css'
import { useState } from 'react'
function FacilityBooking() {

    const [facilityBookingData, setFacilityBookingData] = useState(membershipFacilityBooking)

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

    const facilityBookingColumns = [
        {
          title: 'Booking Id',
          dataIndex: 'booking_id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          render : text =>{
            return <p className='font-weight-bold text-dark' >{text}</p>
          }
        },
        {
          title: "Facility Name",
          dataIndex: 'facility',
        },
        {
          title: "Facility Type",
          dataIndex: 'facility_type',
        },
        {
          title: "Booking Time",
          dataIndex: 'booking_timing',
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
          title: "Amount Paid",
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
                      <Link to='facility_booking' > <EyeOutlined className='mr-2 ' />View Details</Link >
                    </Menu.Item>
                    <Menu.Item>
                      <span onClick={() => onDeleteData(record,setFacilityBookingData,'event_id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
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
      <Helper clients={facilityBookingData} attribiue={facilityBookingColumns} />
      </div>

    </div>
  )
}

export default FacilityBooking