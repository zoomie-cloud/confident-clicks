import { Col, Layout, Row, Card, Typography, Button, Image } from "antd";
import game from "../data/game.json";
import Phone from "../assets/img/iphone.png";
import { Footer } from "antd/es/layout/layout";

const { Content } = Layout;
function Intro() {
  return (
    <Layout style={{ backgroundColor: "black", height: "100vh" }}>
      <Content style={{ padding: 20 }}>
        <Row>
          <Col flex="3">
            <Card
              style={{
                height: "80vh",
                padding: "5%",
                backgroundColor: "transparent",
                borderRadius: 0,
              }}
            >
              <Typography.Title
                level={2}
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: "auto",
                  paddingTop: "10%",
                  fontFamily: "Disket",
                }}
              >
                {game.intro}
              </Typography.Title>
            </Card>
          </Col>
          <Col flex="1">
            <Image preview={false} src={Phone} width="100%"></Image>
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          backgroundColor: "transparent",
        }}
        align="right"
      >
        <Button
          href="/student"
          style={{ height: "120%", width: "10%" }}
          shape="round"
          size="large"
        >
          NEXT
        </Button>
      </Footer>
    </Layout>
  );
}

export default Intro;
