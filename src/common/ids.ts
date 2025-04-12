/**
 * Note: internal and external lists do not match.
 * Source: https://github.com/project-slippi/slippi-wiki/blob/master/SPEC.md#melee-ids
 */
export const characterNameByExternalId = [
  "Captain Falcon", // 0, 0x0
  "Donkey Kong", // 1, 0x1
  "Fox", // 2, 0x2
  "Mr. Game & Watch", // 3, 0x3
  "Kirby", // 4, 0x4
  "Bowser", // 5, 0x5
  "Link", // 6, 0x6
  "Luigi", // 7, 0x7
  "Mario", // 8, 0x8
  "Marth", // 9, 0x9
  "Mewtwo", // 10, 0xa
  "Ness", // 11, 0xb
  "Peach", // 12, 0xc
  "Pikachu", // 13, 0xd
  "Ice Climbers", // 14, 0xe
  "Jigglypuff", // 15, 0xf
  "Samus", // 16, 0x10
  "Yoshi", // 17, 0x11
  "Zelda", // 18, 0x12
  "Sheik", // 19, 0x13
  "Falco", // 20, 0x14
  "Young Link", // 21, 0x15
  "Dr. Mario", // 22, 0x16
  "Roy", // 23, 0x17
  "Pichu", // 24, 0x18
  "Ganondorf", // 25, 0x19
  "Master Hand", // 26, 0x1a
  "Wireframe Male", // 27, 0x1b
  "Wireframe Female", // 28, 0x1c
  "Giga Bowser", // 29, 0x1d
  "Crazy Hand", // 30, 0x1e
  "Sandbag", // 31, 0x1f
  "Popo", // 32, 0x20
] as const;
export type ExternalCharacterName = typeof characterNameByExternalId[number];
