import React from "react";
import { Media } from "reactstrap";

const size = {
  image: {
    width: "200px",
    height: "100%",
    border: "5px solid grey",
    borderStyle: "outset",
    boxShadow: "2px 2px 4px grey",
  },
};

export const earlylife = (
  <Media>
    <Media left href="#">
      <Media
        object
        style={size.image}
        src="../images/highschool.jpg"
        alt="EarlyLife"
      />
    </Media>
    <Media style={{ paddingLeft: "15px" }} body>
      <Media heading>
        <u>Early Life</u>
      </Media>
      <p>
        My full name is Jean-Eric Andr'e Pierre-Louis and I was born in
        Charleston, South Carolina. Around the age of 5, my family moved to
        Groton, Conneticut. We were, and still are a military family. When I
        turned 13, my father got another duty station in Virgina Beach, Va. My
        parents are still in Virgina Beach to this day.
      </p>
      <p>
        Growing up, I loved to draw, read and play basketball. During my time in
        Green Run High School, I was in the marching band and played the
        Baritone (Euphonium). My favorite subjects had always been Science and
        French.
      </p>
    </Media>
  </Media>
);

export const militaryService = (
  <Media>
    <Media style={{ paddingRight: "15px" }} body>
      <Media heading>
        <u>Military Service</u>
      </Media>
      <p>
        On February 26, 2006 I enlisted in the United States Marine Corps. My
        primary MOS (Miliary Occupational Specialty) was 1371, Combat Engineer.
        Combat Engineers' motto consisted of 'Jack of All Trades, Master of
        None'. This means that while we have a working knowledge of most jobs,
        there is always room for improvement.
      </p>
      <p>
        In 2008, we were called to Operation Iraq Freedom 19 (OIF19). During
        this tour, I served as a Fireteam Leader and Squad Leader when needed. I
        was always sent to the 'Shadow Range'. The Shadow Range was an outpost
        outside of Al Asad, that served as a training post. During that time,
        myself and another Marine were tasked with training others on how to use
        demolition charges.
      </p>
      <p>
        I was honorably discharged in 2012 from 4th Combat Engineer Battalion,
        in Lynchburg Virginia.
      </p>
    </Media>
    <Media right href="#">
      <Media object style={size.image} src="./images/Me2.jpg" alt="usmcme" />
    </Media>
  </Media>
);

export const hobbies = (
  <Media>
    <Media left href="#">
      <Media
        object
        style={size.image}
        src="./images/workout.jpg"
        alt="WorkoutPic"
      />
    </Media>
    <Media style={{ paddingLeft: "15px" }} body>
      <Media heading>
        <u>Hobbies and Personal Life</u>
      </Media>
      <p>
        I enjoy going to the gym and working out 5 days week. To me, working out
        is an essential part my physical and mental health. When I am not
        working out or coding, I am usually enjoying watching Netflix shows or
        playing PlayStation.
      </p>
      <p>
        I enjoy travelling as well. So far, I have been to Slovakia, Budapest,
        France (2x), Niger Africa (2x), Cancun and Belize Mexico. I plan to
        visit Bratislava Slovakia in 2021 when the CoronaVirus pandemic is more
        under control.
      </p>
    </Media>
  </Media>
);

const prLLC = (
  <ul className="list-unstyled">
    <li>
      Developed website for LLC which helps stay in contact with customers as
      well as list our services.
    </li>
    <li>
      Have created multiple PHP parsing programs that facilitate credit card
      production.
    </li>
    <ul className="list-unstyled">
      <u>Websites Developed:</u>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://polishedBymia.com"
        >
          <i style={{ color: "#e60073" }}>Polished By Mia</i>
        </a>{" "}
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pierrenradyllc.netlify.app/"
        >
          <i style={{ color: "gold" }}>Pierre&RadyLLC</i>
        </a>
      </li>
    </ul>
  </ul>
);

const aux = (
  <ul className="list-unstyled">
    <li>
      Assistant Grocery Manager for two stores at the same time; Ghent and
      Military Highway Stores.
    </li>
    <li>
      Expertly filled roles such as cashier, stock crew, bookkeeper, sales &
      service desk, customer service representative (CSR) and closing store
      manager.
    </li>
    <li>
      Assessed grocery store for cleanliness and checked proper stocking Summary
      Skills Experience of shelves, refrigerated section and freezers.
    </li>
    <li>
      Drove consistent grocery sales with effective merchandising and promotions
      implementation.
    </li>
    <li>
      Introduced grocery store employee incentive program to boost team morale.
    </li>
    <li>
      Coordinated efficient restocking of grocery merchandise to meet customer
      needs and promote consistent sales.
    </li>
    <li>
      Maintained comprehensive compliance with workplace and food safety logos
      to protect staff and customers.
    </li>
    <li>
      Analyzed the store's inventory and ordered merchandise and products when
      stock levels were low.
    </li>
    <li>
      Maximized profit by coordinating efficient team workflows, minimizing
      waste and controlling shrinkage.
    </li>
    <li>
      Delivered expert customer service to all store patrons and assisted with
      locating desired items.
    </li>
    <li>
      Lead by example and took responsibility for all actions drive culture of
      performance excellence.
    </li>
    <li>
      Streamlined operational efficiencies by coordinating staff development and
      succession planning.
    </li>
    <li>
      Identified and solved complex strategy problems to drive organizational
      goals.
    </li>
  </ul>
);

const ffresh = (
  <ul className="list-unstyled">
    {" "}
    <li>
      Assistant Grocery Manager for two stores at the same time; Ghent and
      Military Highway Stores.
    </li>
    <li>
      Expertly filled roles such as cashier, stock crew, bookkeeper, sales &
      service desk, customer service representative (CSR) and closing store
      manager.
    </li>
    <li>
      Assessed grocery store for cleanliness and checked proper stocking Summary
      Skills Experience of shelves, refrigerated section and freezers.
    </li>
    <li>
      Drove consistent grocery sales with effective merchandising and promotions
      implementation.
    </li>
    <li>
      Introduced grocery store employee incentive program to boost team morale.
    </li>
    <li>
      Coordinated efficient restocking of grocery merchandise to meet customer
      needs and promote consistent sales.
    </li>
    <li>
      Maintained comprehensive compliance with workplace and food safety logos
      to protect staff and customers.
    </li>
    <li>
      Analyzed the store's inventory and ordered merchandise and products when
      stock levels were low.
    </li>
    <li>
      Maximized profit by coordinating efficient team workflows, minimizing
      waste and controlling shrinkage.
    </li>
    <li>
      Delivered expert customer service to all store patrons and assisted with
      locating desired items.
    </li>
    <li>
      Lead by example and took responsibility for all actions drive culture of
      performance excellence.
    </li>
    <li>
      Streamlined operational efficiencies by coordinating staff development and
      succession planning.
    </li>
    <li>
      Identified and solved complex strategy problems to drive organizational
      goals.
    </li>
  </ul>
);

const eCedar = (
  <ul className="list-unstyled">
    <li>
      Performed skilled and semi-skilled repairs to existing roofs, including
      shingle replacement.
    </li>
    <li>
      Completed residential and commercial roofing work on time and within
      expected project parameters, increasing repeat business opportunities.
    </li>
    <li>
      Worked regularly at advanced heights and followed all OSHA safety
      protocols and procedures for fall prevention.
    </li>
    <li>
      Mopped and poured hot asphalt and tar onto roof base while applying
      asphalt and tar and gravel to roof.
    </li>
    <li>
      Collected and removed debris and roofing materials to disposal areas at
      end of every shift to maintain clean work area.
    </li>
    <li>Earned reputation for great attendance and hard work.</li>
  </ul>
);

const marine = (
  <ul className="list-unstyled">
    <li>
      Functioned as a Squad Leader, Fireteam Leader and a Breaching Instructor.
    </li>
    <li>
      Used visual methods and mine detectors to identify and locate mines,
      effectively detonating enemy threats.
    </li>
    <li>Located and neutralized various types of mines and IEDs.</li>
    <li>
      Trained and instructed subordinates and supported units on engineer
      training.
    </li>
    <li>
      Installed and recovered anti-handing devices on anti-tank mines and
      electrical and non-electrical demolition charges.
    </li>
    <li>
      Made roads, bridges and ferries safe for travel by conducting ground
      reconnaissance and reporting back to Platoon Sergeant.
    </li>
    <li>
      Supervised minefield installation and removal, notifying superiors with
      consistent updated information.
    </li>
    <li>
      Developed top talent by leading training initiatives for combat
      preparation.
    </li>
    <li>
      Completed dozens of patrols of assigned areas within operations areas
      during Operation Iraqi Freedom.
    </li>
    <li>
      Instructed personnel on ways to reduce environmental hazards and proper
      use of PPE.
    </li>
  </ul>
);

export const workExp = [
  {
    id: 0,
    image: "../images/logos/prlogo.png",
    title: "Pierre&RadyLLC",
    position: "Software Developer/ PHP Engineer",
    dates: "(08/2019 - Present)",
    location: " Fort Lauderdale, Florida",
    experience: prLLC,
  },
  {
    id: 1,
    image: "../images/logos/auxiliarysystems.jpg",
    title: "Auxilary Systems",
    position: "Outside Machinist",
    dates: "(07/2018 - 08/2019)",
    location: "Norfolk, VA",
    experience: aux,
  },
  {
    id: 2,
    image: "../images/logos/farmfresh.png",
    title: "Farm Fresh Supermarkets",
    position: "Assistant Grocery Manager",
    dates: "(12/2015 - 07/2018)",
    location: "Norfolk, VA",
    experience: ffresh,
  },
  {
    id: 3,
    image: "../images/logos/eastcoastcedarlogo.jpg",
    title: "East Coast Cedar",
    position: "Roofing Assistant",
    location: "Virginia Beach, VA",
    dates: "(02/2013 - 01/2015)",
    experience: eCedar,
  },
  {
    id: 4,
    image: "../images/logos/usmclogo.png",
    title: "United States Marine Corps",
    position: "1371 Combat Engineer",
    location: "Lynchburg, Virginia",
    dates: " (02/2006 - 02/2012)",
    experience: marine,
  },
];

export const newhorizons = (
  <ul>
    <i>
      <h5>New Horizons - Computer Learning Center</h5>{" "}
    </i>
    Online Eastern <br />
    (01/2021 - Present)
    <br />
    <li>
      <u>Courses</u>
    </li>
    <ul>
      {" "}
      <li style={{ fontWeight: "bold", textShadow: "2px 2px 2px black" }}>
        A+ -- <i>Certified</i>
      </li>
      <li>Newtorking+</li>
      <li style={{ fontWeight: "bold", textShadow: "2px 2px 2px black" }}>
        Security+ -- <i>Certificaton in progress</i>
      </li>
      <li>CCNA</li>
      <li>Server+</li>
      <li>Azure Fundamentals & Administration</li>
    </ul>
  </ul>
);

export const nucampExp = (
  <ul>
    <i>
      <h5>FullStack Web Development - Certificate of Completion</h5>{" "}
    </i>
    Online Eastern <br />
    (08/2019 - 04/2020)
    <br />
    <li>
      <u>Courses Completed:</u>
    </li>
    <ul>
      {" "}
      <li>HTML/CSS & JavaScript</li>
      <li>Bootstrap</li>
      <li>React</li>
      <li>React Native</li>
      <li>Node JS/MongoDB/Express</li>
    </ul>
  </ul>
);

export const libertyExp = (
  <ul>
    <i>
      <h5>
        Biology Major <br />
        French Minor
      </h5>
    </i>
    Lynchburg, VA
    <br />
    (2002 - 2005)
  </ul>
);

export const gRunExp = (
  <ul>
    <i>
      <h5>Advanced Diploma</h5>
    </i>
    Virginia Beach, VA
    <br />
    (1998 - 2002)
  </ul>
);

export const honors = (
  <Media body>
    <ul>
      <li>Corporal - United States Marine Corps</li>
      <li>CIRCOM (Certificate of Commendation) - United States Marine Corps</li>
      <li>Dean's List - Liberty University 2003</li>
      <li>
        Nucamp Coding Bootcamp - React, React Native,
        BootstrapNodeJS/Express/MongoDB, JavaScript/HTML/CSS
      </li>
    </ul>
  </Media>
);
