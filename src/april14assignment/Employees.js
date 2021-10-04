import {useState, useEffect} from 'react';
import axios from 'axios';
import 'react-table-6/react-table.css';
import ReactTable from 'react-table-6';

export default function Employees() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('/employees.json')
        .then(function(res){
            console.log(res);
            setData(res.data);
        })
    },[])
    const columns = [{
        Header:"Name",
        accessor:"name"
    },{
        Header:"Location",
        accessor:"loc"
    }]
    return(
        <div>
            <ReactTable data={data}
            columns={columns}
            defaultPageSize = {1}
            pageSizeOptions = {[2,4,6]}
            />
        </div>
    )
}