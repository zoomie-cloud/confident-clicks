import { Col, Card, Typography, Row, Space } from "antd";
import { SoundFilled } from "@ant-design/icons";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../hooks/provider";
import { changeAudio } from "../hooks/actions";


function Quesiton() {
  const [state,dispatch] = useContext(GlobalContext)
  const {question: {text, audio}} = state

  useEffect(()=>{
    dispatch(changeAudio(audio))
  },[text])

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
        <Row block align="center">
                <Space>
                  <SoundFilled style={{ color: "red" }} />
                </Space>
              </Row>
      </Card>
    </Col>
  );
}

export default Quesiton;
