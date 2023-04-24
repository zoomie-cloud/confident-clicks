import React, {useContext, useEffect} from "react";
import { Col, Layout, Row } from "antd";
import InfoModal from "../../components/Modal";
import { GlobalContext } from "../../hooks/provider";
import { Battery, Quesiton, ProgressBar, Options } from "../../components";

const { Content } = Layout;

function Game() {
  const [state, dispatch] = useContext(GlobalContext);

  const {
    topScore,
    currentScore,
    question: { options, text },
  } = state;

  function calcScore() {
    return ((currentScore / topScore) * 100).toFixed(0);
  }

  return (
    <Layout style={{ backgroundColor: "black" }}>
      <Content style={{ padding: 20, height: "100vh" }}>
        <Row style={{ height: "60%", margin: 5 }}>
          <Quesiton />
        </Row>
        <Row style={{ height: "35%" }} block>
          <Col flex="1" style={{ margin: 5 }}>
            <Row>
              <Options options={options} />
              <Battery score={calcScore()} />
            </Row>
          </Col>
        </Row>
        <Row style={{ height: "5%", padding: 5 }} block>
          <ProgressBar score={calcScore()} />
        </Row>
      </Content>
      <InfoModal />
    </Layout>
  );
}

export default Game;
