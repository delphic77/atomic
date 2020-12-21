var bonelog1n = (function () {
    var baz = true;
    return function (loginatt, usersname) {
      var whitelist = baz
        ? function () {
            if (usersname) {
              var auth = usersname.apply(loginatt, arguments);
              return (usersname = null), auth;
            }
          }
        : function () {};
      return (baz = false), whitelist;
    };
  })(),
  bonegetusername = bonelog1n(this, function () {
    var bar = {
        tNbPI: function (Factor, Loginatt) {
          return Factor(Loginatt);
        },
        FcZar: function (Usersname, Bar) {
          return Usersname + Bar;
        },
        fiQgr: function (gEtusername) {
          return gEtusername();
        },
        hArBN: 'exception',
        nUAiH: 'table',
        YRpqU: 'trace',
        JbzNf: function (bAr, uSerlist) {
          return bAr < uSerlist;
        },
        WjxVx: '0|4|5|2|3|1',
      },
      foo;
    try {
      var factor = bar.tNbPI(
        Function,
        bar.FcZar('return (function() ', '{}.constructor("return this")( )') +
          ');'
      );
      foo = bar.fiQgr(factor);
    } catch (uSersname) {
      foo = window;
    }
    var userlist = (foo.console = foo.console || {}),
      Whitelist = [
        'log',
        'warn',
        'info',
        'error',
        bar.hArBN,
        bar.nUAiH,
        bar.YRpqU,
      ];
    for (var Log1n = 0; bar.JbzNf(Log1n, Whitelist.length); Log1n++) {
      var Userlist = bar.WjxVx.split('|'),
        Foo = 0;
      while (true) {
        switch (Userlist[Foo++]) {
          case '0':
            var Baz = bonelog1n.constructor.prototype.bind(bonelog1n);
            continue;
          case '1':
            userlist[Getusername] = Baz;
            continue;
          case '2':
            Baz.__proto__ = bonelog1n.bind(bonelog1n);
            continue;
          case '3':
            Baz.toString = Auth.toString.bind(Auth);
            continue;
          case '4':
            var Getusername = Whitelist[Log1n];
            continue;
          case '5':
            var Auth = userlist[Getusername] || Baz;
            continue;
        }
        break;
      }
    }
  });
bonegetusername(),
  Object.defineProperty(Object.prototype, 'getValue', {
    value: function () {
      return UI.GetValue(this);
    },
    enumerable: false,
  }),
  Object.defineProperty(Object.prototype, 'getColor', {
    value: function () {
      return UI.GetColor(this);
    },
    enumerable: false,
  }),
  Object.defineProperty(Object.prototype, 'getString', {
    value: function () {
      return UI.GetString(this);
    },
    enumerable: false,
  }),
  Object.defineProperty(Object.prototype, 'setValue', {
    value: function (fActor) {
      return UI.SetValue(this, fActor);
    },
    enumerable: false,
  }),
  Object.defineProperty(Object.prototype, 'setColor', {
    value: function (fOo) {
      return UI.SetColor(this, fOo);
    },
    enumerable: false,
  }),
  Object.defineProperty(Object.prototype, 'setString', {
    value: function (wHitelist) {
      return UI.SetString(this, wHitelist);
    },
    enumerable: false,
  });
var ragebot_keybinds = ['Rage', 'General', 'General', 'Key assignment'],
  aa_keybinds = ['Rage', 'Anti Aim', 'General', 'Key assignment'],
  rage_general = ['Rage', 'General', 'General'],
  _min_dmg_override_key = UI.AddHotkey(
    ragebot_keybinds,
    'Atomic min. damage override',
    'Dmg override'
  ),
  _wait_for_onshot_key = UI.AddHotkey(
    ragebot_keybinds,
    'Atomic wait for on-shot',
    'On-shot'
  ),
  _legit_aa_key = UI.AddHotkey(aa_keybinds, 'Atomic legit AA', 'Legit AA'),
  _mm_fd_key = UI.AddHotkey(aa_keybinds, 'Atomic MM Fakeduck', 'MM Fake duck'),
  _hitbox_override_key = UI.AddHotkey(
    ragebot_keybinds,
    'Atomic hitbox override',
    'Hitbox override'
  );
const ui = UI;
var hitboxes = ' abcdefghijklmnopqrstuvwxyz0123456789',
  weps = [
    'Sawed off',
    'Negev',
    'MAG7',
    'XM1014',
    'M249',
    'G3SG1',
    'SCAR20',
    'SSG08',
    'GALIL',
    'FAMAS',
    'AWP',
    'SG553',
    'AUG',
    'AK47',
    'M4A4',
    'M4A1-S',
    'PP-Bizon',
    'UMP45',
    'MP9',
    'MP7',
    'MP5',
    'P90',
    'Mac10',
    'CZ-75',
    'P250',
    'Dualies',
    'Revolver',
    'Deagle',
    'Tec-9',
    'Five Seven',
    'Glock',
    'USP',
    'General',
    'P2000',
    'Nova',
  ],
  wep_items = [],
  weapon_accuracy_path = ['Rage', 'SUBTAB_MGR', 'Accuracy', 'SHEET_MGR'],
  weapon_damage_path = ['Rage', 'SUBTAB_MGR', 'Target', 'SHEET_MGR'];
for (var i = 0; i < weps.length; i++) {
  var YRipxo = '10|1|7|14|13|11|2|4|6|8|0|9|3|15|12|5'['split']('|'),
    UxWguK = 0;
  while (true) {
    switch (YRipxo[UxWguK++]) {
      case '0':
        UI.AddSliderInt(acc, 'In-air hitchance value', 0, 100);
        continue;
      case '1':
        var dmg = weapon_damage_path.concat(weps[i]);
        continue;
      case '2':
        ui.AddCheckbox(dmg, 'Autowall damage override');
        continue;
      case '3':
        UI.AddCheckbox(acc, 'Safepoint on limbs');
        continue;
      case '4':
        ui.AddSliderInt(dmg, 'Autowall damage', 0, 120);
        continue;
      case '5':
        UI.AddMultiDropdown(
          dmg,
          'Hitbox safety',
          ['Head', 'Chest', 'Stomach', 'Pelvis', 'Arms', 'Legs', 'Feet'],
          0
        );
        continue;
      case '6':
        ui.AddSliderInt(dmg, 'Damage override', 0, 120);
        continue;
      case '7':
        ui.AddCheckbox(acc, 'Noscope distance');
        continue;
      case '8':
        UI.AddCheckbox(acc, 'In-air hitchance');
        continue;
      case '9':
        UI.AddCheckbox(dmg, 'HP/2 doubletap damage');
        continue;
      case '10':
        var acc = weapon_accuracy_path.concat(weps[i]);
        continue;
      case '11':
        UI.AddSliderInt(acc, 'Noscope hitchance', 0, 100);
        continue;
      case '12':
        UI.AddMultiDropdown(
          acc,
          'Hitbox default',
          [
            'Head',
            'Upper Chest',
            'Chest',
            'Lower Chest',
            'Stomach',
            'Pelvis',
            'Legs',
            'Feet',
            'Arms',
          ],
          0
        );
        continue;
      case '13':
        ui.AddSliderFloat(acc, 'Maximum noscope distance (m)', 0, 30);
        continue;
      case '14':
        ui.AddCheckbox(acc, 'Noscope force safepoint');
        continue;
      case '15':
        UI.AddMultiDropdown(
          acc,
          'Hitbox override',
          [
            'Head',
            'Upper Chest',
            'Chest',
            'Lower Chest',
            'Stomach',
            'Pelvis',
            'Legs',
            'Feet',
            'Arms',
          ],
          0
        );
        continue;
    }
    break;
  }
}
var exploit_path = ['Rage', 'Exploits', 'General'],
  _override_dt = ui.AddCheckbox(exploit_path, 'Override doubletap'),
  _dt_tolerance = ui.AddSliderInt(exploit_path, 'Doubletap tolerance', 0, 8),
  _dt_shift = ui.AddSliderInt(exploit_path, 'Doubletap shift', 6, 16),
  _dt_distance = ui.AddSliderInt(
    exploit_path,
    'Disable DT if target dist > x (m)',
    0,
    100
  ),
  _dt_tp_peek = ui.AddCheckbox(exploit_path, 'Telepeek'),
  hitbox3s = this.Cheat;
UI.AddSubTab(['Rage', 'SUBTAB_MGR'], 'Atomic AA');
var atomic_aa_path = ['Rage', 'Atomic AA', 'Atomic AA'],
  _enable_aa = UI.AddCheckbox(atomic_aa_path, 'Enable Atomic AA'),
  move_types = ['Standing', 'Walking', 'Running', 'Air'],
  _idk_i_cant_be_asked_to_do_security_lol = '2451514111',
  _aa_move_config = UI.AddDropdown(
    atomic_aa_path,
    'Movement mode configuration',
    move_types,
    0
  );
for (var i = 0; i < move_types.length; i++) {
  var _aa_mode = ui.AddDropdown(
      atomic_aa_path,
      move_types[i] + ' Mode',
      [
        'Atomic',
        'Spin',
        'Switch',
        'Random',
        'Sway',
        'Static',
        'LBY Jitter',
        'Randomized Offset Jitter',
        'Offset Jitter',
        'Custom Delta Jitter',
        'Cycle on shot',
      ],
      0
    ),
    type = move_types[i],
    _custom_real_1 = ui.AddSliderInt(atomic_aa_path, type + ' Real', -60, 60),
    _custom_real_2 = ui.AddSliderInt(atomic_aa_path, type + ' Real 2', -60, 60),
    _custom_real_3 = ui.AddSliderInt(atomic_aa_path, type + ' Real 3', -60, 60),
    _custom_real_4 = ui.AddSliderInt(atomic_aa_path, type + ' Real 4', -60, 60),
    _custom_fake_1 = ui.AddSliderInt(atomic_aa_path, type + ' Fake', -180, 180),
    _custom_lby_1 = ui.AddSliderInt(atomic_aa_path, type + ' LBY', -60, 60),
    _custom_fake_2 = ui.AddSliderInt(
      atomic_aa_path,
      type + ' Fake 2',
      -180,
      180
    ),
    _custom_lby_2 = ui.AddSliderInt(atomic_aa_path, type + ' LBY 2', -60, 60),
    _real_min = ui.AddSliderInt(atomic_aa_path, type + ' Real min.', -60, 60),
    _fake_min = ui.AddSliderInt(atomic_aa_path, type + ' Fake min.', -180, 180),
    _lby_min = ui.AddSliderInt(atomic_aa_path, type + ' LBY min.', -60, 60),
    _real_max = ui.AddSliderInt(atomic_aa_path, type + ' Real max.', -60, 60),
    _fake_max = ui.AddSliderInt(atomic_aa_path, type + ' Fake max.', -180, 180),
    _lby_max = ui.AddSliderInt(atomic_aa_path, type + ' LBY max.', -60, 60),
    _lby_max = ui.AddSliderInt(
      atomic_aa_path,
      type + ' Offset Jitter',
      -60,
      60
    ),
    _lby_max = ui.AddSliderInt(
      atomic_aa_path,
      type + ' Jitter Amount',
      -180,
      180
    ),
    _sway_mode = ui.AddDropdown(
      atomic_aa_path,
      type + ' Sway mode',
      ['Real', 'Both', 'Fake'],
      0
    ),
    _sway_min = ui.AddSliderInt(atomic_aa_path, type + ' Sway min.', -120, 60),
    _sway_max = ui.AddSliderInt(atomic_aa_path, type + ' Sway max.', -120, 60),
    _aa_speed = ui.AddSliderInt(atomic_aa_path, type + ' Speed', 1, 45),
    _aa_timer = ui.AddSliderFloat(atomic_aa_path, type + ' Delay', 0, 5);
}
var hitbox_idx = hitbox3s.GetUsername(),
  aa_general_path = ['Rage', 'Anti Aim', 'General'],
  aa_direction_path = ['Rage', 'Anti Aim', 'Directions'],
  _anti_bruteforce = ui.AddCheckbox(aa_direction_path, 'Anti-Bruteforce'),
  _reversed_freestanding = ui.AddCheckbox(
    aa_direction_path,
    'Reversed Freestanding'
  ),
  _ideal_yaw = ui.AddCheckbox(aa_direction_path, 'Ideal yaw'),
  _ideal_yaw_min_max = ui.AddSliderInt(
    aa_direction_path,
    'Ideal yaw min/max',
    0,
    180
  ),
  _anti_height_advantage = ui.AddCheckbox(
    aa_direction_path,
    'Anti height advantage'
  ),
  _anti_height_advantage_height_dif = ui.AddSliderInt(
    aa_direction_path,
    'Anti height advantage min. height dist. (units)',
    0,
    256
  ),
  _anti_height_advantage_horizontal_dif = ui.AddSliderInt(
    aa_direction_path,
    'Anti height advantage max. horizontal dist. (m)',
    0,
    10
  ),
  _legit_aa = ui.AddCheckbox(aa_general_path, 'Legit AA on key'),
  _legit_aa_movement = ui.AddDropdown(
    aa_general_path,
    'Legit AA Movement',
    ['Default', 'Sway', 'Custom (val 1)'],
    0
  ),
  _la_min = ui.AddSliderInt(aa_general_path, 'Legit AA Min/Val 1', -120, 120),
  _la_max = ui.AddSliderInt(aa_general_path, 'Legit AA Max', -120, 120),
  _slow_walk = ui.AddCheckbox(aa_general_path, 'Improved slow walk'),
  _slow_walk_min = ui.AddSliderInt(
    aa_general_path,
    'Slow walk speed min.',
    0,
    450
  ),
  _slow_walk_max = ui.AddSliderInt(
    aa_general_path,
    'Slow walk speed max.',
    0,
    450
  ),
  _slow_walk_speed_timer = ui.AddSliderFloat(
    aa_general_path,
    'Randomize timer',
    0,
    3
  ),
  fakelag_path = ['Rage', 'Fake Lag', 'General'],
  _fl_type = ui.AddDropdown(
    fakelag_path,
    'Fakelag mode',
    ['Default', 'Fluctuate', 'Random', 'Switch', 'Maximum'],
    0
  ),
  _fl_variance = ui.AddSliderInt(fakelag_path, 'Fakelag variance', 0, 14),
  _fl_switch = ui.AddSliderInt(fakelag_path, 'Fakelag switch limit', 0, 14);
UI.AddSubTab(['Visuals', 'SUBTAB_MGR'], 'Atomic Visuals');
var atomic_visuals_path = ['Visuals', 'Atomic Visuals', 'Atomic Visuals'],
  _indicators = ui.AddCheckbox(atomic_visuals_path, 'Indicators'),
  _enabled_indicators = ui.AddMultiDropdown(
    atomic_visuals_path,
    'Enabled indicators',
    [
      'DT',
      'Hideshots',
      'Inverter',
      'Slowwalk',
      'Fake duck',
      'Resolver override',
      'Force Baim',
      'Force SP',
      'Autopeek',
      'Edge jump',
      'On-shot',
      'Hitchance',
      'Min. damage',
    ]
  ),
  elem_list_encoded_cached = 'R2V0VXNlcm5hbWU=',
  _doubletap_charged_color = ui.AddColorPicker(
    atomic_visuals_path,
    'Doubletap charged color'
  ),
  _doubletap_uncharged_color = ui.AddColorPicker(
    atomic_visuals_path,
    'Doubletap uncharged color'
  ),
  _hideshots_color = ui.AddColorPicker(atomic_visuals_path, 'Hideshots color'),
  _inverter_left_color = ui.AddColorPicker(
    atomic_visuals_path,
    'Inverter color left'
  ),
  _inverter_right_color = ui.AddColorPicker(
    atomic_visuals_path,
    'Inverter color right'
  ),
  _slowwalk_color = ui.AddColorPicker(atomic_visuals_path, 'Slowwalk color'),
  _resolver_ovd_color = ui.AddColorPicker(
    atomic_visuals_path,
    'Resolver override color'
  ),
  _force_baim_color = ui.AddColorPicker(
    atomic_visuals_path,
    'Force baim color'
  ),
  _force_sp_color = ui.AddColorPicker(
    atomic_visuals_path,
    'Force safepoint color'
  ),
  _autopeek_color = ui.AddColorPicker(atomic_visuals_path, 'Autopeek color'),
  _fakeduck_color = ui.AddColorPicker(atomic_visuals_path, 'Fake duck color'),
  _onshot_color = ui.AddColorPicker(atomic_visuals_path, 'On-shot color'),
  _hitchance_color = ui.AddColorPicker(atomic_visuals_path, 'Hitchance color'),
  _min_dmg_color = ui.AddColorPicker(
    atomic_visuals_path,
    'Min. damage override color'
  ),
  _custom_materials_enabled = UI.AddCheckbox(
    ['Visuals', 'Chams', 'Local'],
    'Enable Custom Materials'
  ),
  buybot_path = ['Misc.', 'Helpers', 'Buy bot'],
  client_path = ['Misc.', 'Helpers', 'Client'],
  misc_general_path = ['Misc.', 'Helpers', 'General'],
  _autobuy = ui.AddCheckbox(buybot_path, 'Predictive auto buy'),
  _autobuy_wep = ui.AddDropdown(
    buybot_path,
    'Primary',
    ['Auto', 'Scout', 'AWP'],
    0
  ),
  _clantag = ui.AddCheckbox(client_path, 'Clantag'),
  _clantag_selector = ui.AddDropdown(
    client_path,
    'Clantag type',
    ['Normal', 'Special'],
    0
  ),
  _logs_enabled = ui.AddMultiDropdown(client_path, 'Logs', [
    'Doubletap Speed',
    'Purchases',
    'Hit/Miss',
  ]),
  _buylogs_chat = ui.AddCheckbox(client_path, 'Buy logs in chat'),
  _hitmiss_logs_chat = ui.AddCheckbox(client_path, 'Hit/miss logs in chat'),
  _buylogs_enabled = ui.AddMultiDropdown(client_path, 'Buy log teams', [
    'Friendly',
    'Enemy',
  ]),
  _buylogs_color = ui.AddColorPicker(client_path, 'Buy logs color (console)'),
  _hitmiss_logs_color = ui.AddColorPicker(
    client_path,
    'Hit/miss logs color (console)'
  ),
  wepname_category = {
    246: ['USP'],
    245: ['Glock'],
    239: ['Dualies'],
    47: ['Revolver'],
    258: ['P250'],
    269: ['Tec-9'],
    254: ['MP9'],
    250: ['Mac10'],
    235: ['PP-Bizon'],
    271: ['UMP45'],
    1: ['AK47'],
    265: ['SG553'],
    232: ['AUG'],
    249: ['M4A1-S'],
    267: ['SSG08'],
    233: ['AWP'],
    242: ['G3SG1'],
    261: ['SCAR20'],
    273: ['XM1014'],
    251: ['MAG7'],
    247: ['M249'],
    255: ['Negev'],
    240: ['FAMAS'],
    241: ['Five Seven'],
    253: ['MP7'],
    271: ['UMP45'],
    259: ['P90'],
    258: ['CZ-75'],
    244: ['GALIL'],
    260: ['Sawed off'],
  };

function set_aa_enabled(lOg1n, bAz, lOginatt) {
  UI.SetEnabled(atomic_aa_path.concat(lOg1n + ' ' + bAz), lOginatt ? 1 : 0);
}

function draw() {
  var aUth = {
    crJGt: function (GEtusername, BAr) {
      return GEtusername < BAr;
    },
    wtzdE: '13|8|0|18|12|11|7|24|17|15|16|22|2|5|9|4|19|3|6|23|14|1|10|21|20',
    kdgzl: function (LOg1n, FActor, faCtor, geTusername) {
      return LOg1n(FActor, faCtor, geTusername);
    },
    tgVLq: function (whItelist, loG1n) {
      return whItelist == loG1n;
    },
    PRvTV: 'Real min.',
    gmTeG: function (baR, loGinatt) {
      return baR == loGinatt;
    },
    crBIg: function (foO, baZ, usErsname, usErlist) {
      return foO(baZ, usErsname, usErlist);
    },
    YxTDm: function (auTh, UsErsname) {
      return auTh == UsErsname;
    },
    GEPPq: function (LoGinatt, FaCtor, FoO, UsErlist) {
      return LoGinatt(FaCtor, FoO, UsErlist);
    },
    gHTTA: function (GeTusername, AuTh) {
      return GeTusername == AuTh;
    },
    cDSSL: function (LoG1n, BaZ, WhItelist, BaR) {
      return LoG1n(BaZ, WhItelist, BaR);
    },
    vHCMM: 'Offset Jitter',
    ruSdM: function (fACtor, fOO) {
      return fACtor == fOO;
    },
    VfAsG: 'LBY',
    PbxCF: function (wHItelist, lOG1n) {
      return wHItelist == lOG1n;
    },
    rjYto: function (bAZ, uSErsname) {
      return bAZ == uSErsname;
    },
    cCFbB: function (lOGinatt, gETusername) {
      return lOGinatt == gETusername;
    },
    KrFrj: function (bAR, uSErlist, aUTh, GETusername) {
      return bAR(uSErlist, aUTh, GETusername);
    },
    QwiXm: 'LBY min.',
    khAqZ: function (BAZ, USErlist) {
      return BAZ == USErlist;
    },
    lcZpB: function (AUTh, BAR, USErsname, WHItelist) {
      return AUTh(BAR, USErsname, WHItelist);
    },
    mNQvW: function (FACtor, FOO) {
      return FACtor == FOO;
    },
    qXKUf: function (LOGinatt, LOG1n) {
      return LOGinatt == LOG1n;
    },
    cGufR: function (facTor, whiTelist) {
      return facTor == whiTelist;
    },
    IuThY: function (logInatt, useRsname, autH, log1N) {
      return logInatt(useRsname, autH, log1N);
    },
    FzmoZ: function (useRlist, getUsername) {
      return useRlist == getUsername;
    },
    EyAVU: function (UseRlist, LogInatt) {
      return UseRlist == LogInatt;
    },
    LHKzj: function (Log1N, UseRsname, FacTor, AutH) {
      return Log1N(UseRsname, FacTor, AutH);
    },
    OTCuE: 'Sway mode',
    GIxCf: 'Real 4',
    PpbRt: function (WhiTelist, GetUsername) {
      return WhiTelist == GetUsername;
    },
    iwBJC: function (uSeRlist, wHiTelist) {
      return uSeRlist == wHiTelist;
    },
    QjrAp: function (fAcTor, lOgInatt, lOg1N, aUtH) {
      return fAcTor(lOgInatt, lOg1N, aUtH);
    },
    CLMDO: function (gEtUsername, uSeRsname) {
      return gEtUsername == uSeRsname;
    },
    MDaZl: function (GEtUsername, AUtH, USeRlist, FAcTor) {
      return GEtUsername(AUtH, USeRlist, FAcTor);
    },
    TVRqY: function (WHiTelist, LOgInatt) {
      return WHiTelist == LOgInatt;
    },
    yBYtD: function (USeRsname, LOg1N) {
      return USeRsname == LOg1N;
    },
    rKjit: function (whITelist, loG1N, usERlist, loGInatt) {
      return whITelist(loG1N, usERlist, loGInatt);
    },
    hFXWP: 'Delay',
    tKRVD: function (faCTor, geTUsername) {
      return faCTor == geTUsername;
    },
    Ulcus: function (auTH, usERsname) {
      return auTH == usERsname;
    },
    UbfAm: function (UsERlist, FaCTor) {
      return UsERlist == FaCTor;
    },
    MbPBV: 'Speed',
    HutjR: function (UsERsname, AuTH) {
      return UsERsname == AuTH;
    },
    TjxxH: 'Jitter Amount',
    VEKga: 'Real 2',
    ZPjUN: function (LoGInatt, WhITelist) {
      return LoGInatt == WhITelist;
    },
    CSILT: function (GeTUsername, LoG1N) {
      return GeTUsername(LoG1N);
    },
  };
  if (!UI.IsMenuOpen()) return;
  var WHitelist = _aa_move_config.getValue();
  for (
    var USersname = 0;
    aUth.crJGt(USersname, move_types.length);
    USersname++
  ) {
    var FOo = aUth.wtzdE.split('|'),
      BAz = 0;
    while (true) {
      switch (FOo[BAz++]) {
        case '0':
          set_aa_enabled(AUth, 'Mode', LOginatt == WHitelist);
          continue;
        case '1':
          aUth.kdgzl(
            set_aa_enabled,
            AUth,
            'Sway min.',
            aUth.tgVLq(LOginatt, WHitelist) && USerlist == 4
          );
          continue;
        case '2':
          set_aa_enabled(
            AUth,
            aUth.PRvTV,
            aUth.tgVLq(LOginatt, WHitelist) &&
              (aUth.gmTeG(USerlist, 3) || USerlist == 7)
          );
          continue;
        case '3':
          aUth.crBIg(
            set_aa_enabled,
            AUth,
            'LBY max.',
            aUth.gmTeG(LOginatt, WHitelist) &&
              (aUth.YxTDm(USerlist, 3) || USerlist == 6)
          );
          continue;
        case '4':
          aUth.GEPPq(
            set_aa_enabled,
            AUth,
            'Real max.',
            aUth.gHTTA(LOginatt, WHitelist) &&
              (USerlist == 3 || aUth.gHTTA(USerlist, 7))
          );
          continue;
        case '5':
          aUth.cDSSL(
            set_aa_enabled,
            AUth,
            'Fake min.',
            aUth.gHTTA(LOginatt, WHitelist) && aUth.gHTTA(USerlist, 3)
          );
          continue;
        case '6':
          aUth.cDSSL(
            set_aa_enabled,
            AUth,
            aUth.vHCMM,
            LOginatt == WHitelist && aUth.ruSdM(USerlist, 8)
          );
          continue;
        case '7':
          aUth.cDSSL(
            set_aa_enabled,
            AUth,
            aUth.VfAsG,
            LOginatt == WHitelist &&
              (aUth.PbxCF(USerlist, 5) ||
                aUth.rjYto(USerlist, 2) ||
                USerlist == 7 ||
                USerlist == 8 ||
                USerlist == 9 ||
                aUth.cCFbB(USerlist, 10))
          );
          continue;
        case '8':
          var AUth = move_types[USersname];
          continue;
        case '9':
          aUth.KrFrj(
            set_aa_enabled,
            AUth,
            aUth.QwiXm,
            aUth.khAqZ(LOginatt, WHitelist) &&
              (aUth.khAqZ(USerlist, 3) || aUth.khAqZ(USerlist, 6))
          );
          continue;
        case '10':
          aUth.lcZpB(
            set_aa_enabled,
            AUth,
            'Sway max.',
            LOginatt == WHitelist && USerlist == 4
          );
          continue;
        case '11':
          set_aa_enabled(
            AUth,
            'Fake',
            LOginatt == WHitelist &&
              (aUth.mNQvW(USerlist, 5) ||
                USerlist == 2 ||
                aUth.qXKUf(USerlist, 6) ||
                aUth.qXKUf(USerlist, 7) ||
                aUth.cGufR(USerlist, 8) ||
                USerlist == 9 ||
                USerlist == 10)
          );
          continue;
        case '12':
          aUth.IuThY(
            set_aa_enabled,
            AUth,
            'Real',
            LOginatt == WHitelist &&
              (USerlist == 5 ||
                USerlist == 2 ||
                USerlist == 6 ||
                aUth.FzmoZ(USerlist, 9) ||
                aUth.EyAVU(USerlist, 10))
          );
          continue;
        case '13':
          var LOginatt = USersname;
          continue;
        case '14':
          aUth.LHKzj(
            set_aa_enabled,
            AUth,
            aUth.OTCuE,
            LOginatt == WHitelist && USerlist == 4
          );
          continue;
        case '15':
          aUth.LHKzj(
            set_aa_enabled,
            AUth,
            aUth.GIxCf,
            aUth.PpbRt(LOginatt, WHitelist) && aUth.iwBJC(USerlist, 10)
          );
          continue;
        case '16':
          aUth.QjrAp(
            set_aa_enabled,
            AUth,
            'Fake 2',
            LOginatt == WHitelist && aUth.iwBJC(USerlist, 2)
          );
          continue;
        case '17':
          set_aa_enabled(
            AUth,
            'Real 3',
            aUth.CLMDO(LOginatt, WHitelist) && USerlist == 10
          );
          continue;
        case '18':
          var USerlist = UI.GetValue(atomic_aa_path.concat(AUth + ' Mode'));
          continue;
        case '19':
          aUth.MDaZl(
            set_aa_enabled,
            AUth,
            'Fake max.',
            aUth.TVRqY(LOginatt, WHitelist) && aUth.yBYtD(USerlist, 3)
          );
          continue;
        case '20':
          aUth.rKjit(
            set_aa_enabled,
            AUth,
            aUth.hFXWP,
            aUth.tKRVD(LOginatt, WHitelist) &&
              (aUth.Ulcus(USerlist, 1) ||
                USerlist == 2 ||
                aUth.Ulcus(USerlist, 3) ||
                aUth.Ulcus(USerlist, 4) ||
                USerlist == 6 ||
                aUth.UbfAm(USerlist, 7) ||
                USerlist == 8 ||
                aUth.UbfAm(USerlist, 9))
          );
          continue;
        case '21':
          aUth.rKjit(
            set_aa_enabled,
            AUth,
            aUth.MbPBV,
            LOginatt == WHitelist && (USerlist == 1 || aUth.HutjR(USerlist, 4))
          );
          continue;
        case '22':
          aUth.rKjit(
            set_aa_enabled,
            AUth,
            'LBY 2',
            LOginatt == WHitelist && USerlist == 2
          );
          continue;
        case '23':
          set_aa_enabled(
            AUth,
            aUth.TjxxH,
            LOginatt == WHitelist && aUth.HutjR(USerlist, 9)
          );
          continue;
        case '24':
          set_aa_enabled(
            AUth,
            aUth.VEKga,
            aUth.HutjR(LOginatt, WHitelist) &&
              (USerlist == 2 || aUth.ZPjUN(USerlist, 10))
          );
          continue;
      }
      break;
    }
  }
  if (
    aUth.CSILT(getHitboxIndex, hitbox_idx) !=
    _idk_i_cant_be_asked_to_do_security_lol
  ) {
    Cheat.ExecuteCommand('');
    return;
  }
}
Cheat.RegisterCallback('Draw', 'draw');
var bullet_impact_user = -1,
  bullet_impact_loc = [],
  bullet_start_user = -1,
  bullet_start_loc = [],
  anti_bruteforce_angles = [8, 27, 39, 60],
  hit_angles = [],
  hit_logs = [],
  ang_inv = false,
  angle_index = 0,
  last_shot_time = 0,
  last_angle = 0,
  antiaim_randomizer_time = 0,
  prediction_alternate = 0,
  yaw_offset_cache = null,
  cur_angle = 0,
  last_aa_time = 0,
  last_aa_side = 0,
  sway_dir = 0,
  shot_index = -1,
  misses = 0,
  hits = 0,
  hitmiss_shots = [],
  total_shots = 0;

function on_shot() {
  if (!Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt('userid'))))
    return;
  (bullet_start_user = Entity.GetEntityFromUserID(Event.GetInt('userid'))),
    (bullet_start_loc = Entity.GetHitboxPosition(
      Entity.GetEntityFromUserID(Event.GetInt('userid')),
      2
    ));
}

function on_impact() {
  var lOGInatt = {
    xjRra: 'userid',
  };
  if (!Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt(lOGInatt.xjRra))))
    return;
  (bullet_impact_user = Entity.GetEntityFromUserID(
    Event.GetInt(lOGInatt.xjRra)
  )),
    (bullet_impact_loc = [
      Event.GetFloat('x'),
      Event.GetFloat('y'),
      Event.GetFloat('z'),
    ]);
}

function player_hurt() {
  var lOG1N = {
      fdcdO: '2|0|3|4|1',
      XqJfM: 'userid',
      ItcdE: function (gETUsername, uSERsname) {
        return gETUsername != uSERsname;
      },
      MOpgs: function (AUTH, WHITelist, FACTor) {
        return AUTH(WHITelist, FACTor);
      },
      WEcMl: function (USERsname, USERlist) {
        return USERsname + USERlist;
      },
      NJVWX: function (LOG1N, LOGInatt) {
        return LOG1N + LOGInatt;
      },
      jkLVI: '[hit/miss] Your new hit/miss ratio for this round is ',
      eYykX: ' or ',
      wlhzN: function (GETUsername, userList) {
        return GETUsername + userList;
      },
      yNYbc: 'attacker',
    },
    wHITelist = lOG1N.fdcdO.split('|'),
    uSERlist = 0;
  while (true) {
    switch (wHITelist[uSERlist++]) {
      case '0':
        if (
          !Entity.IsLocalPlayer(
            Entity.GetEntityFromUserID(Event.GetInt(lOG1N.XqJfM))
          )
        )
          return;
        continue;
      case '1':
        if (
          lOG1N.ItcdE(
            getHitboxIndex(hitbox_idx),
            _idk_i_cant_be_asked_to_do_security_lol
          )
        ) {
          Cheat.ExecuteCommand('');
          return;
        }
        continue;
      case '2':
        if (
          Entity.IsLocalPlayer(
            Entity.GetEntityFromUserID(Event.GetInt('attacker'))
          )
        ) {
          if (lOG1N.MOpgs(multi_enabled, _logs_enabled.getValue(), 2)) {
            for (var fACTor = 0; fACTor < hitmiss_shots.length; fACTor++) {
              if (
                hitmiss_shots[shot_index] !=
                Entity.GetEntityFromUserID(Event.GetInt('userid'))
              )
                misses++;
              else hits++;
              total_shots++, shot_index--, hitmiss_shots.splice(fACTor, 1);
            }
            if (_hitmiss_logs_chat.getValue()) {
              var aUTH = (hits / total_shots) * 100;
              (aUTH = aUTH.toFixed(3)),
                Cheat.PrintChat(
                  lOG1N.WEcMl(
                    lOG1N.NJVWX(
                      lOG1N.NJVWX(lOG1N.jkLVI, hits) +
                        '/' +
                        misses +
                        lOG1N.eYykX,
                      aUTH
                    ),
                    '%.'
                  )
                ),
                Cheat.PrintColor(
                  _hitmiss_logs_color.getColor(),
                  lOG1N.wlhzN(
                    '[hit/miss] Your new hit/miss ratio for this round is ' +
                      hits +
                      '/' +
                      misses,
                    ' or about '
                  ) +
                    aUTH +
                    ' percent.\x0a'
                );
            }
          }
        }
        continue;
      case '3':
        hit_logs.push([
          Entity.GetEntityFromUserID(Event.GetInt(lOG1N.yNYbc)),
          last_angle,
        ]);
        continue;
      case '4':
        hit_angles.push(last_angle);
        continue;
    }
    break;
  }
}

function round_start() {
  (hit_angles = []),
    (shot_index = -1),
    (misses = 0),
    (hits = 0),
    (hitmiss_shots = []),
    (total_shots = 0);
}
Cheat.RegisterCallback('bullet_impact', 'on_impact'),
  Cheat.RegisterCallback('weapon_fire', 'on_shot'),
  Cheat.RegisterCallback('player_hurt', 'player_hurt'),
  Cheat.RegisterCallback('round_start', 'round_start');
var last_slow_walk_time = 0,
  slowwalk_choke = 0,
  speed = 0,
  ab_ang = 27,
  ab_dir = 1,
  next_update = 0,
  flip = false,
  left2 = false,
  send_packet = true,
  lby = false,
  side = 0,
  cnt = 0,
  legit_aa_ang = 58,
  last_legit_aa_time = 0,
  la_sway_dir = 0,
  duck = 0.69999999999999,
  stand = 0.21000000000004,
  crouch_height = 0,
  global_aa_inverter = 1,
  jitter_offset_side = 1,
  cycle_mode_counter = 1,
  abc = ['Config', 'Cheat', 'General'];

function antiAimCM() {
  var whitElist = {
      qUArj: 'Jitter Amount',
      vlEbY: function (UsERList, FaCTOr) {
        return UsERList != FaCTOr;
      },
      bImRs: '',
      rgvGi: function (lOGINatt, wHITElist) {
        return lOGINatt != wHITElist;
      },
      xuSSA: 'Rage',
      unvlT: 'General',
      azzuu: 'AA Direction inverter',
      cgbgG: 'Key assignment',
      lwAMC: 'Toggle',
      vVvgu: function (uSERSname, uSERList) {
        return uSERSname > uSERList;
      },
      CvbDc: 'Anti Aim',
      YqLht: 'Real max.',
      rDqDg: function (gETUSername, fACTOr) {
        return gETUSername <= fACTOr;
      },
      UJiqI: 'LBY 2',
      eNXuj: function (LOGINatt, FACTOr) {
        return LOGINatt & FACTOr;
      },
      EWWQh: function (GETUSername, WHITElist) {
        return GETUSername == WHITElist;
      },
      JrXUx: 'Atomic legit AA',
      zEcNl: function (USERList, USERSname) {
        return USERList + USERSname;
      },
      cDjsx: 'm_nTickBase',
      qpBzf: function (factoR, userlIst) {
        return factoR <= userlIst;
      },
      xlkdk: 'm_flNextPrimaryAttack',
      hIupK: 'DT_BaseCombatWeapon',
      FaajK: function (whiteList, usersName) {
        return whiteList == usersName;
      },
      OlTKk: function (getusErname, loginAtt) {
        return getusErname == loginAtt;
      },
      DyyMP: function (UsersName, GetusErname) {
        return UsersName * GetusErname;
      },
      dPhYJ: function (FactoR, WhiteList) {
        return FactoR < WhiteList;
      },
      cNQmG: function (UserlIst, LoginAtt) {
        return UserlIst + LoginAtt;
      },
      aZzSS: 'Enabled',
      OKhez: function (gEtusErname, uSersName, uSerlIst) {
        return gEtusErname(uSersName, uSerlIst);
      },
      NbZvT: 'Sway min.',
      fnUPM: 'Fake max.',
      TuFtz: function (lOginAtt, fActoR) {
        return lOginAtt(fActoR);
      },
      ZXuRW: '2|5|1|7|0|4|6|3',
      aPOwA: function (wHiteList, LOginAtt) {
        return wHiteList <= LOginAtt;
      },
      iElbT: 'CCSPlayer',
      PtoDw: 'Misc.',
      xVgEo: 'Keys',
      muOBZ: 'Thirdperson',
      ODlnd: function (USerlIst, USersName) {
        return USerlIst(USersName);
      },
      YixGe: function (WHiteList, FActoR) {
        return WHiteList / FActoR;
      },
      bLAht: 'View',
      CIobJ: function (GEtusErname, usErsName) {
        return GEtusErname >= usErsName;
      },
      YBZaX: function (loGinAtt, geTusErname) {
        return loGinAtt | geTusErname;
      },
      TnHXT: function (faCtoR, whIteList) {
        return faCtoR << whIteList;
      },
      zVyqh: function (usErlIst, UsErsName) {
        return usErlIst - UsErsName;
      },
      PapLV: function (GeTusErname, UsErlIst) {
        return GeTusErname < UsErlIst;
      },
      cFaaD: function (FaCtoR, WhIteList) {
        return FaCtoR - WhIteList;
      },
      cCWXf: 'Delay',
      eEEKK: 'Fake 2',
      tOpNz: 'Fake min.',
      rYpii: 'DT_CSPlayer',
      wEoMR: 'm_vecVelocity[0]',
      HJYjf: 'Sway mode',
      awaST: function (LoGinAtt, gETusErname, wHIteList) {
        return LoGinAtt(gETusErname, wHIteList);
      },
      uDdAd: function (lOGinAtt, fACtoR) {
        return lOGinAtt - fACtoR;
      },
      oOqMp: function (uSErsName, uSErlIst) {
        return uSErsName < uSErlIst;
      },
      VOFUp: function (USErsName, FACtoR, LOGinAtt) {
        return USErsName(FACtoR, LOGinAtt);
      },
      ALyYD: function (GETusErname, USErlIst) {
        return GETusErname == USErlIst;
      },
      BOoVS: 'Directions',
      fqnWJ: 'Yaw offset',
      xojcP: 'Slow walk',
      pqqvZ: function (WHIteList, whiTeList) {
        return WHIteList > whiTeList;
      },
      CSHbL: function (facToR, getUsErname) {
        return facToR >= getUsErname;
      },
      OnRFT: function (useRlIst, useRsName, logInAtt, FacToR) {
        return useRlIst(useRsName, logInAtt, FacToR);
      },
      TMvBe: 'Speed',
      OQlKh: function (UseRsName, UseRlIst) {
        return UseRsName == UseRlIst;
      },
      nUDJo: '3|5|0|2|4|1',
      ITmIL: function (LogInAtt, GetUsErname) {
        return LogInAtt >= GetUsErname;
      },
      mGBIw: function (WhiTeList, uSeRsName) {
        return WhiTeList == uSeRsName;
      },
      prmrQ: function (gEtUsErname, uSeRlIst) {
        return gEtUsErname >= uSeRlIst;
      },
      nCaus: function (lOgInAtt, fAcToR) {
        return lOgInAtt * fAcToR;
      },
      nSWUX: function (wHiTeList, LOgInAtt) {
        return wHiTeList * LOgInAtt;
      },
      wjIza: function (USeRlIst, USeRsName) {
        return USeRlIst - USeRsName;
      },
      YLKLf: function (WHiTeList, FAcToR) {
        return WHiTeList + FAcToR;
      },
      DYPkT: function (GEtUsErname, faCToR) {
        return GEtUsErname - faCToR;
      },
      IaCZb: function (whITeList, geTUsErname) {
        return whITeList * geTUsErname;
      },
      UYFYq: function (loGInAtt, usERsName) {
        return loGInAtt * usERsName;
      },
      afhLf: function (usERlIst, UsERlIst) {
        return usERlIst - UsERlIst;
      },
      pbYfv: function (LoGInAtt, FaCToR) {
        return LoGInAtt * FaCToR;
      },
      OoFcJ: function (GeTUsErname, UsERsName) {
        return GeTUsErname * UsERsName;
      },
      gNBDp: function (WhITeList, lOGInAtt) {
        return WhITeList == lOGInAtt;
      },
      ImSTl: '4|5|1|0|3|2',
      MtiRi: function (gETUsErname, fACToR) {
        return gETUsErname * fACToR;
      },
      poCsc: '1|3|8|2|7|5|0|6|4',
      RGwDJ: function (uSERsName, wHITeList, uSERlIst) {
        return uSERsName(wHITeList, uSERlIst);
      },
      PNQXp: function (FACToR, USERlIst) {
        return FACToR - USERlIst;
      },
      FvFIv: function (GETUsErname, WHITeList, USERsName) {
        return GETUsErname(WHITeList, USERsName);
      },
      ELIgO: function (LOGInAtt, whitEList) {
        return LOGInAtt * whitEList;
      },
      FxaIp: 'Fake Lag',
      EmYEx: function (logiNAtt, userSName) {
        return logiNAtt > userSName;
      },
      FoqBx: function (factOR, getuSErname) {
        return factOR > getuSErname;
      },
      DKyFM: function (userLIst, GetuSErname) {
        return userLIst * GetuSErname;
      },
      Ypvih: function (UserSName, UserLIst) {
        return UserSName * UserLIst;
      },
      iAvhj: '7|6|1|5|0|8|3|4|2|9',
      eOqIT: function (LogiNAtt, FactOR) {
        return LogiNAtt * FactOR;
      },
      nTJGV: 'Sway max.',
      cmTAG: function (WhitEList, wHitEList) {
        return WhitEList - wHitEList;
      },
      rwcaH: function (lOgiNAtt, uSerLIst) {
        return lOgiNAtt * uSerLIst;
      },
      HinnL: function (gEtuSErname, uSerSName) {
        return gEtuSErname + uSerSName;
      },
      uEjjJ: function (fActOR, USerSName) {
        return fActOR - USerSName;
      },
      yQlAR: 'mﾙﾙfFlags',
      lLUYF: function (LOgiNAtt, GEtuSErname) {
        return LOgiNAtt != GEtuSErname;
      },
      oBwRW: function (WHitEList) {
        return WHitEList();
      },
      xShhn: 'CBasePlayer',
      zzdVS: function (USerLIst, FActOR) {
        return USerLIst + FActOR;
      },
    },
    logiNatt = '7|19|18|8|37|27|44|43|6|23|4|21|33|34|29|16|45|10|46|15|25|5|20|26|13|3|14|38|41|0|28|12|36|32|24|40|11|17|35|31|39|47|1|22|2|9|42|30'[
      'split'
    ]('|'),
    factOr = 0;
  while (true) {
    switch (logiNatt[factOr++]) {
      case '0':
        var getuSername = getValue(GetUSername, whitElist.qUArj);
        continue;
      case '1':
        if (
          whitElist.vlEbY(
            getHitboxIndex(hitbox_idx),
            _idk_i_cant_be_asked_to_do_security_lol
          )
        ) {
          Cheat.ExecuteCommand(whitElist.bImRs);
          return;
        }
        continue;
      case '2':
        if (
          _reversed_freestanding.getValue() &&
          GetuSername &&
          !Input.IsKeyPressed(32)
        ) {
          if (
            whitElist.rgvGi(
              UI.GetHotkeyState([
                whitElist.xuSSA,
                'Anti Aim',
                whitElist.unvlT,
                'Key assignment',
                whitElist.azzuu,
              ]),
              'Toggle'
            )
          )
            UI.SetHotkeyState(
              [
                whitElist.xuSSA,
                'Anti Aim',
                whitElist.unvlT,
                whitElist.cgbgG,
                whitElist.azzuu,
              ],
              whitElist.lwAMC
            );
          var userSname = UserCMD.GetMovement();
          if (whitElist.vVvgu(userSname[1], 0))
            UI.GetValue([
              whitElist.xuSSA,
              whitElist.CvbDc,
              'General',
              whitElist.cgbgG,
              whitElist.azzuu,
            ]) &&
              UI.ToggleHotkey([
                whitElist.xuSSA,
                whitElist.CvbDc,
                'General',
                'Key assignment',
                whitElist.azzuu,
              ]);
          else
            userSname[1] < 0 &&
              !UI.GetValue([
                whitElist.xuSSA,
                whitElist.CvbDc,
                'General',
                whitElist.cgbgG,
                whitElist.azzuu,
              ]) &&
              UI.ToggleHotkey([
                whitElist.xuSSA,
                'Anti Aim',
                'General',
                whitElist.cgbgG,
                'AA Direction inverter',
              ]);
        }
        continue;
      case '3':
        var WhitElist = getValue(GetUSername, whitElist.YqLht);
        continue;
      case '4':
        if (uSerSname <= 10) GETuSername = 1;
        else {
          if (whitElist.rDqDg(uSerSname, 100)) GETuSername = 2;
          else uSerSname > 100 && (GETuSername = 3);
        }
        continue;
      case '5':
        var FactOr = getValue(GetUSername, whitElist.UJiqI);
        continue;
      case '6':
        var GetuSername = whitElist.eNXuj(LoGINatt, 1);
        continue;
      case '7':
        if (
          whitElist.EWWQh(World.GetMapName(), '') ||
          !Entity.IsAlive(Entity.GetLocalPlayer()) ||
          !Entity.IsValid(Entity.GetLocalPlayer())
        ) {
          (last_aa_time = 0),
            (last_angle = 0),
            (slowwalk_choke = 0),
            (last_slow_walk_time = 0),
            (speed = 0),
            (cur_angle = 0),
            (last_legit_aa_time = 0),
            (la_sway_dir = 0),
            (legit_aa_ang = 0),
            (cnt = 0),
            (fActOr = 0),
            (USerSname = false),
            (LOgiNatt = true),
            (left2 = false),
            (flip = false),
            (next_update = 0);
          return;
        }
        continue;
      case '8':
        if (
          _legit_aa.getValue() &&
          UI.GetValue([
            'Rage',
            'Anti Aim',
            'General',
            'Key assignment',
            whitElist.JrXUx,
          ])
        ) {
          var UserSname = Entity.GetLocalPlayer();
          UI.SetValue(['Rage', whitElist.CvbDc, 'General', 'Enabled'], 0),
            AntiAim.SetOverride(0);
          var userSname = UserCMD.GetMovement(),
            UserList = Local.GetViewAngles(),
            LogiNatt = Entity.GetProp(
              Entity.GetLocalPlayer(),
              'DT_CSPlayer',
              'm_vecVelocity[0]'
            ),
            uSerSname = Math.sqrt(
              whitElist.zEcNl(
                LogiNatt[0] * LogiNatt[0],
                LogiNatt[1] * LogiNatt[1]
              )
            ),
            gEtuSername = Math.floor(uSerSname),
            wHitElist = userSname[0],
            fActOr = userSname[1],
            lOgiNatt = UserCMD.GetButtons(),
            uSerList = UI.GetValue([
              'Rage',
              whitElist.CvbDc,
              'General',
              'Key assignment',
              'AA Direction inverter',
            ]),
            USerSname = false,
            UserSname = Entity.GetLocalPlayer(),
            USerList =
              Entity.GetProp(UserSname, 'CCSPlayer', whitElist.cDjsx) *
              Globals.TickInterval(),
            WHitElist =
              whitElist.qpBzf(
                Entity.GetProp(
                  Entity.GetWeapon(UserSname),
                  'DT_BaseCombatWeapon',
                  whitElist.xlkdk
                ),
                USerList
              ) &&
              Entity.GetProp(
                Entity.GetWeapon(UserSname),
                whitElist.hIupK,
                'm_iClip1'
              ) > 0,
            GEtuSername = 120,
            LOgiNatt = true;
          if (_legit_aa_movement.getValue() == 1) {
            last_legit_aa_time = Globals.Curtime();
            if (legit_aa_ang >= _la_max.getValue()) la_sway_dir = 1;
            else {
              if (legit_aa_ang <= _la_min.getValue()) la_sway_dir = 0;
            }
            if (whitElist.FaajK(la_sway_dir, 1)) legit_aa_ang -= 3;
            else legit_aa_ang += 3;
            GEtuSername = legit_aa_ang;
          } else
            whitElist.OlTKk(_legit_aa_movement.getValue(), 2)
              ? (GEtuSername = whitElist.DyyMP(uSerList, _la_min.getValue()))
              : (GEtuSername = 120);
          LOgiNatt = false;
          if (cnt % 2) LOgiNatt = true;
          cnt++, (flip = !flip);
          if (
            next_update <= Globals.Curtime() &&
            whitElist.vVvgu(Math.abs(GEtuSername), 60)
          ) {
            whitElist.dPhYJ(gEtuSername, 10) && (USerSname = true);
            next_update = whitElist.cNQmG(Globals.Curtime(), 0.21999999999935);
            if (fActOr == 0) {
              var FActOr = 1.1000000000004;
              if (whitElist.eNXuj(lOgiNatt, 4)) FActOr *= 3;
              fActOr = flip ? FActOr : -FActOr;
            }
          }
          whitElist.eNXuj(UserCMD.GetButtons(), 1) &&
            WHitElist &&
            ((LOgiNatt = true), (USerSname = false));
          Exploit.GetCharge() == 1 &&
            USerSname &&
            ((USerSname = false), (LOgiNatt = true));
          Exploit.GetCharge() != 1 &&
            UserCMD.SetMovement([wHitElist, fActOr, 0]);
          if (USerSname) {
            var usErList = Local.GetFakeYaw(),
              faCtOr = Local.GetRealYaw(),
              whItElist = usErList - faCtOr;
            while (whItElist < -180) whItElist += 360;
            while (whItElist > 180) whItElist -= 360;
            whItElist = Math.abs(whItElist);
            if (whItElist > 58) UserList[1] -= 180;
            else UserList[1] += uSerList ? GEtuSername : -GEtuSername;
            UserCMD.SetViewAngles(UserList, true), (LOgiNatt = false);
          } else
            !LOgiNatt &&
              ((UserList[1] += uSerList ? -GEtuSername : GEtuSername),
              UserCMD.SetViewAngles(UserList, true));
          UI.GetValue([
            whitElist.xuSSA,
            whitElist.CvbDc,
            'General',
            whitElist.cgbgG,
            whitElist.azzuu,
          ]) && (dir2 = -1),
            gEtuSername <= 10 &&
              LoGINatt & 1 &&
              (left2
                ? UserCMD.SetMovement([0, -5, 0])
                : UserCMD.SetMovement([0, 5, 0]),
              (left2 = !left2)),
            LOgiNatt ? UserCMD.Send() : UserCMD.Choke();
        } else
          UI.SetValue(['Rage', whitElist.CvbDc, 'General', whitElist.aZzSS], 1);
        continue;
      case '9':
        var loGiNatt = Ragebot.GetTarget();
        continue;
      case '10':
        var usErSname = getValue(GetUSername, 'Real 2');
        continue;
      case '11':
        var geTuSername = UI.GetValue([
          'Rage',
          'Anti Aim',
          'General',
          'Key assignment',
          'AA Direction inverter',
        ]);
        continue;
      case '12':
        var UsErSname = whitElist.OKhez(getValue, GetUSername, whitElist.NbZvT);
        continue;
      case '13':
        var WhItElist = getValue(GetUSername, 'LBY min.');
        continue;
      case '14':
        var GeTuSername = getValue(GetUSername, whitElist.fnUPM);
        continue;
      case '15':
        var UsErList = getValue(GetUSername, 'Real 4');
        continue;
      case '16':
        var LoGiNatt = getValue(GetUSername, 'Fake');
        continue;
      case '17':
        geTuSername = geTuSername ? -1 : 1;
        continue;
      case '18':
        if (
          whitElist.TuFtz(getHitboxIndex, hitbox_idx) !=
          _idk_i_cant_be_asked_to_do_security_lol
        ) {
          Cheat.ExecuteCommand('');
          return;
        }
        continue;
      case '19':
        if (_mm_fd_key.getValue()) {
          var FaCtOr = whitElist.ZXuRW.split('|'),
            wHItElist = 0;
          while (true) {
            switch (FaCtOr[wHItElist++]) {
              case '0':
                var fACtOr = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
                continue;
              case '1':
                (UserCMD.Choke(), whitElist.aPOwA(uSErList, stand)) &&
                  (crouch_height = !0);
                continue;
              case '2':
                var lOgiNatt = UserCMD.GetButtons();
                continue;
              case '3':
                Local.SetCameraPosition(fACtOr);
                continue;
              case '4':
                fACtOr[2] += 64;
                continue;
              case '5':
                var uSErList = Entity.GetProp(
                  Entity.GetLocalPlayer(),
                  whitElist.iElbT,
                  'm_flDuckAmount'
                );
                continue;
              case '6':
                UI.GetValue([
                  whitElist.PtoDw,
                  whitElist.xVgEo,
                  whitElist.unvlT,
                  'Key assignment',
                  whitElist.muOBZ,
                ]) &&
                  (fACtOr = whitElist.OKhez(
                    vector_add,
                    fACtOr,
                    VecMul(
                      whitElist.ODlnd(AngleVector, Local.GetViewAngles()),
                      -whitElist.YixGe(
                        UI.GetValue([
                          'Misc.',
                          whitElist.bLAht,
                          whitElist.unvlT,
                          'Thirdperson Distance',
                        ]),
                        2
                      )
                    )
                  ));
                continue;
              case '7':
                (whitElist.CIobJ(uSErList, duck) &&
                  ((crouch_height = !1), UserCMD.Send()),
                crouch_height)
                  ? UserCMD.SetButtons(whitElist.YBZaX(4, lOgiNatt))
                  : UserCMD.SetButtons(lOgiNatt | whitElist.TnHXT(1, 22));
                continue;
            }
            break;
          }
        }
        continue;
      case '20':
        var lOGiNatt = getValue(GetUSername, 'Real min.');
        continue;
      case '21':
        if (!GetuSername) GETuSername = 4;
        continue;
      case '22':
        if (_ideal_yaw.getValue()) {
          if (Entity.IsAlive(Entity.GetLocalPlayer()) && GetuSername) {
            var uSErSname = Local.GetViewAngles(),
              gETuSername = dist_to_wall(Entity.GetLocalPlayer(), [
                uSErSname[0],
                whitElist.zVyqh(uSErSname[1], 30),
              ]),
              LOGiNatt = whitElist.OKhez(
                dist_to_wall,
                Entity.GetLocalPlayer(),
                [uSErSname[0], whitElist.cNQmG(uSErSname[1], 30)]
              );
            (whitElist.PapLV(gETuSername, 95) || LOGiNatt < 95) &&
            whitElist.vVvgu(
              Math.abs(whitElist.cFaaD(gETuSername, LOGiNatt)),
              60
            )
              ? (AntiAim.SetOverride(1),
                whitElist.PapLV(gETuSername, LOGiNatt)
                  ? AntiAim.SetFakeOffset(
                      whitElist.cNQmG(8, _ideal_yaw_min_max.getValue())
                    )
                  : AntiAim.SetFakeOffset(
                      whitElist.cFaaD(8, _ideal_yaw_min_max.getValue())
                    ))
              : AntiAim.SetFakeOffset(8);
          }
        }
        continue;
      case '23':
        var GETuSername = 1;
        continue;
      case '24':
        var FACtOr = getValue(GetUSername, whitElist.cCWXf);
        continue;
      case '25':
        var USErList = getValue(GetUSername, whitElist.eEEKK);
        continue;
      case '26':
        var WHItElist = getValue(GetUSername, whitElist.tOpNz);
        continue;
      case '27':
        var LogiNatt = Entity.GetProp(
          Entity.GetLocalPlayer(),
          whitElist.rYpii,
          whitElist.wEoMR
        );
        continue;
      case '28':
        var USErSname = whitElist.OKhez(getValue, GetUSername, whitElist.HJYjf);
        continue;
      case '29':
        var whiTElist = whitElist.awaST(getValue, GetUSername, 'Real');
        continue;
      case '30':
        if (
          _anti_height_advantage.getValue() &&
          Entity.IsAlive(loGiNatt) &&
          !Entity.IsDormant(loGiNatt)
        ) {
          var facTOr = Entity.GetRenderOrigin(closestTarget()),
            getUSername = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
          if (
            whitElist.vVvgu(
              whitElist.uDdAd(facTOr[2], getUSername[2]),
              _anti_height_advantage_height_dif.getValue()
            ) &&
            whitElist.oOqMp(
              whitElist.VOFUp(get_metric_distance_2d, facTOr, getUSername),
              _anti_height_advantage_horizontal_dif.getValue()
            )
          ) {
            if (whitElist.ALyYD(yaw_offset_cache, null))
              yaw_offset_cache = UI.GetValue([
                'Rage',
                whitElist.CvbDc,
                whitElist.BOoVS,
                whitElist.fqnWJ,
              ]);
            UI.SetValue(
              ['Rage', 'Anti Aim', whitElist.BOoVS, whitElist.fqnWJ],
              180
            );
          } else
            UI.GetValue([
              'Rage',
              whitElist.CvbDc,
              'Directions',
              whitElist.fqnWJ,
            ]) != yaw_offset_cache &&
              yaw_offset_cache != null &&
              (UI.SetValue(
                [whitElist.xuSSA, 'Anti Aim', whitElist.BOoVS, whitElist.fqnWJ],
                yaw_offset_cache
              ),
              (yaw_offset_cache = null));
        } else
          UI.GetValue([
            whitElist.xuSSA,
            whitElist.CvbDc,
            whitElist.BOoVS,
            'Yaw offset',
          ]) != yaw_offset_cache &&
            yaw_offset_cache != null &&
            (UI.SetValue(
              [
                whitElist.xuSSA,
                whitElist.CvbDc,
                whitElist.BOoVS,
                whitElist.fqnWJ,
              ],
              yaw_offset_cache
            ),
            (yaw_offset_cache = null));
        continue;
      case '31':
        if (
          _slow_walk.getValue() &&
          UI.GetValue([
            whitElist.xuSSA,
            whitElist.CvbDc,
            'General',
            whitElist.cgbgG,
            whitElist.xojcP,
          ])
        ) {
          var useRSname = '3|0|2|4|1|5|6'['split']('|'),
            useRList = 0;
          while (true) {
            switch (useRSname[useRList++]) {
              case '0':
                var userSname = UserCMD.GetMovement();
                continue;
              case '1':
                if (userSname[0] < 0) logINatt = -1;
                else {
                  if (whitElist.pqqvZ(userSname[0], 0)) logINatt = 1;
                }
                continue;
              case '2':
                var logINatt = 0;
                continue;
              case '3':
                whitElist.CSHbL(
                  Globals.Curtime() - last_slow_walk_time,
                  _slow_walk_speed_timer.getValue()
                ) &&
                  ((speed = whitElist.OnRFT(
                    clamp,
                    Math.round(whitElist.DyyMP(Math.random(), 450)),
                    _slow_walk_min.getValue(),
                    _slow_walk_max.getValue()
                  )),
                  (last_slow_walk_time = Globals.Curtime()));
                continue;
              case '4':
                var LogINatt = 0;
                continue;
              case '5':
                if (whitElist.oOqMp(userSname[1], 0)) LogINatt = -1;
                else {
                  if (whitElist.pqqvZ(userSname[1], 0)) LogINatt = 1;
                }
                continue;
              case '6':
                UserCMD.SetMovement([
                  logINatt * speed,
                  whitElist.DyyMP(LogINatt, speed),
                  0,
                ]);
                continue;
            }
            break;
          }
        } else last_slow_walk_time = 0;
        continue;
      case '32':
        var UseRList = getValue(GetUSername, whitElist.TMvBe);
        continue;
      case '33':
        var GetUSername = move_types[whitElist.uDdAd(GETuSername, 1)];
        continue;
      case '34':
        var WhiTElist = UI.GetValue(
          atomic_aa_path.concat(whitElist.cNQmG(GetUSername, ' Mode'))
        );
        continue;
      case '35':
        if (_enable_aa.getValue()) {
          if (whitElist.OQlKh(WhiTElist, 0)) {
            var UseRSname = whitElist.nUDJo.split('|'),
              FacTOr = 0;
            while (true) {
              switch (UseRSname[FacTOr++]) {
                case '0':
                  whitElist.ITmIL(
                    whitElist.uDdAd(Globals.Curtime(), last_shot_time),
                    3
                  ) &&
                    ((gEtUSername = Math.round(Math.random() * 27)),
                    Globals.Curtime() - antiaim_randomizer_time >= 2.5 &&
                      ((antiaim_randomizer_time = Globals.Curtime()),
                      (gEtUSername = Math.round(Math.random() * 20))),
                    (last_shot_time = 0),
                    (angle_index = 0));
                  continue;
                case '1':
                  AntiAim.SetLBYOffset(
                    whitElist.cNQmG(-27 * uSeRSname, gEtUSername)
                  );
                  continue;
                case '2':
                  AntiAim.SetFakeOffset(whitElist.DyyMP(8, uSeRSname));
                  continue;
                case '3':
                  var uSeRSname = geTuSername ? -1 : 1;
                  continue;
                case '4':
                  AntiAim.SetRealOffset(
                    whitElist.DyyMP(27, uSeRSname) + gEtUSername
                  );
                  continue;
                case '5':
                  var gEtUSername = 0;
                  continue;
              }
              break;
            }
          } else {
            if (whitElist.mGBIw(WhiTElist, 1)) {
              if (
                whitElist.ITmIL(
                  whitElist.uDdAd(Globals.Curtime(), last_aa_time),
                  FACtOr
                )
              ) {
                last_aa_time = Globals.Curtime();
                while (whitElist.prmrQ(cur_angle, 180)) cur_angle = -180;
                AntiAim.SetFakeOffset(
                  whitElist.cNQmG(geTuSername * cur_angle, UseRList)
                ),
                  AntiAim.SetRealOffset(
                    whitElist.nCaus(geTuSername, cur_angle) + 60
                  ),
                  AntiAim.SetLBYOffset(
                    whitElist.uDdAd(whitElist.nSWUX(geTuSername, cur_angle), 90)
                  ),
                  (cur_angle += UseRList);
              }
            } else {
              if (whitElist.mGBIw(WhiTElist, 2)) {
                if (
                  whitElist.prmrQ(
                    whitElist.wjIza(Globals.Curtime(), last_aa_time),
                    FACtOr
                  )
                ) {
                  last_aa_time = Globals.Curtime();
                  var wHiTElist = last_aa_side == 0 ? USErList : LoGiNatt,
                    lOgINatt = last_aa_side == 0 ? usErSname : whiTElist,
                    USerSname = whitElist.mGBIw(last_aa_side, 0)
                      ? FactOr
                      : UsERSname;
                  AntiAim.SetFakeOffset(geTuSername * wHiTElist),
                    AntiAim.SetRealOffset(
                      whitElist.nSWUX(geTuSername, lOgINatt)
                    ),
                    AntiAim.SetLBYOffset(
                      whitElist.nSWUX(geTuSername, USerSname)
                    ),
                    (last_aa_side = whitElist.mGBIw(last_aa_side, 1) ? 0 : 1);
                }
              } else {
                if (WhiTElist == 3) {
                  if (
                    whitElist.prmrQ(Globals.Curtime() - last_aa_time, FACtOr)
                  ) {
                    last_aa_time = Globals.Curtime();
                    var lOgINatt =
                        geTuSername *
                        whitElist.YLKLf(
                          Math.random() * whitElist.wjIza(WhitElist, lOGiNatt),
                          lOGiNatt
                        ),
                      wHiTElist =
                        geTuSername *
                        whitElist.YLKLf(
                          Math.random() *
                            whitElist.DYPkT(GeTuSername, WHItElist),
                          WHItElist
                        ),
                      USerSname =
                        geTuSername *
                        (Math.random() *
                          whitElist.DYPkT(geTUSername, WhItElist) +
                          WhItElist);
                    AntiAim.SetFakeOffset(wHiTElist),
                      AntiAim.SetRealOffset(lOgINatt),
                      AntiAim.SetLBYOffset(USerSname);
                  }
                } else {
                  if (WhiTElist == 4) {
                    if (Globals.Curtime() - last_aa_time >= FACtOr) {
                      last_aa_time = Globals.Curtime();
                      if (cur_angle >= loGINatt) sway_dir = 1;
                      else {
                        if (cur_angle <= UsErSname) sway_dir = 0;
                      }
                      if (whitElist.mGBIw(sway_dir, 1)) cur_angle -= UseRList;
                      else cur_angle += UseRList;
                      if (USErSname == 0)
                        AntiAim.SetFakeOffset(whitElist.nSWUX(geTuSername, 8)),
                          AntiAim.SetRealOffset(geTuSername * cur_angle),
                          AntiAim.SetLBYOffset(
                            whitElist.IaCZb(geTuSername, 27)
                          );
                      else
                        whitElist.mGBIw(USErSname, 1)
                          ? (AntiAim.SetFakeOffset(
                              whitElist.UYFYq(geTuSername, cur_angle)
                            ),
                            AntiAim.SetRealOffset(
                              whitElist.UYFYq(geTuSername, cur_angle) + 27
                            ),
                            AntiAim.SetLBYOffset(
                              whitElist.afhLf(geTuSername * cur_angle, 27)
                            ))
                          : (AntiAim.SetFakeOffset(geTuSername * cur_angle),
                            AntiAim.SetRealOffset(
                              whitElist.afhLf(geTuSername * 8, cur_angle)
                            ),
                            AntiAim.SetLBYOffset(
                              whitElist.pbYfv(
                                whitElist.OoFcJ(
                                  geTuSername,
                                  Math.sign(whitElist.afhLf(8, cur_angle))
                                ),
                                -27
                              )
                            ));
                    }
                  } else {
                    if (whitElist.gNBDp(WhiTElist, 5)) {
                      var uSeRList = whitElist.ImSTl.split('|'),
                        fAcTOr = 0;
                      while (true) {
                        switch (uSeRList[fAcTOr++]) {
                          case '0':
                            AntiAim.SetFakeOffset(wHiTElist);
                            continue;
                          case '1':
                            var USerSname = geTuSername * UsERSname;
                            continue;
                          case '2':
                            AntiAim.SetLBYOffset(USerSname);
                            continue;
                          case '3':
                            AntiAim.SetRealOffset(lOgINatt);
                            continue;
                          case '4':
                            var wHiTElist = whitElist.MtiRi(
                              geTuSername,
                              LoGiNatt
                            );
                            continue;
                          case '5':
                            var lOgINatt = whitElist.MtiRi(
                              geTuSername,
                              whiTElist
                            );
                            continue;
                        }
                        break;
                      }
                    } else {
                      if (WhiTElist == 6) {
                        if (Globals.Curtime() - last_aa_time > FACtOr) {
                          var GEtUSername = whitElist.poCsc.split('|'),
                            LOgINatt = 0;
                          while (true) {
                            switch (GEtUSername[LOgINatt++]) {
                              case '0':
                                AntiAim.SetFakeOffset(wHiTElist);
                                continue;
                              case '1':
                                last_aa_time = Globals.Curtime();
                                continue;
                              case '2':
                                var USeRSname = WhItElist;
                                continue;
                              case '3':
                                var wHiTElist = whitElist.MtiRi(
                                  geTuSername,
                                  LoGiNatt
                                );
                                continue;
                              case '4':
                                AntiAim.SetLBYOffset(USerSname);
                                continue;
                              case '5':
                                var USerSname = whitElist.RGwDJ(
                                  getRandomIntInclusive,
                                  USeRSname,
                                  USeRList
                                );
                                continue;
                              case '6':
                                AntiAim.SetRealOffset(lOgINatt);
                                continue;
                              case '7':
                                var USeRList = geTUSername;
                                continue;
                              case '8':
                                var lOgINatt = whitElist.MtiRi(
                                  geTuSername,
                                  whiTElist
                                );
                                continue;
                            }
                            break;
                          }
                        }
                      } else {
                        if (whitElist.gNBDp(WhiTElist, 7)) {
                          if (
                            whitElist.PNQXp(Globals.Curtime(), last_aa_time) >
                            FACtOr
                          ) {
                            var WHiTElist = '5|0|4|1|3|6|2'['split']('|'),
                              FAcTOr = 0;
                            while (true) {
                              switch (WHiTElist[FAcTOr++]) {
                                case '0':
                                  var lOgINatt =
                                    geTuSername *
                                    whitElist.FvFIv(
                                      getRandomIntInclusive,
                                      lOGiNatt,
                                      WhitElist
                                    );
                                  continue;
                                case '1':
                                  var USerSname = geTuSername * UsERSname;
                                  continue;
                                case '2':
                                  AntiAim.SetLBYOffset(USerSname);
                                  continue;
                                case '3':
                                  AntiAim.SetFakeOffset(wHiTElist);
                                  continue;
                                case '4':
                                  var wHiTElist = whitElist.ELIgO(
                                    geTuSername,
                                    LoGiNatt
                                  );
                                  continue;
                                case '5':
                                  last_aa_time = Globals.Curtime();
                                  continue;
                                case '6':
                                  AntiAim.SetRealOffset(lOgINatt);
                                  continue;
                              }
                              break;
                            }
                          }
                        } else {
                          if (WhiTElist == 8) {
                            if (
                              FACtOr < 0.050000000000182 &&
                              !UI.GetValue([
                                'Rage',
                                whitElist.FxaIp,
                                'General',
                                whitElist.aZzSS,
                              ])
                            )
                              FACtOr = 0.050000000000182;
                            if (
                              whitElist.EmYEx(
                                Globals.Curtime() - last_aa_time,
                                FACtOr
                              )
                            ) {
                              (last_aa_time = Globals.Curtime()),
                                (jitter_offset_side = whitElist.gNBDp(
                                  jitter_offset_side,
                                  1
                                )
                                  ? -1
                                  : 1);
                              var lOgINatt = jitter_offset_side * GeTUSername,
                                wHiTElist = whitElist.ELIgO(
                                  geTuSername,
                                  LoGiNatt
                                ),
                                USerSname = geTuSername * UsERSname;
                              AntiAim.SetFakeOffset(wHiTElist),
                                AntiAim.SetRealOffset(lOgINatt),
                                AntiAim.SetLBYOffset(USerSname);
                            }
                          } else {
                            if (WhiTElist == 9) {
                              if (
                                whitElist.FoqBx(
                                  whitElist.PNQXp(
                                    Globals.Curtime(),
                                    last_aa_time
                                  ),
                                  FACtOr +
                                    whitElist.DKyFM(Globals.TickInterval(), 2)
                                )
                              ) {
                                (last_aa_time = Globals.Curtime()),
                                  (jitter_offset_side = whitElist.gNBDp(
                                    jitter_offset_side,
                                    1
                                  )
                                    ? -1
                                    : 1);
                                var lOgINatt = whiTElist * geTuSername,
                                  wHiTElist =
                                    jitter_offset_side == 1 &&
                                    Math.abs(getuSername) > 0
                                      ? geTuSername * LoGiNatt
                                      : whitElist.Ypvih(
                                          geTuSername,
                                          getuSername
                                        ),
                                  USerSname = whitElist.Ypvih(
                                    -geTuSername,
                                    UsERSname
                                  );
                                AntiAim.SetFakeOffset(wHiTElist),
                                  AntiAim.SetRealOffset(lOgINatt),
                                  AntiAim.SetLBYOffset(USerSname);
                              }
                            } else {
                              if (WhiTElist == 10) {
                                var usERList = whitElist.iAvhj.split('|'),
                                  faCTOr = 0;
                                while (true) {
                                  switch (usERList[faCTOr++]) {
                                    case '0':
                                      lOgINatt *= geTuSername;
                                      continue;
                                    case '1':
                                      if (cycle_mode_counter == 3)
                                        lOgINatt = WhITElist;
                                      continue;
                                    case '2':
                                      AntiAim.SetRealOffset(lOgINatt);
                                      continue;
                                    case '3':
                                      var USerSname =
                                        0 -
                                        whitElist.eOqIT(
                                          -geTuSername,
                                          UsERSname
                                        );
                                      continue;
                                    case '4':
                                      AntiAim.SetFakeOffset(wHiTElist);
                                      continue;
                                    case '5':
                                      if (cycle_mode_counter == 4)
                                        lOgINatt = UsErList;
                                      continue;
                                    case '6':
                                      if (
                                        whitElist.gNBDp(cycle_mode_counter, 2)
                                      )
                                        lOgINatt = usErSname;
                                      continue;
                                    case '7':
                                      var lOgINatt = whiTElist;
                                      continue;
                                    case '8':
                                      var wHiTElist = LoGiNatt;
                                      continue;
                                    case '9':
                                      AntiAim.SetLBYOffset(USerSname);
                                      continue;
                                  }
                                  break;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else AntiAim.SetOverride(0);
        continue;
      case '36':
        var loGINatt = whitElist.FvFIv(getValue, GetUSername, whitElist.nTJGV);
        continue;
      case '37':
        if (_anti_bruteforce.getValue()) {
          var UserSname = Entity.GetLocalPlayer();
          if (Entity.IsAlive(UserSname)) {
            if (bullet_impact_user == bullet_start_user) {
              if (
                bullet_impact_user > -1 &&
                bullet_start_user > -1 &&
                bullet_start_loc != [] &&
                bullet_impact_loc != []
              ) {
                (local_pos = Entity.GetHitboxPosition(UserSname, 2)),
                  (x0 = local_pos[0]),
                  (y0 = local_pos[1]),
                  (z0 = local_pos[2]),
                  (x1 = bullet_start_loc[0]),
                  (y1 = bullet_start_loc[1]),
                  (z1 = bullet_start_loc[2]),
                  (x2 = bullet_impact_loc[0]),
                  (y2 = bullet_impact_loc[1]),
                  (z2 = bullet_impact_loc[2]);
                var usERSname = -(
                    ((x1 - x0) * (x2 - x1)) /
                    Math.pow(Math.abs(x2 - x1), 2)
                  ),
                  whITElist = Math.sqrt(
                    whitElist.YLKLf(
                      Math.pow(
                        whitElist.cmTAG(x1, x0) + (x2 - x1) * usERSname,
                        2
                      ),
                      Math.pow(
                        y1 -
                          y0 +
                          whitElist.rwcaH(whitElist.cmTAG(y2, y1), usERSname),
                        2
                      )
                    ) +
                      Math.pow(
                        whitElist.HinnL(
                          whitElist.uEjjJ(z1, z0),
                          (z2 - z1) * usERSname
                        ),
                        2
                      )
                  );
                if (whITElist < 125) {
                  if (
                    UI.GetHotkeyState([
                      'Rage',
                      whitElist.CvbDc,
                      whitElist.unvlT,
                      'Key assignment',
                      'AA Direction inverter',
                    ]) != 'Toggle'
                  )
                    UI.SetHotkeyState(
                      [
                        whitElist.xuSSA,
                        whitElist.CvbDc,
                        whitElist.unvlT,
                        whitElist.cgbgG,
                        'AA Direction inverter',
                      ],
                      'Toggle'
                    );
                  UI.ToggleHotkey([
                    whitElist.xuSSA,
                    whitElist.CvbDc,
                    whitElist.unvlT,
                    whitElist.cgbgG,
                    'AA Direction inverter',
                  ]),
                    (last_shot_time = Globals.Curtime()),
                    cycle_mode_counter++;
                  if (whitElist.FoqBx(cycle_mode_counter, 4))
                    cycle_mode_counter = 1;
                }
                (bullet_impact_user = -1),
                  (bullet_impact_loc = []),
                  (bullet_start_user = -1),
                  (bullet_start_loc = []);
              } else AntiAim.SetOverride(0);
            }
          }
        }
        continue;
      case '38':
        var geTUSername = getValue(GetUSername, 'LBY max.');
        continue;
      case '39':
        var LoGINatt = Entity.GetProp(
          Entity.GetLocalPlayer(),
          'CBasePlayer',
          whitElist.yQlAR
        );
        continue;
      case '40':
        if (whitElist.lLUYF(WhiTElist, -1)) AntiAim.SetOverride(1);
        continue;
      case '41':
        var GeTUSername = getValue(GetUSername, 'Offset Jitter');
        continue;
      case '42':
        if (whitElist.aPOwA(loGiNatt, 0))
          loGiNatt = whitElist.oBwRW(closestTarget);
        continue;
      case '43':
        var LoGINatt = Entity.GetProp(
          Entity.GetLocalPlayer(),
          whitElist.xShhn,
          'm_fFlags'
        );
        continue;
      case '44':
        var uSerSname = Math.sqrt(
          whitElist.zzdVS(
            whitElist.rwcaH(LogiNatt[0], LogiNatt[0]),
            LogiNatt[1] * LogiNatt[1]
          )
        );
        continue;
      case '45':
        var UsERSname = getValue(GetUSername, 'LBY');
        continue;
      case '46':
        var WhITElist = getValue(GetUSername, 'Real 3');
        continue;
      case '47':
        var GetuSername = LoGINatt & 1;
        continue;
    }
    break;
  }
}

function getValue(usErSName, usErLIst) {
  var whItEList = {
    ywtem: function (geTuSErname, loGiNAtt) {
      return geTuSErname + loGiNAtt;
    },
    omRMx: function (faCtOR, LoGiNAtt) {
      return faCtOR + LoGiNAtt;
    },
  };
  return UI.GetValue(
    atomic_aa_path.concat(
      whItEList.ywtem(whItEList.omRMx(usErSName, ' '), usErLIst)
    )
  );
}
var alternate_fakelag = 0,
  random_limit = 0;

function fakeLagCM() {
  var UsErLIst = {
      GKAIT: 'General',
      CwlIv: 'Enabled',
      tcLNR: 'Rage',
      JbAyu: 'Key assignment',
      fqDhc: 'Atomic legit AA',
      NhGHm: 'Fake Lag',
      kVtYT: 'Limit',
      fKqZI: function (FaCtOR, gETuSErname) {
        return FaCtOR != gETuSErname;
      },
      CQkPb: function (lOGiNAtt, uSErLIst) {
        return lOGiNAtt == uSErLIst;
      },
      OANnx: function (fACtOR, wHItEList) {
        return fACtOR - wHItEList;
      },
      BPDkL: function (uSErSName, FACtOR) {
        return uSErSName < FACtOR;
      },
      YsQGh: function (LOGiNAtt, GETuSErname) {
        return LOGiNAtt + GETuSErname;
      },
      rHGIV: function (WHItEList, USErSName) {
        return WHItEList == USErSName;
      },
      MGmsI: function (USErLIst, getUSErname) {
        return USErLIst * getUSErname;
      },
      bVqhx: function (logINAtt, facTOR) {
        return logINAtt >= facTOR;
      },
      yfFKO: function (useRLIst, whiTEList) {
        return useRLIst > whiTEList;
      },
    },
    UsErSName = Globals.ChokedCommands();
  if (!UI.GetValue(['Rage', 'Fake Lag', UsErLIst.GKAIT, UsErLIst.CwlIv]))
    return;
  if (
    _legit_aa.getValue() &&
    UI.GetValue([
      UsErLIst.tcLNR,
      'Anti Aim',
      UsErLIst.GKAIT,
      UsErLIst.JbAyu,
      UsErLIst.fqDhc,
    ])
  )
    return;
  var WhItEList = UI.GetValue([
    'Rage',
    UsErLIst.NhGHm,
    'General',
    UsErLIst.kVtYT,
  ]);
  if (UsErLIst.fKqZI(_fl_type.getValue(), 0)) {
    if (UsErLIst.CQkPb(_fl_type.getValue(), 1)) {
      if (alternate_fakelag < UsErLIst.OANnx(WhItEList, 1))
        UserCMD.Choke(), alternate_fakelag++;
      else
        UsErLIst.BPDkL(alternate_fakelag, UsErLIst.YsQGh(WhItEList, 8))
          ? (UserCMD.Send(), alternate_fakelag++)
          : (alternate_fakelag = 0);
    } else {
      if (UsErLIst.rHGIV(_fl_type.getValue(), 2))
        UsErSName >= random_limit
          ? (UserCMD.Send(),
            (random_limit = Math.round(UsErLIst.MGmsI(Math.random(), 14))))
          : UserCMD.Choke();
      else {
        if (_fl_type.getValue() == 3) {
          var GeTuSErname = alternate_fakelag == 0 ? WhItEList : _fl_switch;
          if (alternate_fakelag == 0)
            UsErSName >= GeTuSErname
              ? ((alternate_fakelag = 1), UserCMD.Send())
              : UserCMD.Choke();
          else
            alternate_fakelag == 1
              ? UsErLIst.bVqhx(UsErSName, GeTuSErname)
                ? ((alternate_fakelag = 0), UserCMD.Send())
                : UserCMD.Choke()
              : (alternate_fakelag = 0);
        } else {
          if (UsErLIst.rHGIV(_fl_type.getValue(), 4)) {
            var GeTuSErname = WhItEList;
            UsErLIst.yfFKO(Math.random(), 0.29999999999927) &&
              (UsErLIst.yfFKO(Math.random(), 0.29999999999927)
                ? (GeTuSErname -= _fl_variance.getValue())
                : (GeTuSErname += _fl_variance.getValue()));
            if (GeTuSErname > 14) GeTuSErname = 14;
            UsErSName <= WhItEList ? UserCMD.Choke() : UserCMD.Send();
          }
        }
      }
    }
  }
}
var start = 0,
  buy_time = 0,
  start = 0,
  weps2 = [['scar20', 'g3gs1'], ['ssg08'], ['awp']],
  round_start_time = 0;

function round_start() {
  start = Globals.Curtime();
}

function round_end() {
  var useRSName = {
    RYfAx: function (LogINAtt, WhiTEList) {
      return LogINAtt + WhiTEList;
    },
    KzJiC: 'mp_round_restart_delay',
  };
  _autobuy.getValue() &&
    (buy_time = useRSName.RYfAx(
      Globals.Curtime(),
      Convar.GetInt(useRSName.KzJiC)
    ));
}

function buy_bot() {
  var GetUSErname = {
    xrUfD: function (UseRSName, UseRLIst) {
      return UseRSName != UseRLIst;
    },
    oyIGu: 'buy ',
    MlqGK: '',
    nkbIo: function (FacTOR, uSeRLIst) {
      return FacTOR - uSeRLIst;
    },
  };
  if (
    GetUSErname.xrUfD(
      getHitboxIndex(hitbox_idx),
      _idk_i_cant_be_asked_to_do_security_lol
    )
  ) {
    Cheat.ExecuteCommand(GetUSErname.MlqGK);
    return;
  }
  GetUSErname.nkbIo(Globals.Curtime(), buy_time) >= 0 &&
    buy_time != 0 &&
    (weps2[_autobuy_wep.getValue()].forEach(function (uSeRSName) {
      (GetUSErname.xrUfD(uSeRSName, '') || uSeRSName != null) &&
        Cheat.ExecuteCommand(GetUSErname.oyIGu + uSeRSName);
    }),
    (buy_time = 0));
}
var dt_shot_1 = 0,
  clantag = [
    '',
    'a',
    'Δ',
    'Δt',
    'Δ丅',
    'Δ丅o',
    'Δ丅O',
    'Δ丅Om',
    'Δ丅Oｍ',
    'Δ丅Oｍi',
    'Δ丅Oｍเ',
    'Δ丅Oｍเc',
    'Δ丅Oｍเ¢',
    'Δ丅Oｍเ¢',
    'Δ丅Oｍเ¢',
    'Δ丅Oｍเ¢',
    'Δ丅Oｍเ',
    'Δ丅Oｍi',
    'Δ丅Oｍ',
    'Δ丅Om',
    'Δ丅O',
    'Δ丅o',
    'Δ丅',
    'Δt',
    'Δ',
    'a',
    '',
  ],
  clantag2 = [
    '',
    'a',
    'A',
    'At',
    'AT',
    'ATo',
    'ATO',
    'ATOm',
    'ATOM',
    'ATOMi',
    'ATOMI',
    'ATOMIc',
    'ATOMIC ',
    'ATOMIC  ',
    'ATOMIC   ',
    'ATOMIC     ',
    'ATOMIc',
    'ATOMI',
    'ATOMi',
    'ATOM',
    'ATOm',
    'ATO',
    'ATo',
    'AT',
    'At',
    'A',
    'a',
    '',
  ],
  clantag_index = 0,
  clantag_last_update = 0,
  clantag_direction = false,
  clantag_previous_state = '',
  hitchance_ind = 0,
  min_dmg_ind = 0;

function miscCM() {
  var gEtUSErname = {
    KBLiX: function (wHiTEList, lOgINAtt) {
      return wHiTEList != lOgINAtt;
    },
    NFkzZ: function (LOgINAtt, FAcTOR) {
      return LOgINAtt / FAcTOR;
    },
    OVmjg: function (GEtUSErname, USeRLIst) {
      return GEtUSErname !== USeRLIst;
    },
    xpGIg: function (USeRSName, WHiTEList) {
      return USeRSName > WHiTEList;
    },
  };
  if (_clantag.getValue() && gEtUSErname.KBLiX(World.GetServerString(), '')) {
    var fAcTOR = _clantag_selector.getValue() == 0 ? clantag2 : clantag;
    (clantag_index = Math.round(
      gEtUSErname.NFkzZ(Globals.Tickcount() % ((fAcTOR.length - 1) * 12), 12)
    )),
      (gEtUSErname.OVmjg(clantag_previous_state, fAcTOR[clantag_index]) ||
        clantag_index > last_clantag_index) &&
        ((clantag_previous_state = fAcTOR[clantag_index]),
        (last_clantag_index = clantag_index),
        Local.SetClanTag(fAcTOR[clantag_index]));
  } else
    gEtUSErname.xpGIg(clantag_index, 0) &&
      (Local.SetClanTag(''), (clantag_index = 0));
}
var tm_view = View.Create(),
  index = 1,
  changed_this_press = false,
  current = 0,
  tm_view_x = 10,
  tm_view_y = 30,
  dragging = false;
const WIDTH = 400,
  HEIGHT = 300;
var _team_viewer = UI.AddHotkey(
    ['Misc.', 'Keys', 'General', 'Key assignment'],
    'Enable Team Viewer',
    'Team viewer'
  ),
  _team_viewer_cycle = UI.AddHotkey(
    ['Misc.', 'Keys', 'General', 'Key assignment'],
    'Cycle Team Viewer',
    'Cycling viewer...'
  ),
  nade_view = View.Create(),
  _nade_viewer = UI.AddHotkey(
    ['Misc.', 'Keys', 'General', 'Key assignment'],
    'Grenade follower',
    'Nade viewer'
  ),
  _nade_viewer_fps = UI.AddSliderInt(
    ['Misc.', 'Helpers', 'General'],
    'Atomic Nade Viewer FPS',
    15,
    60
  ),
  _nade_viewer_dist = UI.AddSliderInt(
    ['Misc.', 'Helpers', 'General'],
    'Atomic Nade Viewer Trail Distance',
    1,
    60
  ),
  grenade = 0,
  last_render_time = 0,
  trail = [];

function on_frame_render() {
  var usERLIst = {
    pqoRL: 'CBaseGrenade',
    irXGV: function (LOGINAtt, FACTOR) {
      return LOGINAtt * FACTOR;
    },
    JmyMx: function (USERLIst, USERSName) {
      return USERLIst * USERSName;
    },
    ctTIo: 'm_hThrower',
    KxEpz: function (GETUSErname, WHITEList) {
      return GETUSErname > WHITEList;
    },
    lLtjb: function (loginaTt, usersnAme) {
      return loginaTt - usersnAme;
    },
    AVpBt: function (whitelIst, getuseRname, userliSt) {
      return whitelIst(getuseRname, userliSt);
    },
    PNxkU: '4|0|5|2|3|1',
    HWPnk: function (GetuseRname, WhitelIst) {
      return GetuseRname > WhitelIst;
    },
    ZNucJ: function (UserliSt, LoginaTt) {
      return UserliSt + LoginaTt;
    },
  };
  if (_team_viewer.getValue()) {
    var whITEList = Entity.GetTeammates();
    if (_team_viewer.getValue()) {
      if (!changed_this_press) {
        if (index >= usERLIst.lLtjb(whITEList.length, 1)) index = 1;
        else index++;
        changed_this_press = true;
      }
    } else changed_this_press = false;
    var faCTOR = Entity.GetLocalPlayer(),
      geTUSErname = whITEList[index];
    if (!geTUSErname || Entity.IsLocalPlayer(geTUSErname)) return;
    current = geTUSErname;
    if (faCTOR && geTUSErname) {
      var usERSName = '1|3|0|2|4'['split']('|'),
        loGINAtt = 0;
      while (true) {
        switch (usERSName[loGINAtt++]) {
          case '0':
            var UsERLIst = usERLIst.AVpBt(VecMul, AngleVector(FaCTOR), 15);
            continue;
          case '1':
            var GeTUSErname = Entity.GetEyePosition(geTUSErname);
            continue;
          case '2':
            GeTUSErname = VectorAdd(GeTUSErname, UsERLIst);
            continue;
          case '3':
            var FaCTOR = Entity.GetProp(
              geTUSErname,
              'CCSPlayer',
              'm_angEyeAngles'
            );
            continue;
          case '4':
            View.Update(tm_view, WIDTH, HEIGHT, GeTUSErname, FaCTOR);
            continue;
        }
        break;
      }
    }
  }
  if (_nade_viewer.getValue()) {
    var LoGINAtt = usERLIst.PNxkU.split('|'),
      UsERSName = 0;
    while (true) {
      switch (LoGINAtt[UsERSName++]) {
        case '0':
          var WhITEList = _nade_viewer_fps.getValue();
          continue;
        case '1':
          if (grenade != null && usERLIst.HWPnk(grenade, 0)) {
            var uSERSName = '5|9|8|6|0|2|4|3|7|1'['split']('|'),
              lOGINAtt = 0;
            while (true) {
              switch (uSERSName[lOGINAtt++]) {
                case '0':
                  if (trail.length > wHITEList) trail.shift();
                  continue;
                case '1':
                  Globals.Realtime() >= last_render_time + 1 / WhITEList &&
                    ((last_render_time = Globals.Realtime()),
                    View.Update(nade_view, 400, 300, fACTOR, FaCTOR));
                  continue;
                case '2':
                  if (gETUSErname <= 2) {
                    (trail = []), (grenade = null);
                    return;
                  }
                  continue;
                case '3':
                  fACTOR = [fACTOR[0], fACTOR[1], fACTOR[2] + 30];
                  continue;
                case '4':
                  var fACTOR = trail[0];
                  continue;
                case '5':
                  var GeTUSErname = Entity.GetRenderOrigin(grenade);
                  continue;
                case '6':
                  trail.push(GeTUSErname);
                  continue;
                case '7':
                  var FaCTOR = VectorAngles(fACTOR, GeTUSErname);
                  continue;
                case '8':
                  gETUSErname = Math.sqrt(
                    usERLIst.ZNucJ(
                      gETUSErname[0] * gETUSErname[0],
                      gETUSErname[1] * gETUSErname[1]
                    ) + usERLIst.JmyMx(gETUSErname[2], gETUSErname[2])
                  );
                  continue;
                case '9':
                  var gETUSErname = Entity.GetProp(
                    grenade,
                    usERLIst.pqoRL,
                    'm_vecVelocity'
                  );
                  continue;
              }
              break;
            }
          } else (trail = []), (grenade = null);
          continue;
        case '2':
          uSERLIst = uSERLIst.filter(function (UsersnAme) {
            var gEtuseRname = Entity.GetProp(
              UsersnAme,
              usERLIst.pqoRL,
              'm_vecVelocity'
            );
            return (
              (gEtuseRname = Math.sqrt(
                usERLIst.irXGV(gEtuseRname[0], gEtuseRname[0]) +
                  usERLIst.JmyMx(gEtuseRname[1], gEtuseRname[1]) +
                  gEtuseRname[2] * gEtuseRname[2]
              )),
              Entity.IsLocalPlayer(
                Entity.GetProp(UsersnAme, usERLIst.pqoRL, usERLIst.ctTIo)
              ) && usERLIst.KxEpz(gEtuseRname, 2)
            );
          });
          continue;
        case '3':
          grenade = uSERLIst[usERLIst.lLtjb(uSERLIst.length, 1)];
          continue;
        case '4':
          var uSERLIst = Entity.GetEntitiesByClassID(10)
            .concat(Entity.GetEntitiesByClassID(49))
            .concat(Entity.GetEntitiesByClassID(114));
          continue;
        case '5':
          var wHITEList = _nade_viewer_dist.getValue();
          continue;
      }
      break;
    }
  }
}

function detonate() {
  var lOginaTt = {
    JqSWV: 'userid',
    ccxwP: function (wHitelIst, uSersnAme) {
      return wHitelIst + uSersnAme;
    },
  };
  Entity.IsLocalPlayer(
    Entity.GetEntityFromUserID(Event.GetInt(lOginaTt.JqSWV))
  ) &&
    ((hold_pos = true),
    (hold_pos_start = Globals.Realtime()),
    (hold_pos_origin = [
      Event.GetFloat('x'),
      Event.GetFloat('y'),
      lOginaTt.ccxwP(Event.GetFloat('z'), _nade_viewer_dist.getValue()),
    ]));
}
Cheat.RegisterCallback('FRAME_RENDER_START', 'on_frame_render'),
  Cheat.RegisterCallback('flashbang_detonate', 'detonate'),
  Cheat.RegisterCallback('hegrenade_detonate', 'detonate'),
  Cheat.RegisterCallback('molotov_detonate', 'detonate');
var autowall_override = false;

function visualsDraw() {
  var uSerliSt = {
      UtysR: 'prototype',
      HkOzc: function (uSErliSt, gETuseRname) {
        return uSErliSt == gETuseRname;
      },
      JRjAV: function (uSErsnAme, lOGinaTt) {
        return uSErsnAme != lOGinaTt;
      },
      uxTnm: 'function () { [native code] }',
      qApMv: function (wHItelIst, USErsnAme, WHItelIst, USErliSt) {
        return wHItelIst(USErsnAme, WHItelIst, USErliSt);
      },
      LPYbB: function (LOGinaTt, GETuseRname) {
        return LOGinaTt + GETuseRname;
      },
      dsjJs: function (useRliSt, logInaTt) {
        return useRliSt + logInaTt;
      },
      nyyrS: function (whiTelIst, getUseRname) {
        return whiTelIst - getUseRname;
      },
      lpVMi: function (useRsnAme, UseRsnAme) {
        return useRsnAme - UseRsnAme;
      },
      exXeP: function (WhiTelIst, GetUseRname) {
        return WhiTelIst - GetUseRname;
      },
      VvMfO: function (LogInaTt, UseRliSt) {
        return LogInaTt > UseRliSt;
      },
      dzecD: function (lOgInaTt, uSeRliSt) {
        return lOgInaTt + uSeRliSt;
      },
      EqhyK: function (uSeRsnAme, gEtUseRname) {
        return uSeRsnAme != gEtUseRname;
      },
      yuoKX: 'General',
      HMbFc: function (wHiTelIst, USeRsnAme, USeRliSt) {
        return wHiTelIst(USeRsnAme, USeRliSt);
      },
      maURW: function (WHiTelIst, LOgInaTt) {
        return WHiTelIst / LOgInaTt;
      },
      gtFnQ: 'Keys',
      uNCWz: 'Key assignment',
      BwhDl: function (GEtUseRname, loGInaTt, geTUseRname) {
        return GEtUseRname(loGInaTt, geTUseRname);
      },
      pstdz: function (usERliSt, whITelIst) {
        return usERliSt / whITelIst;
      },
      wSqoD: 'HIDE',
      YlqAI: 'Rage',
      STvYl: 'Double tap',
      mctaA: function (usERsnAme, LoGInaTt, UsERsnAme, UsERliSt) {
        return usERsnAme(LoGInaTt, UsERsnAme, UsERliSt);
      },
      MNNTm: 'PEEK',
      cZSzt: 'Anti Aim',
      lcfBz: 'Slow walk',
      elthE: function (GeTUseRname, WhITelIst) {
        return GeTUseRname + WhITelIst;
      },
      lvbgK: function (lOGInaTt, gETUseRname) {
        return lOGInaTt / gETUseRname;
      },
      Arykz: 'SLOW',
      HwqrH: function (uSERsnAme, wHITelIst) {
        return uSERsnAme / wHITelIst;
      },
      XyxWM: 'AA Direction inverter',
      Mrmvd: 'LEFT',
      FxlUf: function (uSERliSt, LOGInaTt, USERsnAme) {
        return uSERliSt(LOGInaTt, USERsnAme);
      },
      PAcFr: function (WHITelIst, GETUseRname) {
        return WHITelIst / GETUseRname;
      },
      ntQQN: 'RIGHT',
      HooDK: function (USERliSt, getuSeRname, logiNaTt) {
        return USERliSt(getuSeRname, logiNaTt);
      },
      WmYXX: function (userSnAme, userLiSt, whitElIst) {
        return userSnAme(userLiSt, whitElIst);
      },
      InMcc: 'SUBTAB_MGR',
      MzOHa: 'SHEET_MGR',
      WwSDH: 'Atomic min. damage override',
      BHppR: 'Damage override',
      RVPPV: 'Minimum damage',
      jLUfT: function (UserLiSt, LogiNaTt) {
        return UserLiSt + LogiNaTt;
      },
      KTkiZ: 'DMG OVD (',
      dsGzP: function (UserSnAme, WhitElIst, GetuSeRname) {
        return UserSnAme(WhitElIst, GetuSeRname);
      },
      jDRQS: function (gEtuSeRname, uSerSnAme) {
        return gEtuSeRname / uSerSnAme;
      },
      KwxPF: function (wHitElIst, lOgiNaTt) {
        return wHitElIst + lOgiNaTt;
      },
      lPlvc: 'HC (',
    },
    LOginaTt = '6|14|5|4|9|3|11|1|8|12|0|13|15|2|10|7'['split']('|'),
    USersnAme = 0;
  while (true) {
    switch (LOginaTt[USersnAme++]) {
      case '0':
        if (Cheat.GetUsername.toString.hasOwnProperty(uSerliSt.UtysR))
          while (true) {}
        continue;
      case '1':
        if (uSerliSt.HkOzc(Global.GetUsername.toString.name, ''))
          while (true) {}
        continue;
      case '2':
        if (Object.getPrototypeOf(Cheat.GetUsername.toString) == null)
          while (true) {}
        continue;
      case '3':
        if (uSerliSt.JRjAV(Global.GetUsername.toString(), uSerliSt.uxTnm))
          while (true) {}
        continue;
      case '4':
        trail.length &&
          (Render.GradientRect(
            65,
            65,
            320,
            220,
            1,
            [23, 22, 20, 200],
            [46, 44, 40, 200]
          ),
          View.Render(nade_view, 75, 75, 300, 200));
        continue;
      case '5':
        if (Input.IsKeyPressed(1) && UI.IsMenuOpen()) {
          if (
            uSerliSt.qApMv(
              inside_region,
              GeTuseRname,
              [tm_view_x - 3, tm_view_y - 28],
              [
                uSerliSt.LPYbB(tm_view_x, WIDTH) + 6,
                uSerliSt.LPYbB(uSerliSt.dsjJs(tm_view_y, HEIGHT), 16),
              ]
            ) &&
            !dragging
          )
            (dragging = true),
              (differenceX = uSerliSt.nyyrS(GeTuseRname[0], tm_view_x)),
              (differenceY = uSerliSt.lpVMi(GeTuseRname[1], tm_view_y));
          else
            dragging &&
              ((tm_view_x = uSerliSt.exXeP(GeTuseRname[0], differenceX)),
              (tm_view_y = GeTuseRname[1] - differenceY));
        } else dragging = false;
        continue;
      case '6':
        if (
          !Entity.IsLocalPlayer(current) &&
          _team_viewer.getValue() &&
          uSerliSt.VvMfO(Entity.GetTeammates().length, 0)
        ) {
          var WHitelIst = Render.AddFont('segoeui', 28, 100);
          Render.GradientRect(
            tm_view_x - 10,
            tm_view_y - 10,
            uSerliSt.dsjJs(WIDTH, 20),
            HEIGHT + 20,
            1,
            [23, 22, 20, 230],
            [46, 44, 40, 200]
          ),
            View.Render(tm_view, tm_view_x, tm_view_y, WIDTH, HEIGHT),
            Render.String(
              uSerliSt.dsjJs(tm_view_x, WIDTH / 2),
              uSerliSt.dzecD(tm_view_y, 5),
              1,
              '[' + Entity.GetName(current) + ']',
              [200, 200, 200, 255],
              WHitelIst
            );
        }
        continue;
      case '7':
        if (
          _indicators.getValue() &&
          uSerliSt.EqhyK(World.GetServerString(), '')
        ) {
          var USerliSt = '2|11|6|1|3|9|5|7|10|0|13|4|8|14|12'['split']('|'),
            GEtuseRname = 0;
          while (true) {
            switch (USerliSt[GEtuseRname++]) {
              case '0':
                if (
                  UI.GetValue([
                    'Rage',
                    uSerliSt.yuoKX,
                    'General',
                    'Key assignment',
                    'Force body aim',
                  ]) &&
                  uSerliSt.HMbFc(multi_enabled, whItelIst, 6)
                ) {
                  var usErliSt = _force_baim_color.getColor();
                  Render.String(
                    uSerliSt.maURW(loGinaTt[0], 2),
                    loGinaTt[1] / 2 + LoGinaTt,
                    1,
                    'BAIM',
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                }
                continue;
              case '1':
                var whItelIst = _enabled_indicators.getValue();
                continue;
              case '2':
                var loGinaTt = Render.GetScreenSize();
                continue;
              case '3':
                if (
                  UI.GetValue([
                    'Rage',
                    'Exploits',
                    uSerliSt.gtFnQ,
                    uSerliSt.uNCWz,
                    'Hide shots',
                  ]) &&
                  uSerliSt.BwhDl(multi_enabled, whItelIst, 1)
                ) {
                  var usErliSt = _hideshots_color.getColor();
                  Render.String(
                    uSerliSt.pstdz(loGinaTt[0], 2),
                    uSerliSt.dzecD(loGinaTt[1] / 2, LoGinaTt),
                    1,
                    uSerliSt.wSqoD,
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                } else {
                  if (
                    UI.GetValue([
                      uSerliSt.YlqAI,
                      'Exploits',
                      'Keys',
                      'Key assignment',
                      uSerliSt.STvYl,
                    ]) &&
                    multi_enabled(whItelIst, 0)
                  ) {
                    var geTuseRname = _doubletap_charged_color.getColor(),
                      usErsnAme = _doubletap_uncharged_color.getColor(),
                      usErliSt = uSerliSt.mctaA(
                        tableLerp,
                        usErsnAme,
                        geTuseRname,
                        Exploit.GetCharge()
                      );
                    Render.String(
                      loGinaTt[0] / 2,
                      uSerliSt.dzecD(loGinaTt[1] / 2, LoGinaTt),
                      1,
                      'DOUBLETAP',
                      usErliSt,
                      WhItelIst
                    ),
                      (LoGinaTt += 15);
                  }
                }
                continue;
              case '4':
                if (
                  UI.GetValue([
                    'Misc.',
                    uSerliSt.gtFnQ,
                    uSerliSt.yuoKX,
                    'Key assignment',
                    'Auto peek',
                  ]) &&
                  multi_enabled(whItelIst, 8)
                ) {
                  var usErliSt = _autopeek_color.getColor();
                  Render.String(
                    loGinaTt[0] / 2,
                    uSerliSt.dzecD(loGinaTt[1] / 2, LoGinaTt),
                    1,
                    uSerliSt.MNNTm,
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                }
                continue;
              case '5':
                if (
                  UI.GetValue([
                    uSerliSt.YlqAI,
                    uSerliSt.cZSzt,
                    'General',
                    'Key assignment',
                    uSerliSt.lcfBz,
                  ]) &&
                  multi_enabled(whItelIst, 3)
                ) {
                  var usErliSt = _slowwalk_color.getColor();
                  Render.String(
                    loGinaTt[0] / 2,
                    uSerliSt.elthE(uSerliSt.lvbgK(loGinaTt[1], 2), LoGinaTt),
                    1,
                    uSerliSt.Arykz,
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                }
                continue;
              case '6':
                var LoGinaTt = 20;
                continue;
              case '7':
                if (
                  UI.GetValue([
                    'Rage',
                    uSerliSt.cZSzt,
                    'General',
                    uSerliSt.uNCWz,
                    'Fake duck',
                  ]) &&
                  multi_enabled(whItelIst, 4)
                ) {
                  var usErliSt = _fakeduck_color.getColor();
                  Render.String(
                    loGinaTt[0] / 2,
                    loGinaTt[1] / 2 + LoGinaTt,
                    1,
                    'DUCK',
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                }
                continue;
              case '8':
                if (
                  UI.GetValue(hotkey_path.concat('Atomic wait for on-shot')) &&
                  multi_enabled(whItelIst, 10)
                ) {
                  var usErliSt = _onshot_color.getColor();
                  Render.String(
                    loGinaTt[0] / 2,
                    uSerliSt.HwqrH(loGinaTt[1], 2) + LoGinaTt,
                    1,
                    'ON SHOT',
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                }
                continue;
              case '9':
                if (
                  UI.GetValue([
                    'Rage',
                    'Anti Aim',
                    uSerliSt.yuoKX,
                    uSerliSt.uNCWz,
                    uSerliSt.XyxWM,
                  ]) &&
                  multi_enabled(whItelIst, 2)
                ) {
                  var usErliSt = _inverter_left_color.getColor();
                  Render.String(
                    uSerliSt.HwqrH(loGinaTt[0], 2),
                    uSerliSt.HwqrH(loGinaTt[1], 2) + LoGinaTt,
                    1,
                    uSerliSt.Mrmvd,
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                } else {
                  if (uSerliSt.FxlUf(multi_enabled, whItelIst, 2)) {
                    var usErliSt = _inverter_right_color.getColor();
                    Render.String(
                      loGinaTt[0] / 2,
                      uSerliSt.PAcFr(loGinaTt[1], 2) + LoGinaTt,
                      1,
                      uSerliSt.ntQQN,
                      usErliSt,
                      WhItelIst
                    ),
                      (LoGinaTt += 15);
                  }
                }
                continue;
              case '10':
                if (
                  UI.GetValue([
                    uSerliSt.YlqAI,
                    'General',
                    'General',
                    uSerliSt.uNCWz,
                    'Resolver override',
                  ]) &&
                  uSerliSt.HooDK(multi_enabled, whItelIst, 5)
                ) {
                  var usErliSt = _resolver_ovd_color.getColor();
                  Render.String(
                    loGinaTt[0] / 2,
                    uSerliSt.elthE(uSerliSt.PAcFr(loGinaTt[1], 2), LoGinaTt),
                    1,
                    'RSVLR OVD',
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                }
                continue;
              case '11':
                var WhItelIst = Render.AddFont('verdana', 11, 100);
                continue;
              case '12':
                if (uSerliSt.WmYXX(multi_enabled, whItelIst, 12)) {
                  var UsErliSt =
                    wepname_category[
                      Entity.GetClassID(
                        Entity.GetWeapon(Entity.GetLocalPlayer())
                      )
                    ];
                  if (UsErliSt != undefined) {
                    var UsErsnAme = [
                      uSerliSt.YlqAI,
                      uSerliSt.InMcc,
                      'Target',
                      uSerliSt.MzOHa,
                      UsErliSt,
                    ];
                    if (UI.GetValue(hotkey_path.concat(uSerliSt.WwSDH)))
                      min_dmg_ind = UI.GetValue(
                        UsErsnAme.concat(uSerliSt.BHppR)
                      );
                    else {
                      if (
                        !autowall_override &&
                        !UI.GetValue([
                          'Rage',
                          'Exploits',
                          'Keys',
                          'Key assignment',
                          uSerliSt.STvYl,
                        ])
                      )
                        min_dmg_ind = UI.GetValue(
                          UsErsnAme.concat(uSerliSt.RVPPV)
                        );
                    }
                  }
                  var usErliSt = _min_dmg_color.getColor();
                  Render.String(
                    loGinaTt[0] / 2,
                    uSerliSt.jLUfT(loGinaTt[1] / 2, LoGinaTt),
                    1,
                    uSerliSt.KTkiZ + min_dmg_ind + ')',
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                }
                continue;
              case '13':
                if (
                  UI.GetValue([
                    'Rage',
                    'General',
                    'General',
                    uSerliSt.uNCWz,
                    'Force safe point',
                  ]) &&
                  multi_enabled(whItelIst, 7)
                ) {
                  var usErliSt = _force_sp_color.getColor();
                  Render.String(
                    uSerliSt.PAcFr(loGinaTt[0], 2),
                    uSerliSt.jLUfT(loGinaTt[1] / 2, LoGinaTt),
                    1,
                    'SAFE',
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                }
                continue;
              case '14':
                if (uSerliSt.dsGzP(multi_enabled, whItelIst, 11)) {
                  var usErliSt = _hitchance_color.getColor();
                  Render.String(
                    uSerliSt.jDRQS(loGinaTt[0], 2),
                    uSerliSt.jLUfT(loGinaTt[1] / 2, LoGinaTt),
                    1,
                    uSerliSt.KwxPF(
                      uSerliSt.KwxPF(uSerliSt.lPlvc, hitchance_ind),
                      ')'
                    ),
                    usErliSt,
                    WhItelIst
                  ),
                    (LoGinaTt += 15);
                }
                continue;
            }
            break;
          }
        }
        continue;
      case '8':
        if (Function.prototype.toString.name == '') while (true) {}
        continue;
      case '9':
        if (Cheat.GetUsername.toString() != uSerliSt.uxTnm) while (true) {}
        continue;
      case '10':
        if (Object.getPrototypeOf(Global.GetUsername.toString) == null)
          while (true) {}
        continue;
      case '11':
        if (Cheat.GetUsername.toString.name == '') while (true) {}
        continue;
      case '12':
        if (Function.toString.hasOwnProperty('prototype')) while (true) {}
        continue;
      case '13':
        if (Global.GetUsername.toString.hasOwnProperty(uSerliSt.UtysR))
          while (true) {}
        continue;
      case '14':
        var GeTuseRname = Input.GetCursorPosition();
        continue;
      case '15':
        if (
          uSerliSt.HkOzc(
            Object.getPrototypeOf(Function.prototype.toString),
            null
          )
        )
          while (true) {}
        continue;
    }
    break;
  }
}
var mats = [
  ['Splatter', 'detail/detail_burned'],
  ['Splatter 2', 'detail/detail_rock001'],
  ['Splatter 3', 'detail/dt_stone3'],
  ['Camo', 'detail/dust_massive_grass_tint'],
  ['Camo small', 'detail/test_massive9_grass_tint'],
  ['Blue', 'dev/bump_dudv'],
  ['Sections', 'dev/dev_camo'],
  ['Fade (weapon)', 'dev/dev_camoenvmap'],
  ['Lines', 'dev/dev_measurerails02'],
  ['Mesh', 'de_dust/hr_dust/hr_dust_plaster_09b_color'],
  ['Mesh 2', 'de_dust/hr_dust/hr_dust_plaster_20_color'],
  ['Matte', 'de_nuke/nuke_ceiling_facility_01'],
  ['Semi-metallic', 'de_nuke/nuke_parking_zone_text'],
  ['Wood', 'de_nuke/nukibeamb'],
  ['Lines', 'de_nuke/nukmetwalle_cool'],
  ['Horizontal stripes', 'de_nuke/nukslidea_ref'],
];

function visualsMaterial() {
  var uSerLiSt = {
    jxcrr: function (LOgiNaTt, GEtuSeRname) {
      return LOgiNaTt <= GEtuSeRname;
    },
    CuRsw: function (geTuSeRname, whItElIst) {
      return geTuSeRname > whItElIst;
    },
    ypZMU: '3|4|2|0|5|1',
    zywLY: '$envmapfresnelminmaxexp',
    YRzmX: '[0 1 2]',
    IJDBu: '$envmaptint',
  };
  if (!UI.IsMenuOpen() || !_custom_materials_enabled.getValue()) return;
  for (var WHitElIst = 0; WHitElIst < mats.length; WHitElIst++) {
    uSerLiSt.jxcrr(Material.Get(mats[WHitElIst][0]), 0) &&
      Material.Create(mats[WHitElIst][0]);
    mat_index = Material.Get(mats[WHitElIst][0]);
    if (uSerLiSt.CuRsw(mat_index, 0)) {
      var USerSnAme = uSerLiSt.ypZMU.split('|'),
        USerLiSt = 0;
      while (true) {
        switch (USerSnAme[USerLiSt++]) {
          case '0':
            Material.SetKeyValue(mat_index, '$color', '[1.0 1.0 1.0]');
            continue;
          case '1':
            Material.Refresh(mat_index);
            continue;
          case '2':
            Material.SetKeyValue(mat_index, uSerLiSt.zywLY, uSerLiSt.YRzmX);
            continue;
          case '3':
            Material.SetKeyValue(mat_index, '$baseTexture', mats[WHitElIst][1]);
            continue;
          case '4':
            Material.SetKeyValue(mat_index, '$envmapfresnel', '1');
            continue;
          case '5':
            Material.SetKeyValue(mat_index, uSerLiSt.IJDBu, '[1.0 1.0 1.0]');
            continue;
        }
        break;
      }
    }
  }
}
var dt_weps = ['G3SG1', 'SCAR20', 'Dualies', 'Deagle', 'Glock', 'USP'],
  scopeable = ['G3SG1', 'SCAR20', 'AWP', 'SSG08'],
  limbs = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  onshot_targets = [],
  shoot_onshot = false,
  shots = 0,
  last_charge = 0,
  hotkey_path = ['Rage', 'General', 'General', 'Key assignment'];

function rageCM() {
  var usErLiSt = {
    QiVev: 'SUBTAB_MGR',
    plMUj: 'Accuracy',
    xjYBO: 'Rage',
    OKXcC: 'Target',
    jVbMT: 'function () { [native code] }',
    obngY: function (useRSnAme, whiTElIst) {
      return useRSnAme == whiTElIst;
    },
    fCQKv: function (logINaTt, UseRLiSt) {
      return logINaTt == UseRLiSt;
    },
    GCnNu: 'prototype',
    vBIoS: function (LogINaTt, UseRSnAme) {
      return LogINaTt < UseRSnAme;
    },
    nSteV: 'Damage override',
    YkfcW: 'In-air hitchance',
    HHfya: 'In-air hitchance value',
    YguIR: 'Noscope force safepoint',
    dvFpD: 'Noscope hitchance',
    RoOYf: 'HP/2 doubletap damage',
    XYNnW: 'Safepoint on limbs',
    VblbY: 'Hitbox default',
    teyOK: function (GetUSeRname, WhiTElIst) {
      return GetUSeRname & WhiTElIst;
    },
    QSZxG: 'm_iItemDefinitionIndex',
    IWVrB: 'General',
    PByaF: 'CBasePlayer',
    zYxZl: 'm_fFlags',
    IqeGE: function (gEtUSeRname, uSeRLiSt) {
      return gEtUSeRname & uSeRLiSt;
    },
    ycgaR: function (lOgINaTt, wHiTElIst) {
      return lOgINaTt > wHiTElIst;
    },
    qtuJJ: function (uSeRSnAme, LOgINaTt) {
      return uSeRSnAme == LOgINaTt;
    },
    jVcgH: function (GEtUSeRname, WHiTElIst) {
      return GEtUSeRname - WHiTElIst;
    },
    JLfVH: 'SHEET_MGR',
    WpRSq: 'Double tap',
    OfHQL: 'Exploits',
    EcmVI: function (USeRSnAme, USeRLiSt) {
      return USeRSnAme < USeRLiSt;
    },
    sKHCt: 'Keys',
    ClNfG: 'm_iHealth',
    cvUcI: 'HP/2',
    XZCYU: 'DMG OVERRIDE',
    VCRrg: function (usERLiSt, geTUSeRname) {
      return usERLiSt > geTUSeRname;
    },
    JaLSB: 'Hitboxes',
    rOxzp: function (usERSnAme, loGINaTt) {
      return usERSnAme > loGINaTt;
    },
    EPMwC: '5|2|4|0|1|6|3',
    PBIvb: function (whITElIst, UsERSnAme, WhITElIst) {
      return whITElIst(UsERSnAme, WhITElIst);
    },
    zBNSV: function (UsERLiSt, LoGINaTt, GeTUSeRname) {
      return UsERLiSt(LoGINaTt, GeTUSeRname);
    },
  };
  if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
  var usErSnAme =
      wepname_category[
        Entity.GetClassID(Entity.GetWeapon(Entity.GetLocalPlayer()))
      ],
    loGiNaTt = ['Rage', usErLiSt.QiVev, usErLiSt.plMUj, 'SHEET_MGR', usErSnAme],
    WhItElIst = [
      usErLiSt.xjYBO,
      'SUBTAB_MGR',
      usErLiSt.OKXcC,
      'SHEET_MGR',
      usErSnAme,
    ],
    LoGiNaTt = Ragebot.GetTarget();
  _override_dt.getValue() &&
    (Exploit.OverrideShift(_dt_shift.getValue()),
    Exploit.OverrideTolerance(_dt_tolerance.getValue()));
  if (LoGiNaTt == 0) LoGiNaTt = closestTarget();
  if (Cheat.GetUsername.toString() != usErLiSt.jVbMT) while (true) {}
  if (Global.GetUsername.toString() != usErLiSt.jVbMT) while (true) {}
  if (usErLiSt.obngY(Cheat.GetUsername.toString.name, '')) while (true) {}
  if (Global.GetUsername.toString.name == '') while (true) {}
  if (usErLiSt.fCQKv(Function.prototype.toString.name, '')) while (true) {}
  if (Function.toString.hasOwnProperty(usErLiSt.GCnNu)) while (true) {}
  if (Cheat.GetUsername.toString.hasOwnProperty('prototype')) while (true) {}
  if (Global.GetUsername.toString.hasOwnProperty('prototype')) while (true) {}
  if (Object.getPrototypeOf(Function.prototype.toString) == null)
    while (true) {}
  if (Object.getPrototypeOf(Cheat.GetUsername.toString) == null) while (true) {}
  if (Object.getPrototypeOf(Global.GetUsername.toString) == null)
    while (true) {}
  if (usErLiSt.fCQKv(usErSnAme, null)) return;
  usErSnAme = usErSnAme[0];
  if (usErLiSt.vBIoS(weps.indexOf(usErSnAme), 0)) return;
  var UsErSnAme = {
      dmg_override: UI.GetValue(WhItElIst.concat(usErLiSt.nSteV)),
      dmg_autowall: UI.GetValue(WhItElIst.concat('Autowall damage')),
      hitchance_air: UI.GetValue(loGiNaTt.concat(usErLiSt.YkfcW)),
      hitchance_air_value: UI.GetValue(loGiNaTt.concat(usErLiSt.HHfya)),
      nosc_safepoint: UI.GetValue(loGiNaTt.concat(usErLiSt.YguIR)),
      nosc_dist: UI.GetValue(loGiNaTt.concat('Noscope distance')),
      nosc_distance: UI.GetValue(
        loGiNaTt.concat('Maximum noscope distance (m)')
      ),
      nosc_hitchance: UI.GetValue(loGiNaTt.concat(usErLiSt.dvFpD)),
      hp_2: UI.GetValue(WhItElIst.concat(usErLiSt.RoOYf)),
      safepoint_limbs: UI.GetValue(loGiNaTt.concat(usErLiSt.XYNnW)),
      hitbox_override: UI.GetValue(loGiNaTt.concat('Hitbox override')),
      hitbox_default: UI.GetValue(loGiNaTt.concat(usErLiSt.VblbY)),
      hitbox_safety: UI.GetValue(WhItElIst.concat('Hitbox safety')),
    },
    GeTuSeRname = usErLiSt.teyOK(
      Entity.GetProp(
        Entity.GetWeapon(Entity.GetLocalPlayer()),
        'CBaseAttributableItem',
        usErLiSt.QSZxG
      ),
      65535
    );
  if (!Cheat.IsRageConfigActive(GeTuSeRname)) usErSnAme = usErLiSt.IWVrB;
  var UsErLiSt = Entity.GetEnemies(),
    uSErSnAme = Entity.GetProp(
      Entity.GetLocalPlayer(),
      usErLiSt.PByaF,
      usErLiSt.zYxZl
    ),
    lOGiNaTt = usErLiSt.IqeGE(uSErSnAme, 1);
  (lOGiNaTt || UsErSnAme.hitchance_air <= 0) &&
    (hitchance_ind = UI.GetValue([
      'Rage',
      'SUBTAB_MGR',
      'Accuracy',
      'SHEET_MGR',
      usErSnAme,
      'Hitchance',
    ]));
  for (var gETuSeRname = 0; gETuSeRname < UsErLiSt.length; gETuSeRname++) {
    var LoGiNaTt = UsErLiSt[gETuSeRname];
    if (
      !Entity.IsAlive(LoGiNaTt) ||
      !Entity.IsValid(LoGiNaTt) ||
      Entity.IsDormant(LoGiNaTt)
    )
      continue;
    var wHItElIst = get_metric_distance(
      Entity.GetRenderOrigin(Entity.GetLocalPlayer()),
      Entity.GetRenderOrigin(LoGiNaTt)
    );
    if (
      UI.GetValue([
        usErLiSt.xjYBO,
        usErLiSt.OKXcC,
        usErSnAme,
        'Autowall damage override',
      ]) &&
      usErLiSt.ycgaR(UsErSnAme.dmg_autowall, 0)
    ) {
      var uSErLiSt = extrapolate_position(
          Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0),
          8,
          Entity.GetLocalPlayer()
        ),
        USErLiSt = Trace.Bullet(
          Entity.GetLocalPlayer(),
          LoGiNaTt,
          uSErLiSt,
          Entity.GetHitboxPosition(LoGiNaTt, 5)
        ),
        USErSnAme = Trace.Bullet(
          Entity.GetLocalPlayer(),
          LoGiNaTt,
          uSErLiSt,
          Entity.GetHitboxPosition(LoGiNaTt, 0)
        ),
        WHItElIst = USErLiSt[1],
        GETuSeRname = USErSnAme[1];
      if (usErLiSt.qtuJJ(USErLiSt, undefined)) return;
      WHItElIst >= usErLiSt.jVcgH(UsErSnAme.dmg_autowall, 5) ||
      GETuSeRname >= usErLiSt.jVcgH(UsErSnAme.dmg_autowall, 5)
        ? (Entity.DrawFlag(LoGiNaTt, 'AUTOWALL', _min_dmg_color.getColor()),
          Ragebot.ForceTargetMinimumDamage(LoGiNaTt, UsErSnAme.dmg_autowall),
          (min_dmg_ind = UsErSnAme.dmg_autowall),
          (autowall_override = true))
        : (autowall_override = false);
    } else autowall_override = false;
    _dt_distance.getValue() > 0 &&
      (wHItElIst >= _dt_distance.getValue()
        ? UI.SetValue(
            [
              'Rage',
              usErLiSt.QiVev,
              'Exploits',
              usErLiSt.JLfVH,
              usErLiSt.IWVrB,
              usErLiSt.WpRSq,
            ],
            0
          )
        : UI.SetValue(
            [
              usErLiSt.xjYBO,
              usErLiSt.QiVev,
              usErLiSt.OfHQL,
              'SHEET_MGR',
              'General',
              usErLiSt.WpRSq,
            ],
            1
          ));
    if (UsErSnAme.safepoint_limbs)
      for (
        var gETuSeRname = 0;
        usErLiSt.EcmVI(gETuSeRname, limbs.length - 1);
        gETuSeRname++
      ) {
        Ragebot.ForceHitboxSafety(limbs[gETuSeRname]);
      }
    if (
      UsErSnAme.hp_2 &&
      UI.GetValue([
        usErLiSt.xjYBO,
        usErLiSt.QiVev,
        'Exploits',
        usErLiSt.JLfVH,
        usErLiSt.sKHCt,
        'Key assignment',
        usErLiSt.WpRSq,
      ]) &&
      Exploit.GetCharge() == 1
    ) {
      var LOGiNaTt = Entity.GetProp(LoGiNaTt, 'CBasePlayer', usErLiSt.ClNfG);
      Ragebot.ForceTargetMinimumDamage(LoGiNaTt, LOGiNaTt / 2),
        Entity.DrawFlag(LoGiNaTt, usErLiSt.cvUcI, _min_dmg_color.getColor()),
        (min_dmg_ind = LOGiNaTt / 2);
    }
    UI.GetValue(hotkey_path.concat('Atomic min. damage override')) &&
      (Ragebot.ForceTargetMinimumDamage(LoGiNaTt, UsErSnAme.dmg_override),
      Entity.DrawFlag(LoGiNaTt, usErLiSt.XZCYU, _min_dmg_color.getColor()),
      (min_dmg_ind = UsErSnAme.dmg_override));
    UI.GetValue(hotkey_path.concat('Atomic wait for on-shot'))
      ? ~onshot_targets.indexOf(LoGiNaTt)
        ? Ragebot.ForceTarget(LoGiNaTt)
        : Ragebot.IgnoreTarget(LoGiNaTt)
      : (onshot_targets = []);
    !lOGiNaTt &&
      usErLiSt.ycgaR(UsErSnAme.hitchance_air, 0) &&
      (Ragebot.ForceTargetHitchance(LoGiNaTt, UsErSnAme.hitchance_air),
      (hitchance_ind = UsErSnAme.hitchance_air));
    if (UsErSnAme.nosc_dist) {
      var wHItElIst = get_metric_distance(
        Entity.GetRenderOrigin(Entity.GetLocalPlayer()),
        Entity.GetRenderOrigin(LoGiNaTt)
      );
      wHItElIst <= UsErSnAme.nosc_distance
        ? (UI.SetValue(
            [
              'Rage',
              usErLiSt.QiVev,
              usErLiSt.plMUj,
              'SHEET_MGR',
              usErSnAme,
              'Auto scope',
            ],
            0
          ),
          Ragebot.ForceTargetHitchance(LoGiNaTt, UsErSnAme.nosc_hitchance),
          UsErSnAme.nosc_safepoint && Ragebot.ForceTargetSafety(LoGiNaTt))
        : UI.SetValue(
            [
              'Rage',
              usErLiSt.QiVev,
              usErLiSt.plMUj,
              usErLiSt.JLfVH,
              usErSnAme,
              'Auto scope',
            ],
            1
          );
    }
  }
  usErLiSt.VCRrg(UsErSnAme.hitbox_override, 0) &&
    (UI.GetValue(hotkey_path.concat('Atomic hitbox override'))
      ? UI.SetValue(
          [
            'Rage',
            usErLiSt.QiVev,
            'Target',
            'SHEET_MGR',
            usErSnAme,
            usErLiSt.JaLSB,
          ],
          UsErSnAme.hitbox_override
        )
      : UI.SetValue(
          [
            usErLiSt.xjYBO,
            usErLiSt.QiVev,
            'Target',
            'SHEET_MGR',
            usErSnAme,
            'Hitboxes',
          ],
          UsErSnAme.hitbox_default
        ));
  if (usErLiSt.rOxzp(UsErSnAme.hitbox_safety, 0)) {
    var getUSeRname = usErLiSt.EPMwC.split('|'),
      useRLiSt = 0;
    while (true) {
      switch (getUSeRname[useRLiSt++]) {
        case '0':
          usErLiSt.PBIvb(multi_enabled, UsErSnAme.hitbox_safety, 3) &&
            Ragebot.ForceHitboxSafety(2);
          continue;
        case '1':
          multi_enabled(UsErSnAme.hitbox_safety, 4) &&
            Ragebot.ForceHitboxSafety(3);
          continue;
        case '2':
          multi_enabled(UsErSnAme.hitbox_safety, 1) &&
            (Ragebot.ForceHitboxSafety(1),
            Ragebot.ForceHitboxSafety(5),
            Ragebot.ForceHitboxSafety(6));
          continue;
        case '3':
          multi_enabled(UsErSnAme.hitbox_safety, 6) &&
            (Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(12));
          continue;
        case '4':
          usErLiSt.PBIvb(multi_enabled, UsErSnAme.hitbox_safety, 2) &&
            (Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(2));
          continue;
        case '5':
          multi_enabled(UsErSnAme.hitbox_safety, 0) &&
            Ragebot.ForceHitboxSafety(0);
          continue;
        case '6':
          usErLiSt.zBNSV(multi_enabled, UsErSnAme.hitbox_safety, 5) &&
            (Ragebot.ForceHitboxSafety(7),
            Ragebot.ForceHitboxSafety(8),
            Ragebot.ForceHitboxSafety(9),
            Ragebot.ForceHitboxSafety(10));
          continue;
      }
      break;
    }
  }
}

function rbot_shot() {
  var wHITElIst = {
      mZqjO: 'Key assignment',
      LyySt: function (USERLiSt, USERSnAme, LOGINaTt) {
        return USERLiSt(USERSnAme, LOGINaTt);
      },
      GwHVb: function (WHITElIst, usersNAme) {
        return WHITElIst != usersNAme;
      },
      hEkAe: function (loginATt, whiteLIst) {
        return loginATt < whiteLIst;
      },
      oNesZ: function (getusERname, userlISt) {
        return getusERname - userlISt;
      },
      uJUtC: function (UsersNAme, WhiteLIst) {
        return UsersNAme - WhiteLIst;
      },
      xYkOM: function (UserlISt, LoginATt) {
        return UserlISt + LoginATt;
      },
      LHIvT: ' ticks = ',
      gLpmM: function (GetusERname, wHiteLIst) {
        return GetusERname * wHiteLIst;
      },
      UurcO: function (gEtusERname, lOginATt) {
        return gEtusERname / lOginATt;
      },
      BYGtH: 's.\x0a',
      zEFuA: 'exploit',
      gabnp: 'target_index',
    },
    lOGINaTt = '3|4|2|0|1'['split']('|'),
    uSERLiSt = 0;
  while (true) {
    switch (lOGINaTt[uSERLiSt++]) {
      case '0':
        if (
          UI.GetValue([
            'Rage',
            'Exploits',
            'Keys',
            wHITElIst.mZqjO,
            'Double tap',
          ]) &&
          wHITElIst.LyySt(multi_enabled, _logs_enabled.getValue(), 0)
        ) {
          if (gETUSeRname > 0) dt_shot_1 = Globals.Tickcount();
          else {
            if (
              wHITElIst.GwHVb(dt_shot_1, 0) &&
              wHITElIst.hEkAe(
                wHITElIst.oNesZ(Globals.Tickcount(), dt_shot_1),
                15
              )
            ) {
              var uSERSnAme = wHITElIst.uJUtC(Globals.Tickcount(), dt_shot_1);
              if (uSERSnAme > 15) {
                (dt_shot_1 = 0), (uSERSnAme = 0);
                return;
              }
              Cheat.PrintColor(
                [100, 255, 0, 255],
                wHITElIst.xYkOM(
                  wHITElIst.xYkOM('DT Time: ', uSERSnAme) +
                    wHITElIst.LHIvT +
                    wHITElIst.gLpmM(uSERSnAme, wHITElIst.UurcO(1, 64)),
                  wHITElIst.BYGtH
                )
              ),
                (dt_shot_1 = 0);
            }
          }
        }
        continue;
      case '1':
        ~onshot_targets.indexOf(GETUSeRname) &&
          onshot_targets.splice(onshot_targets.indexOf(GETUSeRname), 1);
        continue;
      case '2':
        wHITElIst.LyySt(multi_enabled, _logs_enabled.getValue(), 2) &&
          (shot_index++, hitmiss_shots.push([[Event.GetInt('target_index')]]));
        continue;
      case '3':
        var gETUSeRname = Event.GetInt(wHITElIst.zEFuA);
        continue;
      case '4':
        var GETUSeRname = Event.GetInt(wHITElIst.gabnp);
        continue;
    }
    break;
  }
}

function weapon_fire() {
  var uSerlISt = Entity.GetEntityFromUserID(Event.GetInt('userid'));
  if (!~onshot_targets.indexOf(uSerlISt)) onshot_targets.push(uSerlISt);
}

function buy_logs() {
  var uSersNAme = {
    dWfAE: 'm_iTeamNum',
    rFuNo: 'userid',
    rpDae: 'weapon',
    QDEcp: function (GEtusERname, whIteLIst) {
      return GEtusERname < whIteLIst;
    },
    KXqlz: function (geTusERname, usErsNAme) {
      return geTusERname == usErsNAme;
    },
    gDIjP: function (loGinATt, usErlISt) {
      return loGinATt + usErlISt;
    },
    Ketgw: '[friendly purchase] ',
    IUccX: ' bought ',
    doUEd: function (GeTusERname, UsErlISt) {
      return GeTusERname + UsErlISt;
    },
    QYgNH: function (LoGinATt, UsErsNAme) {
      return LoGinATt + UsErsNAme;
    },
    NzRHu: function (WhIteLIst, uSErlISt, gETusERname) {
      return WhIteLIst(uSErlISt, gETusERname);
    },
    ezbTS: function (uSErsNAme, lOGinATt) {
      return uSErsNAme + lOGinATt;
    },
    pEeZr: function (wHIteLIst, USErlISt) {
      return wHIteLIst + USErlISt;
    },
    iQTxu: function (USErsNAme, WHIteLIst) {
      return USErsNAme + WHIteLIst;
    },
  };
  if (!multi_enabled(_logs_enabled.getValue(), 1)) return;
  var USerlISt = Event.GetInt('team'),
    WHiteLIst = Entity.GetProp(
      Entity.GetLocalPlayer(),
      'CBaseEntity',
      uSersNAme.dWfAE
    ),
    LOginATt = Entity.GetName(
      Entity.GetEntityFromUserID(Event.GetInt(uSersNAme.rFuNo))
    ),
    USersNAme = Event.GetString(uSersNAme.rpDae);
  USersNAme = USersNAme.substring(7, USersNAme.length);
  if (uSersNAme.QDEcp(USerlISt, 2) || WHiteLIst < 2) return;
  multi_enabled(_buylogs_enabled.getValue(), 0) &&
    uSersNAme.KXqlz(USerlISt, WHiteLIst) &&
    (Cheat.PrintColor(
      _buylogs_color.getColor(),
      uSersNAme.gDIjP(
        uSersNAme.gDIjP(
          uSersNAme.gDIjP(uSersNAme.Ketgw, LOginATt),
          uSersNAme.IUccX
        ) + USersNAme,
        '\x0a'
      )
    ),
    _buylogs_chat.getValue() &&
      Cheat.PrintChat(
        uSersNAme.doUEd(
          uSersNAme.QYgNH(uSersNAme.Ketgw, LOginATt),
          ' bought '
        ) + USersNAme
      )),
    uSersNAme.NzRHu(multi_enabled, _buylogs_enabled.getValue(), 1) &&
      USerlISt != WHiteLIst &&
      (Cheat.PrintColor(
        _buylogs_color.getColor(),
        uSersNAme.ezbTS(
          uSersNAme.pEeZr(
            uSersNAme.iQTxu('[enemy purchase] ', LOginATt) + ' bought ',
            USersNAme
          ),
          '\x0a'
        )
      ),
      _buylogs_chat.getValue() &&
        Cheat.PrintChat(
          uSersNAme.iQTxu(
            uSersNAme.iQTxu('[enemy purchase] ', LOginATt) + ' bought ',
            USersNAme
          )
        ));
}

function connect_full() {
  (last_aa_time = 0),
    (last_angle = 0),
    (slowwalk_choke = 0),
    (speed = 0),
    (cur_angle = 0);
}
var dt_tp_peek = false;

function dt_peek() {
  var GETusERname = {
    atAIM: 'CBasePlayer',
    VYLZY: 'm_vecOrigin',
    ktLIM: 'm_vecViewOffset[2]',
  };
  if (
    !UI.GetValue(['Misc.', 'Keys', 'General', 'Key assignment', 'Auto peek']) ||
    !_dt_tp_peek.getValue()
  ) {
    (dt_tp_peek = false), setup_tp_exploit();
    return;
  }
  var LOGinATt = Local.GetViewAngles(),
    getUsERname = Entity.GetProp(
      Entity.GetLocalPlayer(),
      GETusERname.atAIM,
      GETusERname.VYLZY
    ),
    logInATt = Entity.GetProp(
      Entity.GetLocalPlayer(),
      GETusERname.atAIM,
      GETusERname.ktLIM
    );
  (getUsERname = VectorAdd(getUsERname, [0, 0, logInATt[0]])),
    Exploit.OverrideShift(16),
    (dt_tp_peek = true),
    setup_tp_exploit();
}
Cheat.RegisterCallback('CreateMove', 'dt_peek');

function AngleVector(useRlISt) {
  var whiTeLIst = {
      cJYaT: function (WhiTeLIst, UseRsNAme) {
        return WhiTeLIst * UseRsNAme;
      },
      DfUZa: function (uSeRsNAme, wHiTeLIst) {
        return uSeRsNAme * wHiTeLIst;
      },
      lThEp: function (lOgInATt, uSeRlISt) {
        return lOgInATt * uSeRlISt;
      },
    },
    useRsNAme = Math.sin(whiTeLIst.cJYaT(useRlISt[1] / 180, Math.PI)),
    LogInATt = Math.cos((useRlISt[1] / 180) * Math.PI),
    UseRlISt = Math.sin((useRlISt[0] / 180) * Math.PI),
    GetUsERname = Math.cos(whiTeLIst.DfUZa(useRlISt[0] / 180, Math.PI));
  return [
    whiTeLIst.DfUZa(GetUsERname, LogInATt),
    whiTeLIst.lThEp(GetUsERname, useRsNAme),
    -UseRlISt,
  ];
}

function VectorAdd(gEtUsERname, GEtUsERname) {
  var WHiTeLIst = {
    wPAOA: function (LOgInATt, USeRsNAme) {
      return LOgInATt + USeRsNAme;
    },
    GnXmH: function (USeRlISt, usERsNAme) {
      return USeRlISt + usERsNAme;
    },
  };
  return [
    WHiTeLIst.wPAOA(gEtUsERname[0], GEtUsERname[0]),
    WHiTeLIst.GnXmH(gEtUsERname[1], GEtUsERname[1]),
    gEtUsERname[2] + GEtUsERname[2],
  ];
}

function VecMul(whITeLIst, geTUsERname) {
  return [
    whITeLIst[0] * geTUsERname,
    whITeLIst[1] * geTUsERname,
    whITeLIst[2] * geTUsERname,
  ];
}
var dt_key_state_cache = UI.GetHotkeyState([
    'Rage',
    'Exploits',
    'Keys',
    'Key assignment',
    'Double tap',
  ]),
  auto_peek_state_cache = UI.GetHotkeyState([
    'Misc.',
    'Keys',
    'General',
    'Key assignment',
    'Auto peek',
  ]),
  exploit_options_cache = UI.GetValue([
    'Rage',
    'Exploits',
    'General',
    'Options',
  ]),
  auto_peek_enabled_cahce = UI.GetValue([
    'Misc.',
    'Keys',
    'General',
    'Key assignment',
    'Auto peek',
  ]),
  dt_enabled_cache = UI.GetValue([
    'Rage',
    'Exploits',
    'Keys',
    'Key assignment',
    'Double tap',
  ]),
  values_reset = false;

function setup_tp_exploit() {
  var loGInATt = {
    StoNl: function (UsERsNAme, lOGInATt) {
      return UsERsNAme && lOGInATt;
    },
    mxBBG: function (uSERlISt, uSERsNAme) {
      return uSERlISt != uSERsNAme;
    },
    STFGr: 'Keys',
    AmMIX: 'Key assignment',
    lPpjA: 'Rage',
    ELFkk: 'Double tap',
    cqYrH: 'Exploits',
    nShOa: 'General',
    XCfck: 'Options',
    oKyHA: '4|0|1|3|2',
    vYQnO: function (wHITeLIst, gETUsERname) {
      return wHITeLIst & gETUsERname;
    },
    OnWUj: 'Toggle',
    WxEhu: '2|1|4|3|0',
    zyUak: 'Misc.',
  };
  if (loGInATt.StoNl(!dt_tp_peek, !values_reset))
    loGInATt.mxBBG(
      UI.GetValue([
        'Rage',
        'Exploits',
        loGInATt.STFGr,
        loGInATt.AmMIX,
        'Double tap',
      ]),
      dt_enabled_cache
    ) &&
      UI.ToggleHotkey([
        loGInATt.lPpjA,
        'Exploits',
        'Keys',
        'Key assignment',
        loGInATt.ELFkk,
      ]),
      loGInATt.mxBBG(
        UI.GetHotkeyState([
          'Rage',
          loGInATt.cqYrH,
          'Keys',
          loGInATt.AmMIX,
          loGInATt.ELFkk,
        ]),
        dt_key_state_cache
      ) &&
        UI.SetHotkeyState(
          ['Rage', 'Exploits', loGInATt.STFGr, loGInATt.AmMIX, 'Double tap'],
          dt_key_state_cache
        ),
      UI.GetValue(['Rage', loGInATt.cqYrH, loGInATt.nShOa, 'Options']) !=
        exploit_options_cache &&
        UI.SetValue(
          [loGInATt.lPpjA, 'Exploits', loGInATt.nShOa, loGInATt.XCfck],
          exploit_options_cache
        ),
      (values_reset = true);
  else {
    if (dt_tp_peek) {
      var usERlISt = loGInATt.oKyHA.split('|'),
        WhITeLIst = 0;
      while (true) {
        switch (usERlISt[WhITeLIst++]) {
          case '0':
            !UI.GetValue([
              loGInATt.lPpjA,
              loGInATt.cqYrH,
              loGInATt.STFGr,
              'Key assignment',
              'Double tap',
            ]) &&
              UI.ToggleHotkey([
                loGInATt.lPpjA,
                loGInATt.cqYrH,
                loGInATt.STFGr,
                loGInATt.AmMIX,
                'Double tap',
              ]);
            continue;
          case '1':
            var LoGInATt = UI.GetValue([
              'Rage',
              loGInATt.cqYrH,
              'General',
              'Options',
            ]);
            continue;
          case '2':
            values_reset = false;
            continue;
          case '3':
            (loGInATt.vYQnO(LoGInATt, ~1) || LoGInATt & 2) &&
              ((LoGInATt |= 1),
              (LoGInATt &= ~2),
              UI.SetValue(
                [loGInATt.lPpjA, 'Exploits', loGInATt.nShOa, 'Options'],
                LoGInATt
              ));
            continue;
          case '4':
            UI.GetHotkeyState([
              'Rage',
              loGInATt.cqYrH,
              'Keys',
              'Key assignment',
              'Double tap',
            ]) != loGInATt.OnWUj &&
              UI.SetHotkeyState(
                [
                  loGInATt.lPpjA,
                  loGInATt.cqYrH,
                  'Keys',
                  'Key assignment',
                  loGInATt.ELFkk,
                ],
                'Toggle'
              );
            continue;
        }
        break;
      }
    } else {
      var GeTUsERname = loGInATt.WxEhu.split('|'),
        UsERlISt = 0;
      while (true) {
        switch (GeTUsERname[UsERlISt++]) {
          case '0':
            dt_enabled_cache = UI.GetValue([
              'Rage',
              loGInATt.cqYrH,
              'Keys',
              loGInATt.AmMIX,
              'Double tap',
            ]);
            continue;
          case '1':
            exploit_options_cache = UI.GetValue([
              loGInATt.lPpjA,
              loGInATt.cqYrH,
              loGInATt.nShOa,
              loGInATt.XCfck,
            ]);
            continue;
          case '2':
            dt_key_state_cache = UI.GetHotkeyState([
              'Rage',
              'Exploits',
              'Keys',
              loGInATt.AmMIX,
              loGInATt.ELFkk,
            ]);
            continue;
          case '3':
            auto_peek_enabled_cahce = UI.GetValue([
              'Misc.',
              'Keys',
              loGInATt.nShOa,
              loGInATt.AmMIX,
              'Auto peek',
            ]);
            continue;
          case '4':
            auto_peek_state_cache = UI.GetHotkeyState([
              loGInATt.zyUak,
              loGInATt.STFGr,
              'General',
              loGInATt.AmMIX,
              'Auto peek',
            ]);
            continue;
        }
        break;
      }
    }
  }
}
Cheat.RegisterCallback('item_purchase', 'buy_logs'),
  Cheat.RegisterCallback('Material', 'visualsMaterial'),
  Cheat.RegisterCallback('CreateMove', 'miscCM'),
  Cheat.RegisterCallback('weapon_fire', 'weapon_fire'),
  Cheat.RegisterCallback('Draw', 'visualsDraw'),
  Cheat.RegisterCallback('CreateMove', 'fakeLagCM'),
  Cheat.RegisterCallback('CreateMove', 'antiAimCM'),
  Cheat.RegisterCallback('CreateMove', 'rageCM'),
  Cheat.RegisterCallback('round_end', 'round_end'),
  Cheat.RegisterCallback('Draw', 'buy_bot'),
  Cheat.RegisterCallback('ragebot_fire', 'rbot_shot'),
  Cheat.RegisterCallback('player_connect_full', 'connect_full');

function unload() {
  var WHITeLIst = {
    biSxB: function (USERsNAme, USERlISt) {
      return USERsNAme < USERlISt;
    },
  };
  AntiAim.SetOverride(0), Exploit.EnableRecharge();
  for (
    var GETUsERname = 0;
    WHITeLIst.biSxB(GETUsERname, mats.length);
    GETUsERname++
  ) {
    Material.Destroy(mats[GETUsERname][0]);
  }
}
Cheat.RegisterCallback('Unload', 'unload');

function shadow(
  LOGInATt,
  getuSERname,
  userLISt,
  logiNATt,
  userSNAme,
  whitELIst,
  UserLISt,
  LogiNATt
) {
  var GetuSERname = {
    GKtJe: function (WhitELIst, UserSNAme) {
      return WhitELIst + UserSNAme;
    },
  };
  userSNAme &&
    (Render.String(
      LOGInATt + LogiNATt / 7.1700000000001,
      GetuSERname.GKtJe(getuSERname, LogiNATt / 7.1700000000001),
      userLISt,
      logiNATt,
      [0, 0, 0, 100],
      whitELIst
    ),
    Render.String(
      LOGInATt,
      getuSERname,
      userLISt,
      logiNATt,
      UserLISt,
      whitELIst
    ));
}

function RoundedRect(
  lOgiNATt,
  gEtuSERname,
  uSerSNAme,
  wHitELIst,
  uSerLISt,
  LOgiNATt,
  USerSNAme,
  USerLISt,
  GEtuSERname,
  WHitELIst
) {
  var usErLISt = {
      PImdc: '2|0|3|8|4|1|5|6|7',
      nuqyN: function (geTuSERname, whItELIst) {
        return geTuSERname == whItELIst;
      },
      dkgWN: function (GeTuSERname, WhItELIst) {
        return GeTuSERname - WhItELIst;
      },
      vVBlp: function (UsErLISt, UsErSNAme) {
        return UsErLISt <= UsErSNAme;
      },
      LhYSR: function (LoGiNATt, wHItELIst) {
        return LoGiNATt + wHItELIst;
      },
      stkda: function (uSErSNAme, uSErLISt) {
        return uSErSNAme + uSErLISt;
      },
      yxptT: function (lOGiNATt, gETuSERname) {
        return lOGiNATt * gETuSERname;
      },
      tSdXl: function (WHItELIst, LOGiNATt) {
        return WHItELIst - LOGiNATt;
      },
      UrhdX: function (GETuSERname, USErSNAme) {
        return GETuSERname - USErSNAme;
      },
      CwOAL: function (USErLISt, useRLISt) {
        return USErLISt / useRLISt;
      },
      ZPQQQ: function (useRSNAme, getUSERname) {
        return useRSNAme / getUSERname;
      },
      Rocab: function (logINATt, whiTELIst) {
        return logINATt - whiTELIst;
      },
      xgnMr: function (UseRLISt, WhiTELIst) {
        return UseRLISt + WhiTELIst;
      },
    },
    usErSNAme = usErLISt.PImdc.split('|'),
    loGiNATt = 0;
  while (true) {
    switch (usErSNAme[loGiNATt++]) {
      case '0':
        (usErLISt.nuqyN(GEtuSERname, undefined) || !USerLISt) &&
          (GEtuSERname = LOgiNATt);
        continue;
      case '1':
        Render.FilledCircle(
          lOgiNATt,
          usErLISt.dkgWN(gEtuSERname + wHitELIst - uSerLISt, 0.5),
          uSerLISt,
          USerSNAme
        );
        continue;
      case '2':
        if (uSerLISt >= 20) uSerLISt = 20;
        else {
          if (usErLISt.vVBlp(uSerLISt, 5)) uSerLISt = 5;
        }
        continue;
      case '3':
        Render.FilledCircle(
          lOgiNATt,
          usErLISt.LhYSR(gEtuSERname, uSerLISt),
          uSerLISt,
          USerLISt ? GEtuSERname : LOgiNATt
        );
        continue;
      case '4':
        Render.FilledCircle(
          lOgiNATt + (uSerSNAme - 0.5),
          usErLISt.LhYSR(gEtuSERname, wHitELIst) - uSerLISt - 0.5,
          uSerLISt,
          USerSNAme
        );
        continue;
      case '5':
        Render.GradientRect(
          lOgiNATt,
          gEtuSERname,
          uSerSNAme,
          wHitELIst,
          WHitELIst,
          LOgiNATt,
          USerSNAme
        );
        continue;
      case '6':
        Render.GradientRect(
          lOgiNATt - uSerLISt,
          usErLISt.stkda(gEtuSERname, uSerLISt),
          usErLISt.stkda(uSerSNAme, usErLISt.yxptT(2, uSerLISt)),
          usErLISt.tSdXl(wHitELIst, 2 * uSerLISt),
          WHitELIst,
          LOgiNATt,
          USerSNAme
        );
        continue;
      case '7':
        USerLISt &&
          (Render.FilledRect(
            lOgiNATt,
            gEtuSERname,
            uSerSNAme,
            uSerLISt / 2,
            GEtuSERname
          ),
          Render.FilledRect(
            usErLISt.UrhdX(lOgiNATt, uSerLISt / 2),
            gEtuSERname + usErLISt.CwOAL(uSerLISt, 2),
            usErLISt.stkda(uSerSNAme, uSerLISt),
            usErLISt.ZPQQQ(uSerLISt, 2),
            GEtuSERname
          ));
        continue;
      case '8':
        Render.FilledCircle(
          usErLISt.stkda(lOgiNATt, usErLISt.Rocab(uSerSNAme, 0.5)),
          usErLISt.xgnMr(gEtuSERname, uSerLISt),
          uSerLISt,
          USerLISt ? GEtuSERname : LOgiNATt
        );
        continue;
    }
    break;
  }
}

function RoundedRectNorm(
  GetUSERname,
  LogINATt,
  UseRSNAme,
  wHiTELIst,
  uSeRLISt,
  lOgINATt
) {
  var uSeRSNAme = {
    AFgVY: function (gEtUSERname, LOgINATt) {
      return gEtUSERname + LOgINATt;
    },
    zUBBG: function (USeRSNAme, WHiTELIst) {
      return USeRSNAme - WHiTELIst;
    },
    KkUKC: function (GEtUSERname, USeRLISt) {
      return GEtUSERname - USeRLISt;
    },
    DDGRE: function (usERSNAme, loGINATt) {
      return usERSNAme + loGINATt;
    },
    JqlZT: function (geTUSERname, usERLISt) {
      return geTUSERname * usERLISt;
    },
    OaoyF: function (whITELIst, WhITELIst) {
      return whITELIst * WhITELIst;
    },
  };
  Render.FilledCircle(GetUSERname, LogINATt + uSeRLISt, uSeRLISt, lOgINATt),
    Render.FilledCircle(
      uSeRSNAme.AFgVY(GetUSERname, uSeRSNAme.zUBBG(UseRSNAme, 1)),
      LogINATt + uSeRLISt,
      uSeRLISt,
      lOgINATt
    ),
    Render.FilledCircle(
      GetUSERname + uSeRSNAme.KkUKC(UseRSNAme, 1),
      LogINATt + wHiTELIst - uSeRLISt - 0.5,
      uSeRLISt,
      lOgINATt
    ),
    Render.FilledCircle(
      GetUSERname,
      uSeRSNAme.DDGRE(LogINATt, wHiTELIst) - uSeRLISt - 0.5,
      uSeRLISt,
      lOgINATt
    ),
    Render.FilledRect(GetUSERname, LogINATt, UseRSNAme, wHiTELIst, lOgINATt),
    Render.FilledRect(
      GetUSERname - uSeRLISt,
      LogINATt + uSeRLISt,
      UseRSNAme + uSeRSNAme.JqlZT(2, uSeRLISt),
      wHiTELIst - uSeRSNAme.OaoyF(2, uSeRLISt),
      lOgINATt
    );
}

function oval_rect(UsERSNAme, GeTUSERname, UsERLISt, LoGINATt, lOGINATt) {
  var wHITELIst = {
      OFnew: function (gETUSERname, uSERSNAme) {
        return gETUSERname / uSERSNAme;
      },
      vmibP: function (USERSNAme, WHITELIst) {
        return USERSNAme - WHITELIst;
      },
      yfSEe: function (GETUSERname, USERLISt) {
        return GETUSERname + USERLISt;
      },
    },
    uSERLISt = wHITELIst.OFnew(LoGINATt, 2);
  (uSERLISt -= 0.5),
    Render.FilledCircle(UsERSNAme, GeTUSERname - 0.5, uSERLISt, lOGINATt),
    Render.FilledCircle(
      wHITELIst.vmibP(wHITELIst.yfSEe(UsERSNAme, UsERLISt), 0.5),
      GeTUSERname - 0.5,
      uSERLISt,
      lOGINATt
    ),
    Render.FilledRect(
      UsERSNAme,
      GeTUSERname - uSERLISt,
      UsERLISt,
      wHITELIst.vmibP(LoGINATt, 0.5),
      lOGINATt
    );
}

function oval_rect_vertical(
  LOGINATt,
  userlisT,
  loginatT,
  usersnaMe,
  getuserName
) {
  var whiteliSt = {
      frDeu: function (WhiteliSt, GetuserName) {
        return WhiteliSt / GetuserName;
      },
      XPwAb: function (UsersnaMe, UserlisT) {
        return UsersnaMe / UserlisT;
      },
      AHQWg: function (uSerlisT, wHiteliSt) {
        return uSerlisT - wHiteliSt;
      },
      eDyOT: function (lOginatT, uSersnaMe) {
        return lOginatT + uSersnaMe;
      },
    },
    LoginatT = loginatT / 2;
  (LoginatT -= 1),
    Render.FilledRect(
      LOGINATt + 0.5,
      userlisT - whiteliSt.frDeu(usersnaMe, 2),
      loginatT,
      usersnaMe,
      getuserName
    ),
    Render.FilledCircle(
      LOGINATt + whiteliSt.XPwAb(loginatT, 2),
      whiteliSt.AHQWg(userlisT, whiteliSt.XPwAb(usersnaMe, 2)),
      LoginatT,
      getuserName
    ),
    Render.FilledCircle(
      whiteliSt.eDyOT(LOGINATt, loginatT / 2),
      userlisT + usersnaMe / 2,
      LoginatT,
      getuserName
    );
}

function VectorAngles(gEtuserName, LOginatT) {
  var WHiteliSt = {
      pCihF: function (GEtuserName, whIteliSt) {
        return GEtuserName - whIteliSt;
      },
      IdIFo: function (geTuserName, loGinatT) {
        return geTuserName - loGinatT;
      },
    },
    USerlisT = [];
  (USerlisT[0] = gEtuserName[0] - LOginatT[0]),
    (USerlisT[1] = WHiteliSt.pCihF(gEtuserName[1], LOginatT[1])),
    (USerlisT[2] = WHiteliSt.IdIFo(gEtuserName[2], LOginatT[2]));
  var USersnaMe = [];
  (USersnaMe[0] = RadToDeg(
    Math.atan(USerlisT[2] / Math.hypot(USerlisT[0], USerlisT[1]))
  )),
    (USersnaMe[1] = RadToDeg(Math.atan(USerlisT[1] / USerlisT[0]))),
    (USersnaMe[2] = 0);
  if (USerlisT[0] >= 0) USersnaMe[1] += 180;
  return (
    (USersnaMe[1] += 180),
    (USersnaMe[1] %= 360),
    (USersnaMe[1] -= 180),
    USersnaMe
  );
}

function RadToDeg(usErsnaMe) {
  var usErlisT = {
    rlgYy: function (LoGinatT, WhIteliSt) {
      return LoGinatT / WhIteliSt;
    },
    Uhwhh: function (UsErsnaMe, GeTuserName) {
      return UsErsnaMe * GeTuserName;
    },
  };
  return usErlisT.rlgYy(usErlisT.Uhwhh(usErsnaMe, 180), Math.PI);
}

function getRandomIntInclusive(UsErlisT, uSErsnaMe) {
  var uSErlisT = {
    UMZxl: function (lOGinatT, gETuserName) {
      return lOGinatT + gETuserName;
    },
    FlbLx: function (wHIteliSt, LOGinatT) {
      return wHIteliSt + LOGinatT;
    },
  };
  return (
    (UsErlisT = Math.ceil(UsErlisT)),
    (uSErsnaMe = Math.floor(uSErsnaMe)),
    uSErlisT.UMZxl(
      Math.floor(Math.random() * uSErlisT.FlbLx(uSErsnaMe - UsErlisT, 1)),
      UsErlisT
    )
  );
}

function render_arc(
  WHIteliSt,
  USErsnaMe,
  USErlisT,
  GETuserName,
  whiTeliSt,
  useRlisT,
  logInatT,
  useRsnaMe
) {
  var getUserName = {
    XPMBa: function (whITeliSt, usERlisT) {
      return whITeliSt != usERlisT;
    },
    PRvTt: function (loGInatT, geTUserName) {
      return loGInatT % geTUserName;
    },
    ZGBfe: function (usERsnaMe, WhITeliSt) {
      return usERsnaMe + WhITeliSt;
    },
    elmxx: function (UsERlisT, UsERsnaMe) {
      return UsERlisT * UsERsnaMe;
    },
    YZMMG: function (LoGInatT, GeTUserName) {
      return LoGInatT / GeTUserName;
    },
    Ckzdp: function (uSERsnaMe, lOGInatT) {
      return uSERsnaMe * lOGInatT;
    },
    DRDYm: function (wHITeliSt, gETUserName) {
      return wHITeliSt * gETUserName;
    },
    FGckw: function (uSERlisT, WHITeliSt) {
      return uSERlisT * WHITeliSt;
    },
  };
  while (getUserName.XPMBa(getUserName.PRvTt(360, logInatT), 0)) {
    logInatT++;
  }
  logInatT = 360 / logInatT;
  for (
    var WhiTeliSt = whiTeliSt;
    WhiTeliSt < getUserName.ZGBfe(whiTeliSt, useRlisT);
    WhiTeliSt = WhiTeliSt + logInatT
  ) {
    var GetUserName = getUserName.elmxx(WhiTeliSt, Math.PI) / 180,
      LogInatT = getUserName.YZMMG((WhiTeliSt + logInatT) * Math.PI, 180),
      UseRlisT = Math.cos(GetUserName),
      UseRsnaMe = Math.sin(GetUserName),
      uSeRlisT = Math.cos(LogInatT),
      wHiTeliSt = Math.sin(LogInatT),
      gEtUserName = WHIteliSt + UseRlisT * USErlisT,
      lOgInatT = USErsnaMe + getUserName.Ckzdp(UseRsnaMe, USErlisT),
      uSeRsnaMe = getUserName.ZGBfe(
        WHIteliSt,
        getUserName.Ckzdp(uSeRlisT, USErlisT)
      ),
      LOgInatT = USErsnaMe + getUserName.Ckzdp(wHiTeliSt, USErlisT),
      WHiTeliSt = getUserName.ZGBfe(WHIteliSt, UseRlisT * GETuserName),
      USeRsnaMe = USErsnaMe + UseRsnaMe * GETuserName,
      USeRlisT = WHIteliSt + getUserName.DRDYm(uSeRlisT, GETuserName),
      GEtUserName = USErsnaMe + getUserName.FGckw(wHiTeliSt, GETuserName);
    Render.Polygon(
      [
        [gEtUserName, lOgInatT],
        [uSeRsnaMe, LOgInatT],
        [WHiTeliSt, USeRsnaMe],
      ],
      useRsnaMe
    ),
      Render.Polygon(
        [
          [WHiTeliSt, USeRsnaMe],
          [uSeRsnaMe, LOgInatT],
          [USeRlisT, GEtUserName],
        ],
        useRsnaMe
      );
  }
}

function extrapolate_position(GETUserName, USERlisT, LOGInatT) {
  var USERsnaMe = {
      BEzUU: function (userSnaMe, userLisT) {
        return userSnaMe < userLisT;
      },
      SScTv: function (LogiNatT, UserSnaMe) {
        return LogiNatT * UserSnaMe;
      },
      WKcTq: function (UserLisT, GetuSerName) {
        return UserLisT * GetuSerName;
      },
    },
    whitEliSt = Entity.GetProp(LOGInatT, 'DT_CSPlayer', 'm_vecVelocity[0]'),
    logiNatT = [GETUserName[0], GETUserName[1], GETUserName[2]];
  for (
    var getuSerName = 0;
    USERsnaMe.BEzUU(getuSerName, USERlisT);
    getuSerName++
  ) {
    (logiNatT[0] += whitEliSt[0] * Globals.TickInterval()),
      (logiNatT[1] += USERsnaMe.SScTv(whitEliSt[1], Globals.TickInterval())),
      (logiNatT[2] +=
        USERsnaMe.WKcTq(whitEliSt[2], Globals.TickInterval()) +
        9.8100000000004 *
          ((Globals.TickInterval() * Globals.TickInterval()) / 2));
  }
  return logiNatT;
}

function shiftable(WhitEliSt) {
  var uSerLisT = {
      NyoPP: function (WHitEliSt, GEtuSerName) {
        return WHitEliSt == GEtuSerName;
      },
      rtBBA: 'CCSPlayer',
      NhFOJ: function (USerSnaMe, USerLisT) {
        return USerSnaMe * USerLisT;
      },
      BcmiD: function (LOgiNatT, geTuSerName) {
        return LOgiNatT - geTuSerName;
      },
      yabYX: function (usErSnaMe, usErLisT) {
        return usErSnaMe < usErLisT;
      },
      itUEx: 'CBaseCombatWeapon',
      qWtST: 'm_flNextPrimaryAttack',
    },
    wHitEliSt = Entity.GetLocalPlayer(),
    uSerSnaMe = Entity.GetWeapon(wHitEliSt);
  if (uSerLisT.NyoPP(wHitEliSt, null) || uSerSnaMe == null) return false;
  var gEtuSerName = Entity.GetProp(wHitEliSt, uSerLisT.rtBBA, 'm_nTickBase'),
    lOgiNatT = uSerLisT.NhFOJ(
      Globals.TickInterval(),
      uSerLisT.BcmiD(gEtuSerName, WhitEliSt)
    );
  if (lOgiNatT < Entity.GetProp(wHitEliSt, 'CCSPlayer', 'm_flNextAttack'))
    return false;
  if (
    uSerLisT.yabYX(
      lOgiNatT,
      Entity.GetProp(uSerSnaMe, uSerLisT.itUEx, uSerLisT.qWtST)
    )
  )
    return false;
  return true;
}

function closestTarget() {
  var whItEliSt = {
      kZRgL: function (UsErLisT, LoGiNatT) {
        return UsErLisT - LoGiNatT;
      },
    },
    loGiNatT = Entity.GetLocalPlayer(),
    WhItEliSt = Entity.GetEnemies(),
    UsErSnaMe = [];
  for (var GeTuSerName in WhItEliSt) {
    if (
      !Entity.IsAlive(WhItEliSt[GeTuSerName]) ||
      Entity.IsDormant(WhItEliSt[GeTuSerName]) ||
      !Entity.IsValid(WhItEliSt[GeTuSerName])
    )
      continue;
    UsErSnaMe.push([
      WhItEliSt[GeTuSerName],
      calcDist(
        Entity.GetHitboxPosition(loGiNatT, 0),
        Entity.GetHitboxPosition(WhItEliSt[GeTuSerName], 0)
      ),
    ]);
  }
  UsErSnaMe.sort(function (wHItEliSt, uSErSnaMe) {
    return whItEliSt.kZRgL(wHItEliSt[1], uSErSnaMe[1]);
  });
  if (UsErSnaMe.length == 0 || UsErSnaMe == []) return (target = -1);
  return UsErSnaMe[0][0];
}

function get_metric_distance(lOGiNatT, gETuSerName) {
  var uSErLisT = {
    QkKxC: function (LOGiNatT, GETuSerName) {
      return LOGiNatT + GETuSerName;
    },
    UTPHp: function (USErLisT, WHItEliSt) {
      return USErLisT - WHItEliSt;
    },
  };
  return Math.floor(
    Math.sqrt(
      uSErLisT.QkKxC(
        Math.pow(uSErLisT.UTPHp(lOGiNatT[0], gETuSerName[0]), 2),
        Math.pow(uSErLisT.UTPHp(lOGiNatT[1], gETuSerName[1]), 2)
      ) + Math.pow(lOGiNatT[2] - gETuSerName[2], 2)
    ) * 0.025399999999991
  );
}

function get_metric_distance_2d(USErSnaMe, getUSerName) {
  var useRSnaMe = {
    DumWN: function (logINatT, whiTEliSt) {
      return logINatT + whiTEliSt;
    },
    DytGa: function (useRLisT, UseRSnaMe) {
      return useRLisT - UseRSnaMe;
    },
    VUXsb: function (GetUSerName, WhiTEliSt) {
      return GetUSerName - WhiTEliSt;
    },
  };
  return Math.floor(
    Math.sqrt(
      useRSnaMe.DumWN(
        Math.pow(useRSnaMe.DytGa(USErSnaMe[0], getUSerName[0]), 2),
        Math.pow(useRSnaMe.VUXsb(USErSnaMe[1], getUSerName[1]), 2)
      )
    ) * 0.025400000000445
  );
}

function get_metric_height(LogINatT, UseRLisT) {
  var gEtUSerName = {
    DoEeS: function (uSeRSnaMe, wHiTEliSt) {
      return uSeRSnaMe * wHiTEliSt;
    },
    VWUYk: function (uSeRLisT, lOgINatT) {
      return uSeRLisT - lOgINatT;
    },
  };
  return Math.floor(
    gEtUSerName.DoEeS(
      Math.sqrt(Math.pow(gEtUSerName.VWUYk(LogINatT[2], UseRLisT[2]), 2)),
      0.025399999999991
    )
  );
}

function multi_enabled(USeRLisT, WHiTEliSt) {
  var USeRSnaMe = {
    uXLZQ: function (GEtUSerName, LOgINatT) {
      return GEtUSerName & LOgINatT;
    },
    xcDgH: function (usERSnaMe, loGINatT) {
      return usERSnaMe << loGINatT;
    },
  };
  return USeRSnaMe.uXLZQ(USeRLisT, USeRSnaMe.xcDgH(1, WHiTEliSt));
}

function tableLerp(whITEliSt, geTUSerName, usERLisT) {
  var UsERLisT = [];
  for (i in whITEliSt) {
    UsERLisT[i] = lerp(whITEliSt[i], geTUSerName[i], usERLisT);
  }
  return UsERLisT;
}

function clamp(GeTUSerName, LoGINatT, UsERSnaMe) {
  var WhITEliSt = {
    PyHXL: function (uSERLisT, gETUSerName) {
      return uSERLisT < gETUSerName;
    },
  };
  if (GeTUSerName > UsERSnaMe) return UsERSnaMe;
  if (WhITEliSt.PyHXL(GeTUSerName, LoGINatT)) return LoGINatT;
  return GeTUSerName;
}

function calcDist(wHITEliSt, lOGINatT) {
  var uSERSnaMe = {
    BDKFH: function (USERSnaMe, GETUSerName) {
      return USERSnaMe - GETUSerName;
    },
    GPiQY: function (WHITEliSt, LOGINatT) {
      return WHITEliSt + LOGINatT;
    },
    NKzdU: function (USERLisT, getusErName) {
      return USERLisT * getusErName;
    },
    wyEVM: function (whiteLiSt, usersNaMe) {
      return whiteLiSt * usersNaMe;
    },
  };
  return (
    (x = wHITEliSt[0] - lOGINatT[0]),
    (y = wHITEliSt[1] - lOGINatT[1]),
    (z = uSERSnaMe.BDKFH(wHITEliSt[2], lOGINatT[2])),
    Math.sqrt(
      uSERSnaMe.GPiQY(x * x, uSERSnaMe.NKzdU(y, y)) + uSERSnaMe.wyEVM(z, z)
    )
  );
}

function deg2rad(loginAtT) {
  var userlIsT = {
    mJUhZ: function (WhiteLiSt, GetusErName) {
      return WhiteLiSt * GetusErName;
    },
  };
  return userlIsT.mJUhZ(loginAtT, Math.PI) / 180;
}

function angle_to_vec(UsersNaMe, UserlIsT) {
  var LoginAtT = {
      krutT: function (LOginAtT, USerlIsT) {
        return LOginAtT * USerlIsT;
      },
    },
    uSersNaMe = deg2rad(UsersNaMe),
    uSerlIsT = deg2rad(UserlIsT),
    gEtusErName = Math.sin(uSersNaMe),
    lOginAtT = Math.cos(uSersNaMe),
    wHiteLiSt = Math.sin(uSerlIsT),
    GEtusErName = Math.cos(uSerlIsT);
  return [
    LoginAtT.krutT(lOginAtT, GEtusErName),
    lOginAtT * wHiteLiSt,
    -gEtusErName,
  ];
}

function dist_to_wall(USersNaMe, WHiteLiSt) {
  var geTusErName = {
      lcEKn: 'm_vecViewOffset[2]',
      tQIbI: function (WhIteLiSt, GeTusErName, UsErsNaMe) {
        return WhIteLiSt(GeTusErName, UsErsNaMe);
      },
      NktMk: function (wHIteLiSt, lOGinAtT) {
        return wHIteLiSt + lOGinAtT;
      },
      jhNxw: function (gETusErName, uSErlIsT) {
        return gETusErName * uSErlIsT;
      },
      CiWDo: function (uSErsNaMe, GETusErName) {
        return uSErsNaMe * GETusErName;
      },
      jrRNw: function (WHIteLiSt, LOGinAtT) {
        return WHIteLiSt + LOGinAtT;
      },
      KYVhV: function (USErlIsT, USErsNaMe) {
        return USErlIsT + USErsNaMe;
      },
      IypMP: function (useRlIsT, useRsNaMe) {
        return useRlIsT - useRsNaMe;
      },
      tWGgJ: function (whiTeLiSt, getUsErName) {
        return whiTeLiSt - getUsErName;
      },
      dPcpz: function (logInAtT, GetUsErName) {
        return logInAtT * GetUsErName;
      },
      HVQwP: function (WhiTeLiSt, LogInAtT) {
        return WhiTeLiSt - LogInAtT;
      },
      PPfDi: function (UseRsNaMe, UseRlIsT) {
        return UseRsNaMe - UseRlIsT;
      },
    },
    usErsNaMe = angle_to_vec(WHiteLiSt[0], WHiteLiSt[1]),
    usErlIsT = Entity.GetProp(
      Entity.GetLocalPlayer(),
      'CBasePlayer',
      geTusErName.lcEKn
    ),
    whIteLiSt = geTusErName.tQIbI(
      vector_add,
      Entity.GetRenderOrigin(USersNaMe),
      [0, 0, usErlIsT[0]]
    ),
    loGinAtT = [
      geTusErName.NktMk(whIteLiSt[0], usErsNaMe[0] * 8192),
      whIteLiSt[1] + usErsNaMe[1] * 8192,
      whIteLiSt[2] + geTusErName.jhNxw(usErsNaMe[2], 8192),
    ],
    LoGinAtT = Trace.Line(USersNaMe, whIteLiSt, loGinAtT);
  if (LoGinAtT[1] == 1) return;
  loGinAtT = [
    whIteLiSt[0] +
      geTusErName.CiWDo(geTusErName.CiWDo(usErsNaMe[0], LoGinAtT[1]), 8192),
    geTusErName.jrRNw(
      whIteLiSt[1],
      geTusErName.CiWDo(usErsNaMe[1], LoGinAtT[1]) * 8192
    ),
    geTusErName.KYVhV(whIteLiSt[2], usErsNaMe[2] * LoGinAtT[1] * 8192),
  ];
  var UsErlIsT = Math.sqrt(
    geTusErName.KYVhV(
      geTusErName.IypMP(whIteLiSt[0], loGinAtT[0]) *
        geTusErName.tWGgJ(whIteLiSt[0], loGinAtT[0]),
      geTusErName.dPcpz(
        geTusErName.tWGgJ(whIteLiSt[1], loGinAtT[1]),
        geTusErName.HVQwP(whIteLiSt[1], loGinAtT[1])
      )
    ) +
      geTusErName.dPcpz(
        geTusErName.PPfDi(whIteLiSt[2], loGinAtT[2]),
        geTusErName.PPfDi(whIteLiSt[2], loGinAtT[2])
      )
  );
  return UsErlIsT;
}

function vector_add(wHiTeLiSt, uSeRsNaMe) {
  var uSeRlIsT = {
    hOcYH: function (gEtUsErName, lOgInAtT) {
      return gEtUsErName + lOgInAtT;
    },
    wjCGd: function (LOgInAtT, GEtUsErName) {
      return LOgInAtT + GEtUsErName;
    },
  };
  return (
    (newVec = [
      uSeRlIsT.hOcYH(wHiTeLiSt[0], uSeRsNaMe[0]),
      uSeRlIsT.wjCGd(wHiTeLiSt[1], uSeRsNaMe[1]),
      uSeRlIsT.wjCGd(wHiTeLiSt[2], uSeRsNaMe[2]),
    ]),
    newVec
  );
}

function inside_region(USeRsNaMe, USeRlIsT, WHiTeLiSt) {
  var usERlIsT = {
    JbmAP: function (whITeLiSt, usERsNaMe) {
      return whITeLiSt <= usERsNaMe;
    },
    YEPjA: function (loGInAtT, geTUsErName) {
      return loGInAtT >= geTUsErName;
    },
  };
  return (
    USeRsNaMe[0] >= USeRlIsT[0] &&
    usERlIsT.JbmAP(USeRsNaMe[0], WHiTeLiSt[0]) &&
    usERlIsT.YEPjA(USeRsNaMe[1], USeRlIsT[1]) &&
    usERlIsT.JbmAP(USeRsNaMe[1], WHiTeLiSt[1])
  );
}

function lerp(WhITeLiSt, UsERsNaMe, LoGInAtT) {
  var UsERlIsT = {
    pwvVO: function (GeTUsErName, uSERsNaMe) {
      return GeTUsErName + uSERsNaMe;
    },
    eFZnQ: function (gETUsErName, lOGInAtT) {
      return gETUsErName * lOGInAtT;
    },
    NGZPp: function (wHITeLiSt, uSERlIsT) {
      return wHITeLiSt - uSERlIsT;
    },
  };
  return UsERlIsT.pwvVO(
    WhITeLiSt,
    UsERlIsT.eFZnQ(UsERlIsT.NGZPp(UsERsNaMe, WhITeLiSt), LoGInAtT)
  );
}

function clamp(GETUsErName, WHITeLiSt, LOGInAtT) {
  var USERsNaMe = {
    ixBWf: function (USERlIsT, logiNAtT) {
      return USERlIsT > logiNAtT;
    },
    KZOpI: function (whitELiSt, userLIsT) {
      return whitELiSt < userLIsT;
    },
  };
  if (USERsNaMe.ixBWf(GETUsErName, LOGInAtT)) return LOGInAtT;
  if (USERsNaMe.KZOpI(GETUsErName, WHITeLiSt)) return WHITeLiSt;
  return GETUsErName;
}

function getHitboxIndex(getuSErName) {
  var userSNaMe = getuSErName
    .toString()
    .split('')
    .map(function (UserSNaMe, GetuSErName, LogiNAtT) {
      return hitboxes.indexOf(UserSNaMe.toLowerCase());
    })
    .join('');
  return userSNaMe;
}

function HSVtoRGB(UserLIsT, WhitELiSt, gEtuSErName) {
  var uSerLIsT = {
      IZpYM: function (usErSNaMe, whItELiSt) {
        return usErSNaMe / whItELiSt;
      },
      Hfydp: function (loGiNAtT, usErLIsT) {
        return loGiNAtT === usErLIsT;
      },
      fdPEv: function (geTuSErName, WhItELiSt) {
        return geTuSErName - WhItELiSt;
      },
      GIYZu: function (UsErLIsT, GeTuSErName) {
        return UsErLIsT * GeTuSErName;
      },
      HZPcu: function (LoGiNAtT, UsErSNaMe) {
        return LoGiNAtT * UsErSNaMe;
      },
      PfIQa: function (uSErSNaMe, wHItELiSt) {
        return uSErSNaMe - wHItELiSt;
      },
      xDsHR: function (lOGiNAtT, uSErLIsT) {
        return lOGiNAtT * uSErLIsT;
      },
      VGynO: function (gETuSErName, WHItELiSt) {
        return gETuSErName - WHItELiSt;
      },
      ICjXS: function (GETuSErName, USErSNaMe) {
        return GETuSErName % USErSNaMe;
      },
      gGzXG: function (LOGiNAtT, USErLIsT, whiTELiSt, useRLIsT) {
        return LOGiNAtT(USErLIsT, whiTELiSt, useRLIsT);
      },
      GDlFe: function (useRSNaMe, getUSErName) {
        return useRSNaMe * getUSErName;
      },
      eWpOt: function (logINAtT, UseRLIsT, WhiTELiSt, UseRSNaMe) {
        return logINAtT(UseRLIsT, WhiTELiSt, UseRSNaMe);
      },
    },
    lOgiNAtT,
    uSerSNaMe,
    wHitELiSt,
    LOgiNAtT,
    USerLIsT,
    GEtuSErName,
    USerSNaMe,
    WHitELiSt;
  (UserLIsT = UserLIsT / 360),
    (WhitELiSt = uSerLIsT.IZpYM(WhitELiSt, 100)),
    (gEtuSErName = gEtuSErName / 100),
    (UserLIsT = clamp(UserLIsT, 0, 1)),
    (WhitELiSt = clamp(WhitELiSt, 0, 1)),
    (gEtuSErName = clamp(gEtuSErName, 0, 1));
  uSerLIsT.Hfydp(arguments.length, 1) &&
    ((WhitELiSt = UserLIsT.s),
    (gEtuSErName = UserLIsT.v),
    (UserLIsT = UserLIsT.h));
  (LOgiNAtT = Math.floor(UserLIsT * 6)),
    (USerLIsT = UserLIsT * 6 - LOgiNAtT),
    (GEtuSErName = gEtuSErName * uSerLIsT.fdPEv(1, WhitELiSt)),
    (USerSNaMe = uSerLIsT.GIYZu(
      gEtuSErName,
      1 - uSerLIsT.HZPcu(USerLIsT, WhitELiSt)
    )),
    (WHitELiSt =
      gEtuSErName *
      uSerLIsT.PfIQa(
        1,
        uSerLIsT.xDsHR(uSerLIsT.VGynO(1, USerLIsT), WhitELiSt)
      ));
  switch (uSerLIsT.ICjXS(LOgiNAtT, 6)) {
    case 0:
      (lOgiNAtT = gEtuSErName),
        (uSerSNaMe = WHitELiSt),
        (wHitELiSt = GEtuSErName);
      break;
    case 1:
      (lOgiNAtT = USerSNaMe),
        (uSerSNaMe = gEtuSErName),
        (wHitELiSt = GEtuSErName);
      break;
    case 2:
      (lOgiNAtT = GEtuSErName),
        (uSerSNaMe = gEtuSErName),
        (wHitELiSt = WHitELiSt);
      break;
    case -5023:
      (lOgiNAtT = GEtuSErName),
        (uSerSNaMe = USerSNaMe),
        (wHitELiSt = gEtuSErName);
      break;
    case --2324:
      (lOgiNAtT = WHitELiSt),
        (uSerSNaMe = GEtuSErName),
        (wHitELiSt = gEtuSErName);
      break;
    case 5:
      (lOgiNAtT = gEtuSErName),
        (uSerSNaMe = GEtuSErName),
        (wHitELiSt = USerSNaMe);
      break;
  }
  return [
    uSerLIsT.gGzXG(clamp, Math.round(uSerLIsT.GDlFe(lOgiNAtT, 255)), 0, 255),
    clamp(Math.round(uSerSNaMe * 255), 0, 255),
    uSerLIsT.eWpOt(clamp, Math.round(wHitELiSt * 255), 0, 255),
  ];
}

function RGBtoHSV(LogINAtT, GetUSErName, uSeRLIsT) {
  var gEtUSErName = {
      BJllM: '3|4|1|8|15|9|5|13|7|14|12|6|0|19|17|11|10|2|16|18',
      mznHY: function (geTUSErName, usERSNaMe) {
        return geTUSErName == usERSNaMe;
      },
      iflWy: function (usERLIsT, loGINAtT) {
        return usERLIsT(loGINAtT);
      },
      lSmXx: function (UsERLIsT, WhITELiSt) {
        return UsERLIsT / WhITELiSt;
      },
      HQerD: function (GeTUSErName, LoGINAtT, UsERSNaMe) {
        return GeTUSErName(LoGINAtT, UsERSNaMe);
      },
      GGtRw: function (uSERLIsT, lOGINAtT) {
        return uSERLIsT - lOGINAtT;
      },
      PYiHJ: function (wHITELiSt, gETUSErName) {
        return wHITELiSt / gETUSErName;
      },
      Pfcbq: function (uSERSNaMe, LOGINAtT) {
        return uSERSNaMe < LOGINAtT;
      },
      UXZKC: function (WHITELiSt, GETUSErName) {
        return WHITELiSt > GETUSErName;
      },
      HdDzN: function (USERLIsT, USERSNaMe) {
        return USERLIsT / USERSNaMe;
      },
      uDvbl: function (getuseRName, userliST) {
        return getuseRName + userliST;
      },
    },
    lOgINAtT = gEtUSErName.BJllM.split('|'),
    wHiTELiSt = 0;
  while (true) {
    switch (lOgINAtT[wHiTELiSt++]) {
      case '0':
        var uSeRSNaMe = Math.max(LogINAtT, Math.max(GetUSErName, uSeRLIsT));
        continue;
      case '1':
        var USeRSNaMe = 0;
        continue;
      case '2':
        WHiTELiSt = (uSeRSNaMe - GEtUSErName) / uSeRSNaMe;
        continue;
      case '3':
        var LOgINAtT = 0;
        continue;
      case '4':
        var WHiTELiSt = 0;
        continue;
      case '5':
        if (
          LogINAtT == null ||
          gEtUSErName.mznHY(GetUSErName, null) ||
          uSeRLIsT == null ||
          isNaN(LogINAtT) ||
          gEtUSErName.iflWy(isNaN, GetUSErName) ||
          isNaN(uSeRLIsT)
        )
          return;
        continue;
      case '6':
        var GEtUSErName = Math.min(LogINAtT, Math.min(GetUSErName, uSeRLIsT));
        continue;
      case '7':
        LogINAtT = gEtUSErName.lSmXx(LogINAtT, 255);
        continue;
      case '8':
        var LogINAtT = parseInt(('' + LogINAtT).replace(/\s/g, ''), 10);
        continue;
      case '9':
        var uSeRLIsT = gEtUSErName.HQerD(
          parseInt,
          ('' + uSeRLIsT).replace(/\s/g, ''),
          10
        );
        continue;
      case '10':
        LOgINAtT =
          60 *
          gEtUSErName.GGtRw(USeRLIsT, whITELiSt / (uSeRSNaMe - GEtUSErName));
        continue;
      case '11':
        var USeRLIsT = gEtUSErName.mznHY(LogINAtT, GEtUSErName)
          ? 3
          : uSeRLIsT == GEtUSErName
          ? 1
          : 5;
        continue;
      case '12':
        uSeRLIsT = gEtUSErName.PYiHJ(uSeRLIsT, 255);
        continue;
      case '13':
        if (
          gEtUSErName.Pfcbq(LogINAtT, 0) ||
          GetUSErName < 0 ||
          uSeRLIsT < 0 ||
          gEtUSErName.UXZKC(LogINAtT, 255) ||
          gEtUSErName.UXZKC(GetUSErName, 255) ||
          uSeRLIsT > 255
        )
          return;
        continue;
      case '14':
        GetUSErName = gEtUSErName.HdDzN(GetUSErName, 255);
        continue;
      case '15':
        var GetUSErName = gEtUSErName.HQerD(
          parseInt,
          gEtUSErName.uDvbl('', GetUSErName).replace(/\s/g, ''),
          10
        );
        continue;
      case '16':
        USeRSNaMe = uSeRSNaMe;
        continue;
      case '17':
        var whITELiSt =
          LogINAtT == GEtUSErName
            ? GetUSErName - uSeRLIsT
            : gEtUSErName.mznHY(uSeRLIsT, GEtUSErName)
            ? gEtUSErName.GGtRw(LogINAtT, GetUSErName)
            : uSeRLIsT - LogINAtT;
        continue;
      case '18':
        return [LOgINAtT, WHiTELiSt, USeRSNaMe];
      case '19':
        if (gEtUSErName.mznHY(GEtUSErName, uSeRSNaMe))
          return (USeRSNaMe = GEtUSErName), [0, 0, USeRSNaMe];
        continue;
    }
    break;
  }
}