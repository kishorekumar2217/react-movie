import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {

      name: "",
      position: "",
      mobno: "",
      dob: "",
      
      list: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  

  };

  onAddItem = () => {
    /*this.setState((state) => {
      state.list.push(
         state.name,
        "possition :  " + this.state.position,
        "mob no :" + this.state.no
      );
    });*/
  };

  onClearArray = () => {
    this.setState({ list: [] });
  };


  
  onRemoveItem = i => {
    
    this.setState(state => {
      
      let list = state.list.filter((user, j) => i !== j);

 
      return {
        list
        
      };
    });
  };



 






  handleSubmit = (e) => {
    e.preventDefault();
    this.state.list.push({
     
      name: this.state.name,
      mobno: this.state.mobno,
      position: this.state.position,
     dob: this.state.dob,
  
    });
    
  };

  render() {
    return (
     
      <div className="container">
        <div className="header">
          <div className="mainname">
            <a class="mainhead" href="">
              Employee Details{" "}
            </a>
          </div>
        </div>
        <div class="mainbody">
          <div className="center">
          
          </div>
          <div className="leftbody">
            <form className="form" onSubmit={this.handleSubmit}>
              <h1>Employee Details</h1>
              <label className="label">Name:</label>
              <input
                required
                pattern="([a-zA-Z\s]){2,}"
                placeholder="Enter name"
                name="name"
              
                onChange={this.handleInputChange}
                type="text"
                className="text"
              />
              <br />

              <label className="label">Date of birth: </label>
              <input
                name="dob"
              
                onChange={this.handleInputChange}
                type="date"
                className="text"
                required
              />
              <br />
              <label className="label">Position:</label>
              <input
                required
                pattern="([a-zA-Z\s]){2,}"
                placeholder="Enter position"
                name="position"
              
                onChange={this.handleInputChange}
                type="text"
                className="text"
              />
              <br/>
              <label className="label">Mobile number: </label>
              
              <input
                required
                pattern="([0-9]){2,}"
                placeholder="Enter mob no"
                name="mobno"
               
                onChange={this.handleInputChange}
                type="number"
                className="text"
              />
           
              <button className="bt" type="submit" name="action">
                Submit{" "}
              </button>
            </form>
          </div>
          <div className='rightbody'>
            <table className='table'>
              <thead>
                <tr>
               
                  <th>Name</th>
                  <th>Dob</th>
                  
                  <th>Position</th>
                  <th>Mobno</th>
              
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.list.map((user,index) =>
                    <tr key={user}>
                          
                        
                      <td>{user.name}</td>
                      <td>{user.dob}</td>
                      <td>{user.position}</td>
                      <td>{user.mobno}</td>
                     

                      <td>
                        <div>
                          <button  type="button" onClick={() => this.onRemoveItem(index)}className=" bt1" type="submit" >

                          </button>
                        </div>
                      </td>
                   
                    </tr>
                  )
                }


              </tbody>
            </table>
            <button className="bt"  onClick={this.onClearArray} type="button" name="action">Reset</button>
          </div>
       
         
        </div>
      </div>
    );
  }
}
