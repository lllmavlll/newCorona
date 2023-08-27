import React, { useEffect, useState } from 'react'
import './CustomCssFile.css'

const GSIView = () => {
  const[GSIform,setGSIForm] = useState([])

  const onClickHandler =(e)=>{
    const hiddenElement = e.currentTarget.nextSibling;
    hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
   }

   useEffect(()=>{

    fetch('http://localhost:4000/GSI/getGSI')
   .then(response => response.json())
   .then(data =>
    {console.log(data);
    return data
    })
   .then(data =>setGSIForm(data))
   .catch(err=> console.log(err))
   },[])
  return (
    <>
        <div className='page-header'>
            <h1 className='page-title'>Gold Smith Order View</h1>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive OFtable-res ">
                        <table className="table table-bordered OFtable ">
                            <thead>
                                <tr>
                                    <th> SL No. </th>
                                    <th>GSI number</th>
                                    <th>Gold Quantity</th>
                                    <th>Gold Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    GSIform.map((result, index)=>{
                                        return<>
                                            <tr className='collapseRow' onClick={onClickHandler}>
                                                <td>{index+1}</td>
                                                <td>{result.GSIOrderNo}</td>
                                                <td>{result.pureGoldValueQnty}</td>
                                                <td>{result.pureGoldValueAmt}</td>
                                            </tr>
                                            <tr className='collapse'>
                                                <td colSpan='6'>
                                                    <h5 className="card-title">List Of Components for: {result.GSIOrderNo}</h5>
                                                    <div className="table-responsive OFtable-res ">
                                                        <table className="table table-bordered OFtable ">
                                                            <thead>
                                                                <tr>
                                                                    <th>SL.No</th>
                                                                    <th>Component Type</th>
                                                                    <th>Component Name</th>
                                                                    <th>Component Quantity</th>
                                                                    <th>Component Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    result.components.map((comp, index)=>{
                                                                        return<>
                                                                            <tr>
                                                                                <td>{index+1}</td>
                                                                                <td>{comp.compType}</td>
                                                                                <td>{comp.compName}</td>
                                                                                <td>{comp.compQnty}</td>
                                                                                <td>{comp.compAmt}</td>
                                                                            </tr>
                                                                        </>
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default GSIView
