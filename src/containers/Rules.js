import { Col, Layout, Row, Card, Typography, Button, Image, Space } from "antd";
import game from "../data/game.json";
import Battery from "../assets/img/100_.png";
import { Footer } from "antd/es/layout/layout";
import { SoundFilled } from "@ant-design/icons";

const { Content } = Layout;
function Rules() {
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
                level={1}
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: "auto",
                  fontFamily: "Disket",
                }}
              >
                GAME RULES:
              </Typography.Title>
              {game.rules.split(".").map((txt) => (
                <Typography.Title
                  level={2}
                  style={{
                    color: "white",
                    textAlign: "center",
                    margin: "auto",
                    paddingTop: "4%",
                    fontFamily: "Disket",
                  }}
                >
                  {txt}
                </Typography.Title>
              ))}
              <Row block align="center">
                <Space>
                  <SoundFilled style={{ color: "red" }} />
                </Space>
              </Row>
            </Card>
          </Col>
          <Col flex="1">
            <Image preview={false} src={Battery} width="100%"></Image>
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
          href="/intro"
          style={{ height: "120%", width: "20%" }}
          shape="round"
          size="large"
        >
          Start
        </Button>
      </Footer>
    </Layout>
  );
}

export default Rules;
