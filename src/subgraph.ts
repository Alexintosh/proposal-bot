import { request, gql } from 'graphql-request';
import { config } from './config';
import { Proposal } from './types';

/**
 * Query the subgraph and return the open proposals closing before end_timestamp.
 * @returns Array of proposals;
 */
export async function getLastOpenProposals(end_timestamp: number): Promise<Proposal[]> {
  const res = await request<{ proposals: Proposal[] }>(
    config.snapshotSubgraph,
    gql`
    query Proposals {
        proposals(first: 100, skip: 0, where: {space: "${config.spaceId}", state: "active", end_gte: ${end_timestamp}}, orderBy: "created", orderDirection: desc) {
          id
          title
          start
          end
          snapshot
          state
          author
        }
      }
    `,
  );
  return res.proposals;
}