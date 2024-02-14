import React from "react";
import TeamCard from "./TeamCard";
import { Col } from "react-bootstrap";

const Teamsection = () => {
  const teamMembers = [
    {
      id: 1,
      title: "Guy Hawkins",
      subtitle: "Senior Product Manager",
      image: "./people1.png",
    },
    {
      id: 2,
      title: "Ronald Richards",
      subtitle: "Product Executive",
      image: "./people2.png",
    },
    {
      id: 3,
      title: "Bessie Cooper",
      subtitle: "Product Admin",
      image: "./people3.png",
    },
    {
      id: 4,
      title: "Kristin Watson",
      subtitle: "Interaction Designer",
      image: "./people4.png",
    },
    {
      id: 5,
      title: "Ralph Edwards",
      subtitle: "Data Analyst",
      image: "./people5.png",
    },
    {
      id: 6,
      title: "Leslie Alexander",
      subtitle: "Data Analyst Lead",
      image: "./people6.png",
    },
    {
      id: 7,
      title: "Arlene McCoy",
      subtitle: "User Interface Developer",
      image: "./people7.png",
    },
    {
      id: 8,
      title: "Cody Fisher",
      subtitle: "Full Stack Software Engineeri",
      image: "./people8.png",
    },
  ];
  return (
    <>
      <div>
        <div className="text-center mt-5">
          <h4 style={{ color: "#1985D2", fontWeight: "600" }}> Our Team </h4>
          <h1>
            {" "}
            <b>Our Amazing People</b>
          </h1>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore Ut enim ad minim.
          </p>
        </div>
        <div className="container my-5 text-center">
          <div className="row">
            {teamMembers.map((member) => (
              <Col md={3} xs={6} key={member.id} className=" ">
                <TeamCard
                  title={member.title}
                  subtitle={member.subtitle}
                  image={member.image}
                />
              </Col>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamsection;
