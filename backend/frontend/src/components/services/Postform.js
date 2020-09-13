import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions'


class Postform extends React.Component {
constructor(props) {
    super(props);

    this.state = {fields:{
        uName:'',
        uSurname:'',
        id:'',
        uEmail: '',
        uPassword: '',
        uCPassword:'',
        uContactNumber: '',
        uCountry: '', 
        UDOB:'',
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e){
    this.setState({ [e.target.name]: e.target.value });
}

onSubmit(e){
    e.preventDefault();
    const post = {
        uName:this.state.uName,
        uSurname:this.state.uSurname,
        id:this.state.id,
        uEmail: this.state.uEmail,
        uPassword: this.state.uPassword,
        uCPassword:this.state.uCPassword,
        uContactNumber: this.state.uContactNumber,
        uCompany:"NONE",
        uType : 'GIGGER',
        uCountry: this.state.uCountry, 
        uDOB:this.state.uDOB
    };
    
    this.props.createPost(post);
}



    render() {
        return (
        <div>
            <h1> Join QG </h1>
            <form onSubmit = {this.onSubmit}>
                <div>
                    <label>Name</label><br/>
                    <input type="text" name="uName"onChange={this.onChange} value={this.state.uName}/>
                </div>
                <br/>
                <div>
                    <label>Surname</label><br/>
                    <input type="text" name="uSurname"onChange={this.onChange} value={this.state.uSurname}/>
                </div>
                <br/>
                <div>
                    <label>ID Number</label><br/>
                    <input type="text" name="id"onChange={this.onChange} value={this.state.id}/>
                </div>
                <br/>
                <div>
                    <label>Email Address</label><br/>
                    <input type="email" name="uEmail"onChange={this.onChange} value={this.state.uEmail}/>
                </div>
                <br/>
                <div>
                    <label>Password</label><br/>
                    <input type="password" name="uPassword"onChange={this.onChange} value={this.state.uPassword}/>
                </div>
                <br/>
                <div>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="uCPassword"onChange={this.onChange} value={this.state.uPassword}/>
                </div>
                <br/>
                <div>
                    <label>Date of Birth</label><br/>
                    <input type="text" name="uDOB"onChange={this.onChange} value={this.state.uDOB}/>
                </div>
                <br/>
                <div>
                    <label>Contact Number</label><br/>
                    <input type="text" name="uContactNumber"onChange={this.onChange} value={this.state.uContactNumber}/>
                </div>
                <br/>
                <div>
                    <label>Country</label><br/>
                    <input type="text" name="uCountry"onChange={this.onChange} value={this.state.uCountry}/>
                </div>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
        );
    }
}

Postform.propTypes ={
    createPost: PropTypes.func.isRequired
}


export default connect(null,{ createPost})(Postform);