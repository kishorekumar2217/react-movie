import React, {  } from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      list:[ ],
      dummydata : [{Title: "Shock and Awe", Year: "2017", imdbID: "tt5540992", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTAzOW…2IwMjQxXkEyXkFqcGdeQXVyMjgyOTI1ODY@._V1_SX300.jpg"}]
      
  }
}
  search(key) {
    
    

    fetch("http://www.omdbapi.com/?apikey=4d80ce0a&s=" + key).then((data) => {
      data.json().then((result) => {
        //  console.warn(result)
          this.setState({list:result})
        
        
      });
    });
  }

  render() {
    return (
      <div>
        <label className="label">Search</label>
        <input
          onChange={(event) => this.search(event.target.value)}
          placeholder="search "
          type="text"
          className="text"              
        />
     {/* <ul>
          {this.state.searchData.map(item => (
            <li>
              The film name is {item.age} 
             
            </li>
          ))}
        </ul>    */}
        {/* <ul>
          {this.state.list.map(item => (
            <li key={item.id}>
              The person is {item.Title} and  {item.name}years old.
              
            </li>
          ))}
        </ul>  */}



        <ul>


        {

        Object.entries(this.state.list).map(([key={subject}, subject], i) => (


          Object.entries(subject).map(([key, subject2], i) => (

            <li key={subject2.id}>
              {subject2.Title} and  {subject2.name}years old.
              
            </li>
            // console.warn(subject2)

          ))
            //  console.warn(subject.Title)
        ))
        
        }





        </ul> 
      
      </div>
    );
  }
}
