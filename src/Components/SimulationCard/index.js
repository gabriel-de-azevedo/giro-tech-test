import {
  Box,
  Button,
  Collapse,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { MdCalendarToday } from 'react-icons/md';

export const SimulationCard = () => {
  const [investment, setInvestment] = useState(1000);
  const [time, setTime] = useState(10);
  const [result, setResult] = useState(0);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    setProfit((result - investment).toFixed(2));
  }, [result]);

  return (
    <FormControl
      isRequired
      w="300px"
      borderWidth="1px"
      borderRadius={8}
      p={4}
      shadow="md"
    >
      <Stack spacing={4}>
        <Box>
          <FormLabel>Investimento</FormLabel>
          <InputGroup>
            <InputLeftAddon children="R$" />
            <Input
              id="investment"
              type="number"
              min={0.01}
              step={0.01}
              value={investment}
              onChange={(e) => setInvestment(parseFloat(e.target.value) || '')}
            />
          </InputGroup>
        </Box>
        <Box>
          <FormLabel>Tempo</FormLabel>
          <InputGroup>
            <InputLeftAddon children={<MdCalendarToday />} />
            <Input
              id="time"
              type="number"
              min={1}
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value) || '')}
            />
          </InputGroup>
        </Box>
        <Box />
        <Button onClick={() => setResult(result + 1)}>Simular</Button>
        <Collapse in={result} animateOpacity>
          <Stat>
            <StatLabel>Resultado</StatLabel>
            <StatNumber>R$ {result}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              R$ {profit}
            </StatHelpText>
          </Stat>
        </Collapse>
      </Stack>
    </FormControl>
  );
};
