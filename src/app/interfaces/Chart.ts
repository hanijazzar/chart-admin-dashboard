export interface Chart {
    id: number,
    labels : string[],
    data : number[],
    datasets: object[],
    options: object,
    type : string
}
