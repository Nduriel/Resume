import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";

function WorkExperience() {
  return (
    <Jumbotron id="main" fluid>
      <h5 className="text-center" id="top">
        <a href="#WorkExp">Work Experience</a> -{" "}
        <a href="#Education">Education</a> -{" "}
        <a href="#Honors">Honors and Awards</a>
      </h5>
      <Container fluid>
        <h1 className="text-center" style={size.headerSpace}>
          <u id="WorkExp">Work Experience</u>
        </h1>
        <Row style={resume}>
          <Col>
            <ul>
              <Media src="../images/auxiliarysystems.jpg" style={size.logo} />
              <h2>Auxiliary Systems Inc.</h2>
              <i>
                <h5>Outside Machinist</h5> (07/2018 - 08/2019)
              </i>
              <br />
              Norfolk, Virginia
              <li>
                Installed and repaired foundations for operating machinery and
                principal structures and components.
              </li>
              <li>
                Performed repair work on hydraulic, pneumatic and mechanical
                systems.
              </li>{" "}
              <li>
                {" "}
                Used precision measuring instruments such as height gages, depth
                gages, calipers and various types of micrometers. Troubleshot
                and repaired machines to increase productivity and decrease
                spending.
              </li>
              <li>
                Calibrated machinery to optimize performance according to
                prescribed logos and specific project needs.
              </li>
              <li>
                {" "}
                Sharpened, replaced and tracked cutting tools to adhere to
                strict quality control and usage schedules.
              </li>
              <li>
                {" "}
                Increased equipment lifespans by incorporating thorough
                preventive and corrective maintenance processes.
              </li>
              <li>
                Earned reputation for good attendance and hard work. Improved
                operations by working with team members and customers to find
                workable solutions.
              </li>
              <li>
                Worked closely with team members to deliver project
                requirements, develop solutions and meet deadlines.
              </li>
            </ul>
          </Col>
        </Row>
        <Row style={resume}>
          <Col>
            <ul>
              <Media src="../images/farmfresh.png" style={size.logo} />
              <h3>Farm Fresh Supermarkets</h3>
              <i>
                <h5>Assistant Grocery Manager</h5>
              </i>
              Norfolk, Virginia
              <br />
              (12/2015 - 07/2018)
              <li>
                Assistant Grocery Manager for two stores at the same time; Ghent
                and Military Highway Stores.
              </li>
              <li>
                Expertly filled roles such as cashier, stock crew, bookkeeper,
                sales & service desk, customer service representative (CSR) and
                closing store manager.
              </li>
              <li>
                Assessed grocery store for cleanliness and checked proper
                stocking Summary Skills Experience of shelves, refrigerated
                section and freezers.
              </li>
              <li>
                Drove consistent grocery sales with effective merchandising and
                promotions implementation.
              </li>
              <li>
                Introduced grocery store employee incentive program to boost
                team morale.
              </li>
              <li>
                Coordinated efficient restocking of grocery merchandise to meet
                customer needs and promote consistent sales.
              </li>
              <li>
                Maintained comprehensive compliance with workplace and food
                safety logos to protect staff and customers.
              </li>
              <li>
                Analyzed the store's inventory and ordered merchandise and
                products when stock levels were low.
              </li>
              <li>
                Maximized profit by coordinating efficient team workflows,
                minimizing waste and controlling shrinkage.
              </li>
              <li>
                Delivered expert customer service to all store patrons and
                assisted with locating desired items.
              </li>
              <li>
                Lead by example and took responsibility for all actions drive
                culture of performance excellence.
              </li>
              <li>
                Streamlined operational efficiencies by coordinating staff
                development and succession planning.
              </li>
              <li>
                Identified and solved complex strategy problems to drive
                organizational goals.
              </li>
            </ul>
          </Col>
        </Row>
        <Row style={resume}>
          <Col>
            <ul>
              <h3>East Coast Cedar</h3>
              <i>
                <h5>Roofing Assistant</h5>{" "}
              </i>
              Virginia Beach, Virginia
              <br />
              (02/2013 - 01/2015)
              <li>
                Performed skilled and semi-skilled repairs to existing roofs,
                including shingle replacement.
              </li>
              <li>
                Completed residential and commercial roofing work on time and
                within expected project parameters, increasing repeat business
                opportunities.
              </li>
              <li>
                Worked regularly at advanced heights and followed all OSHA
                safety protocols and procedures for fall prevention.
              </li>
              <li>
                Mopped and poured hot asphalt and tar onto roof base while
                applying asphalt and tar and gravel to roof.
              </li>
              <li>
                Completed and submitted accurate work orders to office staff
                promptly to avoid lags in commencing projects.
              </li>
              <li>
                Collected and removed debris and roofing materials to disposal
                areas at end of every shift to maintain clean work area.
              </li>
              <li>
                Provided excellent service and attention to customers when
                face-to-face or through phone conversations.
              </li>
              <li>Earned reputation for great attendance and hard work.</li>
            </ul>
          </Col>
        </Row>
        <Row style={resume}>
          <Col>
            <ul>
              <Media
                src="../images/usmclogo.png"
                style={{ width: "200px", height: "auto" }}
              />
              <h3>United States Marine Corps</h3>
              <i>
                <h5>Combat Engineer 1371</h5>{" "}
              </i>
              Lynchburg, Virginia
              <br />
              (02/2006 - 02/2012)
              <li>
                Functioned as a Squad Leader, Fireteam Leader and a Breaching
                Instructor.
              </li>
              <li>
                Used visual methods and mine detectors to identify and locate
                mines, effectively detonating enemy threats.
              </li>
              <li>Located and neutralized various types of mines and IEDs.</li>
              <li>
                Trained and instructed subordinates and supported units on
                engineer training.
              </li>
              <li>
                Installed and recovered anti-handing devices on anti-tank mines
                and electrical and non-electrical demolition charges.
              </li>
              <li>
                Made roads, bridges and ferries safe for travel by conducting
                ground reconnaissance and reporting back to Platoon Sergeant.
              </li>
              <li>
                Supervised minefield installation and removal, notifying
                superiors with consistent updated information.
              </li>
              <li>
                Developed top talent by leading training initiatives for combat
                preparation.
              </li>
              <li>
                Completed dozens of patrols of assigned areas within operations
                areas during Operation Iraqi Freedom.
              </li>
              <li>
                Instructed personnel on ways to reduce environmental hazards and
                proper use of PPE.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid id="Education">
        <h1 className="text-center" style={size.headerSpace}>
          <u>Education</u>{" "}
          <a href="#top" aria-hidden="true">
            <sub style={{ fontSize: "15px" }}>
              <i class="fa fa-arrow-up" />
            </sub>
          </a>
        </h1>
        <Row style={resume}>
          <Col>
            <ul>
              <Media src="../images/nucamplogo.png" style={size.logo} />
              <i>
                <h5>FullStack Web Development - Certificate of Completion</h5>{" "}
              </i>
              Online Eastern <br />
              (08/2019 - 04/2020)
              <br />
              &nbsp;<u>Courses Completed:</u>
              <li>HTML/CSS & JavaScript</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>React Native</li>
              <li>Node JS/MongoDB/Express</li>
            </ul>
          </Col>
        </Row>
        <br />
        <Row style={resume}>
          <Col>
            <ul>
              <Media src="../images/libertylogo.png" style={size.logo} />
              <i>
                <h5>Biology Major <br/>French Minor</h5>
              </i>
              Lynchburg, VA
              <br />
              (2002 - 2005)
            </ul>
          </Col>
        </Row>
        <br />
        <Row style={resume}>
          <Col>
            <ul>
              <Media className="text-center"src="../images/greenrun.jpg" style={size.logo} />
              <i>
                <h5>
                  Green Run High School <br /> Advanced Diploma
                </h5>
              </i>
              Virginia Beach, VA
              <br />
              (1998 - 2002)
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid id="Honors">
        <h1 className="text-center" style={size.headerSpace}>
          Honors And Awards
          <a href="#top" aria-hidden="true">
            {" "}
            <sub style={{ fontSize: "15px" }}>
              <i class="fa fa-arrow-up" />
            </sub>
          </a>
        </h1>{" "}
        <Row style={resume}>
          <Col>
            <ul>
              <Media src="./images/trophy.png" alt="trophy" style={size.logo} />
              <li>Corporal - United States Marine Corps</li>
              <li>
                CIRCOM (Certificate of Commendation) - United States Marine
                Corps
              </li>
              <li>Dean's List - Liberty University 2003</li>
              <li>
                Nucamp Coding Bootcamp - React,
                React Native, BootstrapNodeJS/Express/MongoDB,
                JavaScript/HTML/CSS
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

const resume = {
  marginTop: "5px",
  marginBottom: "2rem",
};

const size = {
  logo: {
    width: "200px",
    height: "auto",
    border: "3px solid grey",
    borderStyle: "ridge",
    borderRadius: "1%",
  },
  headerSpace: {
    marginBottom: "30px",
  },
};
export default WorkExperience;
