import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Panel} from 'primereact/components/panel/Panel';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import JobDetails from './job-details'
export default class JobList extends Component {
    constructor(props){
        super(props);
        this.state={
            job:[],
            selectedJob : null
        }
        
        this.popUpClick = this.popUpClick.bind(this);
    }

    componentDidMount = () =>{
        axios.get('http://localhost:3000/api/jobs')
        .then((res)=>{
            console.log(res.data);
            this.setState({
                job:res.data
            })

        })
        .catch((err)=>{
            console.log(err);
        })
    }

    popUpClick=(data)=>{
        
        this.setState({
            selectedJob : data
        })
        console.log('state updated->',this.state.show_job);
    }

    
    deleteJob = (evt) =>{
        let job = this.state.job.filter(job => job.id !== evt)
        this.setState({job})
        console.log(job)
    }
    
    render() {

        const panelData = this.state.job.map(j=>{
            return(
                <div>
                <Panel key={j.id} header={j.title}   toggleable={true}>
                    <div className="ui-panel-content">
                        <div className="ui-g-8">
                            <div><strong>Job Title: </strong>{j.title}</div>
                            <div><strong>Job Location: </strong>{j.location}</div>
                            <div><strong>Required Experience: </strong>{j.experience}</div>
                        </div>
                    </div>
                    <button className="ui basic green button" onClick={()=>this.popUpClick(j)}>Show Details</button>
                    {/* <div class="ui-g-8">
                        <div class="ui-g-4"></div>
                        <div class="ui-g-4"><strong>Job Location: </strong>{j.location}</div>
                        <div class="ui-g-4"><strong>Required Experience: </strong>{j.experience}</div>
                    </div> */}
                </Panel>
                </div>
            )
        })
        const rowData = this.state.job.map(j => {
            return(
                <tr key={j.id}>
                    <td>{j.title}</td>
                    <td>{j.location}</td>
                    <td>{j.experience}</td>
                    {/* <td><Link className="ui basic green button" to={`/job/${j.id}`}>Show Details</Link> */}
                    <td><button className="ui basic green button" onClick={()=>this.popUpClick(j)}>Show Details</button>
                    <button className="ui basic red button" onClick={()=>this.deleteJob(j.id)}>Delete</button></td>
                    
                    
                </tr>
            )
        }) 

        return (
        <div>
            {/* <h3 align="center" className="ui red header">Available Jobs</h3>
            <table className="ui black table">
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Job Location</th>
                        <th>Required Experience</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rowData}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3">
                            <div className="ui right floated pagination menu">
                            <a className="icon item">
                                <i className="left chevron icon"></i>
                                </a>
                                <a className="item">1</a>
                                <a className="item">2</a>
                                <a className="item">3</a>
                                <a className="item">4</a>
                                <a className="icon item">
                                <i className="right chevron icon"></i>
                            </a>
                            </div>
                        </th>
                    </tr>
                </tfoot>
            </table> */}
            <h3 align="center" className="ui red header">Available Jobs</h3>
            {panelData}
            {this.state.selectedJob && <JobDetails pass_porps_to_job_details={this.state.selectedJob}></JobDetails> }
            
        </div>
        )
    }
}
