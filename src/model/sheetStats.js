



// let exampleTable={
//   title:"Sample", //A line of text, preferably short.
//   content:"Blah blah blah, something something, maybe even a link for good measure.", //long, contains many details
//   imgGallery:[] //an array of of objects.  Each object has 1 URL for an image and 1 small line of text for a caption.
// }
let Construct={
  TableCell:function(title, content, imgGallery){
    this.title=title;
    this.content=content;
    this.imgGallery=imgGallery ? imgGallery:[];

  },
  GalleryImage:function(imgURL, caption){
    this.imgURL=imgURL ? imgURL:"";
    this.caption=caption ? caption:"";
  },
  Template:function(title, text){
    this.title=title ? title:"UntitledTemplate";
    this.text=text ? text:"";
  },
  MagicWord:function(word, meanings, blurb){
    this.word= word ? word:"untitled";
    this.meanings= meanings ? meanings:["Translation"];
    this.blurb= blurb ? blurb:"No description written";
  }
}

// let tablePool=[{tags:[],title:"beginnerPool", cells:[new Construct.TableCell("number1", "theFirstOption", []), new Construct.TableCell("number2", "thesecondOption", []),
// new Construct.TableCell("number3", "thethirdOption"), new Construct.TableCell("number4", "theFourthOption", []),
// new Construct.TableCell("number5", "theFifthOption")]},
// {tags:[],title:"evilPool", cells:[new Construct.TableCell("evilnumber1", "theFirstevilOption", []), new Construct.TableCell("evilnumber2", "thesecondevilOption", []),
// new Construct.TableCell("evilnumber3", "thethirdevilOption"), new Construct.TableCell("evilnumber4", "theFourthevilOption", []),
// new Construct.TableCell("evilnumber5", "theFifthevilOption")]}];

let tablePool=[
  {
    "title": "Worthless Fun Magic Items",
    "cells": [
      {
        "title": 0,
        "content": "Amulet of Hindsight- You get advantage on checks regarding events in your past.",
        "imgGallery": [
          {
            "imgURL": "https://res.cloudinary.com/metaverse/image/upload/v1569708881/PaizoStuff/Religious%20Items/card1.png",
            "caption": "Item Card"
          }
        ]
      },
      {
        "title": 1,
        "content": "Ostentatious Broach- When worn, the wearer has the effects of fairy fire cast on their self, with no additional range.",
        "imgGallery": [
          {
            "imgURL": "https://res.cloudinary.com/metaverse/image/upload/v1569708838/PaizoStuff/Religious%20Items/card2.png",
            "caption": "Item Card"
          }
        ]
      },
      {
        "title": 2,
        "content": "Misty Key- Once per long rest, the user can turn to a mist form for six seconds, during which they may fit through any surface space a creature one size smaller than you can pass through.",
        "imgGallery": [
          {
            "imgURL": "https://res.cloudinary.com/metaverse/image/upload/v1569708844/PaizoStuff/Religious%20Items/card3.png",
            "caption": "Item Card"
          }
        ]
      },
      {
        "title": 3,
        "content": "Lagged Dagger- A cut by this dagger shows thirty seconds after it strikes. Does normal damage five rounds after striking, and the damage is considered magical.",
        "imgGallery": [
          {
            "imgURL": "https://res.cloudinary.com/metaverse/image/upload/v1569708851/PaizoStuff/Religious%20Items/card4.png",
            "caption": "Item Card"
          }
        ]
      },
      {
        "title": 4,
        "content": "Adjustable Weights- A small lightweight anvil shaped trinket. Once per day, it can be activated with a command word, upon which it instantly begins to weight half a ton until deactivated or one hour passes.",
        "imgGallery": [
          {
            "imgURL": "https://res.cloudinary.com/metaverse/image/upload/v1569708857/PaizoStuff/Religious%20Items/card5.png",
            "caption": "Item Card"
          }
        ]
      },
      {
        "title": 5,
        "content": "Bracers of Speed Reallocation- Once per long rest, you may use all of your movement to make an extra melee attack. Requires atunement.",
        "imgGallery": [
          {
            "imgURL": "https://res.cloudinary.com/metaverse/image/upload/v1569708863/PaizoStuff/Religious%20Items/card6.png",
            "caption": "Item Card"
          }
        ]
      },
      {
        "title": 6,
        "content": "Cloak of Misplacement- An item placed in a pocket of this many-pocketed cloak disappears and appears in another pocket once the hand placing it is removed.",
        "imgGallery": [
          {
            "imgURL": "https://res.cloudinary.com/metaverse/image/upload/v1569708869/PaizoStuff/Religious%20Items/card7.png",
            "caption": "Item Card"
          }
        ]
      },
      {
        "title": 7,
        "content": "Orb of Illusion- Once per long rest, this orb can be activated to take the effects of minor illusion, cast on the orb. This effect can be activated in your hand and thrown, the illusion activating on impact.",
        "imgGallery": [
          {
            "imgURL": "https://res.cloudinary.com/metaverse/image/upload/v1569708875/PaizoStuff/Religious%20Items/card8.png",
            "caption": "Item Card"
          }
        ]
      },
      {
        "title": 8,
        "content": "Inverse Umbrella- When opened, light rain begins to pour down from the inside of the umbrella. This effect can last up to fifteen minutes per day.",
        "imgGallery": []
      },
      {
        "title": 9,
        "content": "Glasses of Lightvision- When worn, the user has the effect of darkvision when in bright light (can see black and white for 60ft).",
        "imgGallery": []
      }
    ]
  },
  {
    "title": "FINISH HIM",
    "cells": [
      {
        "title": 0,
        "content": "You bash their kneecap inwards with your shield, blunt weapon or kick it, breaking it, as the target screams in pain while it falls forward crack their skull open with your main weapon, spilling brains everywhere.",
        "imgGallery": []
      },
      {
        "title": 1,
        "content": "Faint a hit, then cut off one of the target's legs, as they fall down and extend their hands towards the ground you twist your blade and behead them. For extra violence you can cut off the arm they tried to land on and them kill them while they lay on the ground.",
        "imgGallery": []
      },
      {
        "title": 2,
        "content": "Stab them or cut them, leave the weapon there. Grab them with your new free hand and smash their face with your shield/fists, disfiguring their face with every hit, until the only things left are the eye sockets and broken jaw. Retrieve your weapon.",
        "imgGallery": []
      },
      {
        "title": 3,
        "content": "You partially slash open their stomach, and as they try to contain their guts from spilling outside the wound, you lend them a hand, shoving your hand/shield into the open wound and twisting it inside, then pushing the soon-to-be corpse to the side. Extra points if you take out some of their guts and punch them in the face with them.",
        "imgGallery": []
      },
      {
        "title": 4,
        "content": "As they try to approach you, you dodge/block/deflect their attack, then proceed to cut off their arms, you twist your blade quickly and jam it into their neck, partially cracking it, give it a little twist, then forcefully remove it, leaving blood sprouting out of their jugular.",
        "imgGallery": []
      },
      {
        "title": 5,
        "content": "Stab/Slam them in the belly, when they reel in pain, you raise your shield above their heads and bash them down to their knees. Then slam your weapon into their skull or spine repeatedly until they stop reeling in pain.",
        "imgGallery": []
      },
      {
        "title": 6,
        "content": "You impale their stomach, then lift them with your weapon and slam them back down cutting open the stomach all the way down to between their legs, spilling their organs on the floor.",
        "imgGallery": []
      },
      {
        "title": 7,
        "content": "Slash from their shoulder all the way down to the middle of their chest. Leave your weapon there, then use your hands to forcefully tear open half of the torso, cracking every bone and tearing open every artery. Recover your weapon.",
        "imgGallery": []
      },
      {
        "title": 8,
        "content": "Sweep them off their feet in any form (get creative, tielfings can use their tails!), and before, or as soon as they hit the ground, you strike them down in the middle of their face, cracking their skull open in all directions and filling the floor with crimson.",
        "imgGallery": []
      },
      {
        "title": 9,
        "content": "If you are behind them step on the posterior part of their knee, forcing them, well, on their knees. Then proceed to insert weapon between their neck and shoulders, splitting their collarbones in half, as your weapon goes down as far as you like.",
        "imgGallery": []
      },
      {
        "title": 10,
        "content": "Kick/shield bash them right in the chest to take them off balance, then move towards them and strike them square in the chest, tearing their ribcage open, then you can twist your weapon inwards, pull to make a bigger wound or throw them away.",
        "imgGallery": []
      },
      {
        "title": 11,
        "content": "Cut off one leg and push them away. As they fall down, you grab their remaining foot and drag them towards you while they lay on the floor, spilling blood along the way, then strike them in their chest or face. Bonus points if you make a cracking sound when you deal the final blow.",
        "imgGallery": []
      },
      {
        "title": 12,
        "content": "Parry their attack, you then grab their wrist and twist their arm, using your weapon or shield as leverage bend their elbow sideways until it breaks, yank them towards you and step on their knee until in breaks inwards again. Throw them towards a wall or the floor then smash the back of their skull with your weapon.",
        "imgGallery": []
      },
      {
        "title": 13,
        "content": "Stab them in the chest, then violently twist and then move your weapon in different directions. Once the wound is big enough you place your hand in one end of the wound and hold on, while you move your weapon in the other, carving a path outside as you move past veins, muscle and bones.",
        "imgGallery": []
      },
      {
        "title": 14,
        "content": "Smash one of their feet completely, as they twist themselves in pain, shove them towards a nearby wall or enemy, then slam them against it.",
        "imgGallery": []
      },
      {
        "title": 15,
        "content": "Stab, or otherwise mortally injure a caster. As they try to desperately make a somatic component grab their hand with both of yours in such a way that their index finger and middle finger are in one of your hands, while the ring and little finger are in the other. Grasp each pair of fingers firmly and tear their hands in half, stopping any spell. You can also shove half their hand into their mouths to shut their screams... I mean verbal components (you should use some body language when role-playing this one).",
        "imgGallery": []
      },
      {
        "title": 16,
        "content": "Against another caster, you wait for them to open their filthy mouth, then shove your weapon in, breaking their jaw, then forcefully remove it, leaving the lower half of their face destroyed. Then finish them off however you see fit. That finish can be shoving the weapon again.",
        "imgGallery": []
      },
      {
        "title": 17,
        "content": "Injure an enemy in such a way that they are stunned. Grab a nicely tied present out of you bag of holding and offer it as a token of friendship. Bonus points if the table verbally says \"Friendship?\".",
        "imgGallery": []
      },
      {
        "title": 18,
        "content": "When using two weapons stab both in the lower belly, then violently lift both weapons so that they make their exit by destroying both collarbones at the same time and make shoulders fall down the hip level as they are now only held by a small part of muscle at their stomach.",
        "imgGallery": []
      },
      {
        "title": 19,
        "content": "Cut clean a portion of their thigh and kick their sheen. Once they fall to the ground kneel next to them and grab their head, then proceed to slam it into the floor until you make it look like a Jean-Paul Riopelle painting.",
        "imgGallery": []
      },
      {
        "title": 20,
        "content": "When using two weapons, dodge an attack them jam one of the weapons on the inner side of the target's elbow, get real close and then start stabbing them with your other weapon repeatedly.",
        "imgGallery": []
      },
      {
        "title": 21,
        "content": "With a small weapon like a dagger or shorts word (but hey, don't let that stop you great weapon players!), cut part of the throat, then pierce the crown of their head with the weapon, slowly twist the weapon towards their nose splitting their head in 90°.",
        "imgGallery": []
      },
      {
        "title": 22,
        "content": "Throw them prone on their backs (again be creative, cut of a leg, stab a foot and pull, etc.), gab one of their legs by the ankle while they fall. Step between their groin and leg and place your knee in such a way that you can use it as an anchor point while you bend theirs inwards until it cracks the wrong way, let go and let their feet slam into their jaw.",
        "imgGallery": []
      },
      {
        "title": 23,
        "content": "With a blunt weapon or shield, smash their hipbones and break them, once the target is unable to stand up straight smash their crown, splitting their head open, repeat until there is no longer a head.",
        "imgGallery": []
      },
      {
        "title": 24,
        "content": "With two weapons, you deflect an attack and strike their foot, pinning it to the ground. Then you rise your other weapon, slashing their stomach open. Quickly you release their foot, and rise your blade striking them from jaw to crown.",
        "imgGallery": []
      },
      {
        "title": 25,
        "content": "While behind them, cut off their achilles tendon, and as they fall down to their knees, you jam your dagger/axe/warpick into the back of their neck, and slowley drag it downwards, cracking open every spine algong the way.",
        "imgGallery": []
      },
      {
        "title": 26,
        "content": "Slash, crack or otherwise open their ribcage. Yes, we are doing it. It wouldn’t be a needlessly violent list without it. Once it's open grab their still beating heart and tear it out. Bonus points if you throw an edgy line that makes someone laugh.",
        "imgGallery": []
      }
    ]
  },
  {
    "title": "70+ Magic Items",
    "cells": [
      {
        "title": 0,
        "content": "Eternal Chalk: A piece of chalk that never breaks or wears down.",
        "imgGallery": []
      },
      {
        "title": 1,
        "content": "Flask of Hydration: This flask fills up with water at dawn, if already full nothing happens, any non-magical item contained in the flask at dawn will be transmuted into pure water.",
        "imgGallery": []
      },
      {
        "title": 2,
        "content": "Horn of Fog: This horn releases a thick fog that grants anyone inside advantage on stealth checks, ranged attacks into the fog are at disadvantage. The fog stays at full thickness for 15 minutes and then fades.",
        "imgGallery": []
      },
      {
        "title": 3,
        "content": "Thunderbrand: This magic items requires attunement over a short or long rest. This sword has an ornate hilt and long blade blade and when wielded electricity runs through the blade. It has all the same properties as a Greatsword but instead of 2d6 Slashing damage every other strike deals 2d8 thunder damage.",
        "imgGallery": []
      },
      {
        "title": 4,
        "content": "Vipers Blowgun: This magic items requires attunement over a long rest. This blowpipe has an ornate copper viper wrapping around a deep brown oaken pipe. This pipe has the same properties as a Blowgun. When shot it makes a low hissing sound. Instead of 1 Piercing damage it does 1 Poison damage, when hit the target needs to take a DC 15 Constitution save or be poisoned. Poisoned targets take 1d6 Poison damage at the start of their turn, the poison lasts for 1 minute.",
        "imgGallery": []
      },
      {
        "title": 5,
        "content": "Painting of the Animated Blade: This painting is wrapped up into a scroll container. When it is drawn out and unwrapped it reveals a realistic painting of a decorative sword, this can be done as an action. When the painting is unwrapped and the magic word is spoken a Flying Sword slides out of the paper and fights along side the user. When it is defeated or 10 minutes have gone by the sword melts into a puddle of paint. Once it has been used the painting slowly forms back over the course of a week.",
        "imgGallery": []
      },
      {
        "title": 6,
        "content": "Rod of Necromancy: This magic items requires attunement over a long rest. This black wooden rod holds a wooden carved skull at one end, when used one eye sockets starts to glow green and a skeleton warriors rises from the earth to aid you for 1 minute, it takes the skeleton 12 seconds to crawl from the earth. when The Rod has been used twice both eyes glow green and the glow engulfs The Rod and it dissipates.",
        "imgGallery": []
      },
      {
        "title": 7,
        "content": "Runeblade: This shortsword has carved runes into the blade that glow an ever so dull blue when wielded. The hilt is ornate with two clear gems at the base of the blade. The Runeblade has the same stats as a shortsword but uses Intellect as it’s attack modifier.",
        "imgGallery": []
      },
      {
        "title": 8,
        "content": "Skyblade: This +1 shortsword gleams brightly when struck by light. The hilt is ornate with two clear gems at the base of the blade. The Skyblade has the same stats as a shortsword but deals extra damage equal to your proficiency bonus.",
        "imgGallery": []
      },
      {
        "title": 9,
        "content": "Hailstone Hammer: This warhammer has a dwarven rune on each side, on a successful hit one rune lights up a faint blue. When you hit while an enemy while both runes are glowing you deal an extra 1d4+1 cold damage and both runes go out. The runes say ‘Cold’ and ‘Death’ respectively.",
        "imgGallery": []
      },
      {
        "title": 10,
        "content": "Snakeskin Belt: This belt is made of dark snakeskin, once per long rest, as a bonus action you can throw the belt. When thrown the belt it turns into a Poisonous Snake that is allied with you. After 10 minutes the Snake morphs back, but when the Poisonous Snake is killed it morphs back into a belt.",
        "imgGallery": []
      },
      {
        "title": 11,
        "content": "Deadman's Key: This key acts as thieves tools and gives the wielder advantage on picking locks that are owned by someone deceased.",
        "imgGallery": []
      },
      {
        "title": 12,
        "content": "Ring of Fire: This magic items requires attunement over a long rest. The Ring is a golden ring with an onyx ring weaving around the band, a white and shining pearl sits on the ring with onyx clasps holding it in place. When found the ring has no charges but can hold up to 3 charges. You can charge the ring by shining moonlight upon it, gaining 1d2 charges. You can expend a charges to cast Burning Hands with Intellect as your casting modifier.",
        "imgGallery": []
      },
      {
        "title": 13,
        "content": "Morphing Blade/Pick/Hammer: This weapon can morph between Longsword, War Pick and Warhammer and change its profile accordingly.",
        "imgGallery": []
      },
      {
        "title": 14,
        "content": "Medallion of Endurance: This pure gold medallion is shaped like a lion's head, while you wear this you have a +2 on your first Death Saving-Throw once every sun-up.",
        "imgGallery": []
      },
      {
        "title": 15,
        "content": "Skeleton Blade: When bathed in moonlight the blade will drink in the power of the moon and the next attack with the Cutlass will deal an extra 1d6 necrotic damage. This can only happen once a day.",
        "imgGallery": []
      },
      {
        "title": 16,
        "content": "Glowing Orb: This Orb glows orange, while carrying it you are at disadvantage on stealth checks and you understand Infernal but cannot speak it. All fiends have advantage on attack rolls against you.",
        "imgGallery": []
      },
      {
        "title": 17,
        "content": "Resonating Blade: This Greatsword creates a reverberating sound on a hit. If the wielder hits 3 times within one minute you may use a bonus action on when you next attack to strike twice.",
        "imgGallery": []
      },
      {
        "title": 18,
        "content": "Crimson Gloves: These Blood red leather gloves hasten your hands with each strike, every fourth strike bypasses any extra armor the enemy might have, reducing its AC to 10 for that strike only.",
        "imgGallery": []
      },
      {
        "title": 19,
        "content": "Staff of Ruby Ruin: This staff holds a charge, you can expend a charge to cast fireball at level 3 with a save DC of 12. When you take the life of a sentient being you regain a charge, this effect can only happen once a day.",
        "imgGallery": []
      },
      {
        "title": 20,
        "content": "Obsidian Blade: While wielding this +1 dagger made completely out of obsidian you deal an extra 1d4 necrotic damage.",
        "imgGallery": []
      },
      {
        "title": 21,
        "content": "Winter Wolf Hide Armor: While wearing this hide armor you have advantage on Dexterity (Stealth) checks made to hide in snowy terrain and gain resistance to cold damage.",
        "imgGallery": []
      },
      {
        "title": 22,
        "content": "Pendant of Greek: This pendant is composed of a thin string holding a steel clasp which holds a small glossy black and green pearl. If inspected players can see a small figure inside the pearl but not what it is. The pendant can hold two charges and you gain one charge per long rest. If you choose to expend two charges you call forth from the pearl a green hued mist that forms a goblin named Greek. With a DC 6 Charisma (Persuasion/Intimidation) check the player who wears the pendant can compel Greek to aid them. Greek can do simple tasks and can’t speak.",
        "imgGallery": []
      },
      {
        "title": 23,
        "content": "Blood Ring: While wielding this ring you gain a +1 to your AC but you only heal half the normal amount from hit dice.",
        "imgGallery": []
      },
      {
        "title": 24,
        "content": "The Brute Ring: When you are critically hit you can immediately make a melee attack of opportunity against that enemy.",
        "imgGallery": []
      },
      {
        "title": 25,
        "content": "Pitfighters Bracers: These steel bracers grip tightly around the wearer's forearm, on them are bronze ornate rings that form a chain. Once a day while wearing them you may use a bonus action to make a melee or ranged attack with disadvantage.",
        "imgGallery": []
      },
      {
        "title": 26,
        "content": "King’s Blood: This is a vial of a long forgotten sorcerer king’s blood. a drop added to a healing potion will double the healing powers and will also cure any non-magical disease.",
        "imgGallery": []
      },
      {
        "title": 27,
        "content": "Ring of the Magi: While wielding this ring your Strength and Constitution are reduced by 2 but you Intelligence is increased by 2.",
        "imgGallery": []
      },
      {
        "title": 28,
        "content": "Circlet of the Scholar: While wearing this circlet you have advantage on history checks.",
        "imgGallery": []
      },
      {
        "title": 29,
        "content": "Shield of Titanus: This +1 shield gives you resistance to cold damage but gain a vulnerability to fire damage.",
        "imgGallery": []
      },
      {
        "title": 30,
        "content": "Feather Boots: While wearing these boots you are resistant to fall damage.",
        "imgGallery": []
      },
      {
        "title": 31,
        "content": "Spear of Ayruum: This +1 spear will return to its owner after it is thrown.",
        "imgGallery": []
      },
      {
        "title": 32,
        "content": "Blade of Vesticus: This +2 Greatsword gives a +1 to AC.",
        "imgGallery": []
      },
      {
        "title": 33,
        "content": "The Soulgem: when you take a life a part of that life is sucked into the gem. You can consume 10 souls as an action to heal for your CON modifier + 2d6.",
        "imgGallery": []
      },
      {
        "title": 34,
        "content": "Dagger of Mending: This dagger has a wavy blade with a ever so slight chromatic sheen to it. When you stab a willing ally with it they take 1d4+Your DEX/STR modifier but heal twice that after a few moments. This can only be done once per long rest.",
        "imgGallery": []
      },
      {
        "title": 35,
        "content": "Gloves of Balance: These fine silken gloves can hold up to 4 charges. You can expend charges to drain yourself of health and transfer it to an ally. Each charge transfers 1d4 charges. You regain 1d4 charges at sunrise.",
        "imgGallery": []
      },
      {
        "title": 36,
        "content": "Poisonbite Ring: This ring requires attunement over a short rest. While wearing it you have a resistance to poison damage.",
        "imgGallery": []
      },
      {
        "title": 37,
        "content": "Silvercat Ring: This ring requires attunement over a short rest. While wearing it you take half damage from falling.",
        "imgGallery": []
      },
      {
        "title": 38,
        "content": "Garns Cloak of Invisibility?: This fine crimson and gold trimmed cloak can hold up to 6 charges and gains 1d4 charges after each long rest. You can expend 6 charges as an action to cast invisibility on yourself, you can also expend 3 charges to cast invisibility on yourself with a chance to fail. DC 10 Arcana check. If you fail the cloak shines brightly for a brief moment and fizzles.",
        "imgGallery": []
      },
      {
        "title": 39,
        "content": "Garns Stick of Returning: this carved wychwood branch forms an L shape with a sharp curve on the inside of the corner. It’s a deep dark brown wychwood with a vague inscription on one end that reads: “Garns Stick of Returning” in common. As an action you can throw the Stick with a flat +5 to hit and dealing 1d4+1 slashing damage on the turn it is thrown and 1d4+1 slashing damage on the beginning of your next turn when the Stick flies back to you.",
        "imgGallery": []
      },
      {
        "title": 40,
        "content": "Garns Miniature Bonfire: This small glass urn is half full with white wax with a thin thread running into the wax. With the magic word spoken the candle will light up. The wax will not melt and the fire will stay lit until the magic word is spoken again. The fire cannot burn or transfer it’s fire but it does create light for 10ft. And a small amount of heat.",
        "imgGallery": []
      },
      {
        "title": 41,
        "content": "Quickclaw Necklace: This magical item requires attunement over a long or short rest. While wearing it you can feel the adrenaline pulse through you in your time of need. When you roll the lowest initiative score in battle, instead of going last - you go first.",
        "imgGallery": []
      },
      {
        "title": 42,
        "content": "Axe of Ragnar: This fine red steel +1 battleaxe is engraved with a screaming skull on both sides of the blade. On a critical hit you also deal an extra 1d6 slashing damage.",
        "imgGallery": []
      },
      {
        "title": 43,
        "content": "Raazkal, the Emberfork: This darksteel pitchfork has an ornate dark metal hilt, in the end of the hilt there is a fine and pristine dark red ruby. Peering into the ruby gives visions of horrific deeds done by warriors wielding this blade. At the other end the hilt splits into two blood red spikes. To gain the effects of The Emberfork the use must attune over a long rest. This weapon is considered a +1 spear for all intense the purposes. However instead of dealing it’s normal 1d6 it deals 2d6 piercing damage When struck opponents must take a DC 14 Constitution save. If someone were to fail this saving roll they would immediately take 3d4 Fire damage.",
        "imgGallery": []
      },
      {
        "title": 44,
        "content": "Curse: However while this blade is in your hands you only take half the healing you would normally receive from any magical means. Each time this happens power builds in The Emberfork, keep track of the healing reduced by this effect. When the total healing reduced hits 100 Health points Raazkal the Horned Devil emerges from the weapon. He is not hostile to the wielder and their allies, unless they don’t give him his weapon back.",
        "imgGallery": []
      },
      {
        "title": 45,
        "content": "Wands of Dueling: This pair of wands come in wooden box, on the lid there is an image of two wizards holding wands pointing at each other. The inside of the box holds two wands and a note with simple instructions. One wand is black with a red gem on the bottom, the other white with a blue gem. While a pair of individuals hold these wands they may start a skill check competition. One wielder must request a duel and the other may accept. The players then roll and add their intelligence modifier, the winner shoots an arcane missile at the losing players, dealing no damage. This is a best of 5 competition, unless the players agree to a different format. When a player wins, their wand creates a small victorious melody.",
        "imgGallery": []
      },
      {
        "title": 46,
        "content": "Betting Box: This small steel box has a rune on each side and the top of the lid. When coin or other valuables are put in the box and a bet is made the box will port to another plane where it we stay until the bet is won. When the bet is won the box will appear nearby to the victor and can only be opened by the victor. Under the box there is an engraving in gnomish: “Made by A. Betsson.”.",
        "imgGallery": []
      },
      {
        "title": 47,
        "content": "Ring of Califax: This is a ring imbued with the soul of Califax, warden of Northtown. While this ring is worn by the skeleton of Califax the skeleton is brought to life. If anyone else were to wear the ring they could hear and talk telepathically with Califax. The ring is made of silver with a single small opaque green gem.",
        "imgGallery": []
      },
      {
        "title": 48,
        "content": "Arcane Wand: As an action you can shoot out a missile that always hits its target if the target is visible to the user and within 320ft. deals 1d4+1 Force damage. The user must be proficient in Arcana to use the wand. The Wand can be used as an arcane focus and increases the number of missiles created by the spell Arcane Missiles by one while wielded.",
        "imgGallery": []
      },
      {
        "title": 49,
        "content": "Whip of Ghol Mog the Destroyer: This magical whip double the range of a regular whip. While idle the whip is merely a handle made of steel and ivory, when activated a long fiery whip extends out of the handle and writhes in the air. To activate the whip the attuned user must speak the words “Fires of Ghol Mog, aid me!”. The Whip is considered a magical +2 whip and deals 2d4 fire damage instead of the normal 1d4 slashing.",
        "imgGallery": []
      },
      {
        "title": 50,
        "content": "Purple arrows of the Hunt: This pair of magical arrows gives a +1 bonus to hit and damage rolls. If a creature has been struck by one of the pair and is then struck by the second the attack deals an additional 1d8 Force damage.",
        "imgGallery": []
      },
      {
        "title": 51,
        "content": "Hammer of the Thanes: This ancestral warhammer made of silver confers a +1 bonus to hit and damage rolls. The Hammer has the thrown property and has a range of 30/120ft. And as a bonus action the wielder may summon the Hammer back to the wielder. When you critically hit a creature add an extra 2d4 thunder damage before the dice is doubled. The hammer glows a dull white while orcs are close.",
        "imgGallery": []
      },
      {
        "title": 52,
        "content": "Shield of the Thanes: This ancestral shield gives its wielder a resistance to thunder damage. When you are critically hit a bolt of crooked thunder shoots from the shield at the creature that hit you, dealing 2d6 thunder damage. The shield glows a dull white while orcs are close.",
        "imgGallery": []
      },
      {
        "title": 53,
        "content": "Staff of the Thanes: This ancestral quarter staff is made completely of silver and confers a +1 bonus to hit and damage rolls and also to your Spell save DC and Spell bonus. While wielding the staff you may cast any cantrip you know as a bonus action. The staff glows a dull white while orcs are close.",
        "imgGallery": []
      },
      {
        "title": 54,
        "content": "Venomstrike: This wooden bow sports a viper head carved in at each end. This +1 longbow allows the user to deal 1d6 poison damage on a successful hit once a day.",
        "imgGallery": []
      },
      {
        "title": 55,
        "content": "Horn of Sounding: This large black horn can be blown to create a deep booming sound. Once a day the horn can be used to cast thaumaturgy to make the sound three times as loud.",
        "imgGallery": []
      },
      {
        "title": 56,
        "content": "Silverblade of Riches: This magical longsword is completely made of silver the hilt is ornate with depictions of coins. While attuned to this item, one piece of silver shoots out of this weapon each time you deal with a killing blow against enemies of at least CR 1.",
        "imgGallery": []
      },
      {
        "title": 57,
        "content": "Boots of Jumps: While wearing these boots you may double the height and distance of your jumps by jumping a second time mid-air. You also have advantage on acrobatic checks pertaining to jumping.",
        "imgGallery": []
      },
      {
        "title": 58,
        "content": "Sword of Truth: While wielding this sword you have advantage on insight checks and any enemy struck by the blade has disadvantage on all deception checks for one hour. However, while wielding the sword you cannot in any way shape or form be dishonest.",
        "imgGallery": []
      },
      {
        "title": 59,
        "content": "Siegebreaker: This +2 Warhammer deals double damage to structures.",
        "imgGallery": []
      },
      {
        "title": 60,
        "content": "Skull of Sin’Dall: This tiger skull has been fashioned into a helmet the lower jaw going around the jaw of the wearer and the top half resting upon the head. While wearing the skull you may add double your proficiency bonus to any survival checks made to track and all beasts fear and respect you.",
        "imgGallery": []
      },
      {
        "title": 61,
        "content": "Quiver of the Hunt: While attuned to this item you may choose a target of the hunt at each dawn, all arrows stowed in the Quiver deal an extra 1d4 to the target. All arrows shot return back to the quiver after they have struck their mark.",
        "imgGallery": []
      },
      {
        "title": 62,
        "content": "The Eredis Wand: While wielding and attuned to this wand you gain a +4 to hit with all spells, your Spell Save DC increases by 4 and your AC increases by 1. The wand holds up to 4 charges and gains 1d4 at dawn, you may expend 1 charge to cast the invisibility spell and you may expend 3 charges to cast the Harm spell. While holding the wand you are always under the effect of Mage Armor spell and the See Invisibility Spell. To attune to the Eredis Wand you must first prove your worth to the wand. The wand is semi-sentient but cannot speak.",
        "imgGallery": []
      },
      {
        "title": 63,
        "content": "Whispering weapon: This +1 weapon allows the user to cast misty step once a day.",
        "imgGallery": []
      },
      {
        "title": 64,
        "content": "Basilisk Blade: This +1 weapon is constructed entirely of basilisk teeth. Once a day you can deal an extra 2d6 poison damage on a successful hit.",
        "imgGallery": []
      },
      {
        "title": 65,
        "content": "Azerian (Rare): This rapier is carved from a smooth and matte white marble like material and it’s thin blade sings like a flame in the wind when swung. Warm to the touch is the handle and the blade searing. With a command word the weapons emits a torch like light, bringing bright light in a 15 ft. Radius and dim light for an additional 30 ft. Radius. In battle the blade functions as a +1 rapier and deals an additional 1d8 Fire damage on a hit. With a successful DC 16 Intelligence (Arcana) check the players learn the command word.",
        "imgGallery": []
      },
      {
        "title": 66,
        "content": "Spell book of Jal’Hazar (Wondrous Item, Legendary(Requires Attunement by a Wizard)): This old and musty tome contains nothing but old notes and a signature on the opening page “Property of Jal’Hazar the Great”. Once attuned to the spell book the gibberish notes form into incantations and lists upon lists of spells and magical items. You now gain access to all Wizard spells provided you have the spell slot to cast them. The spell book provides a +2 to your spell casting modifier and spell save DC also gives you advantage on history checks pertaining to magical items.",
        "imgGallery": []
      },
      {
        "title": 67,
        "content": "Master Blade: The hilt of this longsword is made of a bright wood and is bound tight with a white cloth. The guard and pommel are made of gold, simple and sleek in design. The blade is long and thin, metallic with a golden hue. When sunlight directly hits the blade it shimmers and looks to be completely made of gold. Once a day you can cast Haste on yourself as a bonus action. In combat instead of 1d8 Slashing damage the Master Blade deals 4d4 Slashing damage and is a +3 Magical longsword.",
        "imgGallery": []
      },
      {
        "title": 68,
        "content": "Staff of the Scholar: This quarterstaff is made completely of pink hued coral, on one end There is a large pearl. While wielding this quarterstaff you may cast any cantrip from any spell with a +5 to hit and a spell DC of 13.",
        "imgGallery": []
      },
      {
        "title": 69,
        "content": "Clubs of Draconic Rhythm: The handle of these clubs are made of a dark brown Wood, at the end of them are human skulls bound with leather strips, when using them on war drums they create an echo of each hit. They are a +1 Magical weapon and allow the user to choose two targets instead of one when granting inspiration.",
        "imgGallery": []
      },
      {
        "title": 70,
        "content": "Bow of Crimson Fury: This shortbow is made completely of bones and is bound tightly together with red leather strips. This +1 shortbow also deals an additional 1d4 fire damage.",
        "imgGallery": []
      },
      {
        "title": 71,
        "content": "Needle of Veridian Might: This rapier is fashioned from a dragon bone, the blade seeps a transparent black and green ooze like material. When you hit an enemy with this +1 rapier it must succeed on a DC 11 or take 1d4 poison damage and be poisoned for one minute on a failed save and nothing on a success.",
        "imgGallery": []
      },
      {
        "title": 72,
        "content": "Spear of Luom: This spear is fashioned from one large thin bone dragon bone, once per long or short rest when you hit with this +1 spear can forgo its normal damage to deal 2d10 fire damage instead.",
        "imgGallery": []
      },
      {
        "title": 73,
        "content": "Sling of Ivory Storm: This sling is made of two bones fastened together with white leather forming a Y-shape and an elastic band tied between them. The sling functions as a +1 weapon, deals 2d4 cold damage and can target two enemies, rolling once for both enemies but only dealing 1d4 cold damage to each.",
        "imgGallery": []
      },
      {
        "title": 74,
        "content": "Potion of Skill: This Yellow and ever swirling liquid bestows upon its drinker incredible skill. For 1 minute you gain double your proficiency bonus in any skill checks or saving throws.",
        "imgGallery": []
      },
      {
        "title": 75,
        "content": "Searingblade: This fine shortsword was forged by the Azir of the Fireplane, when wielded it’s user gains resistance to fire damage. Every sunrise the sword gains 1d4 charges to a maximum of 4. You can expend a charge to heat the blade of the Searingblade, the core the of blade glows a vibrant yellow melding to a flaming red on the edges. When you expend a charge to heat the blade it deals an additional 1d8 fire damage, the blade is h",
        "imgGallery": []
      }
    ]
  },
  {
    "title": "100 Trinkets",
    "cells": [
      {
        "title": 0,
        "content": "1- A nicely scraped-up bauble. It is made of metal and calls out to you.",
        "imgGallery": []
      },
      {
        "title": 1,
        "content": "2- An unusual statue of the sun in a pouch. It is made of brown marble and is assuredly harmless.",
        "imgGallery": []
      },
      {
        "title": 2,
        "content": "3- A medium-sized, relatively scuffed four leaf clover. It is made of stone and looks quite cheap when wet.",
        "imgGallery": []
      },
      {
        "title": 3,
        "content": "4- A perfectly notched ring etched with Goblin symbols. It is made of metal and is probably harmless.",
        "imgGallery": []
      },
      {
        "title": 4,
        "content": "5- A perfectly dusty figurine of a roc. It is constructed out of stone and feels squishy when wet.",
        "imgGallery": []
      },
      {
        "title": 5,
        "content": "6- A nicely painted tankard tied in purple-hued string. It is cut from sandstone and calms your nerves.",
        "imgGallery": []
      },
      {
        "title": 6,
        "content": "7- A buckle in a bottle. It is made of reed and tastes like metal even though it smells citrusy.",
        "imgGallery": []
      },
      {
        "title": 7,
        "content": "8- A compact, freshly sanded door knob. It is carved from tan metal and looks dirty when dropped.",
        "imgGallery": []
      },
      {
        "title": 8,
        "content": "9- A tiny and unusually scrubbed ink pen. It is made of brass and is otherwise uninteresting.",
        "imgGallery": []
      },
      {
        "title": 9,
        "content": "10- A quite tiny, freshly sanded bust of a bird in a bottle that seems valuable.",
        "imgGallery": []
      },
      {
        "title": 10,
        "content": "11- A dainty, nicely painted statue of the moon. It is made of glass and looks quite pleasant.",
        "imgGallery": []
      },
      {
        "title": 11,
        "content": "12- A small, beautifully decorated comb wrapped in crimson-painted cloth. It smells moldy",
        "imgGallery": []
      },
      {
        "title": 12,
        "content": "13- A dainty, cracked doll. It is made of porcelain and stirs a distant emotion in you.",
        "imgGallery": []
      },
      {
        "title": 13,
        "content": "14- A perfectly sharpened hatchet in a off-white-stained sheath.",
        "imgGallery": []
      },
      {
        "title": 14,
        "content": "15- A full sized hammer with a few cracks. It is made of bone and looks like modern art",
        "imgGallery": []
      },
      {
        "title": 15,
        "content": "16- A relatively gilded mug. It is of metal and is otherwise uninteresting. It feels hollow when pocketed.",
        "imgGallery": []
      },
      {
        "title": 16,
        "content": "17- A dusty teacup. It is made of pewter and feels slippery when pocketed.",
        "imgGallery": []
      },
      {
        "title": 17,
        "content": "18- A silver pinecone that seems to have been bitten by some wild beast.",
        "imgGallery": []
      },
      {
        "title": 18,
        "content": "19- A notched bottle of ale that seems unusually light for its contents.",
        "imgGallery": []
      },
      {
        "title": 19,
        "content": "20- A half-sized, beautifully colorful ink pen. It is made of rusty tarnished copper.",
        "imgGallery": []
      },
      {
        "title": 20,
        "content": "21- A stained nail wrapped in opaque cloth. It is carved out of shiny lead and seems holy.",
        "imgGallery": []
      },
      {
        "title": 21,
        "content": "22- A large bust of an eagle. It is made of iron and rattles just a tad when tapped. Inside is a rock.",
        "imgGallery": []
      },
      {
        "title": 22,
        "content": "23- A set of knitting needles in a pouch. Made of stone and a total keeper. It is definitely worthless.",
        "imgGallery": []
      },
      {
        "title": 23,
        "content": "24- An oddly creased thimble. It is made of white clay and has odd letters on it.",
        "imgGallery": []
      },
      {
        "title": 24,
        "content": "25- A compact, worn-out printing block. Appears to have had sentimental value.",
        "imgGallery": []
      },
      {
        "title": 25,
        "content": "26- A small, strikingly shiny bottle of oil. It is constructed out of metal and seems unlucky.",
        "imgGallery": []
      },
      {
        "title": 26,
        "content": "27- A crude model of a boat made of stone with a single Orcish letter stamped on it.",
        "imgGallery": []
      },
      {
        "title": 27,
        "content": "28- A glass flask full of broken glass and water.",
        "imgGallery": []
      },
      {
        "title": 28,
        "content": "29- A sealed bowl of nails with milk in it.",
        "imgGallery": []
      },
      {
        "title": 29,
        "content": "30- A mostly empty bowl of nails with no milk in it.",
        "imgGallery": []
      },
      {
        "title": 30,
        "content": "31- A half-empty bottle of whisky imprinted with a brewer's logo: a proud face and \"Hale's Ale\"",
        "imgGallery": []
      },
      {
        "title": 31,
        "content": "32- A small, cute earring with notches. It is made of hardy bamboo and is surprisingly heavy.",
        "imgGallery": []
      },
      {
        "title": 32,
        "content": "33- A completely gilded jug without any markings. Can be sold for 5 gp.",
        "imgGallery": []
      },
      {
        "title": 33,
        "content": "34- A tinker’s glove, soiled with oil, coal and unknown substances.",
        "imgGallery": []
      },
      {
        "title": 34,
        "content": "35- A ring made of black sandstone that bounces more than it should.",
        "imgGallery": []
      },
      {
        "title": 35,
        "content": "36- A smooth vial of translucent red ink.",
        "imgGallery": []
      },
      {
        "title": 36,
        "content": "37- A metal horn in a violet-hued sleeve.It fits in your hand pretty well.",
        "imgGallery": []
      },
      {
        "title": 37,
        "content": "38- A marble horseshoe with twenty-one indentations in a regular pattern around the edge.",
        "imgGallery": []
      },
      {
        "title": 38,
        "content": "39- A quite tiny, strikingly smooth sphere made of crystal. It appears valuable, but has none.",
        "imgGallery": []
      },
      {
        "title": 39,
        "content": "40- A pocket-sized cherrywood wheel that can be spun like a crappy fidget spinner.",
        "imgGallery": []
      },
      {
        "title": 40,
        "content": "41- A miniature studded knife that seems to have been someone’s souvenirs from their travels.",
        "imgGallery": []
      },
      {
        "title": 41,
        "content": "42- A small figure of a roc with a few cracks. It is made of oak and looks impressive.",
        "imgGallery": []
      },
      {
        "title": 42,
        "content": "43- An inedible grapefruit that never goes bad and is genuinely perplexing.",
        "imgGallery": []
      },
      {
        "title": 43,
        "content": "44- A weirdly-sized, relatively damp comb. It is composed of wood and tastes kind of acidic.",
        "imgGallery": []
      },
      {
        "title": 44,
        "content": "45- A cow’s horn",
        "imgGallery": []
      },
      {
        "title": 45,
        "content": "46- A small, strikingly decorated glove with three shallow pivots. It is made of zinc and seems unlucky.",
        "imgGallery": []
      },
      {
        "title": 46,
        "content": "47- A pair of dainty buttons. It is made of smokey metal and looks really dang cool.",
        "imgGallery": []
      },
      {
        "title": 47,
        "content": "48- A ceramic statue of a dog. It fills you with happy feelings.",
        "imgGallery": []
      },
      {
        "title": 48,
        "content": "49- A perfectly circular metal bracelet that conforms to fit the size of the wearer’s wrist.",
        "imgGallery": []
      },
      {
        "title": 49,
        "content": "50- A smooth four leaf clover. It is composed of gold and can be sold for 5 gp.",
        "imgGallery": []
      },
      {
        "title": 50,
        "content": "51- A plainly lubricated piano key in a pouch. It is made out of green-tinted rubber and seems normal.",
        "imgGallery": []
      },
      {
        "title": 51,
        "content": "52- An old, worn out domino mask that seems to have been the owner’s favorite for masquerades.",
        "imgGallery": []
      },
      {
        "title": 52,
        "content": "53- A lodestone",
        "imgGallery": []
      },
      {
        "title": 53,
        "content": "54- An empty component pouch with carefully labeled sections in delicate handwriting.",
        "imgGallery": []
      },
      {
        "title": 54,
        "content": "55- An incense burner that, while empty, still has a faint, pleasant smell.",
        "imgGallery": []
      },
      {
        "title": 55,
        "content": "56- A magnifying glass. The lens has an eye-like pattern made of stained glass on it.",
        "imgGallery": []
      },
      {
        "title": 56,
        "content": "57- Three silver pins wrapped in fur.",
        "imgGallery": []
      },
      {
        "title": 57,
        "content": "58- A small metal box containing a goblin skull, several spoons, a dead cave fish and a rock.",
        "imgGallery": []
      },
      {
        "title": 58,
        "content": "59- Five sticks of incense.",
        "imgGallery": []
      },
      {
        "title": 59,
        "content": "60- A dirty piton impaled through a thin, sanded slab of stone.",
        "imgGallery": []
      },
      {
        "title": 60,
        "content": "61- A locket with the miniscule portrait of a rather ugly couple inside. The art looks high quality.",
        "imgGallery": []
      },
      {
        "title": 61,
        "content": "62- An iron pot tied to a small ladle by a string.",
        "imgGallery": []
      },
      {
        "title": 62,
        "content": "63- An acceptance letter from a blacksmith’s guild that’s been folded and unfolded countless times.",
        "imgGallery": []
      },
      {
        "title": 63,
        "content": "64- A scroll case packed with hermit’s notes on the patterns of the stars.",
        "imgGallery": []
      },
      {
        "title": 64,
        "content": "65- A pewter brooch covered with alligator scales.",
        "imgGallery": []
      },
      {
        "title": 65,
        "content": "66- A wide-brimmed hat with some tears in it, made out of some furry animal’s hide.",
        "imgGallery": []
      },
      {
        "title": 66,
        "content": "67- An extremely sturdy tree branch with seven berries colored in the colors of the rainbow.",
        "imgGallery": []
      },
      {
        "title": 67,
        "content": "68- A shark tooth necklace that appears very uncomfortable to wear due to how many teeth it has.",
        "imgGallery": []
      },
      {
        "title": 68,
        "content": "69- A self-cleaning, smooth phallic object that appears to have been well-loved by numerous owners.",
        "imgGallery": []
      },
      {
        "title": 69,
        "content": "70- A Kobold first aid kit with nothing that could actually be used to heal wounds inside.",
        "imgGallery": []
      },
      {
        "title": 70,
        "content": "71- A glass orb filled with water, in which swims a clockwork goldfish.",
        "imgGallery": []
      },
      {
        "title": 71,
        "content": "72- A tooth from an unknown beast.",
        "imgGallery": []
      },
      {
        "title": 72,
        "content": "73- A paper fan with an elegant depiction of a sleeping cat.",
        "imgGallery": []
      },
      {
        "title": 73,
        "content": "74- A vial of Kuo-Toa blood, labeled “Not Kuo Toa Blud, I sware.”",
        "imgGallery": []
      },
      {
        "title": 74,
        "content": "75- A mummified mouse.",
        "imgGallery": []
      },
      {
        "title": 75,
        "content": "76- A basilisk's spike, wrapped in cloth.",
        "imgGallery": []
      },
      {
        "title": 76,
        "content": "77- A box containing two metal D-shaped hairclips and a snake skull.",
        "imgGallery": []
      },
      {
        "title": 77,
        "content": "78- A bundle of feathers from a harpy, tied to a love letter.",
        "imgGallery": []
      },
      {
        "title": 78,
        "content": "79- A small sentient slime, sealed in a glass vial.",
        "imgGallery": []
      },
      {
        "title": 79,
        "content": "80- A scarf woven from drider silk.",
        "imgGallery": []
      },
      {
        "title": 80,
        "content": "81- A jar of spoiled Minotaur milk. Smells gross.",
        "imgGallery": []
      },
      {
        "title": 81,
        "content": "82- A set of movable letters for a printing press.",
        "imgGallery": []
      },
      {
        "title": 82,
        "content": "83- The stone mask from JoJo. Does nothing.",
        "imgGallery": []
      },
      {
        "title": 83,
        "content": "84- A city map detailing the various criminal organizations. Sadly, it is extremely outdated.",
        "imgGallery": []
      },
      {
        "title": 84,
        "content": "85- A small stone idol with empty eye sockets, where gems undoubtedly used to be.",
        "imgGallery": []
      },
      {
        "title": 85,
        "content": "86- Someone's diary. Locked. And written entirely in third person by a paranoid conspiracy theorist.",
        "imgGallery": []
      },
      {
        "title": 86,
        "content": "87- A sheet of paper covered entirely with “Hareelaquanda Pahninslur” on both sides.",
        "imgGallery": []
      },
      {
        "title": 87,
        "content": "88- A pouch filled with various spices and herbs for cooking, as well as a recipe book.",
        "imgGallery": []
      },
      {
        "title": 88,
        "content": "89- A music box that plays “All Star”",
        "imgGallery": []
      },
      {
        "title": 89,
        "content": "90- A wand that yells at the wielder to stop swinging it when waved.",
        "imgGallery": []
      },
      {
        "title": 90,
        "content": "91- A keyring loaded with random keys. 1/100 chance one will work on a lock, if the DM deems it possible.",
        "imgGallery": []
      },
      {
        "title": 91,
        "content": "92- A discount card for a merchant's store.",
        "imgGallery": []
      },
      {
        "title": 92,
        "content": "93- A pouch with ten Scatternuts inside. (They make a loud bang when thrown.)",
        "imgGallery": []
      },
      {
        "title": 93,
        "content": "94- An oblong ball made of pigskin and laced together with string.",
        "imgGallery": []
      },
      {
        "title": 94,
        "content": "95- A baby goblin’s skeleton, preserved in a jar of alcohol.",
        "imgGallery": []
      },
      {
        "title": 95,
        "content": "96- A large empty waterproof, fireproof, acidproof book with a heavy metal clasp and a quill.",
        "imgGallery": []
      },
      {
        "title": 96,
        "content": "97- A large backpack with a tent, bedroll and blanket included in pockets that are too small for them.",
        "imgGallery": []
      },
      {
        "title": 97,
        "content": "98- The Window- a silicate pane that is almost invisible, growing and reducing to fit a reasonable slot.",
        "imgGallery": []
      },
      {
        "title": 98,
        "content": "99- A trumpet made of bone that goes “doot”. When played by a skeleton, it fills listeners with gratitude.",
        "imgGallery": []
      },
      {
        "title": 99,
        "content": "100- A noble’s money pouch, containing 25 gp. In addition, you may roll again to get another item.",
        "imgGallery": []
      }
    ]
  },
  {
    "title": "Obvious Traps",
    "cells": [
      {
        "title": 0,
        "content": "A 100 pound, flawless diamond sitting on an altar.",
        "imgGallery": [
          {
            "imgURL": "https://img.icons8.com/cute-clipart/64/000000/diamond.png",
            "caption": "Diamond"
          }
        ]
      },
      {
        "title": 1,
        "content": "An open door that has powerful blue light emanating from it, and several frozen figures inside.",
        "imgGallery": []
      },
      {
        "title": 2,
        "content": "A snarled tripwire lying on the floor, obviously cut.",
        "imgGallery": []
      },
      {
        "title": 3,
        "content": "Nearly 20 patches of green grass in various shapes, each one with a single hole located on one end. The grass is not grass when inspected, but some fibrous, artificial material that looks like very short grass.",
        "imgGallery": []
      },
      {
        "title": 4,
        "content": "A treasure chest sitting alone in the middle of a room, surrounded by statues of various races wearing/holding adventuring gear and facing towards the chest. One statue (a halfling with a hooded cloak and daggers) is kneeling in front of the chest.",
        "imgGallery": []
      },
      {
        "title": 5,
        "content": "Two iron statues on either side of a door. Upon casual inspection, the joints on the statues have fresh oil on them.",
        "imgGallery": []
      },
      {
        "title": 6,
        "content": "A piano in the middle of a stone room, with sheet music on the music rack.",
        "imgGallery": []
      },
      {
        "title": 7,
        "content": "A room with a checkerboard floor pattern. The squares glow when someone stands on them.",
        "imgGallery": []
      },
      {
        "title": 8,
        "content": "A 10 foot deep pool of water with a skeleton at the bottom (this is an old classic used many times).",
        "imgGallery": []
      },
      {
        "title": 9,
        "content": "Burn marks on the floor and walls near a door, and a small hole in the ceiling.",
        "imgGallery": []
      },
      {
        "title": 10,
        "content": "A delicious pie sits on a table, and an orc with a spear stands nearby, guarding it.",
        "imgGallery": []
      },
      {
        "title": 11,
        "content": "A group of stones in front of a door/chest are differently colored than the others in the room.",
        "imgGallery": []
      },
      {
        "title": 12,
        "content": "Three cats are locked in cages hanging from the ceiling. Underneath the cages, the orientation of the floor boards is different than the rest of the room (DC 8 wisdom check).",
        "imgGallery": []
      },
      {
        "title": 13,
        "content": "In a room with two doors, a stone from the ceiling has fallen out and next to it is a small pile of sand.",
        "imgGallery": []
      },
      {
        "title": 14,
        "content": "A natural chasm is spanned by a rope bridge. A brass minotaur statue stands on the other side, with it's axe raised above the supporting ropes.",
        "imgGallery": []
      },
      {
        "title": 15,
        "content": "Several suits are armor are holding weapons and posed as if they were fighting, and suddenly froze. A corpse lies in the middle of them.",
        "imgGallery": []
      },
      {
        "title": 16,
        "content": "A large block of ice sits melting in the middle of the room.",
        "imgGallery": []
      }
    ]
  },
  {
    "title": "Odd Plot Hooks",
    "cells": [
      {
        "title": 0,
        "content": "A body of water floats overhead with sea creatures still swimming around. Sometimes fish fall out.",
        "imgGallery": []
      },
      {
        "title": 1,
        "content": "A wizard with an army of animated furniture passes by.",
        "imgGallery": []
      },
      {
        "title": 2,
        "content": "The party comes across a two headed troll arguing with itself. Classic.",
        "imgGallery": []
      },
      {
        "title": 3,
        "content": "The party comes across a ripe strawberry field in the middle of a desolate land. The smell is addicting... it seems too good to be true.",
        "imgGallery": []
      },
      {
        "title": 4,
        "content": "The party comes across a man throwing food down a hole to feed something unknown.",
        "imgGallery": []
      },
      {
        "title": 5,
        "content": "The party comes across a lonely pie... with a tiny druid swimming inside.",
        "imgGallery": []
      },
      {
        "title": 6,
        "content": "While the party sleeps a band of cold goblins steal the player's boots and coats.",
        "imgGallery": []
      },
      {
        "title": 7,
        "content": "A strange unknown egg is discovered in town by a local. No one wants to touch it.",
        "imgGallery": []
      },
      {
        "title": 8,
        "content": "A Pastor of strange herded animals passes by.",
        "imgGallery": []
      },
      {
        "title": 9,
        "content": "Locals start disappearing but there's no sign of a break in, but somehow a large ogre-like creature always leave the scene (I like the idea of an Oni that teleports through your nightmares).",
        "imgGallery": []
      },
      {
        "title": 10,
        "content": "A strange creature appears and gestures for a player to ride it (great way to introduce Kelpie).",
        "imgGallery": []
      },
      {
        "title": 11,
        "content": "An immortal creature that cannot move is found by the party in a closet. It spreaks of it's vast knowledge of their location.... unfortunately this makes it the morgan freemen of a 10x10 foot closet. It knows nothing outside this closet, but it knows everything about the closet.",
        "imgGallery": []
      }
    ]
  },
  {
    "title": "Spooky Haunt Effects",
    "cells": [
      {
        "title": 1,
        "content": ": A party member encounters a strange cold spot.",
        "imgGallery": []
      },
      {
        "title": 2,
        "content": ": Strange whispering is heard from just over the should of a party member.",
        "imgGallery": []
      },
      {
        "title": 3,
        "content": ": The sound of footsteps is heard coming from another part of the house.",
        "imgGallery": []
      },
      {
        "title": 4,
        "content": ": Evil (perhaps demonic?) laughter booms throughout the house!",
        "imgGallery": []
      },
      {
        "title": 5,
        "content": ": A strange smell is detected, which appears to have no source.",
        "imgGallery": []
      },
      {
        "title": 6,
        "content": ": A ghostly figure is spotted out of the corner of someone's eye.",
        "imgGallery": []
      },
      {
        "title": 7,
        "content": ": The party returns to a previously explored room to find that something has changed during their absence (move furniture, something has made a mess, etc).",
        "imgGallery": []
      },
      {
        "title": 8,
        "content": ": Voice(s) can be heard coming from another part of the house.",
        "imgGallery": []
      },
      {
        "title": 9,
        "content": ": An omnipresent sound or other sensation suddenly stops (like the drip of water from somewhere in the room).",
        "imgGallery": []
      },
      {
        "title": 10,
        "content": ": The party or one its members gains the feeling that they are being followed/watched.",
        "imgGallery": []
      },
      {
        "title": 11,
        "content": ": One of the party gets feels like they have been scratched - they have the marks to prove it.",
        "imgGallery": []
      },
      {
        "title": 12,
        "content": ": A door slams shut or open somewhere in the house, perhaps near enough for the party to see it happen.",
        "imgGallery": []
      },
      {
        "title": 13,
        "content": ": A party member or members experience a sudden and inexplicable strong emotion when entering an new area.",
        "imgGallery": []
      },
      {
        "title": 14,
        "content": ": The party experiences sudden and violent poltergeist activity.",
        "imgGallery": []
      },
      {
        "title": 15,
        "content": ": The sounds of everyday life fill the room the party is in, despite there being no way for them to do so. (sounds of a meal in progress in a dining room, snoring in a bedroom, children playing in a nursery)",
        "imgGallery": []
      },
      {
        "title": 16,
        "content": ": A piece of furniture or other item moves without any apparent cause (a chair pulling out, a portrait falling off the wall, etc).",
        "imgGallery": []
      },
      {
        "title": 17,
        "content": ": The spirit(s) attempt to leave some sort of message for the party (a word scrawled on a chalkboard, or written in condensation on a window, items placed to create a symbol, etc).",
        "imgGallery": []
      },
      {
        "title": 18,
        "content": ": Banging and thumping can be heard coming from another room.",
        "imgGallery": []
      },
      {
        "title": 19,
        "content": ": A scene from the house's past reenacts itself in front of the party. The ghosts do not detect or react to the party in any way.",
        "imgGallery": []
      },
      {
        "title": 20,
        "content": ": The party's light source(s) goes out.",
        "imgGallery": []
      }
    ]
  },
];

// let starterTemplates=[
//   new Construct.Template("Testing", "This is the only way we can [know] for real"),
//   new Construct.Template("Anotha One", "Time to [yeet] my [meat]"),
// ];

let starterTemplates=[
  {
    "title": "Rumor Mill",
    "text": "     An upstanding citizen of the realm joins you at the bar for some friendly conversation.  After a few drinks they lean over conspiratorially and mutter...\n\n     \"You know, they say that [rumor mill subject]...*hic*...[rumor mill verb] [rumor mill target].  Course, I only *hic*  only heard that from [rumor mill source]...\"\n\nChuckling to themselves they pay their tab and add,\n\n  \"But, ahem, youse keep that one under your hat.  Least until you're well on your way to your next little pit-stop, eh traveler?\"\n\nHe winks and then suavely collapses onto the bar floor.  With a sigh the barkeep signals her son to pick the man up and take him to a backroom to sleep it off.\n\n\nBar Rumors, sourced from this reddit thread: https://www.reddit.com/r/DnDBehindTheScreen/comments/cszyv9/whispers_in_the_bar_4d100_potentially_ridiculous/"
  },
  {
    "title": "Sidequest: Damsel in Distress",
    "text": "     A tale as old as time, or at least as old as nobles having too many kids and not enough sense.  Lemme tell you about the time our adventurers headed off to save this noble family's runt.  \n\n     The Noble was a [damsel_quest gender] and our little heroes were on the case after [damsel_quest clue].\n\n    It seemed a straightforward job.  The Noble was being held in [damsel_quest prison] by [damsel_quest warden].  Apparantly the kidnappers wanted [damsel_quest motive]\n\n     Got to say, I- erm, I mean they didn't expect that Noble would be [damsel_quest feature].\n\n     Not that that changed anything, the job was still the job.  However that job got a little more complicated when [damsel_quest crisis].  \n\n    And that wasn't the ONLY snag in a what was supposed to be a smooth job.  But at least it wasn't until a good bit later that they found out [damsel_quest twist] so they got to play at knights in shining armor for a bit at least.\n\nAuthor: u/maladroitthief   Original link: https://www.reddit.com/r/DnDBehindTheScreen/comments/45d6m6/1d10_damsel_in_distress/\n\n"
  },
  {
    "title": "Crime Scene",
    "text": "     It's [crime_scene current time] when the detective arrives on scene at the [crime_scene location], crushing Lyndl leaves between his teeth that just don't take the edge off like they used to.  \n\n    A young lad, first on the scene, scampers up to report to him.  Apparently this was a(n) [crime_scene crime].  Bloody hell, what's this town coming to?\n\n   Best estimates put the crime at having gone down [crime_scene time elapsed] ago.\n\n   The detective gingerly steps around the bits of evidence the guards at the scene found, while absentmindedly pointing out something they missed.  [crime_scene clue].\n\n  With a grim nod the detective announces that they'll need to put the pressure on [crime_scene culprit].  He can't quite prove it, not yet, but he's got a feeling about why they'd do this.  [crime_scene motive].  Still, they'll need to be careful.  Town's going to be hard to search safely due to [crime_scene complication].  \n\n  Sheepishly the lad speaks up.  He only just heard himself but [crime_scene interested] took a particular..interest...in the case.  They've been very vocal about getting involved more directly than usual.\n\n  Grimacing the detective spits out and replaces another pinchful of Lyndl.  Of COURSE they had to get into his territory.  Something always went sideways when the weather was [crime_scene weather].  Well fine.  He knew just what he needed to make sure this case got solved right.  He'd need the help of a certain group of adventurers he happened to know would be in town...\n\nOriginal table: https://www.reddit.com/r/DnDBehindTheScreen/comments/agp2ik/the_scene_of_the_crime_a_generator/\n\nCreator:u/famoushippopotamus\n\n"
  },
  {
    "title": "Town Generator",
    "text": "   You fail your handle animal check, your overworked horse angrily rears up, tossing you off its back and trotting over to a nearby brook to drink.  \n\n   'Well, I guess we have been pushing it for a while.  Why don't we stop off at a town and get rest a bit ourselves?'\n\n  'Fine I guess.  Hey.  Elwyn, where should we go to find the next town that WON'T throw us out because of Mr. Smite on Sight over here?'\n\n  'Uhm, how would I know?  Also does a 17 work for getting my horse to like...walk alongside me if I don't try to ride it again?'\n\n   Sure.  Also, you know you have Bardic Knowledge right?  \n\n   'Oh heck, you're right.  Okay so...'  *the sound of dice falling followed by notecards being passed back and forth are heard.*\n\n   '*ahem*  So the nearest town is of course...TOWNNAME, the town famous for its [town_gen landmark]'\n\n   'We can get lodging at [town_gen lodging]'\n\n   'If we want to pick up any work just look for the  [town_gen square] that's in the town square'\n\n   \"Mm...what is there to eat?\" \n\n   'Why I am glad you asked!  The local cuisine consists of...uhm...[town_gen food]'\n\n   'And should you desire to spend coin on something a little more permanent they also have shops for [town_gen shops] and [town_gen shops]'  \n\n  \"It seems they are rather well off.  Do they get their coin through...VILLAINY?!\"\n\n  'Uhm..actually I think their economy mostly runs off of...*shuffles notes*...oh uhm I have heard coin flows in through their [town_gen economy]'\n\n\n\nOriginal Table from: https://www.reddit.com/r/dndnext/comments/ajjnx3/oneroll_town_maps/\nTable Author: u/SidecarStories\n"
  },
  {
    "title": "Society Generator",
    "text": "   \n      Alright, so you secure the deed and decide to build your base here...instead of heading towards the lich king...\n      \n      \"I mean, c'moon, he's a wizard AND dead we've got loads of time while he you know...plots and...ferments..\"\n\n      Noted.  Also, barn door and cows and all that but would you like to know anything about this town you decided to stake your claim in?  \n\n     \"Oh.  shoot, right...so what's the whole town defenses situation here?\"\n\n    Fair.  So the town is defended by [society_gen defenses].  On the opposite side of the coin the criminal culture here is [society_gen crime].\n\n   'Oh!  I have a question!  I've still got to unload all those golden doors we got from the last dungeon.  How's trade here?  And anything I should know to blend in so the shopkeeps don't take me for some tourist shmuck?'\n\n   Mm.  This town handles trade is [society_gen trade].  As for blending in...well culturally [society_gen culture] is/are the most recognizable cultural trait among the locals.  \n\n  \n  `Ay!  But what of the rot that lies underneath?!  Yes we know of their criminals but what of the rot the city might ignore?!  Is there VILLAINY in these people's hearts?!  In their government?!`\n\n  Ahh, I was wondering when you'd ask.  Well obviously there's some variance but as a whole this town harbors a belief of being [society_gen belief_a] [society_gen belief_b].  \n\n  As for government they've got a [society_gen government] going on here, not SURE if you'd call that villainous.\n\n\nOriginal: https://www.reddit.com/r/DnDBehindTheScreen/comments/ale18z/oneroll_society_blunderbuss_engine/\nTable author: u/SidecarStories"
  },
  {
    "title": "Mix Drinks & Change Lives",
    "text": "   The barkeep looks down at your tip, then up at you a few times before finally saying \"15 gold pieces?  You pulling my leg girlie?  This ain't one of those taverns where you can get a 'happily ever after' if that's what you're after.\"\n\n   \"What?  Uhm...sorry is that...too....little?\"\n\n   The barkeep's jaw drops before he rolls his head back in warm, belly shaking laughter.  \"You know you adventurers are alright.  Tell you what at least lemme upgrade you from that 'ale'.  We've got a special here you've ought to try.\"\n\n  \"Ooo. Okay!\"\n\n  He brings out [drinks served] Flashing you a toothy grin he fills it up with  [drinks type] he had stored in [drinks storage]  Before you have a chance to pick it up he sets down  [drinks addon] Finally he slides the lot over to you, eager to watch your reaction.  \n\n  \"Hell yeah, I chug it down!  But, like, cool.  Like a cool person would do alcohol.  What's uh..whats it taste like?\"\n\n  It tastes [drinks taste]  The alcohol content is, mm, about right.  Maybe a little strong for someone who calls it 'doing alcohol'.\n\n  \"Hey!  That was out of character!   hmph, but that does sound like a pretty good taste.  I smile back at him and give 'em a big thumbs up.  Then I ask 'That's pretty good!  How does one...go about making something like this?' \"\n\n\n  Pleased with your reaction the barkeep raps his fingers on the counter, thinking it over before leaning forward and speaking in hushed tones \"Ach, what the hell you look like a trustworthy sort.  Something like this gets made by [drinks brew]  For...well for reasons I won't get into we can't make it on site.  Gets delivered here by [drinks delivered]\"\n\n\nExtra drink type rolls in event of cocktail:\n1:[drinks type]\n2:[drinks type]\n3:[drinks type]\n4:[drinks type]\n5:[drinks type]\n\n\n\nOriginal:https://www.reddit.com/r/DnDBehindTheScreen/comments/aolrvk/table_for_a_taverns_speciality_drinks/\ntable Author:u/dingiest_\n\n\n\n\n\n\n"
  }
];

let starterMagicWords={
  "rumor mill subject": {
    "word": "rumor mill subject",
    "meanings": [
      "The king.",
      "The queen.",
      "The local miller.",
      "The local blacksmith.",
      "A retired adventurer.",
      "A famous assassin.",
      "An influential guildmaster.",
      "The mayor.",
      "An up-and-coming young knight.",
      "The high priest of Bhaal.",
      "A powerful Drow Matron.",
      "A wicked wizard.",
      "The Knight-Lord of a local order of Paladins.",
      "Strahd von Zarovich.",
      "A militant emperor in the West.",
      "A dragon-tamer in the mountains.",
      "The local dragon.",
      "An Orc warlord.",
      "One of the party members.",
      "An ancient pharaoh.",
      "A popular gladiator.",
      "A teamster who is a local legend for reckless driving.",
      "The crown prince.",
      "A master alchemist.",
      "A high-ranking Hobgoblin commander.",
      "An elven sage.",
      "The duchess.",
      "The duke.",
      "The local priest.",
      "An eccentric inventor.",
      "The town lunatic.",
      "A notorious pirate captain.",
      "A travelling monk.",
      "A famous mystic.",
      "The housekeeper of a local hostel.",
      "A Viking king.",
      "The Great Chief of Ogres.",
      "A famous trap-maker.",
      "An influential politician.",
      "The town beggar.",
      "The Princess.",
      "A newly-appointed Lady Knight of the region.",
      "A newly-appointed Lord Knight of the region.",
      "The Caesar of Minotaurs.",
      "The local weaponsmith.",
      "The BBEG.",
      "The mysterious man with a long, silver beard and a ragged black cloak.",
      "The mysterious woman with long, silver hair and an old-fashioned scarlet cloak.",
      "The local tobacco merchant.",
      "The kingpin of a crime ring.",
      "The head of a Tarrasque-worshiping cult.",
      "A vicious Manticore baron.",
      "A highly sought-after tailor.",
      "A highly sough-after baker.",
      "A highly sought-after physician.",
      "Every gravedigger in the entire region.",
      "The king's two-year-old son.",
      "A kuo-toa diplomat.",
      "The Bloodlord of Vampires.",
      "A necromancer.",
      "The court magician.",
      "A boatman on the local river.",
      "A mason building the king's new palace.",
      "A great athlete.",
      "The head of a not-so-secret society.",
      "The local innkeeper.",
      "A zombie who was voted in as townmaster.",
      "An Elvish king.",
      "The Lord of a druidic circle.",
      "The new 8-year-old king.",
      "A famous painter.",
      "One of the PCs' mentor.",
      "A famous evangelist.",
      "A Gorgon beauty guru.",
      "The yuan-ti God-King.",
      "A powerful Unseelie Fey.",
      "A goblin warlord.",
      "The editor of a local newspaper.",
      "The game warden.",
      "The king's butler.",
      "A renowned golem-building wizard.",
      "A great General.",
      "A local veteran and war hero.",
      "A folk-music writer.",
      "The street-lamp lighter.",
      "The street sweeper.",
      "The chimney-sweep.",
      "The harsh boss of a local factory.",
      "A far-sailing explorer, back in town after an expedition.",
      "A local archaeologist.",
      "The Witchfinder General.",
      "The Protector Angel of the nearest large city.",
      "A powerful Seelie Fey.",
      "The Iron Emperor of Dwarves.",
      "The Erlking of a local band of monster-hunters.",
      "A fashion icon.",
      "The Grand Duke of the Society for the Preservation of Gnomish Vocabulistics and Grammar.",
      "A famous daredevil.",
      "The leader of a mostly harmless local cult.",
      "The leader of an extremely harmful local cult."
    ],
    "blurb": "The subject of a scandalous rumor.  Author: u/Ross_Hollander"
  },
  "rumor mill verb": {
    "word": "rumor mill verb",
    "meanings": [
      "Is disgusted by...",
      "Hates...",
      "Weeps tears of joy for...",
      "Breaks down laughing at the thought of...",
      "Is worryingly obsessed with...",
      "Spent all their money on...",
      "Has asked the Church to forbid...",
      "Has asked the Church to demand...",
      "Has formed a society based around...",
      "Has led an expedition to...",
      "Once enjoyed...",
      "Has recently picked up...",
      "Demands someone to explain to them what all the fuss is with...",
      "Has forbid the mere mention of...",
      "Commissioned several murals of...",
      "Sentenced convicts to....",
      "Named their new yacht....",
      "Disowned their child for the child's becoming addicted to...",
      "Is hopelessly addicted to...",
      "Has challenged any takers to a contest of...",
      "Has started a scandal by...",
      "Has completely ignored the issues of...",
      "Got drunk and admitted to...",
      "Firmly denies that they have ever...",
      "Is hosting a costume ball themed around...",
      "Suffers nightmares about...",
      "Wants advice on how to go about...",
      "Tossed someone out of a window for daring to malign...",
      "Hired bards to sing the praises of...",
      "Is trying to quit...",
      "Divorced their spouse to spend more time...",
      "Wandered into the desert with the intent of...",
      "Demanded that any honest man would never stoop to...",
      "Stole a carriage to go...",
      "Has paid people to stop...",
      "Has demanded, against ancient tradition, that they be allowed to...",
      "Carved a statue of themselves...",
      "Has never even tried...",
      "Is ignoring the obvious solution to their current problem, ....",
      "Gives up all hope for the world when they think about...",
      "Turns into a panda whenever they try...",
      "Has been cursed by a witch to ceaselessly wander through the forest, ...",
      "Loves their spouse, but more so, ...",
      "Used magic to make 100 people go...",
      "Got drunk and went...",
      "Spent all their inheritance on...",
      "Might start a war over...",
      "Tattooed themselves with scenes of...",
      "Ceaselessly talks about...",
      "Ran 40 miles so as not to be late for...",
      "Wears their finest clothes to...",
      "Believes in the Gods but more so in...",
      "Doesn't even understand...",
      "Pays good money for people to compete at ... for their amusement.",
      "Found an ancient urn, worth thousands, depicting...",
      "Insists that it is a genteel pursuit to...",
      "Is causing trouble for everyone by...",
      "Sees it as unseemly to...",
      "Frequently enjoys...",
      "Is enraged by...",
      "Is saddened by...",
      "Got sick while...",
      "Broke their foot while...",
      "Died while...",
      "Proposed to their true love whilst...",
      "Is terrified by the prospect of...",
      "Believes it is a grievous sin to...",
      "Nearly started a revolution while a nobleman was...",
      "Clapped a man in irons for trying to...",
      "Is only ever gladdened by...",
      "Fully intends to kill their rival, making it look like an accident that occurred while they were...",
      "Has changed their main pursuit to....",
      "Denies claims that they ever..., despite solid evidence.",
      "Has a long history in their family of...",
      "Was nearly assassinated while...",
      "Explodes with fury when others ask if they intend to...",
      "Is enchanted to slowly levitate into the sky should they ever try...",
      "Has ordered a local noble to stop...",
      "Is haunted by the ghosts of those who died such that they could...",
      "Has cured themselves of a terrible illness by simply...",
      "Arose from the grave when they heard their relatives were... instead of attending their funeral.",
      "Wrote long and vivid books on the subject of...",
      "Will not so much as get out of bed until they...",
      "Rises bright and early to...",
      "Trained several hawks for the purposes of...",
      "Breaks into song and dance randomly to distract people from their habit of...",
      "Says they would rather die than...",
      "Dreams of...",
      "Has no appetite on days when they haven't...",
      "Hired adventurers to...",
      "Hired a wizard to help them with...",
      "Built an entire facility dedicated to...",
      "Used slaves and prisoners for...",
      "Threw themselves into a lake after a long day of...",
      "Hosted a banquet in celebration of their successful quest of...",
      "Frequently boasts about how good they are at...",
      "Demands that nobody but themselves be allowed to...",
      "Prays to the gods for success in...",
      "Recommends that pregnant women try...",
      "Firmly believes that .... is extremely classy and romantic."
    ],
    "blurb": "What the subject of the rumor did.  Author: u/Ross_Hollander"
  },
  "rumor mill target": {
    "word": "rumor mill target",
    "meanings": [
      "Hunting ogres.",
      "Digging pit traps.",
      "Minting gold pieces.",
      "Falling out of windows.",
      "Human sacrifice.",
      "Setting things on fire.",
      "Raiding small settlements.",
      "Eating pastries shaped like sacred icons.",
      "Swimming around in pools of oil.",
      "Riding horses.",
      "Painting pictures.",
      "Sabotaging other people's carriages.",
      "Hurling radishes at beggars.",
      "Stepping on people's toes.",
      "Doing nothing.",
      "Shutting up.",
      "Feeling confident.",
      "Running over small and fluffy animals.",
      "Tipping over Dominoes.",
      "Going on shopping sprees.",
      "Punching sacks of potatoes.",
      "Building elaborate but useless siege engines.",
      "Having rap-battles with pixies.",
      "Doing the conga.",
      "Convincing other people to do the conga.",
      "Building extremely comfortable couches.",
      "Building up an immunity to every kind of poison they can find.",
      "Studying vaccination.",
      "Learning how to fly.",
      "Burying dead bodies.",
      "Juggling swords.",
      "Juggling.",
      "Being a clown.",
      "Buying elaborate tricorn hats.",
      "Ringing people's doorbells and running away.",
      "Writing terrible books.",
      "Reading scandalous magazines.",
      "Praising themselves.",
      "Cow-tipping.",
      "Throwing china plates across rooms.",
      "Plating things with solid gold.",
      "Getting involved in tangled love-triangles.",
      "Awarding themselves trophies for things they never did.",
      "Giving long and elaborate speeches.",
      "Getting drunk.",
      "Getting high.",
      "Throwing knives at pictures of their enemies.",
      "Mixing fake blood in excessive quantities.",
      "Fighting Treants.",
      "Inventing new kinds of forks.",
      "Grave robbing.",
      "Burning down mansions.",
      "Writing speeches full of innuendos for pastors.",
      "Recycling old furniture.",
      "Playing war-games.",
      "Playing card games.",
      "Playing dice games.",
      "Making loaded dice.",
      "Starting bar fights.",
      "Making theatrical declarations of war against nonexistent countries.",
      "Completely ignoring real-world geography.",
      "Crashing the economy.",
      "Hurling cinder-blocks at passerby.",
      "Teaching Trolls calligraphy.",
      "Insulting Dragons.",
      "Writing dramatic Last Wills for themselves regarding fictitious deaths.",
      "Murdering people to start a murder-investigation romantic drama.",
      "Brooding on rooftops.",
      "Doing tuck-and-rolls into wedding ceremonies.",
      "Hiding treasures in local dungeons.",
      "Doing the Charleston at funerals.",
      "Starting moshpits at children's cello recitals.",
      "Headbanging to the church choir.",
      "Rolling themselves down hills.",
      "Giving excessive amounts of charity.",
      "Joining every secret society they can find.",
      "Doing somersaults when excited.",
      "Shooting people with crossbows.",
      "Designing a new national flag for their country every day, and sending it to the nobility for approval.",
      "Taming Mimics.",
      "Hitting people over the head with bar stools.",
      "Wearing cool cloaks.",
      "Spontaneously combusting.",
      "Drag-racing in carriages.",
      "Trying to ride Displacer Beasts.",
      "Trying to ride Owlbears.",
      "Jumping out at people from behind corners and shouting \"Boo!\"",
      "Rigging old castles to explode.",
      "Making silly faces at high-ranking clergy.",
      "Smoking far too many cigarettes than is advisable.",
      "Writing fake magazine articles describing wars between closely allied countries.",
      "Deep-frying books.",
      "Writing dictionaries of all 89 dialects of Abyssal.",
      "Pulling pranks.",
      "Breeding new horses.",
      "Conducting unethical scientific experiments.",
      "Building exact replicas of small villages, then demanding that all the villagers from that village move to the replica.",
      "Giving themselves ludicrous new titles.",
      "Carrying far too many canes.",
      "Carrying out exorcisms."
    ],
    "blurb": "The target of our subject's beliefs or actions.  Author: u/Ross_Hollander"
  },
  "rumor mill source": {
    "word": "rumor mill source",
    "meanings": [
      "The local newspaper.",
      "The village idiot.",
      "The gods themselves.",
      "A giant demon.",
      "A local magistrate.",
      "The police chief.",
      "A drunk in a bar.",
      "An eerily sober man in a bar.",
      "The local miser.",
      "My grandmother's ghost.",
      "An insane prophet.",
      "A mercenary captain.",
      "A mermaid.",
      "A man who turned out to be a Doppleganger.",
      "Three gnomes in a trench coat.",
      "Two halflings in a trench coat.",
      "Eighty-six pixies in a trench coat.",
      "An animated, sentient trench coat.",
      "A Beholder.",
      "A man cursed to only speak the truth.",
      "A local jester.",
      "A mafia hitman.",
      "A goblin who was on fire.",
      "A Cloud Giant.",
      "A group of Azers.",
      "A man who fell through the roof.",
      "A Viking warrior.",
      "A man who rolled through like tumbleweed.",
      "A Mind Flayer.",
      "Mordenkainen himself.",
      "Volo himself.",
      "A bounty hunter.",
      "An old soldier.",
      "An old policeman.",
      "A former army commander.",
      "A crusader.",
      "An occultist.",
      "A grave robber.",
      "A mailman.",
      "An animated reflection of myself in a mirror.",
      "A man who wore two dark cloaks.",
      "A one-legged, one-armed, one-eyed man.",
      "A werewolf.",
      "A stone golem.",
      "A tap-dancer.",
      "A saxophone player.",
      "The high priest of Kelemvor.",
      "An entire travelling circus.",
      "The town crier.",
      "A retired pirate.",
      "A retired bandit.",
      "A slightly insane author.",
      "A salty old sailor.",
      "A great-grandmother from a large local clan.",
      "The greatest clown in the world.",
      "A suit of Animated Armor that had trapped a man inside it.",
      "A man selling salt.",
      "A trickster spirit.",
      "An imp.",
      "A regiment of Hobgoblins.",
      "A tribe of Orcs.",
      "An Ettin, who also said it wasn't true.",
      "A Wraith.",
      "A lich lord.",
      "A lost traveler.",
      "The mayor's niece.",
      "A fisherman.",
      "A silent and mysterious stranger who recently moved into town.",
      "A professional spy.",
      "A stockbroker.",
      "A tabaxi minstrel.",
      "A Goliath monk.",
      "A band of singing Dwarves who sung it to me.",
      "An Elvish comedian.",
      "A halfling with a mohawk.",
      "My evil twin.",
      "A lost Planeswalker.",
      "A slightly evil magician.",
      "A poison dealer.",
      "A Mob legbreaker.",
      "Someone covered head to toe in scarves and coats.",
      "My spouse.",
      "My son.",
      "A Tortle with a purple-painted shell.",
      "Three knights, one in white armor, one in black, one in grey.",
      "A Kobold with a violent temper who screamed at me about it.",
      "A dragonborn who was looking for their parents.",
      "A beautiful forest nymph.",
      "An old woman who turned out to be a Hag.",
      "An old man who turned out to be a Vampire.",
      "A man who refused to stop doing jumping jacks.",
      "A young woman who started a dance party after telling me.",
      "A skeleton.",
      "A morbid man with tired-looking eyes and rumpled suit.",
      "A talking parrot.",
      "A wandering preacher.",
      "A young half-elf who was on a pilgrimage.",
      "A knight in golden armor.",
      "Gary Gygax.",
      "A talking cat."
    ],
    "blurb": "Where our loose lipped friend learned this rumor.  Author: u/Ross_Hollander"
  },
  "damsel_quest gender": {
    "word": "damsel_quest gender",
    "meanings": [
      "male",
      "female"
    ],
    "blurb": "On a quest to save a noble, their gender is..."
  },
  "damsel_quest clue": {
    "word": "damsel_quest clue",
    "meanings": [
      "finds a hastily scrawled note that used finger tips as the pen and blood as the ink",
      "experiences a vision of the keep and noble has been reoccurring in your dreams",
      "is shown a missing person notice posted by the noble’s family",
      "stumbles upon the keep by chance while out adventuring",
      "overhears a pair of knights recounting their failure in retreat",
      "is asked to investigate the keep(er) due to suspicious activity",
      "is stopped by woodland creatures who all begin chattering frantically about the situation",
      "hears gossip in the tavern about the noble’s whereabouts",
      "is told about the scenario by a traveling oracle",
      "is captured and taken by the keeper’s henchmen"
    ],
    "blurb": "On a quest to save a noble, the party gets a clue to start them off..."
  },
  "damsel_quest prison": {
    "word": "damsel_quest prison",
    "meanings": [
      "a large magnificent castle on the mountainside",
      "a cave burrowed into the side of a hill",
      "a pocket dimension that opens only on the full moon",
      "a sunken castle with an enchantment that permits water breathing inside of it",
      "the brig of a ship anchored just off the coast",
      "an abandoned, overgrown temple in the woods",
      "a travelling caravan that is difficult to track down",
      "a crypt hidden beneath a graveyard",
      "a magical prison inside an amulet worn by the keeper",
      "a hidden kingdom under the ground"
    ],
    "blurb": "On a quest to save a noble, noble is held in..."
  },
  "damsel_quest warden": {
    "word": "damsel_quest warden",
    "meanings": [
      "an old witch with imps for henchmen",
      "a vampire lord with thrall for henchmen",
      "a beholder with nothic henchmen",
      "a bandit lord with bandit henchmen",
      "a green dragon with half-dragon henchmen",
      "a powerful wizard with golem henchmen",
      "a medusa with living statues as henchmen",
      "a lich and his skeleton henchmen",
      "a satyr prince and his satyr henchmen",
      "an orc warchief and his orc henchmen"
    ],
    "blurb": "On a quest to save a noble, noble is held BY..."
  },
  "damsel_quest motive": {
    "word": "damsel_quest motive",
    "meanings": [
      "gold in exchange",
      "the noble as a slave",
      "to make a blood sacrifice to their god",
      "to use the noble as bait to lure in more prey",
      "to sell them to the highest bidder overseas",
      "to spark war between nations",
      "the noble as a suitor for their son/daughter",
      "to fill the void in their life that was caused by a loved one dying",
      "to keep the noble even though taking them happened by accident",
      "to fulfill tradition, it’s nothing personal"
    ],
    "blurb": "On a quest to save a noble, the kidnapper wants..."
  },
  "damsel_quest feature": {
    "word": "damsel_quest feature",
    "meanings": [
      "beautiful/handsome beyond expression",
      "ugly as sin",
      "quite overweight",
      "much taller than you expected",
      "much shorted than you expected",
      "very thin and looking under-fed",
      "unusually muscular",
      "missing all of their hair",
      "much older compared to their description",
      "completely naked and [roll again]"
    ],
    "blurb": "On a quest to save a noble, the noble looks..."
  },
  "damsel_quest crisis": {
    "word": "damsel_quest crisis",
    "meanings": [
      "the noble wants to stay",
      "the noble insists their family doesn’t really want them to come back",
      "the noble has been placed into a catatonic dream state",
      "the noble dies on the way back home",
      "the noble falls in love with a party member and doesn’t want to leave them",
      "the noble is an illusion and is being kept somewhere else [Roll another location]",
      "there are six nobles who all look similar to the description",
      "the noble is the opposite gender than what you were told",
      "the noble attacks the party in a frenzy and won’t stop until calmed down or knocked unconscious",
      "the noble gets captured again by someone else on the way back [Start over at The damsel is being kept in]"
    ],
    "blurb": "On a quest to save a noble, something goes wrong when..."
  },
  "damsel_quest twist": {
    "word": "damsel_quest twist",
    "meanings": [
      "it was the wrong noble. Oops",
      "the noble is a doppleganger looking to infiltrate the family",
      "the family did it as a publicity stunt to gain attention and sympathy",
      "the noble has been getting captured on purpose to escape their family",
      "the family isn’t offering any payment for the noble’s return",
      "someone else is offering more gold for the noble than the family",
      "all members that family the noble belongs to have since died",
      "the noble was likely happier with the keeper",
      "the noble wants to be freed to go where they choose rather than back home",
      "the noble is actually a powerful wizard who invented the whole scenario to see if there is anyone of valor still left in the world"
    ],
    "blurb": "On a quest to save a noble, everything changes when the party realizes..."
  },
  "crime_scene location": {
    "word": "crime_scene location",
    "meanings": [
      "Tavern",
      "Crossroads",
      "Private Residence",
      "Cemetary",
      "Theater/Gallery",
      "Alleyway",
      "Docks",
      "Craftshop",
      "Retailshop",
      "Outdoor Area"
    ],
    "blurb": "Where the crime took place"
  },
  "crime_scene crime": {
    "word": "crime_scene crime",
    "meanings": [
      "Assassination",
      "Theft",
      "Murder",
      "Arson",
      "Kidnapping",
      "Property Destruction",
      "Massacre",
      "Terrorism"
    ],
    "blurb": "The actual crime that went down"
  },
  "crime_scene clue": {
    "word": "crime_scene clue",
    "meanings": [
      "Dropped personal item",
      "Eyewitness (Unreliable)",
      "Body part/evidence",
      "Arcane residue",
      "Eyewitness (Reliable)",
      "Footprint (Animal, Monster, Humanoid)",
      "Vehicle Track",
      "Dropped weapon",
      "Dropped correspondence/papers",
      "Psionic residue"
    ],
    "blurb": "Clue found at the scene"
  },
  "crime_scene culprit": {
    "word": "crime_scene culprit",
    "meanings": [
      "Bandits/Rogues",
      "Local Rowdies",
      "Lone evildoer",
      "Group of evildoers",
      "Classed NPCs",
      "Solo monster",
      "Group of monsters",
      "Politician/Royal",
      "Spirit creature",
      "Local inhabitant(s)"
    ],
    "blurb": "Potential culprits"
  },
  "crime_scene motive": {
    "word": "crime_scene motive",
    "meanings": [
      "Revenge",
      "Contract",
      "Crime of Passion",
      "Political",
      "Curse/Geas",
      "Opportunity/Serial",
      "Survival",
      "Coerced"
    ],
    "blurb": "Why'd they do it?"
  },
  "crime_scene interested": {
    "word": "crime_scene interested",
    "meanings": [
      "Family member",
      "Spouse/lover (and Ex-)",
      "Guild",
      "Government",
      "Religious institution",
      "The People",
      "Influential Local",
      "Stranger"
    ],
    "blurb": "Someone's taken a special interest in this case"
  },
  "crime_scene complication": {
    "word": "crime_scene complication",
    "meanings": [
      "Strange lights/noises",
      "Local Faction interest",
      "Missing elements",
      "Area is haunted/cursed",
      "Unusual/unseasonal weather",
      "Animal oddities",
      "Odd/Outsider Individual",
      "Crime scene has been staged"
    ],
    "blurb": "Something makes investigating harder"
  },
  "crime_scene time elapsed": {
    "word": "crime_scene time elapsed",
    "meanings": [
      "A few minutes",
      "An hour",
      "4 hours",
      "8 hours",
      "24 hours",
      "48 hours",
      "A week",
      "Unknown"
    ],
    "blurb": "Time since crime took place"
  },
  "crime_scene current time": {
    "word": "crime_scene current time",
    "meanings": [
      "Wee Hours",
      "Sunrise/Morning",
      "8 am",
      "Noon",
      "Afternoon",
      "Dusk/Evening",
      "Night",
      "Midnight"
    ],
    "blurb": "Time when investigation starts"
  },
  "crime_scene weather": {
    "word": "crime_scene weather",
    "meanings": [
      "Hot and Windy",
      "Sunny and Dry",
      "Rainy",
      "Storming",
      "Snowing",
      "Cold and Windy",
      "Sleeting",
      "Foggy"
    ],
    "blurb": "Weather when investigation starts"
  },
  "town_gen square": {
    "word": "town_gen square",
    "meanings": [
      "Water Well",
      "Bonfire",
      "Open Market/Bazaar",
      "Statue or Shrine"
    ],
    "blurb": "The town square is a..."
  },
  "town_gen lodging": {
    "word": "town_gen lodging",
    "meanings": [
      "Relatively safe clearing near town",
      "Generous Citizen with Vacancy",
      "Open-Air Campground",
      "Spare Building (Barn, Empty Home)",
      "Communal Lodge",
      "Inn"
    ],
    "blurb": "The adventurers can lodge at..."
  },
  "town_gen food": {
    "word": "town_gen food",
    "meanings": [
      "Plentiful wild game/fish",
      "Generous Citizen with Food",
      "Public Vegetable Garden",
      "Communal Potluck Meals",
      "Open Pit Barbecue",
      "Smokehouse",
      "Marketplace",
      "Tavern"
    ],
    "blurb": "Most food comes from..."
  },
  "town_gen shops": {
    "word": "town_gen shops",
    "meanings": [
      "General Store",
      "Alchemist/Herbalist/Healer",
      "Blacksmith (Armor, Weapons, Tools)",
      "Carpenter (Boats, Buildings, Wagons)",
      "Clothing (Common, Fine)",
      "Enchanter/Hex Den",
      "Glassblower",
      "Leatherworks (Armor, Saddlery)",
      "Stables",
      "Exotic Goods (Carpets & Cloth, Jewelry, Perfumes, Curio)"
    ],
    "blurb": "The biggest shops here are..."
  },
  "town_gen economy": {
    "word": "town_gen economy",
    "meanings": [
      "Crossroads",
      "Crops",
      "Livestock",
      "Docks/Harbor",
      "Ferry/Major Bridge",
      "Fishery",
      "Holy Site/Source of Magical Power",
      "Mill",
      "Mine",
      "Trade Hub",
      "Defense (Barracks, Defending a Strategic Location or Road, Gatehouse, Training)",
      "Production Industry (Shipyards, Ironworks)"
    ],
    "blurb": "But most of the town's money comes from..."
  },
  "town_gen landmark": {
    "word": "town_gen landmark",
    "meanings": [
      "Wizard’s Tower (Active, Abandoned)",
      "College (Arcane, Bardic, Scholarly)",
      "Combat Training School",
      "Church/Shrine/Temple",
      "Fighting Pit",
      "Tended Gardens",
      "Guild Hall (Craft, Trade, Fighter, Thieves)",
      "Library/Knowledge Repository",
      "Lighthouse or Watchtower",
      "Racetrack (Dogs, Horses)",
      "Ruins (Castle, Cathedral, Shipyards)",
      "Sealed Cave Entrance",
      "Skirmish Aftermath (Neighboring Town, Invading Horde, Rampaging Beast)",
      "Spiritual Lodge",
      "Standing Corporal Punishment Fixture (Stocks, Gallows, Chopping Block)",
      "Theater/Amphitheater",
      "A River Runs Through It",
      "Build into a Hill- or Mountain-Side",
      "Built into a Canyon or Ravine",
      "Surrounded by Forest/Wilderness"
    ],
    "blurb": "Most know the town due to its..."
  },
  "society_gen defenses": {
    "word": "society_gen defenses",
    "meanings": [
      "Militia: trained citizens combat threats/crime",
      "Standing Army: professional, organized soldiers",
      "Champion: a single notable defender",
      "No Military Defenses"
    ],
    "blurb": "How a town defends itself"
  },
  "society_gen trade": {
    "word": "society_gen trade",
    "meanings": [
      "Barter Economy: no money, only trading",
      "Desperate: struggling trade may mean low prices and low integrity among merchants",
      "Heavy Taxation: merchant prices raised in turn",
      "Meddling: Governance, Guilds, or Religious Group",
      "New Trade Route: exotic travellers & customs",
      "Traditional: strict customs, prejudice against certain groups based on race or belief"
    ],
    "blurb": "How a town trades"
  },
  "society_gen crime": {
    "word": "society_gen crime",
    "meanings": [
      "Violent: even murder might not be uncommon",
      "White Collar: con artists & cheating merchants",
      "Corrupt Governance: predatory laws, unfair trials",
      "Harshly Punished: violent sentences, banishment",
      "Corrupt Law Enforcement: bribery, false charges",
      "Organized: the Party isn’t the only gang in Town",
      "Suppressed: capable law enforcement, just rulers",
      "Shunned: nobody associates with known criminals"
    ],
    "blurb": "Town's criminal situation"
  },
  "society_gen belief_a": {
    "word": "society_gen belief_a",
    "meanings": [
      ". Angry with",
      ". Rebelling against",
      ". Guilted by",
      ". Revolution toward",
      ". Punishing followers of",
      ". Apathetic toward",
      ". Awaiting",
      ". Devout to",
      ". Fearful of",
      ". Crusading for"
    ],
    "blurb": "Towns feels this towards something else."
  },
  "society_gen belief_b": {
    "word": "society_gen belief_b",
    "meanings": [
      "Atheism/Agnosticism",
      "Magic",
      "Power",
      "Wealth",
      "Elder Worship",
      "A Good God",
      "An Evil God",
      "A Neutral God",
      "A Lawful God",
      "A Chaotic God"
    ],
    "blurb": "This is what the town's feelings are directed towards"
  },
  "society_gen government": {
    "word": "society_gen government",
    "meanings": [
      "Arcanocracy: the ruler or ruling class is magical",
      "Anarchy: there are no laws. If someone does something you dislike, respond as you wish",
      "Conqueror’s Rule: whoever beat the last leader",
      "Council: a group makes decisions together",
      "Democracy: everyone votes directly on each issue",
      "Dictatorship: ruling by force",
      "Fealty: the town owes allegiance to elsewhere",
      "Mandarinate: requires tests or trials to rule",
      "Monarchy: single ruler with bloodline succession",
      "Oligarchy: a group of individuals divide power",
      "Republic: elected ruler",
      "Theocracy: God(s) makes the law. There may or may not be clergy to interpret god’s wishes"
    ],
    "blurb": "This is what the town's government is like"
  },
  "society_gen culture": {
    "word": "society_gen culture",
    "meanings": [
      "Food: high standards, reverence for good cooks",
      "Music: constant music; most play an instrument",
      "Painting: colorful art on buildings/objects/people",
      "Writing: author(s), calligraphy, widespread poetry",
      "Fashion: dressing for conformity/self-expression",
      "Body Art: tattoos, piercings, hair, makeup/paint",
      "Drama: storytelling, poetic speech, talented liars",
      "Architecture: monuments, unique buildings",
      "Holidays: frequent celebrations and events",
      "Dance: movement is important in celebrations, traditions, courtship, transactions, respect",
      "Tribalism: society separated into distinct groups",
      "Duelling: most disputes settled in formal combat",
      "Symbology: prominent marks of belief or faction",
      "Addiction: alcohol, food, other substance abuse",
      "Gluttony: overindulging in food, drink, or pleasure",
      "Greed: dishonest trade, gambling, selfishness",
      "Pride: confident, easily offended",
      "Despair: widespread pessimism",
      "Wrath: easily provoked, eager to fight",
      "Sloth: laziness, slow paced lifestyle"
    ],
    "blurb": "A big part of their current culture is..."
  },
  "drinks type": {
    "word": "drinks type",
    "meanings": [
      "Dark Ale.",
      "Light Ale.",
      "Hoppy, pale ale.",
      "Apple Cider.",
      "Pear Cider.",
      "Cider made from berries.",
      "Red wine.",
      "White wine.",
      "Rosé wine.",
      "Single Malt Whiskey.",
      "Blended Whiskey.",
      "Gin.",
      "White Rum.",
      "Dark Rum.",
      "Spiced Rum.",
      "A totally clear spirit (To the PCs it’s completely flavourless and odourless, but the locals claim it has a flavour all its own).",
      "A thick black liqueur brewed with herbs from the local area.",
      "A milky liqueur that closely resembles heavy cream.",
      "A Cocktail made by stirring several different drinks with ice (Roll 3d20 to decide the ingredients, re-roll 19s/20s).",
      "A Cocktail made by combining two different drinks with sweet, local fruit juice (Roll 2d20 to decide the ingredients, re-roll 19s/20s)."
    ],
    "blurb": "The specialty drink in this tavern"
  },
  "drinks brew": {
    "word": "drinks brew",
    "meanings": [
      "A group of clerics from a far-off land.",
      "A local wizard.",
      "A group of local wizards.",
      "A travelling group of performers, who make the drink as a side business.",
      "A family who have been making the drink for generations.",
      "A lone brewmaster who has recently died, taking the recipe to their grave. The price of the drink has skyrocketed, and the supply of the drink is now finite.",
      "The next town over, who’s entire economy centres around the drink.",
      "The town that the Tavern/Inn is in.",
      "The Tavern/Inn owner.",
      "The Tavern/Inn owner’s son/daughter.",
      "A community on a remote island.",
      "It’s a closely guarded secret.",
      "A huge organisation of breweries with sites across the realm.",
      "A travelling merchant who claims the drink has magical healing powers.",
      "The King/Queen (Every ruler needs a hobby).",
      "A reclusive group of Kenkus.",
      "A band of Goblins trying to forge economic relationships with humans.",
      "Kobolds, in the service of a very business-minded Red Dragon.",
      "A team of Iron Golems left behind by a long dead leader. They produce the drink tirelessly, day and night. Leading to a very ample supply.",
      "A travelling group of Druids (“It’s Organic!”) The groups meandering travels mean that the supply is very unreliable."
    ],
    "blurb": "How the drink is made"
  },
  "drinks taste": {
    "word": "drinks taste",
    "meanings": [
      "Bitter.",
      "Sweet.",
      "Sour.",
      "Meaty, for some reason.",
      "Spicy.",
      "Floral.",
      "Salty.",
      "Minty."
    ],
    "blurb": "How the drink tastes"
  },
  "drinks storage": {
    "word": "drinks storage",
    "meanings": [
      "A series of barrels along the back of the bar.",
      "A complex series of copper tubes that wind their way throughout the bar.",
      "A deep, stone trough that runs along the back of the bar.",
      "A crooked, creaking tower of shelves.",
      "Enormous blocks of Ice shipped in from the Arctic regions of the world.",
      "A wide, shallow bowl carved into the floor of the tavern.",
      "The skull of a Dragon turtle, kept out front of the tavern.",
      "A huge, pulsating ball of liquid. Suspended magically in the centre of the tavern.",
      "Dirty buckets, resting precariously on every available surface.",
      "A deep, dark cellar, accessed via a rickety staircase behind the bar."
    ],
    "blurb": "How the drink is stored"
  },
  "drinks served": {
    "word": "drinks served",
    "meanings": [
      "Simple wooden cups.",
      "Ornate silver goblets.",
      "Finely engraved, steel shot glasses.",
      "Hollowed out skulls of the bar’s former regulars. It’s considered a high honour after your death.",
      "Drinking horns that hang along the front of the bar.",
      "Whatever the customer has to hand.",
      "A boot. Everyone has to wait their turn to drink from the boot.",
      "Carved, wooden bowls.",
      "It’s only served in full bottles.",
      "The classic wooden flagon."
    ],
    "blurb": "How the drink is served"
  },
  "drinks delivered": {
    "word": "drinks delivered",
    "meanings": [
      "Tiny boats borne on an underground river that flows under the tavern.",
      "A courier’s guild who transport goods with their trusty fleet of hippogriffs.",
      "An eccentric trader with a huge wagon pulled by tame Owlbears.",
      "The deliveries wash up mysteriously on a nearby beach.",
      "Almost constant deliveries by teams of Dwarves.",
      "A portal hidden in the back of the tavern, the whole place rumbles and there is a deafening BOOM! Every time some booze arrives.",
      "Once every few months, the tavern’s owner closes up for 2 weeks and goes on an arduous pilgrimage to collect their stock.",
      "The booze comes in hidden amongst other goods to avoid taxes.",
      "A team of gnomes have devised a complex system of ropes and pulleys to transport the product over immense distances.",
      "A 3rd Party wizard teleports the booze from the brewers to the tavern for an exorbitant fee."
    ],
    "blurb": "How the drink is delivered"
  },
  "drinks addon": {
    "word": "drinks addon",
    "meanings": [
      "A questionable meat jerky.",
      "Small bowls of nuts.",
      "Chunks of a strange, local fruit.",
      "A single pork sausage. Burnt black.",
      "1 Copper Piece, in some strange local tradition.",
      "An arrow."
    ],
    "blurb": "What the drink is served with"
  }
};

let data={
  getTablePool:function(){
    return JSON.parse(localStorage.getItem("tablePool"));
  },
  setTablePool:function(newPool){
    localStorage.setItem('tablePool', JSON.stringify(newPool));
  },
  getTemplates:function(){
    return JSON.parse(localStorage.getItem("templates"));
  },
  setTemplates:function(newTemplates){
    localStorage.setItem('templates', JSON.stringify(newTemplates));
  },
  getMagicWords:function(){
    return JSON.parse(localStorage.getItem("magicWords"));
  },
  setMagicWords:function(newWords){
    localStorage.setItem('magicWords', JSON.stringify(newWords));
  },
  tableRollSettings:{
    selectedTables:["0"],
    galleryImage:0,
    currentCell:false,
  },
  tableEditSettings:{
    selectedTable:0,
    selectedCell:0,
    currentCell:false
  },
  magicWordSettings:{
    selectedWord:0,
    selectedMeaning:0
  }

}

let ci={
  dieRoll:function(dieSides){
    return Math.floor(Math.random()*dieSides)+1;
  },
  array_move:function(arr, old_index, new_index) {
    //https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  },
}



if (localStorage.getItem("tablePool") === null) {
  localStorage.setItem('tablePool', JSON.stringify(tablePool));
}

if (localStorage.getItem("templates") === null) {
  localStorage.setItem('templates', JSON.stringify(starterTemplates));
}

if (localStorage.getItem("magicWords") === null) {
  localStorage.setItem('magicWords', JSON.stringify(starterMagicWords));
}

function resetStorage(){
  if (window.confirm("Do you really want to delete all your saved info?")) {
  localStorage.clear();
  location.reload();
 }
}
