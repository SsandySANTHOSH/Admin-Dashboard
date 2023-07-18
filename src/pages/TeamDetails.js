import React from "react";
import Datatable from "../component/Datatable";
import Simplemodal from "../Modal/model";

export default function TeamDetails(){
    return<div className="team-details-page-container">
<img  
className="Team-banner-image"
alt="Team-banner"
src="https://sportsmintmedia.com/wp-content/uploads/2020/09/cskwe-3.jpg"/>
<div className="team-table-container">
  <div className="row mb-3">
    <div className="col-6"> 
    <h1>
      CSK PLAYERS <span>(12/12) </span>
    </h1>
    </div>
    <div className="col-6 d-flex flex-row-reverse">
      <Simplemodal/>
    </div>
  </div>
<Datatable />
</div>

    </div>
}