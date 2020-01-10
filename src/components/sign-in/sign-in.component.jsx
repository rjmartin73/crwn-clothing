import React, { Component } from 'react';
import InputForm from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'
class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <InputForm
                        type="email"
                        name="email"
                        label="email"
                        handleChange={this.handleChange}
                        value={this.state.email} required />
                    <InputForm
                        type="password"
                        name="password"
                        label="password"
                        handleChange={this.handleChange}
                        value={this.state.password} required />
                    <CustomButton type="submit" value="Submit Form">Sign In </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;