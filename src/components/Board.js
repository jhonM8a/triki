import React from "react"
import Square from "./Square"

class Board extends React.Component{    
    state ={
        name:null,
    }
    renderSquare(i){
        return <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)}/>
    }
    componentDidMount(){
        this.fetchData()
    }

    fetchData = async() =>{
        try {
            const response = await fetch(`${this.props.url}/`)
            const jsonResponse = await response.json()
            this.setState({
                name: jsonResponse.name
            })
        } catch (error) {
            console.log(`Error : ${error}`)
        }
    }

    render(){

        return(
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <h3>{this.state.name}</h3>
          </div>            
        )
    }
   
}



export default Board