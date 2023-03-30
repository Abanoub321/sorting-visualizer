import SortingAlgorithm from "./SortingAlgorithm";

export default class SelectionSort implements SortingAlgorithm {
    public sort(array: number[], setState: React.Dispatch<React.SetStateAction<number[]>>): number[] {
        let sortedArray = [...array];
        for (let i = 0; i < sortedArray.length - 1; i++) {
            let minIndex = i;
            setTimeout(() => {
                for (let j = i + 1; j < sortedArray.length; j++) {
                    if (sortedArray[j] < sortedArray[minIndex]) {
                        minIndex = j;
                    }
                }
                let temp = sortedArray[minIndex];
                sortedArray[minIndex] = sortedArray[i];
                sortedArray[i] = temp;
                let newStep = [...sortedArray];
                setTimeout(() => {
                    setState([...newStep]);
                }, i * 100);
            }, i * 1000);
        }
        return sortedArray;
    }
}