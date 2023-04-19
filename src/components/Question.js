import { Col, Card, Typography } from "antd";


function Quesiton({ text }) {
  return (
    <Col span={20} style={{ padding: 5 }}>
      <Card
        style={{
          height: "100%",
          paddingTop: "10%",
          backgroundColor: "transparent",
          borderRadius: 0,
          fontFamily: "Disket"
        }}
      >
        <Typography.Title style={{ color: "white",fontFamily: "Disket" }}> {text} </Typography.Title>
      </Card>
    </Col>
  );
}

export default Quesiton;
