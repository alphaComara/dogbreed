import React, { Component } from 'react';
 import axios from 'axios';
 import { Table, Button } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 import '../index.css';
 import DeleteDog from './DeleteDog';
 
 var divStyle = {
 margin: '8% 8%',
 };
 
 class ListDog extends Component {
 
    constructor(props) {
        super(props);
        this.DeleteDog = new DeleteDog();
        this.state = {
            dogs: []
        }
        this.deleteDogDetails = this.deleteDogDetails.bind(this);
    }
 
    componentDidMount = () => {
        this.getDogsList();
    }
 
    // To get all the Dogs
    getDogsList() {
        axios.get('http://localhost:4000/dogsBreed')
        .then((response) => {
            console.log(response);
            this.setState({
                dogs: response.data
            });
        })
        .catch((error) => {
            console.log(error);
            alert('Error While Fetching a record.. : ' + error)
        })
    }
 
    // To delete any Dogs
    deleteDogDetails(dogid) {
        if (window.confirm('Are you sure?')) {
            this.DeleteDog.deleteDogDetails(dogid);
            //this.getDogsList();
        } else {
            console.log('Delete action cancelled.!');
        }
        
    }
 
    render() {
        const { dogs } = this.state;
        return (
            <div style={divStyle}>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Breed</th>
                        <th>Height Low Inches</th>
                        <th>Height High Inches</th>
                        <th>Weight Low LBS</th>
                        <th>Weight High LBS</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        dogs && dogs.map((dog, i) => {
                            return (
                                <tr key={i}>
                                <td>{i}</td>
                                <td>{dog.breed}</td>
                                <td>{dog.height_low_inches}</td>
                                <td>{dog.height_high_inches}</td>
                                <td>{dog.weight_low_lbs}</td>
                                <td>{dog.weight_high_lbs}</td>
                                <td>
                                    <Link to={"editdogs/" + dog._id} className="btn btn-primary">Edit</Link>
                                </td>
                                <td>
                                    <Button onClick={() => this.deleteDogDetails(dog._id)} className="btn btn-danger" >Delete</Button>
                                </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </Table>
            </div>
        );
    } 
 }
 
 export default ListDog;