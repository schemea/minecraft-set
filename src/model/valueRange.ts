export class ValueRange {
    constructor(public min: number, public max: number) {
    }

    get average() {
        return (this.min + this.max) / 2;
    }
}
