import React from "react";
import { Text } from "ink";
import { GameStartType } from "slippi-web-bridge";

import GameDisplay from "./GameDisplay.js";

/*
game start event: {
  slpVersion: '3.18.0',
  timerType: 2,
  inGameMode: 32,
  friendlyFireEnabled: true,
  isTeams: false,
  itemSpawnBehavior: 255,
  stageId: 31,
  startingTimerSeconds: 480,
  enabledItems: 1099511627775,
  players: [
    {
      playerIndex: 0,
      port: 1,
      characterId: 20,
      type: 1,
      startStocks: 1,
      characterColor: 0,
      teamShade: 0,
      handicap: 9,
      teamId: 0,
      staminaMode: false,
      silentCharacter: false,
      lowGravity: false,
      invisible: false,
      blackStockIcon: false,
      metal: false,
      startOnAngelPlatform: false,
      rumbleEnabled: false,
      cpuLevel: 1,
      offenseRatio: 1,
      defenseRatio: 1,
      modelScale: 1,
      controllerFix: 'UCF',
      nametag: '',
      displayName: '',
      connectCode: '',
      userId: ''
    },
    {
      playerIndex: 1,
      port: 2,
      characterId: 2,
      type: 0,
      startStocks: 1,
      characterColor: 0,
      teamShade: 0,
      handicap: 9,
      teamId: 0,
      staminaMode: false,
      silentCharacter: false,
      lowGravity: false,
      invisible: false,
      blackStockIcon: false,
      metal: false,
      startOnAngelPlatform: false,
      rumbleEnabled: false,
      cpuLevel: 1,
      offenseRatio: 1,
      defenseRatio: 1,
      modelScale: 1,
      controllerFix: 'UCF',
      nametag: '',
      displayName: '',
      connectCode: '',
      userId: ''
    },
    {
      playerIndex: 2,
      port: 3,
      characterId: 26,
      type: 3,
      startStocks: 1,
      characterColor: 0,
      teamShade: 0,
      handicap: 9,
      teamId: 0,
      staminaMode: false,
      silentCharacter: false,
      lowGravity: false,
      invisible: false,
      blackStockIcon: false,
      metal: false,
      startOnAngelPlatform: false,
      rumbleEnabled: false,
      cpuLevel: 1,
      offenseRatio: 1,
      defenseRatio: 1,
      modelScale: 1,
      controllerFix: 'UCF',
      nametag: '',
      displayName: '',
      connectCode: '',
      userId: ''
    },
    {
      playerIndex: 3,
      port: 4,
      characterId: 26,
      type: 3,
      startStocks: 1,
      characterColor: 0,
      teamShade: 0,
      handicap: 9,
      teamId: 0,
      staminaMode: false,
      silentCharacter: false,
      lowGravity: false,
      invisible: false,
      blackStockIcon: false,
      metal: false,
      startOnAngelPlatform: false,
      rumbleEnabled: false,
      cpuLevel: 1,
      offenseRatio: 1,
      defenseRatio: 1,
      modelScale: 1,
      controllerFix: 'UCF',
      nametag: '',
      displayName: '',
      connectCode: '',
      userId: ''
    }
  ],
  scene: 2,
  gameMode: 2,
  language: 1,
  gameInfoBlock: {
    gameBitfield1: 50,
    gameBitfield2: 1,
    gameBitfield3: 134,
    gameBitfield4: 76,
    bombRainEnabled: false,
    itemSpawnBehavior: -1,
    selfDestructScoreValue: -1,
    itemSpawnBitfield1: 255,
    itemSpawnBitfield2: 255,
    itemSpawnBitfield3: 255,
    itemSpawnBitfield4: 255,
    itemSpawnBitfield5: 255,
    damageRatio: 1
  },
  randomSeed: 2372547100,
  isPAL: false,
  isFrozenPS: false,
  matchInfo: { matchId: '', gameNumber: 0, tiebreakerNumber: 0 }
}
  */

const Versus = ({ gameSettings }: { gameSettings: GameStartType | null }) => {
  if (gameSettings) {
    return <GameDisplay gameSettings={gameSettings} />;
  } else {
    return <Text>Waiting for game...</Text>;
  }
}

export default Versus;
