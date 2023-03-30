import {
    Box,
    Button, Flex, FormControl, FormLabel, Select, Slider, SliderFilledTrack, SliderThumb,
    SliderTrack
} from "@chakra-ui/react";
import React, { useState } from "react";
import algorithms from "../constants/algorithms";
import SortingAlgorithm from "../utils/algorithms/SortingAlgorithm";
const Sidebar = ({ generateArr, sort }: { generateArr: (formState: { size: number, algorithm: any }) => void, sort: (algorithm: SortingAlgorithm) => void }) => {
    const [formState, setFormState] = useState<{
        size: number,
        algorithm: SortingAlgorithm
    }>({
        size: 10,
        algorithm: algorithms[0].algorithm,
    });

    return (
        <Box minW="xs" bg="gray.100" p={"4"} borderRadius="lg" overflow="hidden">
            <FormControl>
                <FormLabel htmlFor="size">{`Array Size (${formState.size})`}</FormLabel>
                <Slider
                    onChangeEnd={(v) => setFormState({ ...formState, size: v })}
                    aria-label={"10"}
                    min={10}
                    max={200}
                    defaultValue={10}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="algorithm">Algorithm</FormLabel>
                <Select
                    onChange={(e) => {
                        const algorithm = algorithms.find(a => a.name === e.target.value);
                        if (algorithm) {
                            setFormState({ ...formState, algorithm: algorithm.algorithm });
                        }
                    }}
                    bg={"white"}
                    id="algorithm"
                    variant={"outline"}
                >
                    {
                        algorithms.map((a, index) => {
                            return <option value={a.name} key={index}>{a.name}</option>;
                        })
                    }
                </Select>
            </FormControl>
            <Flex gap={"3"} mt={"5"} direction="row">
                <Button
                    onClick={() => {
                        generateArr(formState);
                    }}
                    colorScheme="purple"
                >
                    Generate Array
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        sort(formState.algorithm);
                    }}
                    colorScheme="purple"
                    variant="outline"
                >
                    Sort
                </Button>
            </Flex>
        </Box>
    );
};
export default Sidebar;