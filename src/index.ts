import * as cron from 'node-cron';
import { Every } from './utils/every';
import { getLastOpenProposals } from './subgraph';
import { notifyTelegram } from './handlers/telegram';

async function main() {
    const res = await getLastOpenProposals(1636923917);
    await notifyTelegram(res);
}

cron.schedule(Every.day, main);