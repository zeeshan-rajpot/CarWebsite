import { Col, Container, Row, Card } from "react-bootstrap";
import Navbar from "../../Components/NewNavbar.jsx";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const cardData = [
    {
      title: "Car Name",
      year: 2018,
      km: "97,951 km",
      price: "$12500",
      src: "/homeCar1.png",
    },
    {
      title: "Car Name",
      year: 2021,
      km: "97,951 km",
      price: "$12500",
      src: "/homeCar2.png",
    },
    {
      title: "Car Name",
      year: 2020,
      km: "97,951 km",
      price: "$12500",
      src: "/homeCar3.png",
    },
    {
      title: "Car Name",
      year: 2018,
      km: "97,951 km",
      price: "$12500",
      src: "/homeCar4.png",
    },
    {
      title: "Car Name",
      year: 2021,
      km: "97,951 km",
      price: "$12500",
      src: "/homeCar5.png",
    },
    {
      title: "Car Name",
      year: 2020,
      km: "97,951 km",
      price: "$12500",
      src: "/homeCar6.png",
    },
  ];

  return (
    <>
      <div>
    <Navbar/>
  
    <Container>
        <Row className="pt-5">
          <div className="pt-5 d-block d-md-flex align-items-center  justify-content-between">
            <div>
              <b style={{ color: "#5A5A5A", fontSize: "1.8rem" }}>
                {" "}
                Upload car
              </b>
            </div>
            <div>
              <input
                className="dashboardSearch me-2 "
                type="search"
                placeholder="Search"
              />
              <button
                style={{
                  fontSize: "25px",
                  background: "transparent",
                  border: "none",
                }}
              >
                <img src="dashButton.png" />
              </button>
            </div>
          </div>
          {cardData.map((data, index) => (
            <Link to=''>
       
            <Col xs={12} md={4} key={index}>
              <Card className="border-0 shadow rounded-5 mt-3">
                <img
                  variant="top"
                  src={data.src}
                  className=" rounded-4"
                  style={{ width: "auto", height: "200px", objectFit: "cover" }}
                />
                <Card.Body
                  className="pe-0 pb-2"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="d-flex ">
                        <Card.Title>{data.title}</Card.Title>
                        <b className="ms-2">{data.year}</b>
                      </div>

                      <p>{data.km}</p>
                    </div>
                    <div>
                      <span
                        className="text-light py-2 px-4 rounded-start-5 text-nowrap "
                        style={{ background: "#1985D2", fontSize: "1.5rem" }}
                      >
                        {data.price}
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            </Link>
          ))}
        </Row>
      </Container>
    </div>
    
    </>
  );
};

export default Dashboard;

{
  /* <Col md={9}>
            <RecentCars />
          </Col>
          <Col
            md={3}
            className='shadow'
            style={{ height: '95vh', overflowY: 'auto' }}
          >
            <PreviousCars />
          </Col> */
}
