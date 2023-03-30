import SortingAlgorithm from "./SortingAlgorithm";

export default class InsertionSort implements SortingAlgorithm {
    public sort(array: number[], setState: React.Dispatch<React.SetStateAction<number[]>>): number[] {
        let sortedArray = [...array];
        for (let i = 1; i < sortedArray.length; i++) {
            setTimeout(() => {
                let key = sortedArray[i];
                let j = i - 1;
                while (j >= 0 && sortedArray[j] > key) {
                    sortedArray[j + 1] = sortedArray[j];
                    j = j - 1;
                }
                sortedArray[j + 1] = key;
                let newStep = [...sortedArray];
                setTimeout(() => {
                    setState([...newStep]);
                }, i * 100);
            }, i * 1000);
        }
        return sortedArray;
    }
}