import { Flex, Typography } from "antd";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <Flex align="center" gap={20}>
      <img src={logo} alt="logo" />
      <Typography.Title>Chart Builder</Typography.Title>
    </Flex>
  );
};

export default Header;
