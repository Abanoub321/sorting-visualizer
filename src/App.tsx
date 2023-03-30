import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import Visualiser from './components/visualizer';
import Sort from './utils/sort';
import SortingAlgorithm from './utils/algorithms/SortingAlgorithm';
function App() {
  const [arr, setArr] = useState<number[]>([]);
  const [generating, setGenerating] = useState(false);
  const [sorting, setSorting] = useState(false);

  const generateArr = (formState: { size: number }) => {
    setGenerating(true);
    setTimeout(() => {
      let newArr = [];
      while (newArr.length <= formState.size) {
        let random = Math.floor(Math.random() * (200 - 10) + 10);
        if (newArr.indexOf(random) === -1) {
          newArr.push(random);
        }
      }
      setArr([...newArr]);
      setGenerating(false);
    }, 500)
  };

  const sort = (algorithm: SortingAlgorithm) => {
    setSorting(true);
    setTimeout(() => {
      let sort = new Sort(algorithm);
      setArr(sort.sort(arr, setArr))
    }, 500);
  };

  useEffect(() => {
    generateArr({ size: 10 });
  }, []);

  return (
    <Box p={"4"}>
      <Flex gap={"4"}>
        <Sidebar
          generateArr={generateArr}
          sort={sort}
        />
        <Visualiser data={arr} />
      </Flex>
    </Box>
  );
}

export default App;
