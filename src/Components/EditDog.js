import React, { Component } from 'react';
import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }
 
 class EditDog extends Component {
    constructor(props) {
    super(props);
    this.state = {
        fields: {
            breed: '',
            height_low_inches: '',
            height_high_inches: '',
            weight_low_lbs: '',
            weight_high_lbs:''
            }
        }
    }
    
    componentDidMount = () => {
        this.getDogById();
    }

    // To get DOg based on ID
    getDogById() {
        axios.get('http://localhost:4000/dogsBreed/editdogs/' + this.props.match.params.id)
        .then((response) => {
            this.setState({
                    fields:{
                    breed: response.data.breed,
                    height_low_inches: response.data.height_low_inches,
                    height_high_inches: response.data.height_high_inches,
                    weight_low_lbs: response.data.weight_low_lbs,
                    weight_high_lbs: response.data.weight_high_lbs
                    }
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }


    // When value changes of the fields
    handleChange = (field, event) => {
        event.preventDefault();
        //console.log(event.target.value)
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;        
        this.setState({fields});
       // this.setState({ [event.target.name]: event.target.value });
    }
    
    // To add new Dog when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
       
            const { breed, height_low_inches, height_high_inches, weight_low_lbs,weight_high_lbs } = this.state.fields;
            axios.put('http://localhost:4000/dogsBreed/updatedogs/' + this.props.match.params.id , {
                breed : breed,
                height_low_inches : height_low_inches,
                height_high_inches : height_high_inches,
                weight_low_lbs : weight_low_lbs,
                weight_high_lbs : weight_high_lbs
            })
            .then((response) => {
                console.log(response);
                alert('Dog Updated Successfully.!')
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
                alert('While Adding a record.. : ' + error)
            });
        
    }
 
    render() {
        return (
            <div className="container">
                <form style={customStyle} onSubmit={this.handleSubmit}>
                    <label>
                        Dog Breed
                        <input 
                        name="breed"
                        type="text"
                        value={this.state.fields.breed}
                        onChange={this.handleChange.bind(this, "breed")}
                        className="form-control"                        
                        />
                        
                    </label>
                    <br />
                    <label>
                        Height Low Inches
                        <input 
                        name="height_low_inches"
                        type="number"
                        value={this.state.fields.height_low_inches}
                        onChange={this.handleChange.bind(this, "height_low_inches")}
                        className="form-control"
                        />
                       
                    </label>
                    <br />
                    <label>
                        Height High Inches
                        <input 
                        name="height_high_inches"
                        type="number"
                        value={this.state.fields.height_high_inches}
                        onChange={this.handleChange.bind(this, "height_high_inches")}
                        className="form-control"
                        />
                        
                    </label>
                    <br />
                    <label>
                        Weight Low LBS
                        <input 
                        name="weight_low_lbs"
                        type="number"
                        value={this.state.fields.weight_low_lbs}
                        onChange={this.handleChange.bind(this, "weight_low_lbs")}
                        className="form-control"
                        />
                        
                    </label>
                    <br />
                    
                    <label>
                        Weight High LBS
                        <input 
                        name="weight_high_lbs"
                        type="number"
                        value={this.state.fields.weight_high_lbs}
                        onChange={this.handleChange.bind(this, "weight_high_lbs")}
                        className="form-control"
                        />
                       
                    </label>
                    <br />
                    
                    <br />
                    <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
 }
 
 export default EditDog;