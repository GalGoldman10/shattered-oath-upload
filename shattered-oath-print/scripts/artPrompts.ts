/**
 * AI art prompts for every non-champion card. Filename: portrait-{id}.png
 */
export const ART_PROMPTS: Record<string, string> = {
  // Equipment — weapons
  'eq-weapon-01': 'Pokemon TCG item card illustration style, obsidian volcanic cleaver battle axe on dark stone, dramatic lighting, mature dark fantasy, centered item only, no text no border no frame',
  'eq-weapon-02': 'Trading card item art, whisperfang shadow dagger with purple glow, sleek assassin blade, dark fantasy painterly, centered weapon only, no text no border',
  'eq-weapon-03': 'Trading card item art, stormcaller wooden staff crackling with blue lightning, arcane weapon, dark fantasy, centered only, no text no border',
  'eq-weapon-04': 'Legendary trading card weapon art, soulreaper glaive with ghostly purple energy, grim dark fantasy, centered weapon, no text no border',
  'eq-weapon-05': 'Trading card item art, ironbane spiked mace crushing armor plates, dark fantasy weapon illustration, centered, no text no border',
  'eq-weapon-06': 'Trading card item art, gravecaller bone bow with spectral green arrow, dark fantasy archery weapon, centered, no text no border',
  // Equipment — armor
  'eq-armor-01': 'Trading card armor item art, graveplate cuirass with funeral etchings, dark metal chest armor floating display, no text no border',
  'eq-armor-02': 'Trading card item art, shadowweave black cloak with magical shimmer, dark fantasy armor, centered, no text no border',
  'eq-armor-03': 'Trading card item art, berserker hide fur armor with blood stains, savage dark fantasy, centered armor piece, no text no border',
  'eq-armor-04': 'Legendary trading card armor art, golden aegis shield of the fallen with angel wings, radiant dark fantasy, centered, no text no border',
  // Equipment — relics
  'eq-relic-01': 'Trading card relic art, glowing shard of broken crown on velvet, dark fantasy treasure, centered, no text no border',
  'eq-relic-02': 'Trading card relic art, echoing hourglass with sand flowing upward, mystical dark fantasy, centered, no text no border',
  'eq-relic-03': 'Trading card relic art, bloodstone amulet pulsing red on chain, occult dark fantasy jewelry, centered, no text no border',
  'eq-relic-04': 'Legendary trading card relic art, reliquary of ash golden urn with sacred fire, dark fantasy, centered, no text no border',
  // Equipment — charms
  'eq-charm-01': 'Trading card charm art, wolfbone talisman necklace with fang and fur, dark fantasy, centered jewelry, no text no border',
  'eq-charm-02': 'Trading card charm art, sigil of warding glowing blue protective rune medallion, dark fantasy, centered, no text no border',
  'eq-charm-03': 'Trading card charm art, hexshard pendant dark crystal on chain, cursed dark fantasy jewelry, centered, no text no border',
  'eq-charm-04': 'Legendary trading card charm art, oathbreaker seal ring with cracked crimson gem, dark fantasy, centered, no text no border',
  'eq-charm-05': 'Trading card charm art, mistveil silver band ring with fog magic, stalker dark fantasy jewelry, centered, no text no border',

  // Monsters
  'mn-01': 'Pokemon TCG creature card illustration, ash wraith ghost made of embers and smoke, haunting dark fantasy monster, full creature, no text no border',
  'mn-02': 'Pokemon style creature card art, ironfang boar monster with metal tusks charging, dark fantasy beast, no text no border',
  'mn-03': 'Creature card art, crypt stalker undead hunter emerging from tomb, dark fantasy monster, no text no border',
  'mn-04': 'Creature card art, blight hydra multi-headed poison serpent, dark fantasy monster, no text no border',
  'mn-05': 'Creature card art, obsidian golem lava rock giant, dark fantasy construct monster, no text no border',
  'mn-06': 'Major boss creature card art, dread knight undead armored commander with terrifying aura, dark fantasy, no text no border',
  'mn-07': 'Legendary creature card art, void serpent cosmic snake devouring light, epic dark fantasy monster, no text no border',
  'mn-08': 'Legendary creature card art, corrupted archon fallen angel with dark wings, dark fantasy boss, no text no border',
  'mn-09': 'Creature card art, plague swarm cloud of insects and teeth, horror dark fantasy monster, no text no border',
  'mn-10': 'Legendary boss creature card art, throne guardian massive stone sentinel guarding empty throne, epic dark fantasy, no text no border',

  // Objectives
  'ob-01': 'Trading card quest illustration, diverse warriors united raising banners together, dark fantasy scene, no text no border',
  'ob-02': 'Quest card art, flawless hunt archer striking monster without being hit, dynamic dark fantasy scene, no text no border',
  'ob-03': 'Quest card art, arsenal of war weapons rack with sword shield bow, dark fantasy armory scene, no text no border',
  'ob-04': 'Quest card art, master tactician war table with chess pieces and maps, strategic dark fantasy scene, no text no border',
  'ob-05': 'Quest card art, slayer mark burned into monster skull trophy, dark fantasy hunt scene, no text no border',
  'ob-06': 'Quest card art, vanguard knight holding shield at dawn battlefield, oath dark fantasy scene, no text no border',
  'ob-07': 'Quest card art, whispers of renown golden fame spreading through ruins, dark fantasy scene, no text no border',
  'ob-08': 'Quest card art, arcanist thesis ancient spellbook with floating formulas, magical dark fantasy scene, no text no border',
  'ob-09': 'Quest card art, stalker contract sealed scroll with dagger, assassin dark fantasy scene, no text no border',
  'ob-10': 'Quest card art, occult bargain demonic pact with purple flames, dark fantasy ritual scene, no text no border',
  'ob-11': 'Quest card art, warden vigil healer guarding sleeping camp with holy light, dark fantasy scene, no text no border',
  'ob-12': 'Legendary quest card art, shattered oath broken crown and five converging paths, epic dark fantasy prophecy scene, no text no border',
};

// Tactics & reactions — appended in batches (tc-01..tc-24, rx-01..rx-12)
export const TACTIC_PROMPTS: Record<string, string> = {
  'tc-01': 'Supporter card scene art, warrior striking crumbling ruins with sword, ruin strike battle, dark fantasy action, no text no border',
  'tc-02': 'Supporter card scene, scout exploring dark dungeon depths with torch, dark fantasy exploration, no text no border',
  'tc-03': 'Supporter card scene, holy healer mending wounded knight with golden light, dark fantasy, no text no border',
  'tc-04': 'Supporter card scene, knight with iron resolve standing firm against arrows, dark fantasy defense, no text no border',
  'tc-05': 'Supporter card scene, saboteur cutting rope bridge under enemy, dark fantasy treachery, no text no border',
  'tc-06': 'Supporter card scene, commander shouting war cry rallying soldiers, dark fantasy battle, no text no border',
  'tc-07': 'Supporter card scene, relic being passed between two warriors hands, dark fantasy, no text no border',
  'tc-08': 'Supporter card scene, blood tithe ritual with crimson magic payment, dark occult fantasy, no text no border',
  'tc-09': 'Supporter card scene, royal decree golden seal and crown proclamation, dark fantasy royalty, no text no border',
  'tc-10': 'Supporter card scene, soldiers rallying fallen line back to feet, dark fantasy battlefield, no text no border',
  'tc-11': 'Supporter card scene, void lash purple energy whips striking multiple foes, dark fantasy magic attack, no text no border',
  'tc-12': 'Supporter card scene, fortify building stone walls around camp quickly, dark fantasy defense, no text no border',
  'tc-13': 'Supporter card scene, grave robbing hand reaching from tomb with treasure, dark fantasy, no text no border',
  'tc-14': 'Supporter card scene, assassin mark glowing on target back in shadows, dark fantasy, no text no border',
  'tc-15': 'Supporter card scene, emergency rations shared among weary survivors, dark fantasy camp, no text no border',
  'tc-16': 'Supporter card scene, dark bargain with hooded figure offering cards, occult dark fantasy, no text no border',
  'tc-17': 'Supporter card scene, weapon shattering into fragments mid strike, dark fantasy destruction, no text no border',
  'tc-18': 'Legendary supporter scene, banner of conquest raised over battlefield victory, epic dark fantasy, no text no border',
  'tc-19': 'Supporter card scene, smoke veil concealing warrior from arrows, dark fantasy stealth, no text no border',
  'tc-20': 'Supporter card scene, chain lightning bolt jumping between monsters, dark fantasy storm magic, no text no border',
  'tc-21': 'Supporter card scene, forced march soldiers running through night rain, dark fantasy, no text no border',
  'tc-22': 'Supporter card scene, cursed ground cracking with green poison beneath enemies, dark fantasy, no text no border',
  'tc-23': 'Supporter card scene, last rites priest healing dying champion, solemn dark fantasy, no text no border',
  'tc-24': 'Legendary supporter scene, oath of vengeance warrior swearing on broken blade, epic dark fantasy, no text no border',
};

export const REACTION_PROMPTS: Record<string, string> = {
  'rx-01': 'Instant reaction card art, parrying stance dual swords blocking strike sparks flying, dark fantasy combat, no text no border',
  'rx-02': 'Reaction card art, counterspell mage disrupting enemy spell mid cast, dark fantasy magic, no text no border',
  'rx-03': 'Reaction card art, bodyguard stepping shield between ally and arrow, dark fantasy protection, no text no border',
  'rx-04': 'Reaction card art, aegis flash blinding holy shield burst, dark fantasy light magic, no text no border',
  'rx-05': 'Reaction card art, disrupt ritual breaking occult circle with shockwave, dark fantasy, no text no border',
  'rx-06': 'Reaction card art, retaliation warrior striking back after being hit, dark fantasy counterattack, no text no border',
  'rx-07': 'Reaction card art, mirror trap reflecting spell back at caster, dark fantasy magic mirror, no text no border',
  'rx-08': 'Reaction card art, sanctuary ward holy dome protecting champion, dark fantasy, no text no border',
  'rx-09': 'Reaction card art, desperate block using shield and discarded cards, dark fantasy survival, no text no border',
  'rx-10': 'Legendary reaction art, null sigil absolute silence void circle canceling magic, epic dark fantasy, no text no border',
  'rx-11': 'Reaction card art, shadow step ninja vanishing and swapping places, dark fantasy teleport, no text no border',
  'rx-12': 'Reaction card art, blood shield crimson barrier consuming renown energy, dark fantasy magic shield, no text no border',
};

export function getArtPrompt(id: string): string | null {
  return ART_PROMPTS[id] ?? TACTIC_PROMPTS[id] ?? REACTION_PROMPTS[id] ?? null;
}

export function getAllArtIds(): string[] {
  return [...Object.keys(ART_PROMPTS), ...Object.keys(TACTIC_PROMPTS), ...Object.keys(REACTION_PROMPTS)];
}
