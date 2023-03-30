export default interface SortingAlgorithm {
    sort: (array: number[], setState: React.Dispatch<React.SetStateAction<number[]>>) => number[];
}