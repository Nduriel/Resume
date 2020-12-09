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
        src="./images/highschool.jpg"
        alt="WorkoutPic"
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
      <Media object style={size.image} src="./images/Me.jpg" alt="usmcme" />
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
