import React, { Component } from 'react';
import Modal from '../../modal/modal';
import './studentForm.css';

class studentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {},
            showModal: false
        }
    }

    dataSubmit(event){
        event.preventDefault();
        this.setState({showModal: !this.state.showModal})
    }
    modalHandler(){
        this.setState({showModal: !this.state.showModal})
    }

    handleChange(field, e){
        let fields = this.state.fields;
        let errors = this.state.errors;

        switch(field){
            case 'fname':
                if(e.target.value.length > 20){
                    errors["fname"] = "First Name must be less than 20 characters!";
                    e.target.className = "error"
                    alert(errors["fname"])
                }else{
                    errors["fname"] = ""
                    e.target.className = "simple"
                }
            break;
            case 'lname':
                if(e.target.value.length > 20){
                    errors["lname"] = "Last Name must be less than 20 characters!";
                    e.target.className = "error"
                    alert(errors["lname"])
                }else{
                    errors["lname"] = ""
                    e.target.className = "simple"
                }
            break;
            case 'class':
                if(e.target.value.match(/[^A-Za-z0-9]/)){
                    errors["class"] = "No Special Character Allowed";
                    e.target.className = "error"
                    alert(errors["class"])
                }else{
                    errors["class"] = ""
                    e.target.className = "simple"
                }
            break;
            case 'yop':
                if(e.target.value < 2017 || e.target.value.length > 4){
                    errors["yop"] = "Passing year should be after 2017";
                    e.target.className = "error"
                    
                }else{
                    errors["yop"] = ""
                    e.target.className = "simple"
                }
            break;
            case 'percent':
                if(parseInt(e.target.value) > 100){
                    errors["percent"] = "Valid Percentage is between 0-100";
                    e.target.className = "error"
                    alert(errors["percent"])
                }else{
                    errors["percent"] = ""
                    e.target.className = "simple"
                }
            break;
            default:
                break;
        }


        fields[field] = e.target.value;
        this.setState({fields})
    }

    validateForm (errors)  {
        let valid = true;
        Object.values(errors).forEach((value) => {
            value.length > 0 && (valid = false)
        })
        return valid;

    }

    render(){
        
        const  errors= this.state.errors;
        let isEnabled = this.validateForm(errors) ? false : true;
        return(
            <div className="form-component">
                <form name="studentForm" className="form" onSubmit={this.dataSubmit.bind(this)}>
                    <label>First Name:
                        <input
                            required 
                            className="simple"
                            refs="fname" 
                            placeholder="First Name" 
                            type="text"
                            value={this.state.fields["fname"]}
                            onChange={this.handleChange.bind(this,"fname")}
                        />
                    </label><br/>
                    <label>Last Name: 
                        <input 
                            refs="lname" 
                            className="simple"
                            required type="text" 
                            placeholder="Last Name" 
                            value={this.state.fields["lname"]}
                            onChange={this.handleChange.bind(this,"lname")}
                        />
                    </label><br/>
                    <label>Class: 
                        <input 
                            refs="class" 
                            className="simple"
                            required type="text"
                            placeholder="Class"
                            value={this.state.fields["class"]}
                            onChange={this.handleChange.bind(this,"class")}
                        />
                    </label><br/>
                    <label>Year of Passing: 
                        <input 
                            refs="yop" 
                            className="simple"
                            required type="number"
                            placeholder="Year of Passing"
                            onChange={this.handleChange.bind(this,"yop")}
                            value={this.state.fields["yop"]}
                        />
                    </label><br/>
                    <label>Percentage: 
                        <input 
                            refs="percent" 
                            className="simple"
                            type="number"
                            onChange={this.handleChange.bind(this,"percent")}
                            required placeholder="Percentage"
                            value={this.state.fields["percent"]}
                        />
                    </label><br/>
                    <input disabled={isEnabled} className="button"  type="submit" value="submit" onSubmit={this.dataSubmit.bind(this)} />
                    
                </form>
                <Modal show={this.state.showModal} modalClosed={this.modalHandler.bind(this)}>
                    
                        <article>Hello, {this.state.fields.fname}. Thank you for passing {this.state.fields.class} in the year {this.state.fields.yop} with {this.state.fields.percent} percentage.</article>
                </Modal>
            </div>
        )
    }
}

export default studentForm;