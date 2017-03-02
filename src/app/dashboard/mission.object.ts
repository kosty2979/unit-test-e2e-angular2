// Single mission object
export class Mission {

    id: string; // mission id - 32 unique chars
    vehicle: number;
    package: string;
    route: string;
    status: number;
    created: number;

    constructor(details: any) {
        // deserialize object data from json
        this.deserialize(details);
    }

    /**
     * Class deserialize
     */
    deserialize(details: Object): void {
        this.id = details['id'];
        this.vehicle = details['vehicle'];
        if (details['package'] != null) {
            this.package = details['package'];
        }
        this.route = details['route'];
        this.status = details['status'];
        this.created = details['created'];
    }
}
