import React, { useState } from 'react';
import { Container, Card, Button, Form, Input, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { onAuth } from '../redux/action/auth';

function Login(props) {
    const [ loginData, setLoginData] = useState({email: "", password: ""})

    const changeHandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            username: loginData.email,
            password: loginData.password
        }
        props.onAuth(data);
    }

    return (
        <Container>
            <Card className="mt-5 p-3">
                <Form onSubmit={submitHandler}>
                    <Row className="mb-3 px-3">
                        <Input 
                            type="email" 
                            name="email"
                            value={loginData.email}
                            onChange={changeHandler}
                            placeholder="email" 
                        />
                    </Row>
                    <Row className="mb-3 px-3">
                        <Input 
                            type="password" 
                            name="password" 
                            value={loginData.password}
                            onChange={changeHandler}
                            placeholder="password" 
                        />
                    </Row>
                    <Button>Submit</Button>
                </Form>
            </Card>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        empsData: state.empsReducer.empList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (data) => dispatch(onAuth(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
