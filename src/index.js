import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';


function FromPerson({frp}) {
    const {salutation,name,addressline1,addressline2}=frp;
    return (
        <div className="fromPerson">
           {salutation}. {name}<br/>
            {addressline1}. <br/>
            {addressline2}
        </div>
    )
}

FromPerson.propTypes={
    frp: PropTypes.shape({
        salutation:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        addressline1:PropTypes.string.isRequired,
        addressline2:PropTypes.string
    })
}

function Stamp({s}) {
    return (
        <div className="stamp">
            <p>{s}</p>
        </div>
    )
}
Stamp.propTypes = {
    s:PropTypes.string
}
function ToPerson({frt}){
    const {salutation,name,addressline1,addressline2}=frt;
    return(
        <div className="toPerson">
            {salutation}. {name}<br/>
            {addressline1}. <br/>
            {addressline2}
        </div>
    )
}
ToPerson.propTypes={
    frt: PropTypes.shape({
        salutation:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        addressline1:PropTypes.string.isRequired,
        addressline2:PropTypes.string
    })
}

function Envelope({info}) {
    return (
        <div className="envelope_out">
            <div className="container">
                <FromPerson frp={info.fromperson} />
                <Stamp s={info.stamp}/>
            </div>
            <ToPerson frt={info.toperson}/>

        </div>
    )
}

const information ={
    fromperson:{
        salutation: "MR",
        name: "Vakas",
        addressline1:"Jhelum",
        addressline2:"Pakistan"
    },
    toperson:{
        salutation: "MRS",
        name: "Vakas",
        addressline1:"Machine Mohallah",
        addressline2:" Jhelum Pakistan"
    },
    stamp:"STAMP"
};


ReactDOM.render(<Envelope info = {information}/>,
    document.querySelector('#root'));