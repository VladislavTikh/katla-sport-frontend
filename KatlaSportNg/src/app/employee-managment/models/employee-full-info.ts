export class EmployeeFullInfo {
    constructor(
        public id: number,
        public name: string,
        public role: string,
        public storeHiveId: number,
        public bossId: number,
        public imageUri: string,
    ) { }
}
