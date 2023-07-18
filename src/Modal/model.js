import React from "react";
import { Selectteam } from "../array/teamarray";

export default function Simplemodal(){
    return <div>
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  ADD PLAYERS
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
  <label for="player-name" class="form-label">Player Name</label>
  <input type="email" class="form-control" id="player-name" placeholder="name"/>
</div>
<div class="mb-3">
  <label for="player-country" class="form-label">Player Country</label>
  <input type="email" class="form-control" id="player-country" placeholder="country"/>
</div>
<div className="row">
    <div className="col-6">

        <label for="select-team" class="form-label">Teams Available</label>
        <select class="form-select" aria-label="Default select example">
  <option selected>Select Team</option>
  {Selectteam.map((team,index)=>  <option  key={index}value="team">{team}</option>
)}
  
</select>
    </div>
    <div className="col-6">
    <div class="mb-3">
  <label for="jersy-Number" class="form-label"> jersy Number</label>
  <input type="number" class="form-control" id="jersy-NumberInput"placeholder="Enter your jersy number"/>
</div>
    </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
}