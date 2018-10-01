import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'



export default class JobAdd extends Component {

    constructor(props){
        super(props);
        this.state={
            job:{
                title:"",
                location:"",
                experience:"",
                postedBy:"",
                description:"",
                company:""
            },
            done:false
        }
    }

    handleChange =(evt) => {
        let job = Object.assign({},this.state.job,{[evt.target.name]: evt.target.value});
        this.setState({
            job:job
        })
    }

    handleSubmit=(evt)=>{
        console.log(this.state.job)
        evt.preventDefault();
        const newEmp = this.state.job;
        axios.post('http://localhost:3000/api/jobs', this.state.job)
        .then((res)=>{
            this.setState({
                done:true
            })

        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        const formData = (<form onSubmit={this.handleSubmit} className="ui inverted form">
            <div className="field">
                <label>Job Title </label>
                <input type="text" name="title" value={this.state.job.title} onChange={this.handleChange} />
            </div>
            <div className="field">
                <label>Job Location </label>
                <input type="text" name="location" value={this.state.job.location} onChange={this.handleChange} />
            </div>
            <div className="field">
                <label>Experience </label>
                <input type="text" name="experience" value={this.state.job.experience} onChange={this.handleChange} />
            </div>
            <div className="field">
                <label>Job Posdted By </label>
                <input type="text" name="postedBy" value={this.state.job.postedBy} onChange={this.handleChange} />
            </div>
            <div className="field">
                <label>Discription </label>
                <input type="text" name="description" value={this.state.job.description} onChange={this.handleChange} />
            </div>
            <div className="field">
                <label>Company </label>
                <input type="text" name="company" value={this.state.job.company} onChange={this.handleChange} />
            </div>

            <button className="ui basic button" type="submit">Add Job</button>
        </form>
        )
        return (
            <div align="center">
                <h3 className="ui red header">Add New Job</h3>
               

                <div className="ui grid">
                    <div className="row">
                        <div className="ui one column stackable center aligned page grid">
                            <div className="column six wide">
                                <div className="ui inverted grey segment">
                                { this.state.done ? <Redirect to="/" /> : formData}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>
        )
    }
}
