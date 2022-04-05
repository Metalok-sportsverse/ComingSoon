import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../pages/style.css'
import Iframe from 'react-iframe'

function TableComponent(props) {


    // props.a = props.a + 1;
    if (props.a === 5) // Image exist
    {
        return (
            <div>

                <p>
                    {props.a}
                </p>



            </div>

        );
    }
    else if (props.a === 69) // Image exist
    {
        return (
            <div>

                <p>
                    {props.a}
                </p>



            </div>

        );
    }
    else if (props.a === 113) // Image exist
    {
        return (
            <div>

                <p>
                    {props.a}
                </p>



            </div>

        );
    }
    else { //Text Exist
        return (
            <div>

                <p>
                    {props.a}
                </p>



            </div>
        )
    }

}

export default TableComponent;
