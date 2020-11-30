import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

function WorkExperience() {
  return (
    <Jumbotron id="main" fluid>
      <Container fluid>
        <h1 className="text-center">
          <u>Work Experience</u>
        </h1>
        <Row style={resume}>
          <Col>
            <ul>
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
                prescribed standards and specific project needs.
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
                safety standards to protect staff and customers.
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
              <h3>United States Marine Corps</h3>
              <i>
                <h5>Combat Engineer 1371</h5>{" "}
              </i>
              Lynchburg, Virginia
              <br />
              (02/2006 - 02/2012)
              <li>
               Functioned as a Squard Leader, Fireteam Leader and a Breaching Instructor.
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
  marginBottom: "5px",
};
export default WorkExperience;
