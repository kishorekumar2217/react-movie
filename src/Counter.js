import React, { Component } from 'react'

export default class Counter extends Component {
    state ={
        counter:''
        ,a:'',
        b:'',
        c:'',
        equ:'=',
        ans:''
    }
 
//     add =() =>
//    {
//        this.setState({
//            counter:parseInt(this.state.a)  + parseInt(this.state.b)
//        })
//    };
//    sub =() =>
//    {
//        this.setState({
//            counter:this.state.a - this.state.b
//        })
//    };
//    mul=() =>
//    {
//        this.setState({
//            counter:this.state.a * this.state.b
//        })
//    };

//    div =() =>
//    {
//        this.setState({
//            counter:this.state.a / this.state.b
//        })
//    };
//    del =() =>
//    {
//        this.setState({
          
//            counter:"",
//            a:"",
//            b:""
        
//        })
//    };
//    onHandelChange = event  =>{
//        this.setState({
//            a:event.target.value
//        });

//    }
//    onHandelChanges = event  =>{
//     this.setState({
//         b:event.target.value
//     });

// }
   onClicks=(event)=>{
                    //console.log(this.state.a+event.target.name)
                             if(event.target.name!= '+' && event.target.name!= '-' && event.target.name!='*' && event.target.name!= '/' && event.target.name!= '=' )
                             {

                                     if(this.state.b==""  )
                                             {
                                                var testa = this.state.a +event.target.name
                                                console.log('a='+testa)
                                                this.setState({
                                                    a:testa
                                                })
      
                                            }
                                            
                                    else 
                                                {
                                                    var testb = this.state.c +event.target.name 
                                                     console.log('c='+testb)
                                                    this.setState({
                                                    c:testb
                                                    
                                                    })

                                                }
                                            }


                                    if (this.state.a!=""  && (event.target.name== '+' || event.target.name== '-' || event.target.name=='*' || event.target.name=='/' )){
                                        var testc = event.target.name +''
                                         console.log("b="+testc)
                                        this.setState({
                                        b:testc
                                        })

                                        
                                    }

                                    if(event.target.name == '=' ){
                                        var  sum = parseInt(this.state.a)+this.state.b+parseInt(this.state.c)
                                        
                                        console.log( eval( sum ) )
                                           
                                        this.setState({
                                             ans:eval( sum )
                                             })
        
                                            }




                                            if(event.target.name == 'c' ){
                                               
                                                
                                                
                                                  
                                                this.setState({
                                                     a:"",
                                                     b:'',
                                                     c:'',
                                                     ans:''
                                                     })
                
                                                    }


                                            


    
   }
   

    render() {
        return (
            <div id='calc-contain'>
                  
                    {/* <tr>
                <label>first number :</label>
                <input type="text" className="text" required pattern={0-9
                } onChange={this.onHandelChange} ></input>
               
                <label>Second number :</label>
           <input className="text" type="number"onChange={this.onHandelChanges} ></input>
                <label>Result</label>
            <input className="text" value={this.state.counter}></input>
            </tr> */}

             {/* <input type="text" className="text" required pattern={0-9
                } value={this.state.a} onChange={this.onHandelChange} ></input> */}
                <div className="text" > 
                 <h1 className="head">{this.state.a} 
                  {this.state.b }
                  {this.state.c } 
                  
                <br/>
                   {this.state.ans} </h1>
                   

                  
                  </div>

              
                {/* <input className="text" type="text" className="text" 
                value={this.state.ans}  ></input> */}
            <tr>
                
           
            <button  className="bt" name="1" onClick={this.onClicks}>1</button>
                <button className="bt"name="2" onClick={this.onClicks}>2</button>
                <button className="bt" name="3" onClick={this.onClicks} >3</button>
                <button className="bt"name="4" onClick={this.onClicks} >4</button>
                <button className="bt" name="5" onClick={this.onClicks}>5</button>
                <button  className="bt" name="6" onClick={this.onClicks} >6</button>
                <button className="bt" name="7" onClick={this.onClicks}>7</button>
                <button className="bt" name="8" onClick={this.onClicks}>8</button>
                <button className="bt" name="9" onClick={this.onClicks}>9</button>
                <button className="bt"name="0" onClick={this.onClicks}>0</button>
                    
                <button  className="bt" name="+"onClick={this.onClicks}>+</button>
                <button className="bt" name="-"onClick={this.onClicks}>-</button>
                <button className="bt" name="*" onClick={this.onClicks}>*</button>
               <button className="bt" name="/"onClick={this.onClicks}>/</button>
               <button className="bt" name="="onClick={this.onClicks}>=</button>
                
                <button className="dt" name="c"onClick={this.onClicks}>C</button>
               
                
                </tr>

   
        
                
        <div>



        </div>
        
   
            </div>
        )
    }
}
