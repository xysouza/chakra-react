import { Box, Icon } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FiArrowDownCircle } from 'react-icons/fi';

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const ScrollIndicator = ({ iconProps = {}, boxProps = {}, ...rest }) => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      border="1px solid"
      borderColor="rgba(44, 255, 153, 0.6)"
      borderRadius="full"
      p="3"
      boxShadow="0 0 35px rgba(44, 255, 153, 0.35)"
      bg="rgba(13, 26, 33, 0.75)"
      animation={`${float} 2.8s ease-in-out infinite`}
      {...boxProps}
      {...rest}
    >
      <Icon
        as={FiArrowDownCircle}
        fontSize="28px"
        color="#2CFF99"
        {...iconProps}
      />
    </Box>
  );
};

export default ScrollIndicator;
