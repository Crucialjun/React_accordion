import React,{useState} from "react";
import "./App.css"
import { FcExpand,FcCollapse } from "react-icons/fc";

const Data = ({title,body}) => {
    const [show,setShow] = useState[false];

    const handleClick = ()=>{
        setShow(!show)
    }
    return (
        <div className="accordion-item" onClick={handleClick}>
            <div className="accordion-title">
                <h5>{title}</h5>
                <p>
                    {show ? <FcExpand size={20}></FcExpand> :<FcCollapse size={20}></FcCollapse>}
                    
                </p>
            </div>
            {show &&<p>{body}</p>}
        </div>
    )
}

export default Data