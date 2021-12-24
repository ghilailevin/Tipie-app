import React, { useEffect, useState } from "react";

const Home = () => {

    const [state, setState] = useState()

    useEffect(()=>{
        fetch("http://localhost:3001/data_tipie")
        .then( res => res.json() )
        .then(data => setState(data))
    },[])

    console.log(state);

    return ( 
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Tipie List</span>
                </div>
            </nav>

            <table class="table table-hover table-xxl">
    <thead>
    <tr>
      <th scope="col">index</th>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
      <th scope="col">Sector</th>
      <th scope="col">Email</th>
    </tr>
    </thead>
  <tbody>
    {
        state?.sort((a, b) =>
            a.name.localeCompare(b.name)
        ).map((user, index) => (
            
            <tr>
                <th scope="row">{index}</th>
                <td >{user.name}</td>
                <td >{user.age}</td>
                <td >{user.sector}</td>
                <td >{user.email}</td>
            </tr>
            
        ))
    }
                </tbody>
            </table>
        </div>
    );
}
 
export default Home;