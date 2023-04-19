import "./App.css";
import MatrixBackground from "../../components/MatrixBackground";
import Logo from "../../assets/img/confidentclicks.png";
import { Button, Col, Layout, Row } from "antd";

const btnStyle = {
  width: "20vw",
  height: "7.5vh",
  textAlign: "center",
  padding: "0.9rem 1.2rem",
  borderRadius: 25,
  backgroundColor: "blue",
  border: 0,
  textTransform: "uppercase",
  letterSpacing: "0.2rem",
  fontSize: "2rem",
  color: "white",
  cursor: "pointer",
  margin: "auto"
};

function Login() {
  return (
    <div className="App">
      <div id="stripes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Layout style={{ height: "100vh" }}>
        <Layout.Content
          style={{
            alignItems: "center",
            margin: "2%",
            padding: 25,
            minHeight: 280,
            zIndex: "3",
          }}
        >
          <Row justify="center">
          <img src={Logo} />
          </Row>
        </Layout.Content>
        <Layout.Footer>
          <Row justify="center">
            <Col style={{ margin: 10 }}>
              <Button style={btnStyle}>Parent</Button>
            </Col>
            <Col style={{ margin: 10 }}>
              <Button style={btnStyle} href="/intro">
                Student
              </Button>
            </Col>
          </Row>
        </Layout.Footer>
      </Layout>
    </div>
  );
}

export default Login;
