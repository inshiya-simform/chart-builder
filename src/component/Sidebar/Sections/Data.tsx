import { Button } from "antd";

const Data = () => {
  function addData() {
    alert("Add Data button clicked");
  }
  return (
    <Button onClick={addData} type="primary">
      Add Data
    </Button>
  );
};

export default Data;
