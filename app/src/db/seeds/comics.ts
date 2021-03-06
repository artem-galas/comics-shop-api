import Knex from 'knex'

const batmanComics = [
  {
    "id": 1,
    "price": 2.99,
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376877/Bat01_vgtkc0.jpg",
    "title": "“I AM GOTHAM” Chapter One",
    "description": "No one has ever stopped the Caped Crusader. Not The Joker. Not Two-Face. Not even the entire Justice League. But how does Batman confront a new hero who wants to save the city from the Dark Knight?",
    "character_id": 1,
  },
  {
    "id": 2,
    "price": 2.99,
    "title": "I AM GOTHAM” Chapter Two",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376877/Bat02_gb7lwj.jpg",
    "description": "In issue #2, after a brush with disaster, Batman struggles to reconcile the fate he could be leaving behind for his city, and reaches out to the idealistic new hero, Gotham. But an evil is building that may overcome both Batman and his new ally.",
    "character_id": 1,
  },
  {
    "id": 3,
    "price": 2.99,
    "title": "“I AM GOTHAM” Chapter Three:",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376877/Bat03_bezffg.jpg",
    "description": "Batman and Gotham strike out together to get to the bottom of the mysterious attacks against the city. Could this novel and headstrong new hero be everything Gotham City needs…at the cost of the Dark Knight?",
    "character_id": 1,
  },
  {
    "id": 4,
    "price": 2.99,
    "title": "“I Am Gotham” Chapter Four",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376878/Bat04_bqfkoa.jpg",
    "description": "When Gotham City falls prey to true evil, will Batman be abandoned by the new heroes Gotham and Gotham Girl? The Dark Knight must decide who to entrust with the safety of his beloved city if he hopes for any of its citizens to survive.",
    "character_id": 1,
  },
  {
    "id": 5,
    "price": 2.99,
    "title": "“I Am Gotham” Chapter Five.",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376878/Bat05_tia3zj.jpg",
    "description": "In the final chapter of this epic, is Batman truly the hero Gotham City deserves—or does it deserve better? In this ultimate showdown, where the line between allies and enemies blurs, the question will finally be answered…and the fate of Gotham will be decided.",
    "character_id": 1,
  },
  {
    "id": 6,
    "price": 2.99,
    "title": "“I AM GOTHAM” epilogue.",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376877/Bat06_gqohri.jpg",
    "description": "In this stand-alone tale, Batman seeks redemption as he tries to keep Gotham Girl from going down a dangerous path. But can the Dark Knight save someone who doesn’t want to be saved?",
    "character_id": 1,
  },
  {
    "id": 7,
    "price": 2.99,
    "title": "NIGHT OF THE MONSTER MEN Part 1",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376878/Bat07_jzkvjg.jpg",
    "description": "The first crossover of the “Rebirth” era is here! As a huge storm approaches, Batman, Batwoman, and Nightwing try and prepare Gotham City for the worst, but nothing can prepare them for enormous tall monsters rampaging through the streets! Batman will need all of his allies to unite in order to stop these mad science monsters from tearing their city apart!",
    "character_id": 1,
  },
  {
    "id": 8,
    "price": 2.99,
    "title": "NIGHT OF THE MONSTER MEN Part Four",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376878/Bat08_q4d70g.jpg",
    "description": "The giant monsters might be bad, but Gotham’s heroes encounter a whole new threat level when two of their own start terrorizing the city! Batman must face the horrifying possibility of losing two of his closest allies to Hugo Strange’s vicious attack.",
    "character_id": 1,
  },
  {
    "id": 9,
    "price": 1.99,
    "title": "I Am Suicide Part one",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376879/Bat09_adncbg.jpg",
    "description": "Batman has always been crazy…but this? This is suicide! In order to retrieve Psycho-Pirate and save Gotham Girl, Batman must recruit a team from Amanda Waller to break into the most impenetrable prison in the world and steal from one of the Dark Knight’s greatest foes…Bane. The next great Batman story begins here!",
    "character_id": 1,
  },
  {
    "id": 10,
    "price": 3.99,
    "title": "I am Suicide Part Two",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376879/Bat10_pojngz.jpg",
    "description": "Batman now has his team, but are they ready for the most dangerous mission of their lives? As the Dark Knight prepares his squad to infiltrate Santa Prisca, he may find that it’s up to him alone to face Bane.",
    "character_id": 1,
  }
];
const supermanComics = [
  {
    "id": 11,
    'character_id': 2,
    "price": 1.99,
    "title": "PATH TO DOOM I",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376879/Sups01_sxsrzk.jpg",
    "description": "Superman returns to Metropolis just in time to meet the city of tomorrow’s newest protector: Lex Luthor. But it’s not long before these dueling titans meet someone unexpected — the new Clark Kent!"
  },
  {
    "id": 12,
    'character_id': 2,
    "price": 4.99,
    "title": "PATH TO DOOM II",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376879/Sups02_dlakng.jpg",
    "description": "Luthor and Superman must put aside their differences and face the common threat of Doomsday, as Jimmy Olsen and the Planet staff try to uncover the truth: who is the man claiming to be Clark Kent?"
  },
  {
    "id": 13,
    'character_id': 2,
    "price": 3.99,
    "title": "PATH TO DOOM III",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376879/Sups03_gd5lh8.jpg",
    "description": "Clark Kent gets caught in the crossfire as Doomsday crashes through the streets of Metropolis! As Lois struggles to keep young Jonathan out of the path of destruction, can former enemies Superman and Lex Luthor stop the monster that once destroyed the city and killed the Man of Steel—or does Luthor have other plans?"
  },
  {
    "id": 14,
    'character_id': 2,
    "price": 2.99,
    "title": "PATH TO DOOM IV",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376879/Sups04_uwccfn.jpg",
    "description": "Wonder Woman joins the fight, but even her added might can’t slow down Doomsday’s rampage! As Superman comes face-to-face with the woman who once loved him, the Man of Tomorrow must also wrestle with the reappearance of Clark Kent."
  },
  {
    "id": 15,
    'character_id': 2,
    "price": 1.99,
    "title": "PATH TO DOOM V",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376880/Sups05_nxk9aj.jpg",
    "description": "With his family’s safety hanging in the balance, Superman confronts Doomsday to finally bring the beast’s destructive rage to an end. To save his wife and son, Superman must overcome the monster that once killed him, or die trying!"
  },
  {
    "id": 16,
    'character_id': 2,
    "price": 2.99,
    "title": "PATH TO DOOM VI",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376879/Sups06_uwzn82.jpg",
    "description": "In the epic conclusion, the mystery of Black Zero deepens just as the Man of Steel makes a fateful decision that may stop Doomsday, but also risks the lives of those he loves most."
  },
  {
    "id": 17,
    'character_id': 2,
    "price": 2.99,
    "title": "WHO IS CLARK KENT? Part 1",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376881/Sups07_dmruvl.jpg",
    "description": "Look—down there on the ground! It’s a guy, he’s kinda ordinary...it’s—Clark Kent?! As Metropolis recovers from the devastating attack of Doomsday, the mysterious figure claiming to be Clark Kent takes the spotlight to clear his name and prove once and for all that Clark Kent is not Superman!"
  },
  {
    "id": 18,
    'character_id': 2,
    "title": "WHO IS CLARK KENT? Part 2",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376880/Sups08_unsf3a.jpg",
    "description": "Superman comes face to face with Clark Kent, and he wants answers! But first the Man of Steel must protect his former alter ego. Clark Kent tells all in this shocking issue! And don’t miss the return of a ghost from Smallville past…"
  },
  {
    "id": 19,
    'character_id': 2,
    "price": 5.99,
    "title": "BACK AT THE PLANET I",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376881/Sups09_av6av5.jpg",
    "description": "Superman returns to the public eye—but what of Lois Lane? When a mysterious package arrives for Lois and Clark back on the farm, Lois can stay on the sidelines no more. But where does that leave Superman’s human doppelgänger, Clark Kent?"
  },
  {
    "id": 20,
    'character_id': 2,
    "price": 2.99,
    "title": "BACK IN THE PLANET II",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376881/Sups10_gaabh6.jpg",
    "description": "As the Daily Planet’s star returns to work, so does Lex Luthor. Meanwhile, Superman continues to investigate the devastation in the aftermath of the Doomsday attack."
  }
];
const wonderWomanComics = [
  {
    "id": 21,
    "character_id": 3,
    "price": 1.99,
    "title": "THE LIES #1",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376881/ww01_rhetbt.jpg",
    "description": "Why has the Lasso of Truth stopped working for the Amazon Princess? Start down the rabbit hole as dark secrets from Wonder Woman’s past unravel her present!"
  },
  {
    "id": 22,
    "character_id": 3,
    "price": 4.99,
    "title": "WONDER WOMAN YEAR ONE #1",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376883/ww02_j7mzd8.jpg",
    "description": "Running parallel to Greg Rucka and Liam Sharp’s “The Lies,” Rucka and artist Nicola Scott weave the definitive and shocking tale of Diana’s first year as Earth’s protector."
  },
  {
    "id": 23,
    "character_id": 3,
    "price": 2.99,
    "title": "THE LIES #2",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376882/ww03_vqo1lh.jpg",
    "description": "Wonder Woman must team up with one of her greatest enemies to solve a growing mystery about Themyscira as “The Lies” continues!"
  },
  {
    "id": 24,
    "character_id": 3,
    "price": 6.99,
    "title": "WONDER WOMAN YEAR ONE #2",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376882/ww04_mbdoeq.jpg",
    "description": "Paradise has been breached, Ares stirs, and the Amazons must answer with a champion of their own…one who is willing to sacrifice her home amongst her sisters to save a world she has never seen."
  },
  {
    "id": 25,
    "character_id": 3,
    "price": 1.99,
    "title": "THE LIES #3",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376882/ww05_rabumy.jpg",
    "description": "Steve Trevor finds himself trapped in the heart of Urzkartaga’s darkness, with Wonder Woman and Cheetah the only hope of rescue for him and his men. But how far can Cheetah be trusted?"
  },
  {
    "id": 26,
    "character_id": 3,
    "price": 2.99,
    "title": "WONDER WOMAN YEAR ONE #3",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376888/ww06_rkihrh.jpg",
    "description": "Diana brings Steve back home, but the reception is not what either of them expected. Amid suspicion and a looming threat, the Patrons pay a visit, and new friendships are forged."
  },
  {
    "id": 27,
    "character_id": 3,
    "price": 1.99,
    "title": "THE LIES #4",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376882/ww07_qezeuq.jpg",
    "description": "One god down—how many more to go? Diana takes another step closer to the truth, and Steve Trevor confronts his past!"
  },
  {
    "id": 28,
    "character_id": 3,
    "price": 3.99,
    "title": "WONDER WOMAN #8",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376882/ww08_ga0a50.jpg",
    "description": "Year One Interlude: Young Barbara Ann Minerva is thrust on a quest for answers to the Amazons' most ancient secrets."
  },
  {
    "id": 29,
    "character_id": 3,
    "price": 2.99,
    "title": "THE LIES #5",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376883/ww09_suauno.jpg",
    "description": "Diana takes another step closer to discovering the truth…and the mysterious Godwatch responds!"
  },
  {
    "id": 30,
    "character_id": 3,
    "price": 8.99,
    "title": "WONDER WOMAN 75TH ANNIVERSARY SPECIAL #1",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376883/ww10_zgyadw.jpg",
    "description": "An immense special issue celebrating seventy-five years of the Amazing Amazon, through phenomenal new stories, art, and stand-alone illustrations! Featuring a roster of incredible creators—some who’ve laid down legendary runs with the character, and some who’ve never drawn her before—including Rafael Albuquerque, Brian Azzarello, Cliff Chiang, Renae De Liz, Brenden Fletcher, Adam Hughes, Karl Kerschl, Gail Simone, and many, many more to be announced!"
  }
];
const flashComics = [
  {
    "id": 31,
    "character_id": 4,
    "price": 1.99,
    "title": "LIGHTNING STRIKES TWICE I",
    "img":"https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376883/flash01_ul4scr.jpg",
    "description": "A new storm brews over Central City and disproves the old adage about lightning never, well…you know. Just as Barry begins to feel overwhelmed fighting crime, a new speedster debuts—but just where did this amazing new friend come from?"
  },
  {
    "id": 32,
    "character_id": 4,
    "price": 4.99,
    "title": "LIGHTNING STRIKES TWICE II",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376884/flash02_gax7dz.jpg",
    "description": "In issue #2, The Flash trains novice speedster August Heart to help protect the people of Central City from the Black Hole, a new breed of rogue with a deadly agenda for the Fastest Men Alive."
  },
  {
    "id": 33,
    "character_id": 4,
    "price": 6.99,
    "title": "LIGHTNING STRIKES TWICE III",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376884/flash03_bjg33b.jpg",
    "description": "In issue #3, dozens of innocent people mysteriously gain super-speed! But not all are heroic, and it’ll take everything The Flash and August have to harness the lightning before Black Hole does."
  },
  {
    "id": 34,
    "price": 5.99,
    "title": "LIGHTNING STRIKES TWICE IV",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376885/flash04_laojwo.jpg",
    "description": "The leader of the science-terrorist group Black Hole has weaponized the Speed Force, leading to a final confrontation with The Flash and his new league of citizen speedsters."
  },
  {
    "id": 35,
    "character_id": 4,
    "price": 1.99,
    "title": "LIGHTNING STRIKES TWICE V",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376884/flash05_c3bisi.jpg",
    "description": "With Central City now protected by dozens of freshly trained Flashes, Barry Allen takes time out to explore a new relationship. Meanwhile, a serial killer targets citizen speedsters as Wally West takes his first steps toward becoming the new Kid Flash…"
  },
  {
    "id": 36,
    "character_id": 4,
    "price": 2.99,
    "title": "LIGHTNING STRIKES TWICE VI",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376884/flash06_x7zfar.jpg",
    "description": "You’ve seen glimpses of him. You’ve witnessed the carnage he’s unleashed on Central City. Now meet Godspeed, the super-speed serial killer who murders speedsters and steals their powers. Barry Allen is going to need help!"
  },
  {
    "id": 37,
    "character_id": 4,
    "price": 5.99,
    "title": "LIGHTNING STRIKES TWICE VII",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376885/flash07_busdfl.jpg",
    "description": "Still reeling from Godspeed’s devastating attack, the beleaguered Flash realizes that to defeat this menacing new foe he must take away the Speed Force power from Central City’s new citizen speedsters. There’s only one problem: they don’t want to give it back."
  },
  {
    "id": 38,
    "character_id": 4,
    "price": 1.99,
    "title": "LIGHTNING STRIKES TWICE VIII",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376886/flash08_qczr5w.jpg",
    "description": "When Godspeed brings his killing spree to Iron Heights, Barry Allen must protect his own Rogues Gallery—including his mother’s killer—from the deadly speedster! Luckily, The Flash has some help from Wally West, the newly christened Kid Flash!"
  },
  {
    "id": 39,
    "character_id": 4,
    "price": 3.99,
    "title": "KID FLASH OF TWO WORLDS!",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376886/flash09_cgt8n4.jpg",
    "description": "In this single-issue tale, Wally West meets Wally West! The original Kid Flash meets his cousin for the very first time in this special issue, which continues The Flashes’ investigation into the events that began in DC UNIVERSE: REBIRTH #1."
  },
  {
    "id": 40,
    "character_id": 4,
    "price": 1.99,
    "title": "THE SPEED OF DARKNESS I",
    "img": "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376886/falsh10_tkarvd.jpg",
    "description": "A villain from The Flash’s history returns for the first time in years when The Shade visits Central City. But what does Opal City’s master of shadow want with Barry Allen and the newly christened Kid Flash?"
  }
];

exports.seed = (knex: Knex) => {
  return knex('comics').del()
    .then(() => {
      return knex('comics').insert([
        ...batmanComics,
        ...supermanComics,
        ...wonderWomanComics,
        ...flashComics,
      ]);
    });
};
