import { Flex, Typography } from "antd";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <Flex align="center" gap={20} className="header-container">
      <img src={logo} alt="logo" />
      <Typography.Title className="text">Chart Builder</Typography.Title>
    </Flex>
  );
};

export default Header;
