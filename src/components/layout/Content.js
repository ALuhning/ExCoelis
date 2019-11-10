import React, { Component } from 'react'
import { connect } from 'react-redux'
import  AssignTEForm  from '../pieces/AssignTEForm'
import  AssignJMForm  from '../pieces/AssignJMForm'
import IssueWingsForm from '../pieces/IssueWingsForm'

class Content extends Component {
    
    render() {
        return (
            <div>
                <AssignTEForm />
                <AssignJMForm />
                <IssueWingsForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Content)