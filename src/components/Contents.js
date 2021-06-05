import React, { Component, Fragment } from 'react';
import { Badge, Container, Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'
import pet1 from "../assets/images/petimg/pet1.jpg";
import pet2 from "../assets/images/petimg/pet2.jpg";
import pet3 from "../assets/images/petimg/pet3.jpg";
import styled from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;


class Contents extends Component {
    render() {
        return (
            <main className="my-5 py-5">
                <Container className="px-0">
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
                        <Col className="py-5 mb-5 py-md-0 mb-md-0">
                            <Fragment>
                                <div className="position-relative">

                                    <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
                                        펫 스타그램
                                    </span>

                                    <span className="d-block pb-4 h2 text-dark border-bottom border-gray">Pet artgallery</span>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                                        반려동물 이미지 리스트 
                                    </article>

                                </div>
                            </Fragment>
                        </Col>
                    </Row>
                </Container>
                
                <Container className="px-0">
                    <CardColumns>
                        <Card>
                            <Card.Img src={pet1} />
                        </Card>
                        <Card>
                         <Card.Img src={pet2} />
                        </Card>
                        <Card>
                            <Card.Img src={pet3} />
                        </Card>
                    </CardColumns>
                </Container>

                <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>
                </Form>
            </main>
        );
    }
}


export default Contents;