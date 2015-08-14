'use strict';
var champions = function (championName) {
    switch (championName) {
        case 'Aatrox':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 650)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 650)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1075, TargetSelector.DamageType.Magical)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 550, TargetSelector.DamageType.Magical)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.6f, 250, 2000, false, SkillshotType.SkillshotCircle)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.6f, 150, 2000, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 40, 1250, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Ahri':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 990)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 795 - 95)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1000 - 10)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1000 - 100)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(.215f, 100, 1600f, false, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(.71f, _spellW.Range, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(.23f, 60, 1500f, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Akalai':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 600)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 700)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 325)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 700)"
                    }
                }
            };
            return myJson;
            break;
        case 'Alistar':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 365)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 650)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 575)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "R": {
                        "attr": "SetSkillshot(0.25f, 175, 700, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Amumu':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1100, TargetSelector.DamageType.Magical)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 300, TargetSelector.DamageType.Magical)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 350, TargetSelector.DamageType.Magical)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 550, TargetSelector.DamageType.Magical)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 90, 2000, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Anivia':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1150)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 950)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 650)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 650)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(.25f, 110f, 850f, false, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(.6f, 1f, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(2f, 400f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Annie':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 625, TargetSelector.DamageType.Magical)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 550, TargetSelector.DamageType.Magical)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, TargetSelector.DamageType.Magical)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 600, TargetSelector.DamageType.Magical)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetTargetted(0.25f, 1400f)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.5f, 250f, float.MaxValue, false, SkillshotType.SkillshotCone)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.2f, 250f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Ashe':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1200)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 2500)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 3000f)"
                    }
                },
                "Skills":  {
                    "W": {
                        "attr": "SetSkillshot(0.5f, 50f , 1000f, true, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 299f, 1400f, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.25f, 130f, 1600f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Azir':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 950)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 2000)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 450)"
                    },
                    "W2": {
                        "attr": "new Spell(SpellSlot.W, 600)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 2000)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 450)"
                    },
                    "R2": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0, 80, 1600, false, SkillshotType.SkillshotCircle)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0, 80, 1600, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 100, 1200, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.5f, 700, 1400, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Bard':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 950f)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, Q.Range)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 2500f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 60, 1600, false, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(Q.Delay, Q.Width, Q.Speed, true, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.5f, 325, 2100, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Blitzcrank':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1050f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 200)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 475)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 600)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 110f, 1800f, true, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(250f, 70f, 1800f, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Brand':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1050)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 900)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 625)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 750)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 60, 1600, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(1, 240, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetTargetted(0.25f, float.MaxValue)"
                    },
                    "R": {
                        "attr": "SetTargetted(0.25f, 1000)"
                    }
                }
            };
            return myJson;
            break;
        case 'Braum':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1000)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 650)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1200)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 60f, 1700f, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.5f, 115f, 1400f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Caitlyn':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1280f)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1100f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 800f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 980f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 3000f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.65f, 90f, 2200f, false, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.65f, 90f, 2200f, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(1.5f, 1f, 1750f, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 80f, 1600f, true, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.7f, 200f, 1500f, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Cassiopeia':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 850f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 850f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 825f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.75f, Q.Instance.SData.CastRadius, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.5f, W.Instance.SData.CastRadius, W.Instance.SData.MissileSpeed, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetTargetted(0.2f, float.MaxValue)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.3f, (float)(80 * Math.PI / 180), float.MaxValue, false, SkillshotType.SkillshotCone)"
                    }
                }
            };
            return myJson;
            break;
        case 'ChoGath':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 950)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 650)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 175)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(.625f, 250f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "W": {
                        "attr": "SetSkillshot(.25f, (float)(30 * 0.5), float.MaxValue, false, SkillshotType.SkillshotCone)"
                    }
                }
            };
            return myJson;
            break;
        case 'Corki':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 825f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 600f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1300f)"
                    },
                    "R2": {
                        "attr": "new Spell(SpellSlot.R, 1500f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.35f, 250f, 1500f, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0f, (float) (45*Math.PI/180), 1500, false, SkillshotType.SkillshotCone)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.2f, 40f, 2000f, true, SkillshotType.SkillshotLine)"
                    },
                    "R2": {
                        "attr": "SetSkillshot(0.2f, 40f, 2000f, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Darius':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 400)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 145)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 540)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 460)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0.1f, 50f * (float)Math.PI / 180, float.MaxValue, false, SkillshotType.SkillshotCone)"
                    }
                }
            };
            return myJson;
            break;
        case 'Diana':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 830f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 200f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 413f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 760f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 195f, 1600, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'DrMundo':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1050, TargetSelector.DamageType.Magical)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 325)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 60, 2000, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Draven':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1100)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0.25f, 130, 1400, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.4f, 160, 2000, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Ekko':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 750f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1620f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 400f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 450f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 70f, 2200f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Elise':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 625f)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 475f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 950f)"
                    },
                    "W2": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1075f)"
                    },
                    "E2": {
                        "attr": "new Spell(SpellSlot.E, 750f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "W": {
                        "attr": "SetSkillshot(0.25f, 100f, 1000, true, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 55f, 1300, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Evelynn':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 500)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 225)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 650)"
                    }
                },
                "Skills":  {
                    "R": {
                        "attr": "SetSkillshot(R.Instance.SData.SpellCastTime, R.Instance.SData.LineWidth, R.Speed, false, SkillshotType.SkillshotCone)"
                    }
                }
            };
            return myJson;
            break;
        case 'Ezreal':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1200)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1000)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 475)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 3000f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 50f, 2000f, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.25f, 80f, 1600f, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(1.2f, 160f, 2000f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Fiddlesticks':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 575)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 575)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 750)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 800)"
                    }
                },
                "Skills":  {
                    "R": {
                        "attr": "SetSkillshot(R.Instance.SData.SpellCastTime, 600f, R.Instance.SData.MissileSpeed, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Fiora':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                }
            };
            return myJson;
            break;
        case 'Fizz':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 550)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 400)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1300)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0.25f, 330, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.25f, 80, 1200, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'MissFortune':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 655f)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1100f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 800f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1200f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetTargetted(0.25f, 1400f)"
                    },
                    "Q2": {
                        "attr": "SetTargetted(0.25f, 1400f)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.5f, 200f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.25f, 200f, 2000f, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Galio':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 940f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 800f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1180f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 560f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.5f, 120, 1300, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.5f, 140, 1200, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.5f, 300, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Gangplank':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 625)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1150)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "R": {
                        "attr": "SetSkillshot(0.7f, 200, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Garen':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "Q = new Spell(SpellSlot.Q, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "W": {
                        "attr": "W = new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 325)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 400)"
                    }
                }
            };
            return myJson;
            break;
        case 'Gnar':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1100)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1100)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "W2": {
                        "attr": "new Spell(SpellSlot.W, 525)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 475)"
                    },
                    "E2": {
                        "attr": "new Spell(SpellSlot.E, 475)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    },
                    "R2": {
                        "attr": "new Spell(SpellSlot.R, 420)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 60, 1200, true, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.25f, 80, 1200, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.25f, 80, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.5f, 150, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "Delay = 0.25f"
                    }
                }
            };
            return myJson;
            break;
        case 'Gragas':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 775)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 675)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1100)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.3f, 110f, 1000f, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.0f, 50, 1000, true, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.3f, 700, 1000, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Graves':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 850)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 940f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 450f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1000f)"
                    },
                    "R2": {
                        "attr": "new Spell(SpellSlot.R, 1500f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.26f, 50f, 1950f, false, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.35f, 250f, 1650f, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.25f, 120f, 2100f, false, SkillshotType.SkillshotLine)"
                    },
                    "R1": {
                        "attr": "SetSkillshot(0.26f, 120f, 2100f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Hecarim':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 350)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 600)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1000)"
                    }
                },
                "Skills":  {
                    "R": {
                        "attr": "SetSkillshot(0.25f, 300f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Heimerdinger':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 325)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1100)"
                    },
                    "W2": {
                        "attr": "new Spell(SpellSlot.W, 1100)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 925)"
                    },
                    "E2": {
                        "attr": "new Spell(SpellSlot.E, 925)"
                    },
                    "E3": {
                        "attr": "new Spell(SpellSlot.E, 1125)"
                    },
                    "E4": {
                        "attr": "new Spell(SpellSlot.E, 1325)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 100)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.5f, 40f, 1100f, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.5f, 40f, 3000f, true, SkillshotType.SkillshotLine)"
                    },
                    "W2": {
                        "attr": "SetSkillshot(0.5f, 40f, 3000f, true, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.5f, 120f, 1200f, false, SkillshotType.SkillshotCircle)"
                    },
                    "E2": {
                        "attr": "SetSkillshot(0.5f, 120f, 1200f, false, SkillshotType.SkillshotCircle)"
                    },
                    "E3": {
                        "attr": "SetSkillshot(0.25f + E1.Delay, 120f, 1200f, false, SkillshotType.SkillshotLine)"
                    },
                    "E4": {
                        "attr": "SetSkillshot(0.3f + E2.Delay, 120f, 1200f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Irelia':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 650)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 350)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1000)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetTargetted(0f, 2200)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.5f, 120, 1600, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Janna':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1100)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 600)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 800)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 550)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 120f, 900f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'JarvanIV':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "Q = new Spell(SpellSlot.Q, 770)"
                    },
                    "Q2": {
                        "attr": "Q2 = new Spell(SpellSlot.Q, 880)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 520)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 860, TargetSelector.DamageType.Magical)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 650)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.6f, 70, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.25f, 180, 1450, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.5f, 175, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Jax':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "Q = new Spell(SpellSlot.Q, 700)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, Orbwalking.GetRealAutoAttackRange(Player), TargetSelector.DamageType.Magical)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 375)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": ""
                    },
                    "W": {
                        "attr": ""
                    },
                    "E": {
                        "attr": ""
                    },
                    "R": {
                        "attr": ""
                    }
                }
            };
            return myJson;
            break;
        case 'Jayce':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 600)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1050)"
                    },
                    "Q3": {
                        "attr": "new Spell(SpellSlot.Q, 1600)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "W2": {
                        "attr": "new Spell(SpellSlot.W, 285)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 650)"
                    },
                    "E2": {
                        "attr": "new Spell(SpellSlot.E, 240)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.3f, 70f, 1500, true, SkillshotType.SkillshotLine)"
                    },
                    "Q3": {
                        "attr": "SetSkillshot(0.3f, 70f, 2180, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Jinx':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1500f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 900f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 2500f)"
                    }
                },
                "Skills":  {
                    "W": {
                        "attr": "SetSkillshot(0.6f, 75f, 3300f, true, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(1.2f, 1f, 1750f, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.7f, 140f, 1500f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Kalista':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1130)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1130)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 5200)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1000)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1400f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 30f, 1700f, true, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.25f, 30f, 1700f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Karma':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1050f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 700f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 800f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 60f, 1700f, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetTargetted(0.25f, 2200f)"
                    },
                    "E": {
                        "attr": "SetTargetted(0.25f, float.MaxValue)"
                    }
                }
            };
            return myJson;
            break;
        case 'Karthus':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 875)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 875)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1000)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 520)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(.6f, 50f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(.6f, 190f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.25f, 50f, 1600f, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(3f, float.MaxValue, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Kassadin':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 650)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 200)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 500)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetTargetted(0.5f, 1400f)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 15f * 2 * (float)Math.PI / 180, 2000f, false, SkillshotType.SkillshotCone)"
                    },
                    "R": {
                        "attr": "SetSkillshot(R.Instance.SData.SpellCastTime, 150f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Katarina':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 675)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 375)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 550)"
                    }
                }
            };
            return myJson;
            break;
        case 'Kayle':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 650, TargetSelector.DamageType.Magical)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 900)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 525)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 900)"
                    }
                }
            };
            return myJson;
            break;
        case 'Kennen':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 950)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 900)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 500)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.125f, 50, 1700, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'KhaZix':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 325f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1000f)"
                    },
                    "W2": {
                        "attr": "new Spell(SpellSlot.W, 10000f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 600f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "W": {
                        "attr": "SetSkillshot(0.225f, 80f, 828.5f, true, SkillshotType.SkillshotLine)"
                    },
                    "W2": {
                        "attr": "SetSkillshot(0.225f, 100f, 828.5f, true, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 100f, 1000f, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'KogMaw':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 980)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1000)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1200)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1800)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 50f, 2000f, true, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 120f, 1400f, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(1.5f, 200f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'LeBlanc':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 720)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 670)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 900)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 720)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetTargetted(0.5f, 1500f)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.6f, 220f, 1900f, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.3f, 80f, 1650f, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'LeeSin':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1100)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 700)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 700)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 430)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 375)"
                    },
                    "R2": {
                        "attr": "new Spell(SpellSlot.R, 375)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(Q.Instance.SData.SpellCastTime, Q.Instance.SData.LineWidth, Q.Instance.SData.MissileSpeed, true, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(Q.Instance.SData.SpellCastTime, Q.Instance.SData.LineWidth, Q.Instance.SData.MissileSpeed, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Leona':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1200)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0.25f, 100f, 2000f, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(1f, 300f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Lissandra':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 715f)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 825f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 450f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1050f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 550f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.250f, 75f, 1200f, false, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.250f, 90f, 1200f, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.250f, 125f, 850f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Lucian':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 675)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1100)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1000, TargetSelector.DamageType.Magical)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 425)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1400)"
                    }
                },
                "Skills":  {
                    "Q2": {
                        "attr": "SetSkillshot(0.5f, 65, float.MaxValue, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.25f, 25, 1600, true, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.5f, 110, 2800, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Lulu':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q,925)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q,925)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W,650)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E,650)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R,900)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 70, 1450, false, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.25f, 70, 1450, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Lux':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1175)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.W, 1075)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1100)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 3000)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 70f, 1300f, false, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.25f, 110f, 1200f, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 280f, 1300f, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(1.35f, 190f, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Malphite':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 625)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 125)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 375)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1000)"
                    }
                },
                "Skills":  {
                    "R": {
                        "attr": "SetSkillshot(0.00f, 160, 700, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Malzahar':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 900)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 800)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 650)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 700)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.5f, 100, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.5f, 240, 20, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Maokai':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 600, TargetSelector.DamageType.Magical)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 525, TargetSelector.DamageType.Magical)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1100, TargetSelector.DamageType.Magical)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 475, TargetSelector.DamageType.Magical)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.5f, 110, 1800, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(1, 225, 1500, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'MasterYi':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "Q = new Spell(SpellSlot.Q, 600)"
                    },
                    "W": {
                        "attr": "W = new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "E = new Spell(SpellSlot.E)"
                    },
                    "R": {
                        "attr": "R = new Spell(SpellSlot.R)"
                    }
                }
            };
            return myJson;
            break;
        case 'Mordekaiser':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 750)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 650)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 850)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(E.Instance.SData.SpellCastTime, E.Instance.SData.LineWidth, E.Speed, false, SkillshotType.SkillshotCone)"
                    }
                }
            };
            return myJson;
            break;
        case 'Morgana':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1300f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 900f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 750f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 600f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(250f, 80f, 1200f, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(250f, 175f, 2200f, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Nami':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 875)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 725)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 800)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 2200)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(1f, 150f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.5f, 260f, 850f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Nasus':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 600)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 650, TargetSelector.DamageType.Magical)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0.125f, 380, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Nautilus':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 900)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 550)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 755)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(250, 90, 2000, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Nidalee':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1500f)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 200f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 900f)"
                    },
                    "W2": {
                        "attr": "new Spell(SpellSlot.W, 375f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 650f)"
                    },
                    "E2": {
                        "attr": "new Spell(SpellSlot.E, 275f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.125f, 40f, 1300f, true, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.50f, 100f, 1500f, false, SkillshotType.SkillshotCircle)"
                    },
                    "E2": {
                        "attr": "SetSkillshot(0.50f, 375f, 1500f, false, SkillshotType.SkillshotCone)"
                    },
                    "W2": {
                        "attr": "SetSkillshot(0.50f, 400f, 1500f, false, SkillshotType.SkillshotCone)"
                    }
                }
            };
            return myJson;
            break;
        case 'Nocturne':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "Spell(SpellSlot.Q, 1000)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1150)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 400)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 2000)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(3000, Orbwalking.GetRealAutoAttackRange(Player) + 50, 3000, false, SkillshotType.SkillshotCircle)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(Q.Instance.SData.SpellCastTime, Q.Instance.SData.LineWidth, Q.Speed, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Nunu':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 125)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 700)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 550)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 650)"
                    }
                }
            };
            return myJson;
            break;
        case 'Olaf':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1000)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 550)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 325)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 75f, 1500f, false, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.25f, 75f, 1600f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Orianna':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 825)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 245)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1095)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 380)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0f, 130f, 1400f, false, SkillshotType.SkillshotCircle)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.25f, 240f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 80f, 1700f, true, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.6f, 375f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Pantheon':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 600)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 600)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 5500)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetTargetted(0.2f, 1700f)"
                    },
                    "W": {
                        "attr": "SetTargetted(0.2f, 1700f)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 15f * 2 * (float)Math.PI / 180, 2000f, false, SkillshotType.SkillshotCone)"
                    },
                    "R": {
                        "attr": "SetSkillshot(R.Instance.SData.SpellCastTime, 700f, R.Instance.SData.MissileSpeed, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Poppy':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 525)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 900)"
                    }
                }
            };
            return myJson;
            break;
        case 'Quinn':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 930)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 2100)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 550)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.3f, 80f, 1150, true, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetTargetted(0.25f, 2000f)"
                    }
                }
            };
            return myJson;
            break;
        case 'Rammus':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 200, TargetSelector.DamageType.Magical)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 325)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 375, TargetSelector.DamageType.Magical)"
                    }
                }
            };
            return myJson;
            break;
        case 'RekSai':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1450)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 250)"
                    },
                    "E2": {
                        "attr": "new Spell(SpellSlot.E, 500)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q2": {
                        "attr": "SetSkillshot(0.5f, 60, 1950, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Renekton':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 225)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 450)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                }
            };
            return myJson;
            break;
        case 'Rengar':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 500)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1000)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 2000)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0.25f, 70f, 1500f, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Riven':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 260f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 250f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 270f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1100f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 100f, 2200f, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.25f, 225f, 1600f, false, SkillshotType.SkillshotCone)"
                    }//casttime changed last patch
                }
            };
            return myJson;
            break;
        case 'Rumble':
            var myJson =  {
                "Spells": {
                    "P": {
                        "attr": "new Spell(SpellSlot.R, 4000)"
                    },
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 500)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 950)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1700)"
                    },
                    "R2": {
                        "attr": "new Spell(SpellSlot.R, 1000)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0.25f, 70, 1200, true, SkillshotType.SkillshotLine)"
                    },
                    "P": {
                        "attr": "SetSkillshot(0.4f, 130, 2500, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.4f, 130, 2500, false, SkillshotType.SkillshotLine)"
                    },
                    "R2": {
                        "attr": "SetSkillshot(0.4f, 130, 2600, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Ryze':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 900)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 600)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 600)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(Q.Instance.SData.SpellCastTime, spells[Spells.Q].Instance.SData.LineWidth, Q.Instance.SData.MissileSpeed, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Sejuani':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 650)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 350)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1000)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1175)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(Q.Instance.SData.SpellCastTime, Q.Instance.SData.LineWidth, Q.Instance.SData.MissileSpeed, true, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(R.Instance.SData.SpellCastTime, R.Instance.SData.LineWidth, R.Instance.SData.MissileSpeed, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Shaco':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 400)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 425)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 625)"
                    }
                }
            };
            return myJson;
            break;
        case 'Sona':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 850)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1000)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 350)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1000)"
                    }
                },
                "Skills":  {
                    "R": {
                        "attr": "SetSkillshot(0.5f, 125, 3000f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Shyvana':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 125)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 350f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 925f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1000f)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0.25f, 60f, 1700, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.25f, 150f, 1500, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Singed':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1000)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 125)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "W": {
                        "attr": "SetSkillshot(0.5f, 350, 700, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Sion':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1050)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.6f, 100f, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 800)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0.25f, 80f, 1800, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Sivir':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1220f)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1200f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, float.MaxValue)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, float.MaxValue)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 25000f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 90f, 1350f, false, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.25f, 90f, 1350f, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Skarner':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 325)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 985)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 325)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(E.Instance.SData.SpellCastTime, E.Instance.SData.LineWidth, E.Speed, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Shen':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 475)"
                    },
                    "Q2": {
                        "attr": "SetTargetted(0.5f, 1500f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 600)"
                    },
                    "E2": {
                        "attr": "SetSkillshot(0f, 50f, 1600f, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, float.MaxValue)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0f, 50f, 1600f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Soraka':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 950)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 550)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 925)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.5f, 300, 1750, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.5f, 70f, 1750, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Swain':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 625)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 900)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 625)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 625)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetTargetted(0.5f, float.MaxValue)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.5f, 275, 1250, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetTargetted(0.5f, 1400)"
                    }
                }
            };
            return myJson;
            break;
        case 'Syndra':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 790)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 925)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 675)"
                    },
                    "EQ": {
                        "attr": "new Spell(SpellSlot.Q, Q.Range + 500)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.6f, 125f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.25f, 140f, 1600f, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, (float)(45 * 0.5), 2500f, false, SkillshotType.SkillshotCircle)"
                    },
                    "EQ": {
                        "attr": "SetSkillshot(float.MaxValue, 55f, 2000f, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Talon':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 650)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 650)"
                    }
                }
            };
            return myJson;
            break;
        case 'Taric':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 750)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 200)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 625)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 200)"
                    }
                }
            };
            return myJson;
            break;
        case 'Teemo':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 680)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 230)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetTargetted(0f, 2000f)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.1f, 75f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Thresh':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1020)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1400)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 950)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 400)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 450)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(.5f, 60f, 1200f, true, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(.5f, 60f, 1200, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Tristana':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 900)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 630)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 630)"
                    }
                }
            };
            return myJson;
            break;
        case 'Trundle':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 125f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 900f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1000f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 700f)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(.5f, 188f, 1600f, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Tryndamere':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 830)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 660)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetSkillshot(0, 93, 1300, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'TwistedFate':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "Q = new Spell(SpellSlot.Q, 1450)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1200)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 40f, 1000f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Twitch':var myJson =  {
            "Spells": {
                "W": {
                    "attr": "new Spell(SpellSlot.W, 950)"
                },
                "E": {
                    "attr": "new Spell(SpellSlot.E, 1200)"
                }
            },
            "Skills":  {
                "W": {
                    "attr": "SetSkillshot(0.25f, 120f, 1400f, false, SkillshotType.SkillshotCircle)"
                }
            }
        };
            return myJson;

            break;
        case 'Udyr':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 600)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                }
            };
            return myJson;
            break;
        case 'Urgot':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 980)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1200)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 900)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 850)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 60f, 1600f, true, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.25f, 60f, 1600f, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 200f, 1750f, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Varus':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 925)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 925)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1100)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 70, 1900, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.1f, 235, 1500, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.25f, 120, 1950, true, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Vayne':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 590f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                }
            };
            return myJson;
            break;
        case 'Veigar':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 950)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 900)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1050)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 650)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 70f, 2000f, false, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(1.35f, 225f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(.8f, 25f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'VelKoz':var myJson =  {
            "Spells": {
                "Q": {
                    "attr": "new Spell(SpellSlot.Q, 1200)"
                },
                "Q2": {
                    "attr": "new Spell(SpellSlot.Q, 900)"
                },
                "Q3": {
                    "attr": "new Spell(SpellSlot.Q, (float)Math.Sqrt(Math.Pow(Q.Range, 2) + Math.Pow(QSplit.Range, 2)))"
                },
                "W": {
                    "attr": "new Spell(SpellSlot.W, 1200)"
                },
                "E": {
                    "attr": "new Spell(SpellSlot.E, 800)"
                },
                "R": {
                    "attr": "new Spell(SpellSlot.R, 1550)"
                }
            },
            "Skills":  {
                "Q": {
                    "attr": "SetSkillshot(0.25f, 50f, 1300f, true, SkillshotType.SkillshotLine)"
                },
                "Q2": {
                    "attr": "SetSkillshot(0.25f, 55f, 2100, true, SkillshotType.SkillshotLine)"
                },
                "Q3": {
                    "attr": "SetSkillshot(0.25f, 55f, float.MaxValue, false, SkillshotType.SkillshotLine)"
                },
                "W": {
                    "attr": "SetSkillshot(0.25f, 85f, 1700f, false, SkillshotType.SkillshotLine)"
                },
                "E": {
                    "attr": "SetSkillshot(0.5f, 100f, 1500f, false, SkillshotType.SkillshotCircle)"
                },
                "R": {
                    "attr": "SetSkillshot(0.3f, 1f, float.MaxValue, false, SkillshotType.SkillshotLine)"
                }
            }
        };
            return myJson;

            break;
        case 'Vi':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 860f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.E)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 600f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 800f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.5f, 75f, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.15f, 150f, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetTargetted(0.15f, 1500f)"
                    }
                }
            };
            return myJson;
            break;
        case 'Viktor':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 700)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 700)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 700)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetTargetted(0.25f, 2000)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.25f, 300, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.0f, 90, 1200, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.25f, 250, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Vladimir':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 600)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 575)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 700)"
                    }
                },
                "Skills":  {
                    "R": {
                        "attr": "SetSkillshot(0.25f, 175, 700, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Volibear':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 400)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 400)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                }
            };
            return myJson;
            break;
        case 'Warwick':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 400, TargetSelector.DamageType.Magical)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1250)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 700, TargetSelector.DamageType.Magical)"
                    }
                }
            };
            return myJson;
            break;
        case 'Wukong':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 375f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 640f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 375f)"
                    }
                },
                "Skills":  {
                    "E": {
                        "attr": "SetTargetted(0.5f, 2000f)"
                    }
                }
            };
            return myJson;
            break;
        case 'Xerath':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 1550)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1000)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1150)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 675)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.6f, 100f, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.7f, 125f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.25f, 60f, 1400f, true, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.7f, 120f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'XinZhao':var myJson =  {
            "Spells": {
                "Q": {
                    "attr": "new Spell(SpellSlot.Q)"
                },
                "W": {
                    "attr": "new Spell(SpellSlot.W)"
                },
                "E": {
                    "attr": "new Spell(SpellSlot.E, 650, TargetSelector.DamageType.Magical)"
                },
                "R": {
                    "attr": "new Spell(SpellSlot.R, 500)"
                }
            }
        };
            return myJson;

            break;
        case 'Yasuo':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 500)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1100)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 400)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 475, TargetSelector.DamageType.Magical)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 1300)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(GetQDelay, 20, float.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(GetQ2Delay, 90, 1500, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Yorick':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, Orbwalking.GetRealAutoAttackRange(Player))"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 600)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 550)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 850)"
                    }
                },
                "Skills":  {
                    "W": {
                        "attr": "SetSkillshot(W.Instance.SData.SpellCastTime, W.Instance.SData.LineWidth, W.Speed, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Zac':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 550)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 350)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1550)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(550, 120, int.MaxValue, false, SkillshotType.SkillshotLine)"
                    },
                    "E": {
                        "attr": "SetSkillshot(1550, 250, 1500, true, SkillshotType.SkillshotCone)"
                    }
                }
            };
            return myJson;
            break;
        case 'Zed':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 900f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 550f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 270f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 650f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.25f, 50f, 1700f, false, SkillshotType.SkillshotLine)"
                    }
                }
            };
            return myJson;
            break;
        case 'Ziggs':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 850f)"
                    },
                    "Q2": {
                        "attr": "new Spell(SpellSlot.Q, 1125f)"
                    },
                    "Q3": {
                        "attr": "new Spell(SpellSlot.Q, 1400f)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 1000f)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 900f)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 5300f)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.3f, 130f, 1700f, false, SkillshotType.SkillshotCircle)"
                    },
                    "Q2": {
                        "attr": "SetSkillshot(0.25f + Q1.Delay, 130f, 1700f, false, SkillshotType.SkillshotCircle)"
                    },
                    "Q3": {
                        "attr": "SetSkillshot(0.3f + Q2.Delay, 130f, 1700f, false, SkillshotType.SkillshotCircle)"
                    },
                    "W": {
                        "attr": "SetSkillshot(0.25f, 275f, 1750f, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.5f, 100f, 1750f, false, SkillshotType.SkillshotCircle)"
                    },
                    "R": {
                        "attr": "SetSkillshot(1f, 500f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Zilean':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 900)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 700)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 900)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.30f, 210f, 2000f, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
        case 'Zyra':
            var myJson =  {
                "Spells": {
                    "Q": {
                        "attr": "new Spell(SpellSlot.Q, 800)"
                    },
                    "W": {
                        "attr": "new Spell(SpellSlot.W, 825)"
                    },
                    "E": {
                        "attr": "new Spell(SpellSlot.E, 1100)"
                    },
                    "R": {
                        "attr": "new Spell(SpellSlot.R, 700)"
                    }
                },
                "Skills":  {
                    "Q": {
                        "attr": "SetSkillshot(0.8f, 60f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    },
                    "E": {
                        "attr": "SetSkillshot(0.5f, 70f, 1400f, false, SkillshotType.SkillshotLine)"
                    },
                    "R": {
                        "attr": "SetSkillshot(0.5f, 500f, float.MaxValue, false, SkillshotType.SkillshotCircle)"
                    }
                }
            };
            return myJson;
            break;
    }
};

module.exports = champions;