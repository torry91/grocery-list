import { Component } from 'react';
import check from './checked.jpg';


export class Shopping extends Component {
    state = {
        userInput: '',
        shopping: []
    }

    onChangeEvent(e) {
        this.setState({ userInput: e });
    }

    addItem(input) {
        if (input === '') {
            alert('Please add and item')
        } else{ 
        let listArray = this.state.shopping;
        listArray.push(input);
        this.setState({ shopping: listArray, userInput: '' })
        console.log(listArray);
    }
    }
    deleteItem() {
        let listArray = this.state.shopping;
        listArray = [];
        this.setState({shopping: listArray})
    }

    crossedWord (event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e){
        e.preventDefault();
    }

    render() {
        return(
            <div>
            <form onSubmit = {this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="Products to buy"
                onChange={(e) => { this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
                </div>
            <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className='btn-add'>Add</button>
            </div>
            <ul>
                {this.state.shopping.map((item, index) => (
                <li onClick ={this.crossedWord}key={index}>
                    <img src={check} width={"35px"} alt='pic'/>
                    {item}</li>
                ))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className='btn-delete'>Delete</button>
            </div>
            </form>
            </div>

        )
    }
}
