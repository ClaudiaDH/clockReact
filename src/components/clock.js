import React from 'react';
import { interval } from '../../node_modules/rxjs';

export default class Clock extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            //Objeto que pegará a hora atual.
            timer: new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval( () =>{
            let interval_id = setInterval(() => {
                 //não fazer assim:
                 //this.state.timer = new Date().toLocaleTimeString()

                this.setState({
                    timer: new Date().toLocaleTimeString()
                })
                }, 1000)

                this.setState({
                    ...this.state,
                    interval_id: interval_id
                })

            })
           
            
    }

    componentWillMount() {
        clearInterval(this.state.interval_id);
    }
    //método principal de um componente é o render
    render(){
        return(
        <div>
            {this.state.timer}
        </div>
        )
    }
}