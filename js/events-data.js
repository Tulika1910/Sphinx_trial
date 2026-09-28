/**
 * Sphinx '26 Event Data Registry
 * Includes dynamic categories, metadata stats, rulebook details, and registration schemas.
 */

const SPHINX_EVENTS_DATA = {
  categories: [
    { id: "small_events", label: "SMALL EVENTS" },
    { id: "flagship", label: "FLAGSHIP" },
    { id: "gaming", label: "GAMING & ESPORTS" },
    { id: "robotics", label: "ROBOTICS ARENA" }
  ],
  events: {
    small_events: [
      {
        id: "se-01",
        num: "01",
        title: "TURBO MANIA",
        tagline: "DRIFT • OVERTAKE • CONQUER",
        description: "High-octane RC car obstacle racing track. Dodge cyber hazards, execute flawless precision drifts, and complete the underground dystopian circuit in record time.",
        image: "assets/images/turbo_mania.png",
        stats: {
          players: "1 - 2",
          duration: "15 MIN",
          mode: "SOLO / DUO",
          entry: "₹150"
        },
        rulebook: {
          overview: "Turbo Mania tests precision steering and speed control with high-torque RC cyber vehicles over a illuminated neon obstacle track.",
          rules: [
            "Vehicles are provided by the organizers, or custom builds subject to technical inspection.",
            "Each team gets 2 qualifying trial laps and 1 timed official run.",
            "Penalty of +3 seconds for hitting barrier light beams or off-road track hazards.",
            "Highest lap speed and cleanest run determines the grand winner."
          ],
          prizes: {
            first: "₹15,000 + Cyber Trophy",
            second: "₹8,000 + Merit Certificate",
            third: "₹4,000 + Goodies"
          }
        }
      },
      {
        id: "se-02",
        num: "02",
        title: "LASER TAG",
        tagline: "TARGET • LOCK • ELIMINATE",
        description: "Tactical laser combat in a dark smoke-filled dystopian ruins maze. Coordinate squad maneuvers, capture energy nodes, and out-aim your rival faction.",
        image: "assets/images/laser_tag.png",
        stats: {
          players: "4 - 4",
          duration: "20 MIN",
          mode: "SQUAD 4V4",
          entry: "₹300"
        },
        rulebook: {
          overview: "Engage in futuristic squad-based combat inside a multi-level laser maze equipped with sensor vests and recoil laser rifles.",
          rules: [
            "4v4 Elimination and Control Point capture format.",
            "Each player starts with 100 health shields. Headshots grant 2x damage points.",
            "No physical contact or climbing over tactical barricades allowed.",
            "Top 2 squads with highest kill-to-death ratio advance to finals."
          ],
          prizes: {
            first: "₹20,000 + Champion Medals",
            second: "₹10,000 + Runner-up Medals",
            third: "₹5,000"
          }
        }
      },
      {
        id: "se-03",
        num: "03",
        title: "ESCAPE ROOM",
        tagline: "SOLVE • UNLOCK • ESCAPE",
        description: "A thrilling real-life puzzle experience where teams must decode encrypted ciphers, uncover hidden patterns, and race against time to break out of the relic vault.",
        image: "assets/images/escape_room.png",
        stats: {
          players: "2 - 6",
          duration: "30 MIN",
          mode: "TEAM",
          entry: "₹200"
        },
        rulebook: {
          overview: "Trapped in the vault of an old dystopian relic room, team members must collaborate under pressure using logic, pattern recognition, and mechanical puzzle solving.",
          rules: [
            "Maximum time limit inside the chamber is 30 minutes.",
            "Teams can request up to 2 hints, costing 2 minutes each from their final score time.",
            "Mobile phones and external digital recording devices are strictly prohibited inside.",
            "Breaking physical props will result in immediate disqualification and penalties."
          ],
          prizes: {
            first: "₹25,000 + Gold Relic Badge",
            second: "₹12,000 + Silver Relic Badge",
            third: "₹6,000"
          }
        }
      },
      {
        id: "se-04",
        num: "04",
        title: "SILENT DISCO",
        tagline: "LISTEN • DANCE • VIBE",
        description: "Immerse into dual-channel wireless neon headphone beats. Choose your DJ wavelength, sync your rhythm, and dance in a glowing silent arena.",
        image: "assets/images/silent_disco.png",
        stats: {
          players: "1 - 1",
          duration: "45 MIN",
          mode: "SOLO ENTRY",
          entry: "₹100"
        },
        rulebook: {
          overview: "A party experience with dual audio channels featuring Synthwave / Cyber-techno and Electro-bass mixes.",
          rules: [
            "Wireless RGB headsets issued upon entry with valid pass ID.",
            "Switch channels at any time using the headset toggle slider.",
            "Headset damage or loss incurs replacement cost.",
            "Dance battles scheduled every 15 minutes with audience pop prizes."
          ],
          prizes: {
            first: "Exclusive Sphinx '26 Merch Pack",
            second: "Sphinx VIP Concert Access",
            third: "Neon Accessories Kit"
          }
        }
      },
      {
        id: "se-05",
        num: "05",
        title: "NOSTALGIA ROOM",
        tagline: "RETRO • ARCADE • REBOOT",
        description: "Step back into 80s & 90s cyber nostalgia. Play classic CRT arcade setups, pinball machines, retro console tournaments, and cassette beat-matching.",
        image: "assets/images/nostalgia_room.png",
        stats: {
          players: "1 - 2",
          duration: "25 MIN",
          mode: "ARCADE FREEPLAY",
          entry: "₹120"
        },
        rulebook: {
          overview: "High-score challenge across retro arcade cabinets including Pac-Man Cyber Edition, Street Fighter II, and CRT Tetris.",
          rules: [
            "Tokens provided upon entry for arcade cabinet activation.",
            "Top score leaderboard registered per arcade station throughout the day.",
            "Fair play and arcade etiquette enforced by floor marshals.",
            "Leaderboard toppers at 6:00 PM win final retro trophies."
          ],
          prizes: {
            first: "Retro Gaming Console + ₹10,000",
            second: "Custom Arcade Stick + ₹5,000",
            third: "Retro Merchandise"
          }
        }
      }
    ],
    flagship: [
      {
        id: "fl-01",
        num: "01",
        title: "HACKSPHINX '26",
        tagline: "BUILD • INNOVATE • DEPLOY",
        description: "36-hour overnight hackathon focusing on AI agents, decentralized tech, cyber-security, and smart city infrastructure under dystopian challenges.",
        image: "assets/images/escape_room.png",
        stats: {
          players: "2 - 4",
          duration: "36 HOURS",
          mode: "HACKATHON",
          entry: "FREE"
        },
        rulebook: {
          overview: "Build futuristic solutions for real-world problems. Mentorship and computing credits provided to top teams.",
          rules: [
            "All software code must be written during the 36-hour window.",
            "Open-source libraries and APIs permitted with proper attribution.",
            "Final pitch to jury panel includes 3-minute demo and 2-minute Q&A."
          ],
          prizes: {
            first: "₹1,000,000 + Incubation Support",
            second: "₹50,000 + Tech Vouchers",
            third: "₹25,000"
          }
        }
      },
      {
        id: "fl-02",
        num: "02",
        title: "ROBOWARS HEAVYWEIGHT",
        tagline: "CRUSH • SPAR • DOMINATE",
        description: "60kg combat robots battle inside a bulletproof steel arena equipped with spinners, flippers, and hazard saws.",
        image: "assets/images/laser_tag.png",
        stats: {
          players: "3 - 5",
          duration: "3 MIN ROUNDS",
          mode: "ARENA COMBAT",
          entry: "₹1,000"
        },
        rulebook: {
          overview: "Gladiator-style robotics combat. Robots win by KO or judge decision based on damage, aggression, and control.",
          rules: [
            "Robots must comply with strict weight, voltage, and radio failsafe limits.",
            "No untethered projectiles or flame weapons exceeding safety distance.",
            "Double elimination tournament structure."
          ],
          prizes: {
            first: "₹1,50,000 + Golden Wrench",
            second: "₹75,000",
            third: "₹35,000"
          }
        }
      }
    ],
    gaming: [
      {
        id: "gm-01",
        num: "01",
        title: "VALORANT CYBER CUP",
        tagline: "PLANT • DEFUSE • CLUTCH",
        description: "5v5 tactical shooter LAN tournament with high-refresh monitors, pro gear setups, and live shoutcasting.",
        image: "assets/images/turbo_mania.png",
        stats: {
          players: "5 - 6",
          duration: "LAN STAGE",
          mode: "5V5 SQUAD",
          entry: "₹500"
        },
        rulebook: {
          overview: "Competitive Valorant ruleset with veto map drafting and official tournament anti-cheat protocols.",
          rules: [
            "Tournament matches played on official LAN server custom lobbies.",
            "Standard competitive map pool and agent bans.",
            "Pause allowed only for technical hardware faults approved by admin."
          ],
          prizes: {
            first: "₹60,000 + Gaming Gear",
            second: "₹30,000",
            third: "₹15,000"
          }
        }
      },
      {
        id: "gm-02",
        num: "02",
        title: "BGMI SHOWDOWN",
        tagline: "DROP • LOOT • SURVIVE",
        description: "Custom room battle royale showdown. 16 squads drop into the zone to claim the ultimate Winner Winner Chicken Dinner.",
        image: "assets/images/silent_disco.png",
        stats: {
          players: "4 - 4",
          duration: "4 MATCHES",
          mode: "SQUAD BATTLE",
          entry: "₹400"
        },
        rulebook: {
          overview: "Official esports scoring table (Place points + Kill points format).",
          rules: [
            "Only mobile devices allowed (Emulators strictly banned).",
            "Screen recording mandatory for top fragger verification.",
            "4 maps: Erangel, Miramar, Sanhok, Vikendi."
          ],
          prizes: {
            first: "₹40,000 + Trophy",
            second: "₹20,000",
            third: "₹10,000"
          }
        }
      }
    ],
    robotics: [
      {
        id: "rb-01",
        num: "01",
        title: "MAZE RUNNER autonomous",
        tagline: "SENSE • NAVIGATE • ESCAPE",
        description: "Autonomous micromouse robot maze navigation. Fast sensor processing, floodfill algorithms, and speed run execution.",
        image: "assets/images/nostalgia_room.png",
        stats: {
          players: "1 - 3",
          duration: "10 MIN",
          mode: "AUTONOMOUS",
          entry: "₹300"
        },
        rulebook: {
          overview: "Robots must navigate from starting corner to central goal cell without human remote control.",
          rules: [
            "Dimensions must fit within 16cm x 16cm footprint.",
            "Maximum 5 runs allowed within 10-minute slot.",
            "Fastest single run to destination determines ranking."
          ],
          prizes: {
            first: "₹30,000",
            second: "₹15,000",
            third: "₹8,000"
          }
        }
      }
    ]
  }
};
