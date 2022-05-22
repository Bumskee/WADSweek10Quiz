import React, {Component} from "react";
import {Table} from 'react-bootstrap'
import './Home.css';
import axios from 'axios';

export class Home extends Component {

  constructor(props){
    super(props);
    this.state={heros:[]}
  }

  refreshList(){
    fetch(process.env.REACT_APP_API+'heroes')
    .then(response=>response.json())
    .then(data=>{
      this.setState({heros:data});
    });
  }

  componentDidMount(){
    this.refreshList();
  }

  componentDidUpdate(){
    this.refreshList();
  }

  render(){
    const {heros}=this.state;
    return (
      <div class="table_background">
        <Table className="mt-4" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Alias</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
                {heros.map(hero=>
                  <tr key={hero.heros_id}>
                    <td>{hero.name}</td>
                    <td>{hero.alias}</td>
                    <td>Edit / Delete</td>
                  </tr>)}
            </tbody>
        </Table> 
      </div>
    );
  }
}

export default Home;
