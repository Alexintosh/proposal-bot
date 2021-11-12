import * as cron from 'node-cron';
import * as moment from "moment";
import { Every } from './utils/every';
import { getLastOpenProposals } from './subgraph';
import { notifyTelegram } from './handlers/telegram';

async function main() {
    let now = moment().unix();
    const res = await getLastOpenProposals(now);
    await notifyTelegram(res);
}

cron.schedule(Every.twelveHours, main);