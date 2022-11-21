import { Table } from 'antd'
import React, { useState } from 'react'
import './Helper.css'

function Helper({ attribiue, clients }) {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);


    return (
        <div>
        
            <Table rowSelection={{
                selectedRowKeys,
                onChange: (selectedRowKeys, selectedRows) => {
                    setSelectedRowKeys(selectedRowKeys);
                }
            }} columns={attribiue} dataSource={clients} />
        </div>
    )
}

export default Helper;

