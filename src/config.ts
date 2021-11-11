import dotenv from 'dotenv';

dotenv.config();

export const config = {
  snapshotSubgraph:
    process.env.SNAPSHOT_SUBGRAPH_URL ??
    'https://hub.snapshot.org/graphql',
  spaceId: process.env.spaceId ?? 'piedao.eth',  
  twitterEnabled: process.env.TWITTER_ENABLED === 'true',
  twitterAppKey: process.env.TWITTER_APP_KEY ?? '',
  twitterAppSecret: process.env.TWITTER_APP_SECRET ?? '',
  twitterAccessToken: process.env.TWITTER_ACCESS_TOKEN ?? '',
  twitterAccessSecret: process.env.TWITTER_ACCESS_SECRET ?? '',
  veDoughTokenAddress:
    process.env.NOUNS_TOKEN_ADDRESS ?? '0xe6136f2e90eeea7280ae5a0a8e6f48fb222af945',
  jsonRpcUrl: process.env.JSON_RPC_URL ?? 'http://localhost:8545',
  discordEnabled: process.env.DISCORD_ENABLED === 'true',
  discordWebhookToken: process.env.DISCORD_WEBHOOK_TOKEN ?? '',
  discordWebhookId: process.env.DISCORD_WEBHOOK_ID ?? '',
  discordPublicWebhookToken: process.env.DISCORD_PUBLIC_WEBHOOK_TOKEN ?? '',
  discordPublicWebhookId: process.env.DISCORD_PUBLIC_WEBHOOK_ID ?? ''
};