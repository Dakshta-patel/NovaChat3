import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import {useContext} from "react";
import {ThemeContext} from "../../Context/ThemeContext"

const ProfileModal = ({ user, children }) => {
  const {theme} = useContext(ThemeContext)
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal className="ml-20"size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          className={`rounded-xl px-5 ${
            theme === "dark" ? "bg-black text-white" : "bg-green-400"
          }`}
          width="30%"
          flexDir="column"
          justifyContent="center" // Align content vertically in the center
          alignItems="center" // Align content horizontally in the center
          marginLeft="35%" marginTop="15%"
        >
          <ModalHeader
            className="font-semibold"
            fontSize="20px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            {user.username}
          </ModalHeader>
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.profile ? user.profile:".../assets/profile.png"}
              alt={user.username}
            />
            <Text className="font-semibold"
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button className="bg-blue-600 px-2 py-2 rounded-lg"onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;