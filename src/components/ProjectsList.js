import React, { Component } from 'react';
import axios from 'axios';

class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/projects`)
            .then( res => {
                this.setState({projects: res.data})
            })
            .catch( error => {
                console.log(error)
            })
    }

    render() { 
        return (
            this.state.projects.map(project => {
                return (
                    <div className="project thumbnail">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                )
            })
        )
    }
}
 
export default ProjectsList;