import { Client } from "../client/client";
import { EstimateLine } from "./estimate-line";

export interface Estimate {

    id: number;
    client: Client;
    estimateDate: Date;
    estimateLines: EstimateLine[]
              
}
