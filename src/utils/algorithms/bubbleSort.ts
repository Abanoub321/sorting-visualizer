import SortingAlgorithm from "./SortingAlgorithm";

export default class BubbleSort implements SortingAlgorithm {
    public sort(array: number[], setState: React.Dispatch<React.SetStateAction<number[]>>): number[] {
        let sortedArray = [...array];
        for (let i = 0; i < sortedArray.length - 1; i++) {
            setTimeout(() => {
                for (let j = 0; j < sortedArray.length - i - 1; j++) {
                    if (sortedArray[j] > sortedArray[j + 1]) {
                        let temp = sortedArray[j];
                        sortedArray[j] = sortedArray[j + 1];
                        sortedArray[j + 1] = temp;
                        let newStep = [...sortedArray];
                        setTimeout(() => {
                            setState([...newStep]);
                        }, j * 100);
                    }
                }
            }, i * 1000);

        }
        // setState([...sortedArray]);
        return sortedArray;
    }
}