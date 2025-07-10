import React from "react";
import { Flex, Link, Icon, Text, useBreakpointValue } from "@chakra-ui/react"; //
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom"; //
import "./NavBar.css";

const Navbar = () => {
  const navigate = useNavigate(); //
  const location = useLocation(); //
  const showText = useBreakpointValue({ base: false, sm: true }); //

  const handleNavigate = (rota) => {
    navigate(rota); //
  };

  const navItems = [
    { path: "/Home", icon: FaHome, label: "Home" }, //
    { path: "/search", icon: FaSearch, label: "Busca" },
    { path: "/notificacoes", icon: FaBell, label: "Alertas" },
    { path: "/perfil", icon: FaUser, label: "Perfil" },
  ];

  return (
    <Flex
      as="nav"
      className="fixed-bottom"
      justify="space-around"
      align="center"
      bg="white"
      borderRadius="2xl"
      p={{ base: "10px 12px", sm: "10px 16px" }} //
      boxShadow="lg"
      w={{ base: "95%", sm: "90%" }} //
      maxW="500px"
      mx="auto"
      gap={{ base: "4px", sm: "8px" }} //
      transition="all 0.3s ease"
    >
      {navItems.map((item) => (
        <Link
          key={item.path}
          onClick={() => handleNavigate(item.path)}
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="8px"
          borderRadius="full"
          cursor="pointer"
          color={location.pathname === item.path ? "white" : "gray.500"} //
          bg={location.pathname === item.path ? "gray.800" : "transparent"} //
          _hover={{ bg: location.pathname === item.path ? "gray.700" : "gray.100" }} //
          transition="all 0.3s ease"
          textDecoration="none"
          _active={{ textDecoration: "none" }}
        >
          <Icon as={item.icon} boxSize={{ base: "1.2rem", sm: "1.4rem" }} /> {/* */}
          {showText && (
            <Text ml="6px" fontSize="0.9rem" display={{ base: "none", sm: "inline" }}> {/* */}
              {item.label}
            </Text>
          )}
        </Link>
      ))}
    </Flex>
  );
};

export default Navbar;