import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style1.css' //Fiel to Edit for Css in this particular implementation.
import Iframe from 'react-iframe'
import { Grid } from '@mui/material';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableComponent from './TableComponent'
import TableArray from './TableArray';
// import Grid from '@mui/material/Grid';

const div = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Sample6() {
    let a = 0;
    return (
        <Container>
            <br />
            <br />
            <br />
            <br />




            <Container>
                <Box sx={{ width: '100%' }} >
                    <Grid

                        container
                        direction="row"
                        justifyContent="center"
                        aligndivs="center"
                        rowSpacing={0} columnSpacing={{ xs: 0 }} sx={{ padding: "0 !important" }}

                    >
                        <Grid sx={{ padding: "0 !important" }} item xs={1.5} className="AdCell">
                            <div sx={{ padding: "0 !important" }} className="AdCell" >
                                <Grid container className="AdCell" rowSpacing={0} sx={{ padding: "0 !important" }} columnSpacing={{ xs: 0 }} justifyContent="center" justifydivs="center" direction="column">

                                    <Grid container className="AdCell" sx={{ padding: "0 !important" }} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                        {Array.from(Array(26)).map(function (_, _id) {
                                            console.log("Hi");
                                            a = a + 1;
                                            return (
                                                <Grid item xs={6} sx={{ padding: "0 !important" }} className="AdCell">
                                                    <div style={{ backgroundColor: "black" }}>
                                                        <Container className="AdCell">
                                                            <TableComponent a={a} />
                                                        </Container>
                                                    </div>
                                                </Grid>
                                            );
                                        })
                                        }
                                    </Grid>

                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={5} className="AdCell" sx={{ padding: "0 !important" }}>
                            <div className="AdCell" sx={{ padding: "0 !important" }}>
                                <Grid container className="AdCell" sx={{ padding: "0 !important" }} rowSpacing={0} columnSpacing={{ xs: 0 }} justifyContent="center" justifydivs="center" direction="column">
                                    <Grid item xs={3} className="AdCell" sx={{ padding: "0 !important" }}>
                                        <div className="AdCell" sx={{ padding: "0 !important" }}>
                                            <Grid container className="AdCell" sx={{ padding: "0 !important" }} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                {Array.from(Array(24)).map(function (_, _id) {
                                                    console.log("Hi");
                                                    a = a + 1;
                                                    return (
                                                        <Grid item xs={2} className="AdCell" sx={{ padding: "0 !important" }} >
                                                            <div sx={{ padding: "0 !important" }} className="AdCell" style={{ backgroundColor: "black" }}>
                                                                <Container sx={{ padding: "0 !important" }} className="AdCell">
                                                                    <TableComponent a={a} sx={{ padding: "0 !important" }} />
                                                                </Container>
                                                            </div>
                                                        </Grid>
                                                    );
                                                })
                                                }
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item xs={9} sx={{ padding: "0 !important" }} className="AdCell">
                                        <div className="AdCell" sx={{ padding: "0 !important" }} >
                                            <Iframe sx={{ padding: "0 !important" }} url="https://www.youtube.com/embed/ZVOGPvo08zM"
                                                width={500}
                                                height={190}
                                                id="myId"
                                                className="myClassname"
                                                display="initial"
                                                position="relative" />
                                        </div>
                                    </Grid>
                                    <Grid item xs={3} className="AdCell" sx={{ padding: "0 !important" }} >
                                        <div className="AdCell" sx={{ padding: "0 !important" }} >
                                            <Grid sx={{ padding: "0 !important" }} className="AdCell" container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                {Array.from(Array(24)).map(function (_, _id) {
                                                    console.log("Hi");
                                                    a = a + 1;
                                                    return (
                                                        <Grid item xs={2} >
                                                            <div className="AdCell" style={{ backgroundColor: "black" }}>
                                                                <Container className="AdCell">
                                                                    <TableComponent a={a} />
                                                                </Container>
                                                            </div>
                                                        </Grid>
                                                    );
                                                })
                                                }
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid sx={{ padding: "0 !important" }} item xs={1.5} className="AdCell">
                            <div sx={{ padding: "0 !important" }} className="AdCell" >
                                <Grid container className="AdCell" rowSpacing={0} sx={{ padding: "0 !important" }} columnSpacing={{ xs: 0 }} justifyContent="center" justifydivs="center" direction="column">

                                    <Grid container className="AdCell" sx={{ padding: "0 !important" }} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                        {Array.from(Array(26)).map(function (_, _id) {
                                            console.log("Hi");
                                            a = a + 1;
                                            return (
                                                <Grid item xs={6} sx={{ padding: "0 !important" }} className="AdCell">
                                                    <div style={{ backgroundColor: "black" }}>
                                                        <Container className="AdCell">
                                                            <TableComponent a={a} />
                                                        </Container>
                                                    </div>
                                                </Grid>
                                            );
                                        })
                                        }
                                    </Grid>

                                </Grid>
                            </div>
                        </Grid>
                    </Grid>


                    {/* <Grid container padding ={0} rowSpacing={0} columnSpacing={{ xs: 0 }} justifyContent="center" justifydivs="center" direction="column">
                        {Array.from(Array(4)).map(function (_, _id1) {
                            console.log("hi");
                            return (
                                <Grid container padding ={0} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                    {Array.from(Array(9)).map(function (_, _id) {
                                        console.log("Hi");
                                        a = a + 1;
                                        return (
                                            <Grid item xs={4}>
                                                <div style={{ backgroundColor: "black" }}>
                                                    <Container className="AdCell">
                                                        <TableComponent a={a} />
                                                    </Container>
                                                </div>
                                            </Grid>
                                        );
                                    })
                                    }
                                </Grid>
                            );
                        })
                        }
                    </Grid> */}

                    {//InnerMost 9 Thing Grid
                    /* <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                        {Array.from(Array(9)).map(function (_, _id) {
                            console.log("Hi");
                            a = a + 1;
                            return (
                                <Grid item xs={4}>
                                    <div>{a}</div>
                                </Grid>
                            );
                        })
                        }
                    </Grid> */}

                </Box>
            </Container>

            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 0 }} columns={{ xs: 3 }}
                    direction="row"
                    justifyContent="center"
                    aligndivs="center">
                    <Grid item colSpacing={{ xs: 1 }}
                        justifyContent="space-evenly" >
                        <div>
                            <div style={{
                                width: 150,
                                padding: 0,
                                spacing: 12,
                            }} >
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxCorner" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div>
                            <div style={{ width: 500, justifyContent: 'center', aligndivs: 'center', alignContent: 'center', alignSelf: 'center' }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(9)).map((_, c_index) => (
                                            <Col className="box" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>

                        </div>
                        <div>
                            <Iframe url="https://www.youtube.com/embed/ZVOGPvo08zM"
                                width="500vw"
                                height="300remw"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative" />
                        </div>
                        <div>
                            <div >
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(9)).map((_, c_index) => (
                                            <Col className="box" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div>
                            <div style={{
                                width: 150,
                                padding: 0,
                                spacing: 12,
                            }} >
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxCorner" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box> */}
        </Container>
    )
}

export default Sample6;
