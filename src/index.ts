import * as cron from 'node-cron';
import { Every } from './utils/every';
import { getLastOpenProposals } from './subgraph';

async function main() {
    const res = await getLastOpenProposals(1636923917);
    console.log(res);
}

cron.schedule(Every.minute, main);