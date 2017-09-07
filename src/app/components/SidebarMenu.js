import React from "react";
import Sidebar from "grommet/components/Sidebar";
import Header from "grommet/components/Header";
import Title from "grommet/components/Title";
import Menu from "grommet/components/Menu";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Footer from "grommet/components/Footer";
import Button from "grommet/components/Button";

const SidebarMenu = props => {
  return (
    <Sidebar colorIndex="neutral-1" fixed={true}>
      <Header pad="medium" justify="between">
        <Title>Dashboard</Title>
      </Header>
      <Box flex="grow" justify="start">
        <Menu primary={true}>
          <Anchor href="#" className="active">
            First
          </Anchor>
          <Anchor href="#">Second</Anchor>
          <Anchor href="#">Third</Anchor>
        </Menu>
      </Box>
      <Footer pad="medium">UserInfo{/* <Button icon={<User />} /> */}</Footer>
    </Sidebar>
  );
};

export default SidebarMenu;
