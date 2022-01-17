import * as cron from 'node-cron';
import * as moment from "moment";
import { Every } from './utils/every';
import { getLastOpenProposals } from './subgraph';
import { notifyTelegram } from './handlers/telegram';

async function main() {
    let now = moment().unix();
    const res = await getLastOpenProposals(now);
    if(res.length > 0) {
        await notifyTelegram(res);
    } else {
        console.log('No proposals')
    }
}

cron.schedule(Every.twelveHours, main);