import React, { } from "react";
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';





export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      list: [],
      value: '',
      details: '',
      show: false,
      noData: false,

    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.showDetails = this.showDetails.bind(this);

  }
  // handleSubmit(event) {
  search(key) {
    //   event.preventDefault();
    //   // this.setState({ value: this.element.value });


    // var key = this.state.value



    axios.get('http://www.omdbapi.com/?apikey=4d80ce0a&s=' + key)
      .then((res) => {
        if (res.data.Response) {
          console.log(res.data.Search, 'totaldata')
          if (res.data.Search && res.data.Search.length)

            this.setState({
              list: res.data.Search,

            })



        }



      })

  }
  // }


  showDetails(imdbID) {
    console.log(imdbID, "msg")

    axios.get('http://www.omdbapi.com/?apikey=4d80ce0a&i=' + imdbID)
      .then((res) => {

        this.setState({
          details: res.data,
          show: true

        })

      })

  }




  handelModel() {
    this.setState({ show: false })

  }



  render() {
    const {
      Title,
      Released,
      Genre,
      Plot,
      Actors,
      Poster,
      Director,
      Writer



    } = this.state.details;


















    return (

      <div>

        <form >
          <input
            placeholder="Search for a movie"

            type="text" onChange={(event) => this.search(event.target.value)} ref={el => this.element = el} />

          {/* <button type="button" onClick={this.handleSubmit}>
            <i class="fa fa-search"></i>
          </button> */}
        </form>

        {

        }


        <div className="movie-card-container">




          <div >

            {
              this.state.list.map((item) => {
                return (
                  <tr>
                    <img src={item.Poster} className="image" alt="no poster"></img>
                    <td> <h3><b>Name:</b>{item.Title}<br />
                      <b>Year:</b>  {item.Year}<br />

                      <b>Type:</b> {item.Type}<br />
                      <b>Imdbid:</b>  {item.imdbID}<br />

                    </h3>
                      <br />
                      <Button variant="success" className="bt"
                        onClick={() => { this.showDetails(item.imdbID) }
                        }> movie Details</Button>

                    </td>
                  </tr>

                )

              })
            }

          </div>
        </div>

        <div className="App">
          <header>

            <Modal show={this.state.show}>
              <Modal.Header style={{ backgroundColor: "white" }}><h2 style={{ fontFamily: "Arial" }, { color: "black" }}><b>{Title}</b></h2></Modal.Header>
              <Modal.Body className="modelbody">
                <h3 style={{ fontFamily: "Arial" }, { color: "white" }}>{Released}  |  {Genre}</h3>

                <img src={Poster} className="popimage" alt="no poster"></img>
               
                <p style={{ fontFamily: "Arial" }, { color: "white" }}>{Plot}</p>
                <h5 style={{ fontFamily: "Arial" }, { color: "white" }}> Director:{Director}  <br/> Writer: {Writer} <br/>
                Stars:{Actors}
               </h5>
            
               

              </Modal.Body>
              <Modal.Footer style={{ backgroundColor: "white" }}>
                <Button variant="danger" onClick={() => { this.handelModel() }}>
                  close
         </Button>

              </Modal.Footer>
            </Modal>
          </header>
        </div>

















      </div>
    );
  }
}
