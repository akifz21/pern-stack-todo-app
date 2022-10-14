import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

export default function Main() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '7xl' }}
            lineHeight={'110%'}>
            Pern Stack <br />
            <Text as={'span'} color={'purple.600'}>
              Todo App
            </Text>
          </Heading>
          <Text fontSize={'lg'} color={'gray.500'}>
            Full Stack Todo App developed with PostgreSQL,Express.js,Node.js,React.js and JWT by akifz21
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              color={'white'}
              bg={'purple.600'}
              rounded={'full'}
              px={6}
              size={'lg'}
              _hover={{
                bg: 'purple.500',
              }}>
              Register
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'md'}>
              Github
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

