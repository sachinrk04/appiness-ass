import React, { useEffect } from 'react';
import { Container, Card, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { empList } from '../redux/action/emp';
import data from '../data/emp.json'

function EmpList(props) {
    const {empsData, empList} = props;

    useEffect(() => {
        empList(data)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <Container>
            {
                empsData.length ? 
                    <Card className="mt-5">
                        <Table size="sm">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Email-id</th>
                                    <th>Phone No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    empsData.map((emp, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{emp.name}</td>
                                            <td>{emp.gender}</td>
                                            <td>{emp.age}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.phoneNo}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card>
                : null
            }
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        empsData: state.empsReducer.empList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        empList: (data) => dispatch(empList(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmpList);
