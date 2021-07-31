import React, { Fragment } from "react";
import "assets/css/portfolio.css";
import ReactTypingEffect from "react-typing-effect";
import springpng from "../assets/images/springpng.png";
import myphoto from "../assets/images/myphoto.jpg";
import scmcpng from "../assets/images/scmcpng.png";
import smrt_port from "../assets/images/smrt_port.png";
import smrt from "../assets/images/smrt.png";
import untact from "../assets/images/untact.png";
import java from "../assets/images/javapng.png";
import javascript from "../assets/images/javascript.png";
import html5 from "../assets/images/html5.png";
import jquery from "../assets/images/jquerypng.png";
import oracle from "../assets/images/oraclepng.png";
import mysql from "../assets/images/mysqlpng.png";
import mybatis from "../assets/images/mybatispng.jpg";
import reactpng from "../assets/images/reactpng.png";
import webs5 from "../assets/images/webs5.jpg";
import "../../src/customAxios.js";
import Axios from "axios";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import "../assets/css/hover.css";

console.log(
  "%c Song's %c portfolio ",
  "background-color:#000000; color:#ffffff; font-size:23px;",
  "background-color:red; color:#ffffff; font-size:23px;"
);
function callback(data) {
  console.log("server res = ", data);
  //setIp(data);
}

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    Axios.post("/api/pjs").then((response) => {
      if (response.data) {
        console.log(response.data);
        console.log(response.data[0].pjDtl);
        // document.getElementById("지정한 Id").html(response.data[0].pjDtl);
        //setUser(response.data);
      } else {
        alert("failed to ");
      }
    });
  }
  render() {
    const notice = {
      padding: "5px",
      background: "yellow",
    };
    const textRegion = {
      height: "60px",
    };
    const Height200 = {
      height: "200px",
    };

    const Height500 = {
      height: "500px",
    };
    return (
      <>
        {/* <!-- notice 영역 --> */}
        {/* <div style={notice}>
          <h4 className="text-align: center;">코딩머신</h4>
        </div> */}

        {/* <!-- header 영역 --> */}
        <header>
          <ReactTypingEffect
            text={["Developer Song's", "Portfolio!!!!"]}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return <h1>{text}</h1>;
            }}
          />
        </header>

        {/* <!-- navigation bar --> */}
        <nav>
          <a href="https://github.com/sungsunghyun/portfolio" target="_blank">
            Git
          </a>
          <a href="mailto:songshyun1n@naver.com" target="_blank">
            Mail
          </a>
          <a href="https://blog.naver.com/songshyun1" target="_blank">
            Blog
          </a>
          <a
            href="https://www.youtube.com/channel/UCaayd7p9_-QbDWXemus0ipw"
            target="_blank"
          >
            Youtube
          </a>
        </nav>

        {/* <!-- 콘텐츠 영역 --> */}
        <div id="container">
          {/* <!-- 왼쪽 사이드 --> */}
          <aside>
            <h2>About Song</h2>
            <h5>Photo of me:</h5>
            <div class="myphoto" style={Height500}>
              <img src={myphoto} alt="프로그래머 송성현" />
            </div>
            <p>
              항상 주변 분위기를 밝게 만들어주고 싶은 프로그래머가 되고싶은
              송성현입니다
            </p>

            <h3>Skills</h3>
            <p>Language</p>
            <div class="skillDiv">
              <figure class="snip1384">
                <img src={java} alt="java" />
                <figcaption>
                  <h3>능숙함</h3>
                </figcaption>
              </figure>
              <figure class="snip1384">
                <img src={javascript} alt="javascript" />
                <figcaption>
                  <h3>능숙함</h3>
                </figcaption>
              </figure>
              <figure class="snip1384">
                <img src={html5} alt="html5" />
                <figcaption>
                  <h3>능숙함</h3>
                </figcaption>
              </figure>
            </div>
            <p>Framework & Library</p>
            <div class="skillDiv">
              <figure class="snip1384">
                <img src={springpng} alt="spring" />
                <figcaption>
                  <h3>능숙함</h3>
                </figcaption>
              </figure>
              <figure class="snip1384">
                <img src={jquery} alt="jquery" />
                <figcaption>
                  <h3>능숙함</h3>
                </figcaption>
              </figure>
              <figure class="snip1384">
                <img src={mybatis} alt="mybatis" />
                <figcaption>
                  <h3>능숙함</h3>
                </figcaption>
              </figure>
            </div>
            <div class="skillDiv">
              <figure class="snip1384">
                <img src={reactpng} alt="react" />
                <figcaption>
                  <h3>경험해봄</h3>
                </figcaption>
              </figure>
              <figure class="snip1384">
                <img src={webs5} alt="websquare" />
                <figcaption>
                  <h3>능숙함</h3>
                </figcaption>
              </figure>
            </div>
            <p>DBMS </p>
            <div class="skillDiv">
              <figure class="snip1384">
                <img src={oracle} alt="oracle" />
                <figcaption>
                  <h3>능숙함</h3>
                </figcaption>
              </figure>
              <figure class="snip1384">
                <img src={mysql} alt="mysql" />
                <figcaption>
                  <h3>능숙함</h3>
                </figcaption>
              </figure>
            </div>
          </aside>
          {/* <!-- 본문 영역 --> */}
          <article>
            <h2>성남시의료원</h2>
            <h5>2018년 12월~ 2019년 8월</h5>
            <div class="fakeProject">
              <img src={scmcpng} class="projectImg" alt="성남시의료원" />
            </div>
            <p>
              2018년 입사 후 첫 프로젝트를 진행하였다.<br></br>
              스프링프레임워크를 이용 성남시의료원 웹사이트이고 병원 EMR API
              연동 및 네이버로그인, 카카오맵 API를 사용하였다.
            </p>
            <h2>스마트 가입</h2>
            <h5>2019년 8월~ 2020년 4월</h5>
            <div class="fakeProject">
              <img src={smrt_port} class="projectImg" alt="스마트가입" />
            </div>
            <p>
              LG U+ 프로젝트로 휴대폰 개통 앱 스마트가입 프로젝트<br></br>
              JSP와 DevOn 프레임워크로 구성 된 모바일 가입 페이지를 <br></br>
              웹스퀘어와 Wafful 프레임워크로 전환 개발 하는 프로젝트이다.
            </p>
            <h2>U+ 전자신청서</h2>
            <h5>2020년 4월~ 2020년 10월</h5>
            <div class="fakeProject">
              <img src={smrt} class="projectImg" alt="U+ 전자신청서" />
            </div>
            <p>
              휴대폰 판매점에서 사용하는 개통 앱 신규 개발 프로젝트<br></br>
              웹스퀘어와 Wafful 프레임워크를 이용하여 개발하였다<br></br>
              고객정보 페이지와 관리자 페이지를 맡아 개발하였다<br></br> U+
              API를 주로 이용하여 데이터 통신을 하였음.
            </p>
            <h2>UntactStore 셀프상담/가입</h2>
            <h5>2020년 10월~ 2021년 4월</h5>
            <div class="fakeProject">
              <img src={untact} class="projectImg" alt="U+ 전자신청서" />
            </div>
            <p>
              코로나 19로 인한 Untact 시대에 맞는 U+ Untact Store 출시로 인한
              <br></br>
              개통직원의 도움없이 개통하기 위한 앱 개발 프로젝트<br></br>
              JSP와 wafful 프레임워크로 구성 되어있고, 셀프상담을 맡아 개발
              하였다<br></br>
              2021년4월 오픈 이후 운영서비스 담당 업무 진행중이다
            </p>
          </article>
        </div>

        {/* <!-- footer --> */}
        {/* <footer>
          <h2>Footer</h2>
        </footer> */}
      </>
    );
  }
}

export default Portfolio;
