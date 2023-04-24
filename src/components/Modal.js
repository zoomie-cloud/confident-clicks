import { Fragment, useContext } from "react";
import { Button, Modal, Result, Typography, Row, Space, Col } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { GlobalContext } from "../hooks/provider";
import { changeQuestion, toggleModal } from "../hooks/actions";
import { SoundFilled, CaretRightOutlined } from "@ant-design/icons";

const InfoModal = () => {
  const [state, dispach] = useContext(GlobalContext);

  const {
    modal,
    option: { score, alert, action },
  } = state;

  function onClick() {
    dispach(changeQuestion(action));
    dispach(toggleModal());
  }

  function good() {
    if (score == undefined) {
      return true;
    }

    return score == 0;
  }
  return (
    <Fragment>
      <Modal width={"65vw"} centered open={modal} footer={null}>
        <Result
          icon={
            good() ? (
              <SmileOutlined style={{ color: "green" }} />
            ) : (
              <FrownOutlined style={{ color: "red" }} />
            )
          }
          title={good() ? "Great choice" : "Bad Choice"}
          extra={
            <Fragment>
              <Typography.Title level={2}> {alert} </Typography.Title>
              <Row block align="center">
                <Space>
                  <SoundFilled style={{ color: "blue" }} />
                </Space>
              </Row>
              <br />
              <Button type="primary" onClick={onClick} size="large">
                <Row align="right" justify="right" gutter={[15,5]}block>
                  <Col>Next Question</Col>
                  <Col>
                    <CaretRightOutlined />
                  </Col>
                </Row>
              </Button>
            </Fragment>
          }
        />
      </Modal>
    </Fragment>
  );
};
export default InfoModal;
