import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'reactstrap';
import scmcpng from "../assets/images/scmcpng.png";
import smrt_port from "../assets/images/smrt_port.png";
import smrt from "../assets/images/smrt.png";
import untact from "../assets/images/untact.png";
import devback from "../assets/images/homedevback.jpg";
import background from "../assets/images/background.jpg";
import springpng from "../assets/images/springpng.png";
import "../assets/css/home.css";
import "../assets/css/hover.css";
import ReactTypingEffect from 'react-typing-effect';
console.log('%c Song\'s %c portfolio ', 'background-color:#000000; color:#ffffff; font-size:23px;', 
'background-color:red; color:#ffffff; font-size:23px;');

const styles = {
    devContainer: {
        backgroundImage: `url(${devback})`
        , height : '500px'
    },
    backGround: {
        backgroundImage: `url(${background})`

    }
};

class HomeDetail extends Component {
    render() {
        return (
            <main className="my-5 py-5" style={styles.backGround}>
                <Container className="px-0">
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative" style={{backgroundColor: 'white'}}> 
                        <Col className="py-5 mb-5 py-md-0 mb-md-0">
                            <Fragment>
                                <div className="position-relative" >
                                    <br></br>
                                    <ReactTypingEffect
                                            text={["Developer Song's", "Portfolio!!!!"]}
                                            cursorRenderer={cursor => <h1>{cursor}</h1>}
                                            displayTextRenderer={(text, i) => {
                                            return (
                                                <h1>
                                                {text.split('').map((char, i) => {
                                                    const key = `${i}`;
                                                    return (
                                                    <span
                                                        key={key}
                                                        style={i%2 === 0 ? { color: 'blue'} : {}}
                                                    >{char}</span>
                                                    );
                                                })}
                                                </h1>
                                            );
                                            }}        
                                        />
                                    
                                </div>
                                <div>
                                <h4>About Song</h4><br></br>
                                🙂나는 어떤 개발자인가?<br></br>
                                안녕하세요.<br></br>
                                ~~~입니다<br></br>
                                </div>
                            </Fragment>
                        </Col>
                    </Row>
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative" style={{backgroundColor: 'white'}}> 
                        <Col className="py-5 mb-5 py-md-0 mb-md-0">
                            <Fragment>
                                <div className="position-relative">
                                    <h1 align="left">기술스택</h1>
                                    <div class="skill">
                                        <figure class="snip1384">
                                        <img src={springpng} alt="sample83" />
                                        <figcaption>
                                            <h3>능숙함</h3>
                                        </figcaption>
                                        <a href="#"></a>
                                        </figure>

                                    </div>
                                </div>
                            </Fragment>
                        <span className="d-block pb-4 h2 text-dark border-bottom border-gray"></span>
                        </Col>
                    </Row>
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative" style={{backgroundColor: 'white'}}>
                        <Col className="py-5 mb-5 py-md-0 mb-md-0">
                            <Fragment>
                                <h1>
                                Project
                                </h1>  
                            </Fragment>

                            <CardColumns>
                                <Card>
                                    <Card.Img variant="top" src={scmcpng} />
                                    <Card.Body class="cardBody">
                                    <Card.Title>성남시의료원 2018.12 ~ 2018.08</Card.Title>
                                    <Card.Text>
                                    2019년 성남시의료원 프로젝트 진행 
                                    성남시의료원, 성남시의료원 진료협력센터, 성남시의료원 관리자페이지 개발 담당
                                    <br></br>
                                    <a href="https://www.scmc.kr/" target="_blank"><Button variant="primary">Go somewhere</Button></a>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="p-3">
                                    <Card.Img variant="top" src={smrt_port} />
                                        <Card.Body class="cardBody">
                                        <Card.Title>LG U+ 스마트가입 앱 2018.08 ~ 2019.04</Card.Title>
                                        <Card.Text>
                                        2020년 스마트가입 프로젝트 진행 <br></br>
                                        LG U + 스마트가입 앱 화면 및 
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                <Card>
                                     <Card.Img variant="top" src={smrt} />
                                        <Card.Body class="cardBody">
                                        <Card.Title>LG U+ 전자신청서 앱 2019.04 ~ 2019.12</Card.Title>
                                        <Card.Text>
                                        2020년 스마트가입 프로젝트 진행 <br></br>
                                        LG U + 스마트가입 앱 화면 및 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                <Card.Img variant="top" src={untact} />
                                        <Card.Body class="cardBody">
                                        <Card.Title>LG U+ 무인매장셀프상담/가입 앱 2020.08 ~ 2021.05</Card.Title>
                                        <Card.Text>
                                        2020년 스마트가입 프로젝트 진행 <br></br>
                                        LG U + 스마트가입 앱 화면 및 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
        
                            </CardColumns>

                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default HomeDetail;