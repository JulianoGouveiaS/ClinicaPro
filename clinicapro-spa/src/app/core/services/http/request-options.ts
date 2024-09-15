import { isBoolean } from "lodash";

export class RequestOptions {
    loader?: boolean = true;
    backgroundLoader?: boolean = false;
    handleError?: boolean = true;
    useToken?: boolean = true;

    constructor(requestOptions?: Partial<RequestOptions>) {
        if (requestOptions) {
            Object.assign(this, requestOptions);
        }
    }

    wantLoader() {
        return this.loader || this.backgroundLoader;
    }

}
