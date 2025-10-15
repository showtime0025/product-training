import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  Spacer,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Progress,
  Spinner,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Tag,
  TagLabel,
  TagCloseButton,
  SimpleGrid,
  Container,
  Center,
  Square,
  Circle,
  Wrap,
  WrapItem,
  Stack,
  StackDivider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Code,
  Kbd,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Tooltip,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  PinInput,
  PinInputField,
  Editable,
  EditableInput,
  EditablePreview,
  EditableControls,
  EditableSubmitButton,
  EditableCancelButton,
  useToast,
} from '@chakra-ui/react';
import { AddIcon, CheckIcon, EmailIcon, PhoneIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';

const meta: Meta = {
  title: 'Chakra UI/Components',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  render: () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Buttons</Heading>
      <ButtonGroup spacing={4}>
        <Button colorScheme="blue">Button</Button>
        <Button colorScheme="teal" variant="outline">Outline</Button>
        <Button colorScheme="green" variant="ghost">Ghost</Button>
        <Button colorScheme="red" variant="link">Link</Button>
      </ButtonGroup>
      <ButtonGroup size="sm" spacing={4}>
        <Button colorScheme="blue">Small</Button>
        <Button colorScheme="teal" variant="outline">Small</Button>
      </ButtonGroup>
      <ButtonGroup size="lg" spacing={4}>
        <Button colorScheme="blue">Large</Button>
        <Button colorScheme="teal" variant="outline">Large</Button>
      </ButtonGroup>
    </VStack>
  ),
};

export const Typography: Story = {
  render: () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Typography</Heading>
      <Heading size="4xl">Heading 4xl</Heading>
      <Heading size="3xl">Heading 3xl</Heading>
      <Heading size="2xl">Heading 2xl</Heading>
      <Heading size="xl">Heading xl</Heading>
      <Heading size="lg">Heading lg</Heading>
      <Heading size="md">Heading md</Heading>
      <Heading size="sm">Heading sm</Heading>
      <Heading size="xs">Heading xs</Heading>
      <Text fontSize="6xl">Text 6xl</Text>
      <Text fontSize="5xl">Text 5xl</Text>
      <Text fontSize="4xl">Text 4xl</Text>
      <Text fontSize="3xl">Text 3xl</Text>
      <Text fontSize="2xl">Text 2xl</Text>
      <Text fontSize="xl">Text xl</Text>
      <Text fontSize="lg">Text lg</Text>
      <Text fontSize="md">Text md</Text>
      <Text fontSize="sm">Text sm</Text>
      <Text fontSize="xs">Text xs</Text>
    </VStack>
  ),
};

export const Cards: Story = {
  render: () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Cards</Heading>
      <SimpleGrid columns={2} spacing={4}>
        <Card>
          <CardHeader>
            <Heading size="md">Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Settings</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </VStack>
  ),
};

export const Forms: Story = {
  render: () => (
    <VStack spacing={4} align="stretch" maxW="md">
      <Heading size="md">Forms</Heading>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <EmailIcon />
          </InputLeftElement>
          <Input type="email" placeholder="Enter your email" />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Phone</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <PhoneIcon />
          </InputLeftElement>
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Search</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input placeholder="Search..." />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Enter your message" />
      </FormControl>
      <Checkbox defaultChecked>Check me out</Checkbox>
      <RadioGroup defaultValue="1">
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </VStack>
  ),
};

export const Feedback: Story = {
  render: () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Feedback</Heading>
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>Your application has been received.</AlertDescription>
      </Alert>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>There was an error processing your request.</AlertDescription>
      </Alert>
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription>Please check your input.</AlertDescription>
      </Alert>
      <Alert status="info">
        <AlertIcon />
        <AlertTitle>Info!</AlertTitle>
        <AlertDescription>Here is some information.</AlertDescription>
      </Alert>
      <Progress value={80} />
      <Spinner />
      <Spinner color="red.500" />
      <Spinner size="xl" />
    </VStack>
  ),
};

export const DataDisplay: Story = {
  render: () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Data Display</Heading>
      <HStack spacing={4}>
        <Badge>Default</Badge>
        <Badge colorScheme="green">Success</Badge>
        <Badge colorScheme="red">Removed</Badge>
        <Badge colorScheme="purple">New</Badge>
      </HStack>
      <HStack spacing={4}>
        <Tag>Sample Tag</Tag>
        <Tag colorScheme="pink">Pink</Tag>
        <Tag colorScheme="red">Red</Tag>
        <Tag colorScheme="orange">Orange</Tag>
        <Tag colorScheme="yellow">Yellow</Tag>
        <Tag colorScheme="green">Green</Tag>
        <Tag colorScheme="teal">Teal</Tag>
        <Tag colorScheme="blue">Blue</Tag>
        <Tag colorScheme="cyan">Cyan</Tag>
        <Tag colorScheme="purple">Purple</Tag>
      </HStack>
      <AvatarGroup size="md" max={3}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
      <Stat>
        <StatLabel>Collected Fees</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          23.36%
        </StatHelpText>
      </Stat>
    </VStack>
  ),
};

export const Navigation: Story = {
  render: () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Navigation</Heading>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Menu>
        <MenuButton as={Button} rightIcon={<AddIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuDivider />
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Menu>
    </VStack>
  ),
};

export const Layout: Story = {
  render: () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Layout</Heading>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Flex>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
      <HStack spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
      <VStack spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </VStack>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </VStack>
  ),
};

export const Media: Story = {
  render: () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Media</Heading>
      <Image
        boxSize="100px"
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Avatar size="xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Avatar size="xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
    </VStack>
  ),
};

export const Overlay: Story = {
  render: () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
      isOpen: isDrawerOpen,
      onOpen: onDrawerOpen,
      onClose: onDrawerClose,
    } = useDisclosure();
    const toast = useToast();

    return (
      <VStack spacing={4} align="stretch">
        <Heading size="md">Overlay</Heading>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Modal content goes here...</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button onClick={onDrawerOpen}>Open Drawer</Button>
        <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
            <DrawerBody>
              <Text>Drawer content goes here...</Text>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onDrawerClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Popover>
          <PopoverTrigger>
            <Button>Trigger</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
          </PopoverContent>
        </Popover>
        <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
          <Button>Hover me</Button>
        </Tooltip>
        <Button
          onClick={() =>
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Show Toast
        </Button>
      </VStack>
    );
  },
};

export const Disclosure: Story = {
  render: () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Disclosure</Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  ),
};

export const FormControls: Story = {
  render: () => (
    <VStack spacing={4} align="stretch" maxW="md">
      <Heading size="md">Form Controls</Heading>
      <FormControl>
        <FormLabel>Switch</FormLabel>
        <Switch />
      </FormControl>
      <FormControl>
        <FormLabel>Checkbox</FormLabel>
        <CheckboxGroup>
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Checkbox value="naruto">Naruto</Checkbox>
            <Checkbox value="sasuke">Sasuke</Checkbox>
            <Checkbox value="kakashi">Kakashi</Checkbox>
          </Stack>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Radio</FormLabel>
        <RadioGroup defaultValue="1">
          <Stack direction="row">
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Slider</FormLabel>
        <Slider defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
      <FormControl>
        <FormLabel>Number Input</FormLabel>
        <NumberInput defaultValue={15} min={10} max={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Pin Input</FormLabel>
        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </FormControl>
    </VStack>
  ),
};
