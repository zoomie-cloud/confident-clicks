import { Fragment, useContext } from "react";
import { Button, Modal, Result, Typography } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { GlobalContext } from "../hooks/provider";
import { changeQuestion, toggleModal } from "../hooks/actions";

const InfoModal = () => {
  const [state, dispach] = useContext(GlobalContext);

  const {
    modal,
    option: { score, alert, action },
  } = state;

  function onClick() {
    dispach(changeQuestion(action))
    dispach(toggleModal());
  }

  function good(){
    if(score == undefined){
      return true
    }

    return score == 0
  }
  return (
    <Fragment>
      <Modal width={"65vw"} centered open={modal} footer={null}>
        <Result
          icon={good()? <SmileOutlined style={{color: "green"}} /> : <FrownOutlined style={{color: "red"}} />}
          title={good()?"Great choice": "Bad Choice"}
          extra={
            <Fragment>
              <Typography.Title level={2} > {alert} </Typography.Title>
              <br />
              <br />
              <Button type="primary" onClick={onClick}>
                Next Question
              </Button>
            </Fragment>
          }
        />
      </Modal>
    </Fragment>
  );
};
export default InfoModal;
