import { PlayerType } from "slippi-web-bridge";
import { characterNameByExternalId } from "./ids.js";

type PlayerInfo = {
  port: number,
  character: string
};

/**
 * Simplify player data from Slippi's GameStart event.
 * Expects a 1v1 match for now.
 */
export function playerInfo(players: PlayerType[]): { player1: PlayerInfo, player2: PlayerInfo } {
  const filteredPlayers = players.filter(p => p.type !== null && p.type < 3);
  if (filteredPlayers.length !== 2) throw TypeError;

  const port1 = filteredPlayers[0].port;
  const port2 = filteredPlayers[1].port;
  const characterId1 = filteredPlayers[0].characterId;
  const characterId2 = filteredPlayers[1].characterId;

  if (!characterId1 || !characterId2) throw TypeError;

  return {
    player1: {
      port: port1,
      character: characterNameByExternalId[characterId1]
    },
    player2: {
      port: port2,
      character: characterNameByExternalId[characterId2]
    }
  }
}
