import React, { Component } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


// const App = () => {
//     return (
//         <div className='tc'>
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <CardList robot = {robot}/> 
//         </div>
//     );
// }

class App extends Component {

    constructor() {
        super()
        this.state = {   //state is what decribes our app
            robot: [],
            searchfield: ''
        }
    } 

    componentDidMount(){ //make request from API?
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({ robot: user}));
    }

    onSearchChange = (event) =>  {
        this.setState({ searchfield: event.target.value })       
    }  
  
    render() {
        const { robot,searchfield } = this.state;
        const filteredRobots = robot.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //Lowercase的目的是為了消除大小寫而無法比較的因素
              //includes是一種比較的方式
              //用this.searchfield因為searchfield是state的其中一部分
            })
        return robot.length === 0? <h1>Loading</h1> ://!robot.length
        (
        <div className='tc'>
            <h1 className='f1'>ROBOFRIENDS</h1>
            <SearchBox searchChange={ this.onSearchChange } />
            <Scroll>
                <ErrorBoundry>
                    <CardList robot = { filteredRobots }/>  
                </ErrorBoundry>
            </Scroll>
        </div>
            );
    }
} 

export default App;