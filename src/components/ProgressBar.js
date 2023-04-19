import { Col, Progress } from "antd";

function ProgressBar({ score }) {
  return (
    <Col style={{ paddingTop:"1%" }} span={20}>
      <Progress
        showInfo={false}
        percent={score}
        status="active"
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
      />
    </Col>
  );
}

export default ProgressBar;
