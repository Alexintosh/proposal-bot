import * as Slimbot from "slimbot";
import * as moment from "moment";
import { config } from '../config';
import { Proposal } from '../types';

let optionalParams = {
    parse_mode: "Markdown",
    disable_web_page_preview: true,
}

const slimbot = new Slimbot(config.telegramAccessCode);
slimbot.on('channel_post', message => console.log('message.chat.id', message.chat.id));
slimbot.startPolling();

export async function notifyTelegram(proposals: Proposal[]): Promise<void> {
    let message = `π³ There are *${proposals.length}* open votes. π³\n`
    proposals.forEach( p => {
message += `
*${p.title}*
β³ End ${moment.unix(p.end).fromNow()}
π¦ΈββοΈ Author: ${p.author}\n`
});

    message += `\nπ Vote: https://snapshot.org/#/${config.spaceId}/`;
    return slimbot.sendMessage(config.telegramChannelId, message, optionalParams);
}