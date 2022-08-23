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

import { MdCalendarToday } from 'react-icons/md';

import { useEffect, useState } from 'react';

import axios from 'axios';

export const SimulationCard = () => {
  const [investment, setInvestment] = useState(1000);
  const [time, setTime] = useState(10);
  const [selic, setSelic] = useState(0);
  const [result, setResult] = useState(0);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    axios
      .get(
        'http://api.bcb.gov.br/dados/serie/bcdata.sgs.1178/dados/ultimos/01?formato=json'
      )
      .then((response) => {
        return setSelic(parseFloat(response.data[0].valor));
      });
  }, [result]);

  useEffect(() => {
    setProfit((result - investment).toFixed(2));
  }, [result]);

  const handleResult = (e) => {
    e.preventDefault();

    setResult(
      (investment * ((selic / 100 / 12) * time) + investment).toFixed(2)
    );
  };

  return (
    <FormControl
      isRequired
      w="300px"
      borderWidth="1px"
      borderRadius={8}
      p={4}
      shadow="md"
    >
      <Stack spacing={4} as="form" onSubmit={handleResult}>
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
        <Button type="submit">Simular</Button>
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
