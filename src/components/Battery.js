import { Col, Image } from "antd";
import Zero from "../assets/img/0_.png";
import One from "../assets/img/25_.png";
import Two from "../assets/img/50_.png";
import Three from "../assets/img/75_.png";
import Four from "../assets/img/100_.png";

function getBatteryImage(score=100) {

  if (score >= 0 && score <= 25) {
    return Zero;
  } else if (score > 25 && score <= 50) {
    return One;
  } else if (score > 50 && score <= 60) {
    return Two;
  } else if (score > 60 && score <= 85) {
    return Three;
  } else if (score > 85 ) {
    return Four;
  }
}

function Battery({score}) {

  return (
    <Col flex="1" style={{ margin: "10" }}>
      <Image
        style={{ marginTop:"-70%", padding:5}}
        width={"100%"}
        preview={false}
        src={getBatteryImage(score)}
      />
    </Col>
  );
}

export default Battery;
