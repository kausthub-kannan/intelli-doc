import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, downArrow } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { auth } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';
import { read_report } from '../firebase/reports';

const Reports = () => {
  const navigate = useNavigate()
  const editing = { allowDeleting: true, allowEditing: true };
  const [id, setId] = useState()
  const [data, setData] = useState([])

  useEffect( async  () =>{
		const user = auth.currentUser;
		if(!user){  
			navigate('/login')
		}else{
      setId(user.uid)
      const response = await read_report(id)
      setData(response)
      console.log(ordersData)
      console.log(response)
    }
	},[id])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Your Reports" />
      <GridComponent
        id="gridcomp"
        dataSource={data}
        allowPaging
        allowSorting
        allowPdfExport
        allowExcelExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
       
      </GridComponent>
    </div>
  );
};
export default Reports;


