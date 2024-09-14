import React from "react";
import { Media, Col } from "reactstrap";

const size = {
  image: {
    width: "200px",
    height: "100%",
    border: "5px solid grey",
    borderStyle: "outset",
    boxShadow: "2px 2px 4px grey",
  },
};

export const intro = (
  <Col lg={6} md={12} sm={12}>
    <p className="infobox">
      &nbsp;&nbsp;Hello! My Name is Jean-Eric Pierre-Louis "Pierre" and I am a
      United States Marine Corps Veteran and Web Developer. This page will help
      you get to know about me, my desires and my life! I hope you enjoy!
    </p>
    <p className="infobox">
      &nbsp;&nbsp;I am Full Stack Web Developer and recent graduate from Nucamp
      Coding Bootcamp. Since graduation, my skills have been put to the test
      creating and managing various websites including{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://polishedBymia.com"
      >
        <i style={{ color: "#e60073" }}>Polished By Mia</i>
      </a>{" "}
      and{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://pierrenradyllc.netlify.app/"
      >
        <i style={{ color: "gold" }}>Pierre&RadyLLC</i>
      </a>
      &nbsp;<i>(in development)</i>.
    </p>
    <p className="infobox">
      &nbsp;&nbsp;My primary focuses is React, React Native, JavaScript and
      HTML/CSS. I also create various parsing programs used to help facilitate
      credit card production for{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://pierrenradyllc.netlify.app/"
      >
        <i style={{ color: "gold" }}>Pierre&RadyLLC</i>
      </a>
      . Currently, I study with&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.pluralsight.com/"
      >
        Plural Sight
      </a>
      &nbsp;, and attend plan to attend school for more Full Stack Web
      Development training.
    </p>
  </Col>
);

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
        My name is Jean-Eric Andr'e Pierre-Louis and I was born in Charleston,
        South Carolina. Around the age of 5, my family moved to Groton,
        Conneticut. We were, and still are a military family. When I turned 13,
        my father got another duty station in Virgina Beach, Va. My parents are
        still in Virgina Beach to this day.
      </p>
      <p>
        Growing up, I loved to draw, read and play basketball. During my time in
        Green Run High School, I was in the marching band and played the
        Baritone (Euphonium). My favorite subject growing up was Science.
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
        France (2x), Niger Africa (2x), Cancun and Belize Mexico. This summer, I
        will visit Swizterland for the first time!
      </p>
    </Media>
  </Media>
);

const prLLC = (
  <ul className="a">
    <li>Creating and implementing various scripts using JS, php, xml, JSON.</li>
    <li>
      Using Excel to format, troubleshoot, and modify data. Compare those values
      with various applications from our customers
      <br /> [FedEX - Shipping Manager; USPS - shippsi/Stamps.com api]
    </li>
    <li>
      Modified existing software systems to enhance performance and add new
      features.
    </li>
    <li>
      Implemented and tested enhancement feature requests to improve product
      functionality and extend performance.
    </li>
    <li>
      Informed project manager of milestone updates and provided detailed
      project reports.
    </li>
    <ul style={{ listStyle: "square" }}>
      <i
        style={{ textShadow: "2px 2px black", borderBottom: "2px solid grey" }}
      >
        Websites Developed:
      </i>
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
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pierreresume.com/"
        >
          <i style={{ color: "lightgreen" }}>PierreResume</i>
        </a>
      </li>
    </ul>
  </ul>
);

const banyan = (
  <ul className="a">
    <li>
      Installed and configured new hardware, software, and peripheral devices.
    </li>
    <li>
      Provided technical support to internal customers in a timely manner.
    </li>
    <li>
      Assisted users with troubleshooting computer issues via remote desktop
      sessions.
    </li>
    <li>
      Created user accounts and managed access privileges on networked systems
      using Active Directory, Kipu, Trac9, as well as various other
      applications.
    </li>
    <li>
      Maintained various databases of customer information and service requests.
    </li>
    <li>
      Documented all help desk activities, including customer inquiries,
      resolutions, and system configurations using ,<ii>helpdesk</ii>.
    </li>
    <li>
      Performed regular maintenance tasks, such as virus scans, system backups,
      and disk cleanups.
    </li>
    <li>
      Resolved complex technical problems by researching solutions online or
      consulting with subject matter experts.
    </li>
    <li>
      Monitored server performance metrics to ensure optimal operation of IT
      services.
    </li>
    <li>Provided assistance with mobile device setup and configuration.</li>
    <li>
      Managed inventory of IT equipment, such as laptops, printers, and other
      equipment using SnipeIT.
    </li>
    {/* <ul style={{ listStyle: "square" }}>
      <i
        style={{ textShadow: "2px 2px black", borderBottom: "2px solid grey" }}
      >
        Websites Developed:
      </i>
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
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pierreresume.com/"
        >
          <i style={{ color: "lightgreen" }}>PierreResume</i>
        </a>
      </li>
    </ul> */}
  </ul>
);

const amanoMc = (
  <ul className="a">
    <li>
      Monitored various parking systems including the new Software for Amano
      ONE.
    </li>
    <li>
      Performed monthly system software check for premium customer based on a
      personally developed checklist.
    </li>
    <li>
      When required, traveled to sites that were offfline and/or incacessible
      through network. Diagnosed technical and hardware issues to get customer
      online as soon as possible.
    </li>
    <li>Trained employees and customers on Amano software and hardware.</li>
    <li>Assisted technicians remotely and onsite.</li>
  </ul>
);

const lexisNexis = (
  <ul className="a">
    <li>
      Analyzed network issues, developing fixes and troubleshooting problems to
      maintain organizational effectiveness.
    </li>
    <li>
      Established and maintained network systems using networking principles.
    </li>
    <li>
      Provided effective resolutions to various issues and escalated problems
      with expedient support and quality solutions.
    </li>
    <li>
      Maintained software implementations to meet regulatory and organizational
      guidelines.
    </li>
  </ul>
);
//test2
const aux = (
  <ul className="a">
    <li>Increased productivity of our crew by 60%.</li>
    <li>
      Installed and repaired foundations for operating machinery and principal
      structures and components.
    </li>
    <li>Repaired and built over 750k$ worth of equipment for the US Navy.</li>
    <li>
      Personally awarded raises by the owner for expertise and willingness to
      work hard.
    </li>
    <li>Was on select crew sent to Hydraulic Pump training.</li>
    <li>Earned reputation for good attendance, hard work and reliability.</li>
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
      Lead by example and took responsibility for all actions drive culture of
      performance excellence.
    </li>
    <li>
      Streamlined operational efficiencies by coordinating staff development and
      succession planning.
    </li>
  </ul>
);

const ffresh = (
  <ul className="a">
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
      Coordinated efficient restocking of grocery merchandise to meet customer
      needs and promote consistent sales.
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
      Identified and solved complex strategy problems to drive organizational
      goals.
    </li>
  </ul>
);

const eCedar = (
  <ul className="a">
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
    <li>Earned reputation for great attendance and hard work.</li>
  </ul>
);

const marine = (
  <ul className="a">
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

export const certificationsImage = [
  {
    id: 0,
    image: "./images/A+cert.png",
    imageUrl:
      "https://www.youracclaim.com/badges/8f8cee10-650a-4d4b-9c14-8656988b28f3",
    altText: "A+",
  },
  {
    id: 0,
    image: "./images/Security+cert.png",
    imageUrl:
      "https://www.credly.com/badges/456b010f-6ad0-4c52-9816-9dd32170eb56/public_url",
    altText: "Security+",
  },
  {
    id: 0,
    image: "./images/Network+Cert.png",
    imageUrl:
      "https://www.credly.com/badges/e1790638-acb0-4541-a0ae-bc7af8aeca61/public_url",
    altText: "Network+",
  },
  {
    id: 0,
    image: "./images/CIOSlogo.png",
    imageUrl:
      "https://www.credly.com/badges/f76db032-6910-4431-9205-6f14c044abcb/public_url",
    altText: "CIOS",
  },
  {
    id: 0,
    image: "./images/CSISlogo.png",
    imageUrl:
      "https://www.credly.com/badges/2cb617ba-fc24-4010-bbe1-c56487d727aa/public_url",
    altText: "CSIS",
  },
  {
    id: 0,
    image: "./images/azlogo.png",
    imageUrl:
      "https://www.credly.com/badges/2cb617ba-fc24-4010-bbe1-c56487d727aa/public_url",
    altText: "Azure900",
  },
];

export const workExp = [
  {
    id: 0,
    image: "../images/logos/banyan.png",
    imageUrl: "https://www.banyantreatmentcenter.com/",
    title: "Banyan Treatment Centers",
    position: "IT Helpdesk Technician",
    location: "Pompano Beach, Florida",
    dates: "(08/2023 - Present)",
    experience: banyan,
  },
  {
    id: 1,
    image: "../images/logos/amanomc.png",
    imageUrl: "https://www.amanomcgann.com/",
    title: "Amano McGann",
    position: "System Support Specialist",
    location: "Pompano Beach, Florida",
    dates: "(08/2022 - 03/2023)",
    experience: amanoMc,
  },
  {
    id: 2,
    image: "../images/logos/prlogo.png",
    imageUrl: "https://www.pierreradyllc.com/",
    title: "Pierre&RadyLLC",
    position: "Software Developer/ PHP Engineer",
    dates: "(08/2019 - Present)",
    location: " Fort Lauderdale, Florida",
    experience: prLLC,
  },
  {
    id: 3,
    image: "../images/logos/lexisNexis.png",
    imageUrl: "http://www.lexisnexis.com/",
    title: "Key Technical - Lexis Nexis Contract",
    position: "Network Operations Center (NOC Technician)",
    dates: "(10/2021 - 01/2022)",
    location: "Boca Raton, FL",
    experience: lexisNexis,
  },
  {
    id: 4,
    image: "../images/logos/auxiliarysystems.jpg",
    imageUrl: "http://www.auxsysinc.com/",
    title: "Auxilary Systems",
    position: "Outside Machinist",
    dates: "(07/2018 - 08/2019)",
    location: "Norfolk, VA",
    experience: aux,
  },
  {
    id: 5,
    image: "../images/logos/farmfresh.png",
    title: "Farm Fresh Supermarkets",
    position: "Assistant Grocery Manager",
    dates: "(12/2015 - 07/2018)",
    location: "Norfolk, VA",
    experience: ffresh,
  },
  {
    id: 6,
    image: "../images/logos/eastcoastcedarlogo.jpg",
    imageUrl: "https://www.indeed.com/cmp/East-Coast-Cedar/reviews",
    title: "East Coast Cedar",
    position: "Roofing Assistant",
    location: "Virginia Beach, VA",
    dates: "(02/2013 - 01/2015)",
    experience: eCedar,
  },
  {
    id: 7,
    image: "../images/logos/usmclogo.png",
    imageUrl:
      "https://www.marforres.marines.mil/Units/4th-Marine-Division/4th-Combat-Engineer-Battalion/Company-C/",
    title: "United States Marine Corps",
    position: "1371 Combat Engineer",
    location: "Lynchburg, Virginia",
    dates: "(02/2006 - 02/2012)",
    experience: marine,
  },
];

export const divergence = (
  <ul>
    <li style={{ fontWeight: "bold", textShadow: "2px 2px 2px black" }}>
      Cybersecurity Professional Penetration Tester
    </li>
    <i>June 2021 - October 2021</i>
    <ul>
      <li>Virtualization & Cloud - Server+, Linux+, Cloud+</li>
      <li>Wired & Wireless Networking - Network+</li>
      <li>Security and Pentesting - Security+, Pentest+</li>
    </ul>
  </ul>
);

export const newhorizons = (
  <ul>
    <li style={{ fontWeight: "bold", textShadow: "2px 2px 2px black" }}>
      Network Security Program:
    </li>{" "}
    January 2021 - May 2021
    <ul>
      {" "}
      <li>
        A+ <i>Certified</i>
      </li>
      <li>
        Networking+ -- <i>Certification In Progress</i>
      </li>
      <li>
        Security+ <i>Certified</i>
      </li>
      <li>CCNA</li>
      <li>Server+</li>
      <li>Azure Fundamentals & Administration</li>
    </ul>
  </ul>
);

export const nucampExp = (
  <ul>
    <li style={{ fontWeight: "bold", textShadow: "2px 2px 2px black" }}>
      Full Stack Web Developer Program:
    </li>{" "}
    August 2019 - April 2020
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
    <li>Biology Major</li>
    <li>French Minor</li>
    2002 - 2005
    <br />
    Lynchburg, VA
  </ul>
);

export const gRunExp = (
  <ul>
    <li>Advanced Diploma</li>
    1998 - 2002
    <br />
    Virginia Beach, VA
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
