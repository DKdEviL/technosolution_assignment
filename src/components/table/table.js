import React from 'react';
import './table.css';

function table (props) {
    let maximum = 0;
    function compare(a, b){
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0;
    }
    props.data.sort(compare)
    function capitalize(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function addFun(data){
        let color = "#000";
        let status = "Pass"
        const totalMarks = parseInt(data.marks.Maths) + parseInt(data.marks.English) + parseInt(data.marks.Science);
        
        if(!(parseInt(data.marks.Maths) >= 20 && parseInt(data.marks.English) >= 20 && parseInt(data.marks.Science))){
            color = "#ff0000";
            status = "Fail"
        }
        if(totalMarks > maximum){
            maximum = totalMarks;
        }
        return {
            name: capitalize(data.name),
            rollNumber: data.rollNumber,
            total: totalMarks,
            color: color,
            status: status
        };
    }

    function showResult(data) {
        let newDataArr = [];
        data.map(data => {
            newDataArr.push(addFun(data));
        })
        newDataArr.map(data => {
            if(data.total === maximum){
                data.color = "#00ff00";
                data.status = "Topper"
            }
        })
        return newDataArr;
    }
    return (
        <div>
           <table>
                <label style={{fontWeight: "bold"}}>Students Result Board</label>
                <tr>
                    <th>Student Name</th>
                    <th>Roll No.</th>
                    <th>Total Marks</th>
                    <th>Status</th>
                </tr>
                {
                    showResult(props.data).map((data) => {
                        return(
                            <tr style={{color: data.color}}>
                                <td>{data.name}</td>
                                <td>{data.rollNumber}</td>
                                <td style={{textAlign: "right"}}>{data.total}</td>
                                <td>{data.status}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default table;