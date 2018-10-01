import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/components/dialog/Dialog';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';



export default class JobDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            visible:true
        }
    }

    onHide=(event)=>{
        this.state.visible=false
        console.log("on hide-> ",this.state.visible)
        this.setState({
            visible: true
        })
    }
  render() {
    return (
      <div>
          <div className="content-section implementation">
                 <Dialog header="Job Details" visible={this.state.visible}  width="350px" modal={true} onHide={this.onHide}>
                 <div className="ui inverted black segment"> <div className="ui card">
                     <div className="content">
                         <div className="header">
                             Details for job Id : {this.props.pass_porps_to_job_details.id}
                         </div>
                         <div className="description">
                             <p><strong>Job Title: </strong> {this.props.pass_porps_to_job_details.title}</p>
                             <p><strong>Job Location: </strong> {this.props.pass_porps_to_job_details.location}</p>
                             <p><strong>Required Experience: </strong> {this.props.pass_porps_to_job_details.experience}</p>
                             <p><strong>Posted By: </strong> {this.props.pass_porps_to_job_details.postedBy}</p>
                             <p><strong>Job Desciption: </strong> {this.props.pass_porps_to_job_details.description}</p>
                         </div>
                     </div>
                 </div>
                 </div> 
                 
                </Dialog>
            </div>
          
      </div>
    )
  }
}



// export default class JobDetails extends Component {

//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         job: null
//     //     }
//     // }

//     // componentDidMount = () => {
//     //     const jobId = parseInt(this.props.match.params.id, 10);
//     //     axios.get('http://localhost:3000/api/jobs/' + jobId)
//     //         .then((res) => {
//     //             this.setState({
//     //                 job: res.data

//     //             })
//     //             console.log(this.state.job);
//     //         })
//     //         .catch((err) => {
//     //             console.log(err);
//     //         })
//     // }

//     render() {
            
//         const data = (this.props.job ? 
//             <div className="content-section implementation">
//                 <Dialog header="Godfather I" visible={this.state.visible} width="350px" modal={true} onHide={this.onHide}><div className="ui one column stackable center aligned page grid">
//                 <div className="ui inverted black segment"> <div className="ui card">
//                     <div className="content">
//                         <div className="header">
//                             Details for job Id : {this.props.pass_porps_to_job_details.id}
//                         </div>
//                         {/* <div className="description">
//                             <p><strong>Job Title: </strong> {props.job.title}</p>
//                             <p><strong>Job Location: </strong> {props.job.location}</p>
//                             <p><strong>Required Experience: </strong> {props.job.experience}</p>
//                             <p><strong>Posted By: </strong> {props.job.postedBy}</p>
//                             <p><strong>Job Desciption: </strong> {props.job.description}</p>
//                         </div> */}
//                     </div>
//                 </div>
//                 </div> 
//                 </div>
//                 </Dialog>
//             </div>: null)
//         return (
//             <div align="center">
//                 <h3 className="ui red header">Job Details</h3>
//                 {data}<br/>
//                 <Link className="ui basic teal button" to="/">Back to Job Search </Link>
//             </div>
//         )
//     }
// }
// // return(
// //     this.state.job ? <div className="ui inverted teal segment"> <div className="ui card">
// //       <div className="content">
// //         <div className="header">
// //           Details for job Id : {this.state.job.id}
// //         </div>
// //         <div className="description">
// //         <p><strong>Job Title: </strong> {this.state.job.title}</p>
// //         </div>
// //       </div>
// //     </div>
// //     </div> : null
// //   )