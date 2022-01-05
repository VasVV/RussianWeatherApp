const CITIES = [
  // {
  //   coordinates: [
  //           90.08333, 52.65],

  //   name: "Абаза",
  //   population: 17111,

  // },
  // {
  //   coordinates: [
  //           91.41667, 53.71667],

  //   name: "Абакан",
  //   population: 165183,

  // },
  // {
  //   coordinates: [
  //           53.65, 53.68333],

  //   name: "Абдулино",
  //   population: 20663,

  // },
  // {
  //   coordinates: [
  //           38.16667, 44.86667],

  //   name: "Абинск",
  //   population: 34926,

  // },
  // {
  //   coordinates: [
  //           53.93333, 55.9],

  //   name: "Агидель",
  //   population: 16365,

  // },
  // {
  //   coordinates: [
  //           52.98333, 56.51667],

  //   name: "Агрыз",
  //   population: 19299,

  // },
  // {
  //   coordinates: [
  //           39.19202, 44.884525],

  //   name: "Адыгейск",
  //   population: 12689,

  // },
  // {
  //   coordinates: [
  //           53.06667, 54.85],

  //   name: "Азнакаево",
  //   population: 34859,

  // },
  // {
  //   coordinates: [
  //           39.41667, 47.1],

  //   name: "Азов",
  //   population: 82882,

  // },
  // {
  //   coordinates: [
  //           90.6, 51.16667],

  //   name: "Ак-Довурак",
  //   population: 13469,

  // },
  // {
  //   coordinates: [
  //           39.86667, 47.26667],

  //   name: "Аксай",
  //   population: 41984,

  // },
  // {
  //   coordinates: [
  //           44.21056, 43.04167],

  //   name: "Алагир",
  //   population: 20949,

  // },
  // {
  //   coordinates: [
  //           61.7, 57.85],

  //   name: "Алапаевск",
  //   population: 38198,

  // },
  // {
  //   coordinates: [
  //           46.58333, 54.85],

  //   name: "Алатырь",
  //   population: 38202,

  // },
  // {
  //   coordinates: [
  //           125.38333, 58.6],

  //   name: "Алдан",
  //   population: 21277,

  // },
  // {
  //   coordinates: [
  //           82.78333, 52.5],

  //   name: "Алейск",
  //   population: 28528,

  // },
  // {
  //   coordinates: [
  //           38.715, 56.39361],

  //   name: "Александров",
  //   population: 61544,

  // },
  // {
  //   coordinates: [
  //           142.15, 50.9],

  //   name: "Александровск-Сахалинский",
  //   population: 10613,

  // },
  // {
  //   coordinates: [
  //           57.58333, 59.16667],

  //   name: "Александровск",
  //   population: 15022,

  // },
  // {
  //   coordinates: [
  //           38.68639, 50.63],

  //   name: "Алексеевка",
  //   population: 39026,

  // },
  // {
  //   coordinates: [
  //           37.06667, 54.5],

  //   name: "Алексин",
  //   population: 61738,

  // },
  // {
  //   coordinates: [
  //           98.66667, 55.55],

  //   name: "Алзамай",
  //   population: 6751,

  // },
  // {
  //   coordinates: [
  //           34.04306, 44.41972],

  //   name: "Алупка",
  //   population: 7771,

  // },
  // {
  //   coordinates: [
  //           34.39778, 44.66722],

  //   name: "Алушта",
  //   population: 29078,

  // },
  // {
  //   coordinates: [
  //           52.3, 54.9],

  //   name: "Альметьевск",
  //   population: 146309,

  // },
  // {
  //   coordinates: [
  //           136.9, 50.21667],

  //   name: "Амурск",
  //   population: 42977,

  // },
  // {
  //   coordinates: [
  //           177.51667, 64.73333],

  //   name: "Анадырь",
  //   population: 13053,

  // },
  // {
  //   coordinates: [
  //           37.31667, 44.89444],

  //   name: "Анапа",
  //   population: 58983,

  // },
  // {
  //   coordinates: [
  //           103.91667, 52.56667],

  //   name: "Ангарск",
  //   population: 233765,

  // },
  // {
  //   coordinates: [
  //           32.26667, 56.65],

  //   name: "Андреаполь",
  //   population: 8265,

  // },
  // {
  //   coordinates: [
  //           86.03333, 56.08333],

  //   name: "Анжеро-Судженск",
  //   population: 76669,

  // },
  // {
  //   coordinates: [
  //           142.51667, 46.71667],

  //   name: "Анива",
  //   population: 8449,

  // },
  // {
  //   coordinates: [
  //           33.39333, 67.5675],

  //   name: "Апатиты",
  //   population: 59690,

  // },
  // {
  //   coordinates: [
  //           37.05, 55.53333],

  //   name: "Апрелевка",
  //   population: 18467,

  // },
  // {
  //   coordinates: [
  //           39.74056, 44.46083],

  //   name: "Апшеронск",
  //   population: 40229,

  // },
  // {
  //   coordinates: [
  //           60.83333, 56.7],

  //   name: "Арамиль",
  //   population: 14227,

  // },
  // {
  //   coordinates: [
  //           45.87722, 43.29222],

  //   name: "Аргун",
  //   population: 29528,

  // },
  // {
  //   coordinates: [
  //           46.23333, 54.85],

  //   name: "Ардатов",
  //   population: 9400,

  // },
  // {
  //   coordinates: [
  //           44.29222, 43.17278],

  //   name: "Ардон",
  //   population: 18774,

  // },
  // {
  //   coordinates: [
  //           43.8, 55.38333],

  //   name: "Арзамас",
  //   population: 106367,

  // },
  // {
  //   coordinates: [
  //           43.5, 51.93333],

  //   name: "Аркадак",
  //   population: 12846,

  // },
  // {
  //   coordinates: [
  //           41.11667, 45],

  //   name: "Армавир",
  //   population: 188897,

  // },
  // {
  //   coordinates: [
  //           33.69306, 46.10694],

  //   name: "Армянск",
  //   population: 21987,

  // },
  // {
  //   coordinates: [
  //           133.26667, 44.16667],

  //   name: "Арсеньев",
  //   population: 56742,

  // },
  // {
  //   coordinates: [
  //           49.87639, 56.09056],

  //   name: "Арск",
  //   population: 18114,

  // },
  // {
  //   coordinates: [
  //           132.18333, 43.35],

  //   name: "Артём",
  //   population: 102636,

  // },
  // {
  //   coordinates: [
  //           93.43333, 54.35],

  //   name: "Артёмовск",
  //   population: 2180,

  // },
  // {
  //   coordinates: [
  //           61.89194, 57.33639],

  //   name: "Артёмовский",
  //   population: 32878,

  // },
  // {
  //   coordinates: [
  //           40.53333, 64.55],

  //   name: "Архангельск",
  //   population: 348716,

  // },
  // {
  //   coordinates: [
  //           61.45639038, 57.01027679],

  //   name: "Асбест",
  //   population: 70067,

  // },
  // {
  //   coordinates: [
  //           86.15, 57],

  //   name: "Асино",
  //   population: 25614,

  // },
  // {
  //   coordinates: [
  //           48.03333, 46.33333],

  //   name: "Астрахань",
  //   population: 520662,

  // },
  // {
  //   coordinates: [
  //           45, 51.86667],

  //   name: "Аткарск",
  //   population: 25620,

  // },
  // {
  //   coordinates: [
  //           46.16667, 48.28333],

  //   name: "Ахтубинск",
  //   population: 41898,

  // },
  // {
  //   coordinates: [
  //           90.5, 56.26667],

  //   name: "Ачинск",
  //   population: 109156,

  // },
  // {
  //   coordinates: [
  //           57.25, 55],

  //   name: "Аша",
  //   population: 31916,

  // },
  // {
  //   coordinates: [
  //           35.95, 59.38333],

  //   name: "Бабаево",
  //   population: 12074,

  // },
  // {
  //   coordinates: [
  //           105.86667, 51.71667],

  //   name: "Бабушкин",
  //   population: 4542,

  // },
  // {
  //   coordinates: [
  //           53.25, 54.4],

  //   name: "Бавлы",
  //   population: 22109,

  // },
  // {
  //   coordinates: [
  //           20.63333, 54.38333],

  //   name: "Багратионовск",
  //   population: 6399,

  // },
  // {
  //   coordinates: [
  //           104.15611, 51.51722],

  //   name: "Байкальск",
  //   population: 13589,

  // },
  // {
  //   coordinates: [
  //           58.31667, 52.58333],

  //   name: "Баймак",
  //   population: 17710,

  // },
  // {
  //   coordinates: [
  //           58.8, 54.93333],

  //   name: "Бакал",
  //   population: 20953,

  // },
  // {
  //   coordinates: [
  //           43.533333, 43.683333],

  //   name: "Баксан",
  //   population: 36857,

  // },
  // {
  //   coordinates: [
  //           36.65, 55.18333],

  //   name: "Балабаново",
  //   population: 26337,

  // },
  // {
  //   coordinates: [
  //           47.78333, 52.03333],

  //   name: "Балаково",
  //   population: 199576,

  // },
  // {
  //   coordinates: [
  //           43.54028, 56.48083],

  //   name: "Балахна",
  //   population: 51526,

  // },
  // {
  //   coordinates: [
  //           37.93333, 55.8],

  //   name: "Балашиха",
  //   population: 215353,

  // },
  // {
  //   coordinates: [
  //           43.16667, 51.55],

  //   name: "Балашов",
  //   population: 82222,

  // },
  // {
  //   coordinates: [
  //           116.64917, 51.57694],

  //   name: "Балей",
  //   population: 12536,

  // },
  // {
  //   coordinates: [
  //           19.91667, 54.65],

  //   name: "Балтийск",
  //   population: 32670,

  // },
  // {
  //   coordinates: [
  //           78.35, 55.35],

  //   name: "Барабинск",
  //   population: 30250,

  // },
  // {
  //   coordinates: [
  //           83.77833, 53.347361],

  //   name: "Барнаул",
  //   population: 635585,

  // },
  // {
  //   coordinates: [
  //           47.11667, 53.65],

  //   name: "Барыш",
  //   population: 17149,

  // },
  // {
  //   coordinates: [
  //           39.75, 47.13333],

  //   name: "Батайск",
  //   population: 112400,

  // },
  // {
  //   coordinates: [
  //           33.86083, 44.75278],

  //   name: "Бахчисарай",
  //   population: 27448,

  // },
  // {
  //   coordinates: [
  //           36.7, 57.78333],

  //   name: "Бежецк",
  //   population: 24517,

  // },
  // {
  //   coordinates: [
  //           40.79306, 48.17472],

  //   name: "Белая Калитва",
  //   population: 43688,

  // },
  // {
  //   coordinates: [
  //           50.85, 58.83333],

  //   name: "Белая Холуница",
  //   population: 11232,

  // },
  // {
  //   coordinates: [
  //           36.6, 50.6],

  //   name: "Белгород",
  //   population: 356426,

  // },
  // {
  //   coordinates: [
  //           54.13333, 54.1],

  //   name: "Белебей",
  //   population: 60183,

  // },
  // {
  //   coordinates: [
  //           43.41667, 52.96667],

  //   name: "Белинский",
  //   population: 8567,

  // },
  // {
  //   coordinates: [
  //           86.3, 54.41667],

  //   name: "Белово",
  //   population: 76752,

  // },
  // {
  //   coordinates: [
  //           128.48333, 50.91667],

  //   name: "Белогорск",
  //   population: 68220,

  // },
  // {
  //   coordinates: [
  //           34.60222, 45.05444],

  //   name: "Белогорск",
  //   population: 16354,

  // },
  // {
  //   coordinates: [
  //           37.78333, 60.03333],

  //   name: "Белозерск",
  //   population: 9614,

  // },
  // {
  //   coordinates: [
  //           84.98333, 52],

  //   name: "Белокуриха",
  //   population: 15072,

  // },
  // {
  //   coordinates: [
  //           34.76667, 64.51667],

  //   name: "Беломорск",
  //   population: 11217,

  // },
  // {
  //   coordinates: [
  //           38.44222, 55.46139],

  //   name: "Белоозёрский",
  //   population: 17842,

  // },
  // {
  //   coordinates: [
  //           58.4, 53.96667],

  //   name: "Белорецк",
  //   population: 68804,

  // },
  // {
  //   coordinates: [
  //           39.86667, 44.76667],

  //   name: "Белореченск",
  //   population: 53891,

  // },
  // {
  //   coordinates: [
  //           36.66667, 55.09167],

  //   name: "Белоусово",
  //   population: 8432,

  // },
  // {
  //   coordinates: [
  //           66.66667, 63.71667],

  //   name: "Белоярский",
  //   population: 20283,

  // },
  // {
  //   coordinates: [
  //           32.93333, 55.83333],

  //   name: "Белый",
  //   population: 3771,

  // },
  // {
  //   coordinates: [
  //           36.13333, 53.8],

  //   name: "Белёв",
  //   population: 13918,

  // },
  // {
  //   coordinates: [
  //           83.1, 54.75],

  //   name: "Бердск",
  //   population: 98809,

  // },
  // {
  //   coordinates: [
  //           56.80528, 59.40806],

  //   name: "Березники",
  //   population: 156350,

  // },
  // {
  //   coordinates: [
  //           86.25, 55.66667],

  //   name: "Берёзовский",
  //   population: 47292,

  // },
  // {
  //   coordinates: [
  //           60.8, 56.9],

  //   name: "Берёзовский",
  //   population: 51583,

  // },
  // {
  //   coordinates: [
  //           44.521691, 43.18889],

  //   name: "Беслан",
  //   population: 36724,

  // },
  // {
  //   coordinates: [
  //           85.16667, 52.51667],

  //   name: "Бийск",
  //   population: 203826,

  // },
  // {
  //   coordinates: [
  //           134.25, 46.81667],

  //   name: "Бикин",
  //   population: 17156,

  // },
  // {
  //   coordinates: [
  //           166.45, 68.05],

  //   name: "Билибино",
  //   population: 5504,

  // },
  // {
  //   coordinates: [
  //           132.93333, 48.78333],

  //   name: "Биробиджан",
  //   population: 75419,

  // },
  // {
  //   coordinates: [
  //           55.53333, 55.41667],

  //   name: "Бирск",
  //   population: 41637,

  // },
  // {
  //   coordinates: [
  //           97.81667, 55.95],

  //   name: "Бирюсинск",
  //   population: 8981,

  // },
  // {
  //   coordinates: [
  //           38.4, 50.65],

  //   name: "Бирюч",
  //   population: 7842,

  // },
  // {
  //   coordinates: [
  //           127.53639, 50.25778],

  //   name: "Благовещенск",
  //   population: 214397,

  // },
  // {
  //   coordinates: [
  //           55.98333, 55.03333],

  //   name: "Благовещенск",
  //   population: 34246,

  // },
  // {
  //   coordinates: [
  //           43.4251513, 45.1029039],

  //   name: "Благодарный",
  //   population: 32736,

  // },
  // {
  //   coordinates: [
  //           40.03222, 51.09444],

  //   name: "Бобров",
  //   population: 19738,

  // },
  // {
  //   coordinates: [
  //           62.05, 56.78333],

  //   name: "Богданович",
  //   population: 31752,

  // },
  // {
  //   coordinates: [
  //           38.13333, 53.76667],

  //   name: "Богородицк",
  //   population: 31897,

  // },
  // {
  //   coordinates: [
  //           43.50722, 56.09972],

  //   name: "Богородск",
  //   population: 25497,

  // },
  // {
  //   coordinates: [
  //           89.51667, 56.2],

  //   name: "Боготол",
  //   population: 21029,

  // },
  // {
  //   coordinates: [
  //           40.55, 49.93333],

  //   name: "Богучар",
  //   population: 11811,

  // },
  // {
  //   coordinates: [
  //           114.2, 57.85],

  //   name: "Бодайбо",
  //   population: 15331,

  // },
  // {
  //   coordinates: [
  //           33.84806, 59.47333],

  //   name: "Бокситогорск",
  //   population: 16593,

  // },
  // {
  //   coordinates: [
  //           49.03333, 54.96667],

  //   name: "Болгар",
  //   population: 8650,

  // },
  // {
  //   coordinates: [
  //           34.07361, 57.87083],

  //   name: "Бологое",
  //   population: 23499,

  // },
  // {
  //   coordinates: [
  //           84.4, 55.66667],

  //   name: "Болотное",
  //   population: 16969,

  // },
  // {
  //   coordinates: [
  //           37.81667, 54.08333],

  //   name: "Болохово",
  //   population: 9619,

  // },
  // {
  //   coordinates: [
  //           36, 53.45],

  //   name: "Болхов",
  //   population: 11421,

  // },
  // {
  //   coordinates: [
  //           132.35, 43.11667],

  //   name: "Большой Камень",
  //   population: 39257,

  // },
  // {
  //   coordinates: [
  //           44.05917, 56.36028],

  //   name: "Бор",
  //   population: 78079,

  // },
  // {
  //   coordinates: [
  //           116.53333, 50.38333],

  //   name: "Борзя",
  //   population: 31376,

  // },
  // {
  //   coordinates: [
  //           42.08333, 51.36667],

  //   name: "Борисоглебск",
  //   population: 65585,

  // },
  // {
  //   coordinates: [
  //           33.91139, 58.38694],

  //   name: "Боровичи",
  //   population: 54731,

  // },
  // {
  //   coordinates: [
  //           36.48333, 55.2],

  //   name: "Боровск",
  //   population: 12283,

  // },
  // {
  //   coordinates: [
  //           94.9, 55.9],

  //   name: "Бородино",
  //   population: 17423,

  // },
  // {
  //   coordinates: [
  //           101.63, 56.15],

  //   name: "Братск",
  //   population: 246348,

  // },
  // {
  //   coordinates: [
  //           38.25889, 55.42278],

  //   name: "Бронницы",
  //   population: 21102,

  // },
  // {
  //   coordinates: [
  //           34.36667, 53.25],

  //   name: "Брянск",
  //   population: 415640,

  // },
  // {
  //   coordinates: [
  //           52.78333, 54.53333],

  //   name: "Бугульма",
  //   population: 89144,

  // },
  // {
  //   coordinates: [
  //           52.41667, 53.61667],

  //   name: "Бугуруслан",
  //   population: 52249,

  // },
  // {
  //   coordinates: [
  //           44.14, 44.79],

  //   name: "Будённовск",
  //   population: 64628,

  // },
  // {
  //   coordinates: [
  //           52.26667, 52.76667],

  //   name: "Бузулук",
  //   population: 82816,

  // },
  // {
  //   coordinates: [
  //           48.28333, 54.96667],

  //   name: "Буинск",
  //   population: 20342,

  // },
  // {
  //   coordinates: [
  //           41.51667, 58.48333],

  //   name: "Буй",
  //   population: 25763,

  // },
  // {
  //   coordinates: [
  //           47.11667, 42.81667],

  //   name: "Буйнакск",
  //   population: 65735,

  // },
  // {
  //   coordinates: [
  //           40.58889, 50.825],

  //   name: "Бутурлиновка",
  //   population: 27208,

  // },
  // {
  //   coordinates: [
  //           33.25, 57.96667],

  //   name: "Валдай",
  //   population: 16099,

  // },
  // {
  //   coordinates: [
  //           38.11667, 50.18333],

  //   name: "Валуйки",
  //   population: 35322,

  // },
  // {
  //   coordinates: [
  //           31.2, 55.6],

  //   name: "Велиж",
  //   population: 7620,

  // },
  // {
  //   coordinates: [
  //           30.51667, 56.35],

  //   name: "Великие Луки",
  //   population: 98778,

  // },
  // {
  //   coordinates: [
  //           31.275, 58.525],

  //   name: "Великий Новгород",
  //   population: 218724,

  // },
  // {
  //   coordinates: [
  //           46.30389, 60.75889],

  //   name: "Великий Устюг",
  //   population: 31664,

  // },
  // {
  //   coordinates: [
  //           42.1, 61.06667],

  //   name: "Вельск",
  //   population: 23885,

  // },
  // {
  //   coordinates: [
  //           38.26667, 54.35],

  //   name: "Венёв",
  //   population: 15220,

  // },
  // {
  //   coordinates: [
  //           54.65, 58.06667],

  //   name: "Верещагино",
  //   population: 22760,

  // },
  // {
  //   coordinates: [
  //           36.18333, 55.33333],

  //   name: "Верея",
  //   population: 5368,

  // },
  // {
  //   coordinates: [
  //           59.21667, 53.88333],

  //   name: "Верхнеуральск",
  //   population: 9459,

  // },
  // {
  //   coordinates: [
  //           59.93333, 57.38333],

  //   name: "Верхний Тагил",
  //   population: 11843,

  // },
  // {
  //   coordinates: [
  //           60.23333, 56.05],

  //   name: "Верхний Уфалей",
  //   population: 30504,

  // },
  // {
  //   coordinates: [
  //           60.58333, 56.96667],

  //   name: "Верхняя Пышма",
  //   population: 58707,

  // },
  // {
  //   coordinates: [
  //           60.55, 58.05],

  //   name: "Верхняя Салда",
  //   population: 46240,

  // },
  // {
  //   coordinates: [
  //           59.8224444, 58.3574333],

  //   name: "Верхняя Тура",
  //   population: 9468,

  // },
  // {
  //   coordinates: [
  //           60.8, 58.86667],

  //   name: "Верхотурье",
  //   population: 8815,

  // },
  // {
  //   coordinates: [
  //           133.38333, 67.55],

  //   name: "Верхоянск",
  //   population: 1311,

  // },
  // {
  //   coordinates: [
  //           37.26667, 58.65],

  //   name: "Весьегонск",
  //   population: 7330,

  // },
  // {
  //   coordinates: [
  //           45.78111, 57.85556],

  //   name: "Ветлуга",
  //   population: 8956,

  // },
  // {
  //   coordinates: [
  //           37.7, 55.55],

  //   name: "Видное",
  //   population: 56798,

  // },
  // {
  //   coordinates: [
  //           121.61667, 63.75],

  //   name: "Вилюйск",
  //   population: 10233,

  // },
  // {
  //   coordinates: [
  //           158.4, 52.93333],

  //   name: "Вилючинск",
  //   population: 22905,

  // },
  // {
  //   coordinates: [
  //           101.16667, 56.11667],

  //   name: "Вихоревка",
  //   population: 22528,

  // },
  // {
  //   coordinates: [
  //           41.91667, 57.2],

  //   name: "Вичуга",
  //   population: 37609,

  // },
  {
    coordinates: [131.9, 43.11667],

    name: "Владивосток",
    population: 592069,
  },
  // {
  //   coordinates: [
  //           44.683315, 43.01667],

  //   name: "Владикавказ",
  //   population: 311635,

  // },
  // {
  //   coordinates: [
  //           40.41667, 56.13333],

  //   name: "Владимир",
  //   population: 348256,

  // },
  // {
  //   coordinates: [
  //           44.51389, 48.71167],

  //   name: "Волгоград",
  //   population: 1004763,

  // },
  // {
  //   coordinates: [
  //           42.20722, 47.54],

  //   name: "Волгодонск",
  //   population: 170621,

  // },
  // {
  //   coordinates: [
  //           41.16667, 57.43333],

  //   name: "Волгореченск",
  //   population: 17108,

  // },
  // {
  //   coordinates: [
  //           48.35, 55.86667],

  //   name: "Волжск",
  //   population: 55671,

  // },
  // {
  //   coordinates: [
  //           44.76667, 48.78333],

  //   name: "Волжский",
  //   population: 314436,

  // },
  // {
  //   coordinates: [
  //           39.9, 59.21667],

  //   name: "Вологда",
  //   population: 301642,

  // },
  // {
  //   coordinates: [
  //           43.2, 56.23333],

  //   name: "Володарск",
  //   population: 9924,

  // },
  // {
  //   coordinates: [
  //           35.95, 56.03333],

  //   name: "Волоколамск",
  //   population: 23386,

  // },
  // {
  //   coordinates: [
  //           29.484819, 59.447275],

  //   name: "Волосово",
  //   population: 12162,

  // },
  // {
  //   coordinates: [
  //           32.35, 59.91667],

  //   name: "Волхов",
  //   population: 47344,

  // },
  // {
  //   coordinates: [
  //           60.05, 59.93333],

  //   name: "Волчанск",
  //   population: 10008,

  // },
  // {
  //   coordinates: [
  //           47.38333, 52.05],

  //   name: "Вольск",
  //   population: 66520,

  // },
  // {
  //   coordinates: [
  //           64.03333, 67.5],

  //   name: "Воркута",
  //   population: 70551,

  // },
  // {
  //   coordinates: [
  //           39.21056, 51.67167],

  //   name: "Воронеж",
  //   population: 1050602,

  // },
  // {
  //   coordinates: [
  //           43.26667, 55.98333],

  //   name: "Ворсма",
  //   population: 11622,

  // },
  // {
  //   coordinates: [
  //           38.68056, 55.32333],

  //   name: "Воскресенск",
  //   population: 91301,

  // },
  // {
  //   coordinates: [
  //           54, 57.05],

  //   name: "Воткинск",
  //   population: 100034,

  // },
  // {
  //   coordinates: [
  //           30.65, 60.01667],

  //   name: "Всеволожск",
  //   population: 59689,

  // },
  // {
  //   coordinates: [
  //           57.31667, 63.86667],

  //   name: "Вуктыл",
  //   population: 12357,

  // },
  // {
  //   coordinates: [
  //           28.74417, 60.70917],

  //   name: "Выборг",
  //   population: 80013,

  // },
  // {
  //   coordinates: [
  //           42.17306, 55.31944],

  //   name: "Выкса",
  //   population: 56196,

  // },
  // {
  //   coordinates: [
  //           36.55, 56.31667],

  //   name: "Высоковск",
  //   population: 10642,

  // },
  // {
  //   coordinates: [
  //           28.56667, 60.61667],

  //   name: "Высоцк",
  //   population: 1244,

  // },
  // {
  //   coordinates: [
  //           36.45, 61],

  //   name: "Вытегра",
  //   population: 10490,

  // },
  // {
  //   coordinates: [
  //           34.56667, 57.58333],

  //   name: "Вышний Волочёк",
  //   population: 52326,

  // },
  // {
  //   coordinates: [
  //           134.75, 47.53333],

  //   name: "Вяземский",
  //   population: 14556,

  // },
  // {
  //   coordinates: [
  //           42.12917, 56.24333],

  //   name: "Вязники",
  //   population: 41252,

  // },
  // {
  //   coordinates: [
  //           34.285, 55.21028],

  //   name: "Вязьма",
  //   population: 57103,

  // },
  // {
  //   coordinates: [
  //           51.068583, 56.218417],

  //   name: "Вятские Поляны",
  //   population: 35159,

  // },
  // {
  //   coordinates: [
  //           40.11667, 56.56667],

  //   name: "Гаврилов Посад",
  //   population: 6434,

  // },
  // {
  //   coordinates: [
  //           39.85, 57.3],

  //   name: "Гаврилов-Ям",
  //   population: 17792,

  // },
  // {
  //   coordinates: [
  //           35, 55.55],

  //   name: "Гагарин",
  //   population: 31721,

  // },
  // {
  //   coordinates: [
  //           33.31667, 69.25528],

  //   name: "Гаджиево",
  //   population: 11089,

  // },
  // {
  //   coordinates: [
  //           58.45, 51.46667],

  //   name: "Гай",
  //   population: 38302,

  // },
  // {
  //   coordinates: [
  //           42.35, 58.38333],

  //   name: "Галич",
  //   population: 17346,

  // },
  // {
  //   coordinates: [
  //           30.13333, 59.56667],

  //   name: "Гатчина",
  //   population: 92566,

  // },
  // {
  //   coordinates: [
  //           21.06667, 54.65],

  //   name: "Гвардейск",
  //   population: 13888,

  // },
  // {
  //   coordinates: [
  //           27.81667, 58.73333],

  //   name: "Гдов",
  //   population: 4379,

  // },
  // {
  //   coordinates: [
  //           38.07667, 44.56083],

  //   name: "Геленджик",
  //   population: 54813,

  // },
  // {
  //   coordinates: [
  //           43.46667, 44.15],

  //   name: "Георгиевск",
  //   population: 72126,

  // },
  // {
  //   coordinates: [
  //           52.67417, 58.14083],

  //   name: "Глазов",
  //   population: 95835,

  // },
  // {
  //   coordinates: [
  //           36.98722, 55.61472],

  //   name: "Голицыно",
  //   population: 17447,

  // },
  // {
  //   coordinates: [
  //           43.06667, 56.13333],

  //   name: "Горбатов",
  //   population: 2278,

  // },
  // {
  //   coordinates: [
  //           85.96, 51.96],

  //   name: "Горно-Алтайск",
  //   population: 62861,

  // },
  // {
  //   coordinates: [
  //           58.31667, 58.38333],

  //   name: "Горнозаводск",
  //   population: 12334,

  // },
  // {
  //   coordinates: [
  //           81.467934, 50.993028],

  //   name: "Горняк",
  //   population: 13040,

  // },
  // {
  //   coordinates: [
  //           43.47028, 56.65028],

  //   name: "Городец",
  //   population: 30699,

  // },
  // {
  //   coordinates: [
  //           45.7, 53.26667],

  //   name: "Городище",
  //   population: 8102,

  // },
  // {
  //   coordinates: [
  //           41.93333, 46.08333],

  //   name: "Городовиковск",
  //   population: 9565,

  // },
  // {
  //   coordinates: [
  //           42.6925, 56.20278],

  //   name: "Гороховец",
  //   population: 14015,

  // },
  // {
  //   coordinates: [
  //           39.13333, 44.63333],

  //   name: "Горячий Ключ",
  //   population: 30093,

  // },
  // {
  //   coordinates: [
  //           35.66667, 50.48333],

  //   name: "Грайворон",
  //   population: 6234,

  // },
  // {
  //   coordinates: [
  //           57.83333, 58.56667],

  //   name: "Гремячинск",
  //   population: 11005,

  // },
  // {
  //   coordinates: [
  //           45.7, 43.31667],

  //   name: "Грозный",
  //   population: 271596,

  // },
  // {
  //   coordinates: [
  //           39.93333, 52.5],

  //   name: "Грязи",
  //   population: 46798,

  // },
  // {
  //   coordinates: [
  //           40.25, 58.88333],

  //   name: "Грязовец",
  //   population: 15528,

  // },
  // {
  //   coordinates: [
  //           57.58333, 58.86667],

  //   name: "Губаха",
  //   population: 27544,

  // },
  // {
  //   coordinates: [
  //           37.55, 51.28333],

  //   name: "Губкин",
  //   population: 88562,

  // },
  // {
  //   coordinates: [
  //           76.5, 64.43333],

  //   name: "Губкинский",
  //   population: 23340,

  // },
  // {
  //   coordinates: [
  //           46.09611, 43.34861],

  //   name: "Гудермес",
  //   population: 45643,

  // },
  // {
  //   coordinates: [
  //           39.93333, 48.05],

  //   name: "Гуково",
  //   population: 67268,

  // },
  // {
  //   coordinates: [
  //           40.69444, 45.36028],

  //   name: "Гулькевичи",
  //   population: 35225,

  // },
  // {
  //   coordinates: [
  //           20.6, 54.76667],

  //   name: "Гурьевск",
  //   population: 12433,

  // },
  // {
  //   coordinates: [
  //           85.93333, 54.28333],

  //   name: "Гурьевск",
  //   population: 24816,

  // },
  // {
  //   coordinates: [
  //           22.2, 54.58333],

  //   name: "Гусев",
  //   population: 28260,

  // },
  // {
  //   coordinates: [
  //           106.52917, 51.28556],

  //   name: "Гусиноозёрск",
  //   population: 23280,

  // },
  // {
  //   coordinates: [
  //           40.65, 55.61667],

  //   name: "Гусь-Хрустальный",
  //   population: 60773,

  // },
  // {
  //   coordinates: [
  //           55.03333, 54.21667],

  //   name: "Давлеканово",
  //   population: 24040,

  // },
  // {
  //   coordinates: [
  //           48.2, 42.11667],

  //   name: "Дагестанские Огни",
  //   population: 30671,

  // },
  // {
  //   coordinates: [
  //           62.91667, 56.26667],

  //   name: "Далматово",
  //   population: 13913,

  // },
  // {
  //   coordinates: [
  //           135.61667, 44.56667],

  //   name: "Дальнегорск",
  //   population: 37503,

  // },
  // {
  //   coordinates: [
  //           133.73333, 45.93333],

  //   name: "Дальнереченск",
  //   population: 27601,

  // },
  // {
  //   coordinates: [
  //           40.18333, 58.18333],

  //   name: "Данилов",
  //   population: 15861,

  // },
  // {
  //   coordinates: [
  //           39.15, 53.25],

  //   name: "Данков",
  //   population: 21056,

  // },
  // {
  //   coordinates: [
  //           60.1, 56.7],

  //   name: "Дегтярск",
  //   population: 15521,

  // },
  // {
  //   coordinates: [
  //           37.13333, 55.86667],

  //   name: "Дедовск",
  //   population: 29280,

  // },
  // {
  //   coordinates: [
  //           31.51667, 55.26667],

  //   name: "Демидов",
  //   population: 7333,

  // },
  // {
  //   coordinates: [
  //           48.29583, 42.06917],

  //   name: "Дербент",
  //   population: 119961,

  // },
  // {
  //   coordinates: [
  //           33.2902917, 54.1530861],

  //   name: "Десногорск",
  //   population: 29677,

  // },
  // {
  //   coordinates: [
  //           34.39333, 45.70861],

  //   name: "Джанкой",
  //   population: 38622,

  // },
  // {
  //   coordinates: [
  //           43.45, 56.23333],

  //   name: "Дзержинск",
  //   population: 240762,

  // },
  // {
  //   coordinates: [
  //           37.85, 55.63333],

  //   name: "Дзержинский",
  //   population: 47125,

  // },
  // {
  //   coordinates: [
  //           92.38333, 55.95],

  //   name: "Дивногорск",
  //   population: 28271,

  // },
  // {
  //   coordinates: [
  //           44.15, 43.15],

  //   name: "Дигора",
  //   population: 10856,

  // },
  // {
  //   coordinates: [
  //           49.58333, 54.23333],

  //   name: "Димитровград",
  //   population: 122549,

  // },
  // {
  //   coordinates: [
  //           35.07556, 52.12889],

  //   name: "Дмитриев",
  //   population: 7721,

  // },
  // {
  //   coordinates: [
  //           37.52167, 56.34667],

  //   name: "Дмитров",
  //   population: 61454,

  // },
  // {
  //   coordinates: [
  //           35.141478, 52.505504],

  //   name: "Дмитровск",
  //   population: 5956,

  // },
  // {
  //   coordinates: [
  //           29.96667, 57.83333],

  //   name: "Дно",
  //   population: 9061,

  // },
  // {
  //   coordinates: [
  //           56.41667, 58.45],

  //   name: "Добрянка",
  //   population: 35720,

  // },
  // {
  //   coordinates: [
  //           37.5, 55.93333],

  //   name: "Долгопрудный",
  //   population: 90976,

  // },
  // {
  //   coordinates: [
  //           142.8, 47.31667],

  //   name: "Долинск",
  //   population: 12200,

  // },
  // {
  //   coordinates: [
  //           37.75806, 55.44389],

  //   name: "Домодедово",
  //   population: 96123,

  // },
  // {
  //   coordinates: [
  //           39.9448917, 48.3369194],

  //   name: "Донецк",
  //   population: 50085,

  // },
  // {
  //   coordinates: [
  //           38.31667, 53.96667],

  //   name: "Донской",
  //   population: 64561,

  // },
  // {
  //   coordinates: [
  //           33.30778, 54.92],

  //   name: "Дорогобуж",
  //   population: 10720,

  // },
  // {
  //   coordinates: [
  //           38.84944, 55.74444],

  //   name: "Дрезна",
  //   population: 11815,

  // },
  // {
  //   coordinates: [
  //           37.15, 56.75],

  //   name: "Дубна",
  //   population: 70569,

  // },
  // {
  //   coordinates: [
  //           44.83333, 49.05],

  //   name: "Дубовка",
  //   population: 14345,

  // },
  // {
  //   coordinates: [
  //           86.18333, 69.4],

  //   name: "Дудинка",
  //   population: 22207,

  // },
  // {
  //   coordinates: [
  //           32.41667, 55.2],

  //   name: "Духовщина",
  //   population: 4370,

  // },
  // {
  //   coordinates: [
  //           54.86667, 55.48333],

  //   name: "Дюртюли",
  //   population: 31272,

  // },
  // {
  //   coordinates: [
  //           34.33333, 53.6],

  //   name: "Дятьково",
  //   population: 29438,

  // },
  // {
  //   coordinates: [
  //           33.35833, 45.2],

  //   name: "Евпатория",
  //   population: 105719,

  // },
  // {
  //   coordinates: [
  //           39.03361, 55.38333],

  //   name: "Егорьевск",
  //   population: 70133,

  // },
  // {
  //   coordinates: [
  //           38.27778, 46.71056],

  //   name: "Ейск",
  //   population: 87771,

  // },
  // {
  //   coordinates: [
  //           60.58333, 56.83333],

  //   name: "Екатеринбург",
  //   population: 1495066,

  // },
  // {
  //   coordinates: [
  //           52.03333, 55.76667],

  //   name: "Елабуга",
  //   population: 70750,

  // },
  // {
  //   coordinates: [
  //           38.46667, 52.61667],

  //   name: "Елец",
  //   population: 108404,

  // },
  // {
  //   coordinates: [
  //           158.38333, 53.18333],

  //   name: "Елизово",
  //   population: 39548,

  // },
  // {
  //   coordinates: [
  //           33.16667, 54.56667],

  //   name: "Ельня",
  //   population: 10095,

  // },
  // {
  //   coordinates: [
  //           61.31667, 54.75],

  //   name: "Еманжелинск",
  //   population: 30218,

  // },
  // {
  //   coordinates: [
  //           50.85, 62.58333],

  //   name: "Емва",
  //   population: 14574,

  // },
  // {
  //   coordinates: [
  //           92.13333, 58.46667],

  //   name: "Енисейск",
  //   population: 18769,

  // },
  // {
  //   coordinates: [
  //           36.57, 55.20556],

  //   name: "Ермолино",
  //   population: 10409,

  // },
  // {
  //   coordinates: [
  //           48.28333, 51.35],

  //   name: "Ершов",
  //   population: 21447,

  // },
  // {
  //   coordinates: [
  //           42.86417, 44.04306],

  //   name: "Ессентуки",
  //   population: 100969,

  // },
  // {
  //   coordinates: [
  //           38.082585, 53.149167],

  //   name: "Ефремов",
  //   population: 42350,

  // },
  // {
  //   coordinates: [
  //           43.03333, 44.13333],

  //   name: "Железноводск",
  //   population: 24496,

  // },
  // {
  //   coordinates: [
  //           104.11667, 56.58333],

  //   name: "Железногорск-Илимский",
  //   population: 26134,

  // },
  // {
  //   coordinates: [
  //           93.53333, 56.25],

  //   name: "Железногорск",
  //   population: 85559,

  // },
  // {
  //   coordinates: [
  //           35.351582, 52.339174],

  //   name: "Железногорск",
  //   population: 95057,

  // },
  // {
  //   coordinates: [
  //           41.46667, 51.83333],

  //   name: "Жердевка",
  //   population: 15211,

  // },
  // {
  //   coordinates: [
  //           49.5, 53.4],

  //   name: "Жигулёвск",
  //   population: 57565,

  // },
  // {
  //   coordinates: [
  //           34.73611, 53.75028],

  //   name: "Жиздра",
  //   population: 5585,

  // },
  // {
  //   coordinates: [
  //           44.78083, 50.98028],

  //   name: "Жирновск",
  //   population: 16890,

  // },
  // {
  //   coordinates: [
  //           36.75, 55.03333],

  //   name: "Жуков",
  //   population: 12150,

  // },
  // {
  //   coordinates: [
  //           33.73333, 53.53333],

  //   name: "Жуковка",
  //   population: 18269,

  // },
  // {
  //   coordinates: [
  //           38.11611, 55.60111],

  //   name: "Жуковский",
  //   population: 102729,

  // },
  // {
  //   coordinates: [
  //           129.43333, 50.11667],

  //   name: "Завитинск",
  //   population: 11481,

  // },
  // {
  //   coordinates: [
  //           66.55, 56.5],

  //   name: "Заводоуковск",
  //   population: 25657,

  // },
  // {
  //   coordinates: [
  //           42.13333, 57.48333],

  //   name: "Заволжск",
  //   population: 12045,

  // },
  // {
  //   coordinates: [
  //           43.39278, 56.6425],

  //   name: "Заволжье",
  //   population: 40265,

  // },
  // {
  //   coordinates: [
  //           38.91667, 52.38333],

  //   name: "Задонск",
  //   population: 9695,

  // },
  // {
  //   coordinates: [
  //           52.01667, 55.3],

  //   name: "Заинск",
  //   population: 41798,

  // },
  // {
  //   coordinates: [
  //           103.28333, 50.38333],

  //   name: "Закаменск",
  //   population: 11249,

  // },
  // {
  //   coordinates: [
  //           94.7, 55.96667],

  //   name: "Заозёрный",
  //   population: 10683,

  // },
  // {
  //   coordinates: [
  //           32.45, 69.4],

  //   name: "Заозёрск",
  //   population: 11206,

  // },
  // {
  //   coordinates: [
  //           32.08333, 56.26667],

  //   name: "Западная Двина",
  //   population: 9376,

  // },
  // {
  //   coordinates: [
  //           30.8, 69.41667],

  //   name: "Заполярный",
  //   population: 15835,

  // },
  // {
  //   coordinates: [
  //           38.88361, 54.76528],

  //   name: "Зарайск",
  //   population: 24648,

  // },
  // {
  //   coordinates: [
  //           45.16667, 53.2],

  //   name: "Заречный",
  //   population: 63579,

  // },
  // {
  //   coordinates: [
  //           61.31667, 56.81667],

  //   name: "Заречный",
  //   population: 26803,

  // },
  // {
  //   coordinates: [
  //           84.91667, 53.7],

  //   name: "Заринск",
  //   population: 47035,

  // },
  // {
  //   coordinates: [
  //           48.01667, 55.96667],

  //   name: "Звенигово",
  //   population: 11945,

  // },
  // {
  //   coordinates: [
  //           36.85, 55.73333],

  //   name: "Звенигород",
  //   population: 16395,

  // },
  // {
  //   coordinates: [
  //           40.11667, 48.01667],

  //   name: "Зверево",
  //   population: 22416,

  // },
  // {
  //   coordinates: [
  //           94.58333, 56.1],

  //   name: "Зеленогорск",
  //   population: 66018,

  // },
  // {
  //   coordinates: [
  //           20.48333, 54.95],

  //   name: "Зеленоградск",
  //   population: 13015,

  // },
  // {
  //   coordinates: [
  //           48.51667, 55.85],

  //   name: "Зеленодольск",
  //   population: 97651,

  // },
  // {
  //   coordinates: [
  //           43.8731235, 44.4070115],

  //   name: "Зеленокумск",
  //   population: 35790,

  // },
  // {
  //   coordinates: [
  //           40.3040333, 46.846525],

  //   name: "Зерноград",
  //   population: 26850,

  // },
  // {
  //   coordinates: [
  //           127.25, 53.73333],

  //   name: "Зея",
  //   population: 25042,

  // },
  // {
  //   coordinates: [
  //           102.05, 53.91667],

  //   name: "Зима",
  //   population: 32522,

  // },
  // {
  //   coordinates: [
  //           59.66667, 55.16667],

  //   name: "Златоуст",
  //   population: 174985,

  // },
  // {
  //   coordinates: [
  //           31.73333, 52.43333],

  //   name: "Злынка",
  //   population: 5507,

  // },
  // {
  //   coordinates: [
  //           82.16667, 51.16667],

  //   name: "Змеиногорск",
  //   population: 10569,

  // },
  // {
  //   coordinates: [
  //           45.75, 48.58333],

  //   name: "Знаменск",
  //   population: 29357,

  // },
  // {
  //   coordinates: [
  //           34.58333, 56.16667],

  //   name: "Зубцов",
  //   population: 6937,

  // },
  // {
  //   coordinates: [
  //           51.130361, 58.403333],

  //   name: "Зуевка",
  //   population: 11198,

  // },
  // {
  //   coordinates: [
  //           28.20528, 59.375],

  //   name: "Ивангород",
  //   population: 9797,

  // },
  // {
  //   coordinates: [
  //           41, 57],

  //   name: "Иваново",
  //   population: 409277,

  // },
  // {
  //   coordinates: [
  //           37.92, 55.97],

  //   name: "Ивантеевка",
  //   population: 58594,

  // },
  // {
  //   coordinates: [
  //           60.43333, 60.68333],

  //   name: "Ивдель",
  //   population: 17764,

  // },
  // {
  //   coordinates: [
  //           86.56667, 67.46667],

  //   name: "Игарка",
  //   population: 6183,

  // },
  // {
  //   coordinates: [
  //           53.21222, 56.85306],

  //   name: "Ижевск",
  //   population: 628117,

  // },
  // {
  //   coordinates: [
  //           47.86667, 42.56667],

  //   name: "Избербаш",
  //   population: 56301,

  // },
  // {
  //   coordinates: [
  //           41.71667, 45.36667],

  //   name: "Изобильный",
  //   population: 40546,

  // },
  // {
  //   coordinates: [
  //           96.06667, 56.23333],

  //   name: "Иланский",
  //   population: 16108,

  // },
  // {
  //   coordinates: [
  //           46.35, 53.85],

  //   name: "Инза",
  //   population: 18547,

  // },
  // {
  //   coordinates: [
  //           48.736553, 55.763633],

  //   name: "Иннополис",
  //   population: 405,

  // },
  // {
  //   coordinates: [
  //           44.36667, 53.86667],

  //   name: "Инсар",
  //   population: 8687,

  // },
  // {
  //   coordinates: [
  //           60.1315194, 66.0398139],

  //   name: "Инта",
  //   population: 32021,

  // },
  // {
  //   coordinates: [
  //           42.9, 45.71667],

  //   name: "Ипатово",
  //   population: 26055,

  // },
  // {
  //   coordinates: [
  //           63.06667, 57.66667],

  //   name: "Ирбит",
  //   population: 38352,

  // },
  // {
  //   coordinates: [
  //           104.3, 52.28333],

  //   name: "Иркутск",
  //   population: 587225,

  // },
  // {
  //   coordinates: [
  //           71.26056, 54.90889],

  //   name: "Исилькуль",
  //   population: 25905,

  // },
  // {
  //   coordinates: [
  //           83.3, 54.63333],

  //   name: "Искитим",
  //   population: 60072,

  // },
  // {
  //   coordinates: [
  //           36.86667, 55.91667],

  //   name: "Истра",
  //   population: 35106,

  // },
  // {
  //   coordinates: [
  //           69.5, 56.11667],

  //   name: "Ишим",
  //   population: 69567,

  // },
  // {
  //   coordinates: [
  //           56.04389, 53.45444],

  //   name: "Ишимбай",
  //   population: 66259,

  // },
  // {
  //   coordinates: [
  //           47.89583, 56.63278],

  //   name: "Йошкар-Ола",
  //   population: 248688,

  // },
  // {
  //   coordinates: [
  //           40.33333, 59.5],

  //   name: "Кадников",
  //   population: 4797,

  // },
  // {
  //   coordinates: [
  //           49.11444, 55.79083],

  //   name: "Казань",
  //   population: 1257341,

  // },
  // {
  //   coordinates: [
  //           43.53333, 48.68333],

  //   name: "Калач-на-Дону",
  //   population: 26892,

  // },
  // {
  //   coordinates: [
  //           41.01556, 50.42583],

  //   name: "Калач",
  //   population: 20046,

  // },
  // {
  //   coordinates: [
  //           74.58333, 55.05],

  //   name: "Калачинск",
  //   population: 24000,

  // },
  // {
  //   coordinates: [
  //           20.5, 54.71667],

  //   name: "Калининград",
  //   population: 431491,

  // },
  // {
  //   coordinates: [
  //           44.45, 51.5],

  //   name: "Калининск",
  //   population: 16442,

  // },
  // {
  //   coordinates: [
  //           87.26667, 53.51667],

  //   name: "Калтан",
  //   population: 21893,

  // },
  // {
  //   coordinates: [
  //           36.26667, 54.53333],

  //   name: "Калуга",
  //   population: 325185,

  // },
  // {
  //   coordinates: [
  //           37.85, 57.23333],

  //   name: "Калязин",
  //   population: 13870,

  // },
  // {
  //   coordinates: [
  //           54.2, 56.26667],

  //   name: "Камбарка",
  //   population: 11028,

  // },
  // {
  //   coordinates: [
  //           44.05, 53.18333],

  //   name: "Каменка",
  //   population: 39579,

  // },
  // {
  //   coordinates: [
  //           29.130882, 60.95081],

  //   name: "Каменногорск",
  //   population: 6761,

  // },
  // {
  //   coordinates: [
  //           61.93333, 56.4],

  //   name: "Каменск-Уральский",
  //   population: 174710,

  // },
  // {
  //   coordinates: [
  //           40.26667, 48.31667],

  //   name: "Каменск-Шахтинский",
  //   population: 95306,

  // },
  // {
  //   coordinates: [
  //           81.34861, 53.79194],

  //   name: "Камень-на-Оби",
  //   population: 41787,

  // },
  // {
  //   coordinates: [
  //           40.99778, 56.34917],

  //   name: "Камешково",
  //   population: 13113,

  // },
  // {
  //   coordinates: [
  //           48.07694, 46.11556],

  //   name: "Камызяк",
  //   population: 16291,

  // },
  // {
  //   coordinates: [
  //           45.4, 50.08333],

  //   name: "Камышин",
  //   population: 119924,

  // },
  // {
  //   coordinates: [
  //           62.71667, 56.85],

  //   name: "Камышлов",
  //   population: 26875,

  // },
  // {
  //   coordinates: [
  //           47.49139, 55.50694],

  //   name: "Канаш",
  //   population: 45608,

  // },
  // {
  //   coordinates: [
  //           32.41167, 67.15694],

  //   name: "Кандалакша",
  //   population: 35659,

  // },
  // {
  //   coordinates: [
  //           95.7, 56.2],

  //   name: "Канск",
  //   population: 94230,

  // },
  // {
  //   coordinates: [
  //           38.70139, 56.30889],

  //   name: "Карабаново",
  //   population: 14868,

  // },
  // {
  //   coordinates: [
  //           60.2, 55.48333],

  //   name: "Карабаш",
  //   population: 13151,

  // },
  // {
  //   coordinates: [
  //           44.909763, 43.306285],

  //   name: "Карабулак",
  //   population: 31081,

  // },
  // {
  //   coordinates: [
  //           78.03333, 53.73333],

  //   name: "Карасук",
  //   population: 28929,

  // },
  // {
  //   coordinates: [
  //           41.911369, 43.769713],

  //   name: "Карачаевск",
  //   population: 23848,

  // },
  // {
  //   coordinates: [
  //           34.98333, 53.11667],

  //   name: "Карачев",
  //   population: 19715,

  // },
  // {
  //   coordinates: [
  //           80.28333, 55.2],

  //   name: "Каргат",
  //   population: 10620,

  // },
  // {
  //   coordinates: [
  //           38.93333, 61.5],

  //   name: "Каргополь",
  //   population: 10148,

  // },
  // {
  //   coordinates: [
  //           60, 59.76667],

  //   name: "Карпинск",
  //   population: 29118,

  // },
  // {
  //   coordinates: [
  //           60.65, 53.05],

  //   name: "Карталы",
  //   population: 29136,

  // },
  // {
  //   coordinates: [
  //           41.39722, 54.95],

  //   name: "Касимов",
  //   population: 33494,

  // },
  // {
  //   coordinates: [
  //           60.75, 55.88333],

  //   name: "Касли",
  //   population: 16998,

  // },
  // {
  //   coordinates: [
  //           47.63333, 42.88333],

  //   name: "Каспийск",
  //   population: 103914,

  // },
  // {
  //   coordinates: [
  //           58.2, 54.75],

  //   name: "Катав-Ивановск",
  //   population: 17640,

  // },
  // {
  //   coordinates: [
  //           62.56667, 56.3],

  //   name: "Катайск",
  //   population: 14017,

  // },
  // {
  //   coordinates: [
  //           59.48333, 58.7],

  //   name: "Качканар",
  //   population: 42563,

  // },
  // {
  //   coordinates: [
  //           37.61667, 57.35],

  //   name: "Кашин",
  //   population: 16174,

  // },
  // {
  //   coordinates: [
  //           38.15, 54.83333],

  //   name: "Кашира",
  //   population: 41880,

  // },
  // {
  //   coordinates: [
  //           79.56667, 57.56667],

  //   name: "Кедровый",
  //   population: 2451,

  // },
  // {
  //   coordinates: [
  //           86.08972, 55.35417],

  //   name: "Кемерово",
  //   population: 532884,

  // },
  // {
  //   coordinates: [
  //           34.6, 64.95],

  //   name: "Кемь",
  //   population: 13061,

  // },
  // {
  //   coordinates: [
  //           36.46806, 45.33861],

  //   name: "Керчь",
  //   population: 147033,

  // },
  // {
  //   coordinates: [
  //           57.65, 59.05],

  //   name: "Кизел",
  //   population: 20277,

  // },
  // {
  //   coordinates: [
  //           46.86667, 43.2],

  //   name: "Кизилюрт",
  //   population: 36187,

  // },
  // {
  //   coordinates: [
  //           46.71667, 43.85],

  //   name: "Кизляр",
  //   population: 49169,

  // },
  // {
  //   coordinates: [
  //           38.53333, 53.96667],

  //   name: "Кимовск",
  //   population: 28493,

  // },
  // {
  //   coordinates: [
  //           37.35, 56.86667],

  //   name: "Кимры",
  //   population: 49623,

  // },
  // {
  //   coordinates: [
  //           28.6, 59.36667],

  //   name: "Кингисепп",
  //   population: 48667,

  // },
  // {
  //   coordinates: [
  //           50.61667, 53.23333],

  //   name: "Кинель",
  //   population: 34472,

  // },
  // {
  //   coordinates: [
  //           42.15, 57.45],

  //   name: "Кинешма",
  //   population: 88113,

  // },
  // {
  //   coordinates: [
  //           37.93333, 53.93333],

  //   name: "Киреевск",
  //   population: 25585,

  // },
  // {
  //   coordinates: [
  //           108.1, 57.78333],

  //   name: "Киренск",
  //   population: 12652,

  // },
  // {
  //   coordinates: [
  //           38.86667, 56.15],

  //   name: "Киржач",
  //   population: 30044,

  // },
  // {
  //   coordinates: [
  //           38.38333, 59.86667],

  //   name: "Кириллов",
  //   population: 7735,

  // },
  // {
  //   coordinates: [
  //           32.01667, 59.45],

  //   name: "Кириши",
  //   population: 52826,

  // },
  // {
  //   coordinates: [
  //           34.3, 54.08333],

  //   name: "Киров",
  //   population: 31888,

  // },
  // {
  //   coordinates: [
  //           49.65, 58.6],

  //   name: "Киров",
  //   population: 473668,

  // },
  // {
  //   coordinates: [
  //           60.06667, 57.43333],

  //   name: "Кировград",
  //   population: 21959,

  // },
  // {
  //   coordinates: [
  //           50.01667, 58.55],

  //   name: "Кирово-Чепецк",
  //   population: 80920,

  // },
  // {
  //   coordinates: [
  //           30.981457, 59.87533],

  //   name: "Кировск",
  //   population: 25633,

  // },
  // {
  //   coordinates: [
  //           33.67167, 67.61417],

  //   name: "Кировск",
  //   population: 28659,

  // },
  // {
  //   coordinates: [
  //           52.245472, 59.337167],

  //   name: "Кирс",
  //   population: 10420,

  // },
  // {
  //   coordinates: [
  //           42.73333, 52.65],

  //   name: "Кирсанов",
  //   population: 17240,

  // },
  // {
  //   coordinates: [
  //           86.7, 53.98333],

  //   name: "Киселёвск",
  //   population: 98382,

  // },
  // {
  //   coordinates: [
  //           42.72444, 43.90333],

  //   name: "Кисловодск",
  //   population: 128502,

  // },
  // {
  //   coordinates: [
  //           36.7125, 56.33389],

  //   name: "Клин",
  //   population: 80584,

  // },
  // {
  //   coordinates: [
  //           32.23611, 52.75278],

  //   name: "Клинцы",
  //   population: 62510,

  // },
  // {
  //   coordinates: [
  //           45.03333, 55.81667],

  //   name: "Княгинино",
  //   population: 6708,

  // },
  // {
  //   coordinates: [
  //           30.46667, 67.55944],

  //   name: "Ковдор",
  //   population: 18836,

  // },
  // {
  //   coordinates: [
  //           41.31972, 56.36056],

  //   name: "Ковров",
  //   population: 145492,

  // },
  // {
  //   coordinates: [
  //           43.91667, 54.03333],

  //   name: "Ковылкино",
  //   population: 21307,

  // },
  // {
  //   coordinates: [
  //           74.48333, 62.26667],

  //   name: "Когалым",
  //   population: 58192,

  // },
  // {
  //   coordinates: [
  //           99.18333, 58.6],

  //   name: "Кодинск",
  //   population: 14835,

  // },
  // {
  //   coordinates: [
  //           35.78333, 54.03333],

  //   name: "Козельск",
  //   population: 18203,

  // },
  // {
  //   coordinates: [
  //           48.25, 55.83333],

  //   name: "Козловка",
  //   population: 10355,

  // },
  // {
  //   coordinates: [
  //           46.56667, 56.33333],

  //   name: "Козьмодемьянск",
  //   population: 21262,

  // },
  // {
  //   coordinates: [
  //           33.02194, 68.88306],

  //   name: "Кола",
  //   population: 10447,

  // },
  // {
  //   coordinates: [
  //           44.311444, 58.8252278],

  //   name: "Кологрив",
  //   population: 3314,

  // },
  // {
  //   coordinates: [
  //           38.76806, 55.09389],

  //   name: "Коломна",
  //   population: 144642,

  // },
  // {
  //   coordinates: [
  //           82.91667, 58.31667],

  //   name: "Колпашево",
  //   population: 24126,

  // },
  // {
  //   coordinates: [
  //           39.38333, 56.3],

  //   name: "Кольчугино",
  //   population: 45804,

  // },
  // {
  //   coordinates: [
  //           30.393483, 59.621609],

  //   name: "Коммунар",
  //   population: 20265,

  // },
  // {
  //   coordinates: [
  //           137, 50.55],

  //   name: "Комсомольск-на-Амуре",
  //   population: 263906,

  // },
  // {
  //   coordinates: [
  //           40.38333, 57.03333],

  //   name: "Комсомольск",
  //   population: 8693,

  // },
  // {
  //   coordinates: [
  //           36.76667, 56.7],

  //   name: "Конаково",
  //   population: 41303,

  // },
  // {
  //   coordinates: [
  //           34.26667, 62.2],

  //   name: "Кондопога",
  //   population: 32978,

  // },
  // {
  //   coordinates: [
  //           35.93333, 54.8],

  //   name: "Кондрово",
  //   population: 16672,

  // },
  // {
  //   coordinates: [
  //           41.1, 47.58333],

  //   name: "Константиновск",
  //   population: 17926,

  // },
  // {
  //   coordinates: [
  //           61.61667, 55.1],

  //   name: "Копейск",
  //   population: 137604,

  // },
  // {
  //   coordinates: [
  //           40.01667, 53.91667],

  //   name: "Кораблино",
  //   population: 12657,

  // },
  // {
  //   coordinates: [
  //           39.45, 45.46667],

  //   name: "Кореновск",
  //   population: 41179,

  // },
  // {
  //   coordinates: [
  //           61.4, 54.88333],

  //   name: "Коркино",
  //   population: 38950,

  // },
  // {
  //   coordinates: [
  //           37.81667, 55.91667],

  //   name: "Королёв",
  //   population: 225858,

  // },
  // {
  //   coordinates: [
  //           37.18139, 50.81361],

  //   name: "Короча",
  //   population: 5877,

  // },
  // {
  //   coordinates: [
  //           142.76667, 46.63333],

  //   name: "Корсаков",
  //   population: 33526,

  // },
  // {
  //   coordinates: [
  //           47.16667, 61.3],

  //   name: "Коряжма",
  //   population: 39629,

  // },
  // {
  //   coordinates: [
  //           39.63333, 55.93333],

  //   name: "Костерёво",
  //   population: 9136,

  // },
  // {
  //   coordinates: [
  //           30.6, 64.58333],

  //   name: "Костомукша",
  //   population: 28433,

  // },
  // {
  //   coordinates: [
  //           40.93333, 57.76667],

  //   name: "Кострома",
  //   population: 268617,

  // },
  // {
  //   coordinates: [
  //           37.86722, 55.6625],

  //   name: "Котельники",
  //   population: 32347,

  // },
  // {
  //   coordinates: [
  //           43.13333, 47.63333],

  //   name: "Котельниково",
  //   population: 20441,

  // },
  // {
  //   coordinates: [
  //           48.33333, 58.3],

  //   name: "Котельнич",
  //   population: 24979,

  // },
  // {
  //   coordinates: [
  //           46.65, 61.25],

  //   name: "Котлас",
  //   population: 60562,

  // },
  // {
  //   coordinates: [
  //           44.8, 50.31667],

  //   name: "Котово",
  //   population: 24104,

  // },
  // {
  //   coordinates: [
  //           41.5, 52.58333],

  //   name: "Котовск",
  //   population: 31851,

  // },
  // {
  //   coordinates: [
  //           41.08333, 56.93333],

  //   name: "Кохма",
  //   population: 29408,

  // },
  // {
  //   coordinates: [
  //           46.48333, 60.96667],

  //   name: "Красавино",
  //   population: 7003,

  // },
  // {
  //   coordinates: [
  //           38.14611, 56.12278],

  //   name: "Красноармейск",
  //   population: 26294,

  // },
  // {
  //   coordinates: [
  //           45.7, 51.01667],

  //   name: "Красноармейск",
  //   population: 24362,

  // },
  // {
  //   coordinates: [
  //           57.06667, 60.4],

  //   name: "Красновишерск",
  //   population: 17129,

  // },
  // {
  //   coordinates: [
  //           37.33333, 55.81667],

  //   name: "Красногорск",
  //   population: 116738,

  // },
  // {
  //   coordinates: [
  //           38.98333, 45.03333],

  //   name: "Краснодар",
  //   population: 948827,

  // },
  // {
  //   coordinates: [
  //           38.22944, 56.43806],

  //   name: "Краснозаводск",
  //   population: 13432,

  // },
  // {
  //   coordinates: [
  //           22.5, 54.95],

  //   name: "Краснознаменск",
  //   population: 3522,

  // },
  // {
  //   coordinates: [
  //           37.03333, 55.6],

  //   name: "Краснознаменск",
  //   population: 36057,

  // },
  // {
  //   coordinates: [
  //           118.03333, 50.1],

  //   name: "Краснокаменск",
  //   population: 55668,

  // },
  // {
  //   coordinates: [
  //           55.75, 58.08333],

  //   name: "Краснокамск",
  //   population: 52632,

  // },
  // {
  //   coordinates: [
  //           33.795, 45.955306],

  //   name: "Красноперекопск",
  //   population: 26268,

  // },
  // {
  //   coordinates: [
  //           44.56667, 48.7],

  //   name: "Краснослободск",
  //   population: 16007,

  // },
  // {
  //   coordinates: [
  //           43.78333, 54.43333],

  //   name: "Краснослободск",
  //   population: 10151,

  // },
  // {
  //   coordinates: [
  //           60.2, 59.76667],

  //   name: "Краснотурьинск",
  //   population: 59701,

  // },
  // {
  //   coordinates: [
  //           60.05, 58.35],

  //   name: "Красноуральск",
  //   population: 24973,

  // },
  // {
  //   coordinates: [
  //           57.76667, 56.61667],

  //   name: "Красноуфимск",
  //   population: 39765,

  // },
  // {
  //   coordinates: [
  //           92.871295, 56.012083],

  //   name: "Красноярск",
  //   population: 1092851,

  // },
  // {
  //   coordinates: [
  //           46.96667, 50.95],

  //   name: "Красный Кут",
  //   population: 14420,

  // },
  // {
  //   coordinates: [
  //           40.06667, 47.88333],

  //   name: "Красный Сулин",
  //   population: 40866,

  // },
  // {
  //   coordinates: [
  //           37.122983, 58.06329],

  //   name: "Красный Холм",
  //   population: 5608,

  // },
  // {
  //   coordinates: [
  //           37.12333, 54.88917],

  //   name: "Кремёнки",
  //   population: 11617,

  // },
  // {
  //   coordinates: [
  //           40.56667, 45.43333],

  //   name: "Кропоткин",
  //   population: 80743,

  // },
  // {
  //   coordinates: [
  //           38, 44.93333],

  //   name: "Крымск",
  //   population: 57370,

  // },
  // {
  //   coordinates: [
  //           44.19556, 56.15167],

  //   name: "Кстово",
  //   population: 66641,

  // },
  // {
  //   coordinates: [
  //           36.69472, 55.57639],

  //   name: "Кубинка",
  //   population: 22918,

  // },
  // {
  //   coordinates: [
  //           57.35, 51.48333],

  //   name: "Кувандык",
  //   population: 26176,

  // },
  // {
  //   coordinates: [
  //           34.16667, 57.03333],

  //   name: "Кувшиново",
  //   population: 10008,

  // },
  // {
  //   coordinates: [
  //           30.513569, 59.908489],

  //   name: "Кудрово",
  //   population: 13501,

  // },
  // {
  //   coordinates: [
  //           54.66667, 59.01667],

  //   name: "Кудымкар",
  //   population: 30711,

  // },
  // {
  //   coordinates: [
  //           46.6, 53.11667],

  //   name: "Кузнецк",
  //   population: 88886,

  // },
  // {
  //   coordinates: [
  //           78.3075, 55.45028],

  //   name: "Куйбышев",
  //   population: 47278,

  // },
  // {
  //   coordinates: [
  //           50.90639, 56.1825],

  //   name: "Кукмор",
  //   population: 17700,

  // },
  // {
  //   coordinates: [
  //           42.51667, 55.41667],

  //   name: "Кулебаки",
  //   population: 35762,

  // },
  // {
  //   coordinates: [
  //           55.78333, 52.76667],

  //   name: "Кумертау",
  //   population: 62854,

  // },
  // {
  //   coordinates: [
  //           56.93333, 57.43333],

  //   name: "Кунгур",
  //   population: 67857,

  // },
  // {
  //   coordinates: [
  //           77.3, 54.36667],

  //   name: "Купино",
  //   population: 15448,

  // },
  // {
  //   coordinates: [
  //           65.34111, 55.44083],

  //   name: "Курган",
  //   population: 333640,

  // },
  // {
  //   coordinates: [
  //           40.6, 44.88333],

  //   name: "Курганинск",
  //   population: 47974,

  // },
  // {
  //   coordinates: [
  //           147.883333, 45.25],

  //   name: "Курильск",
  //   population: 2070,

  // },
  // {
  //   coordinates: [
  //           40.61667, 55.45],

  //   name: "Курлово",
  //   population: 6791,

  // },
  // {
  //   coordinates: [
  //           38.91667, 55.58333],

  //   name: "Куровское",
  //   population: 21821,

  // },
  // {
  //   coordinates: [
  //           36.18333, 51.71667],

  //   name: "Курск",
  //   population: 414595,

  // },
  // {
  //   coordinates: [
  //           64.43333, 54.9],

  //   name: "Куртамыш",
  //   population: 17098,

  // },
  // {
  //   coordinates: [
  //           46.087812, 43.20444],

  //   name: "Курчалой",
  //   population: 25672,

  // },
  // {
  //   coordinates: [
  //           35.65, 51.66667],

  //   name: "Курчатов",
  //   population: 42691,

  // },
  // {
  //   coordinates: [
  //           59.43333, 55.33333],

  //   name: "Куса",
  //   population: 18792,

  // },
  // {
  //   coordinates: [
  //           59.73333, 58.28333],

  //   name: "Кушва",
  //   population: 33027,

  // },
  // {
  //   coordinates: [
  //           94.36667, 51.7],

  //   name: "Кызыл",
  //   population: 109906,

  // },
  // {
  //   coordinates: [
  //           60.55, 55.7],

  //   name: "Кыштым",
  //   population: 38950,

  // },
  // {
  //   coordinates: [
  //           106.45, 50.35],

  //   name: "Кяхта",
  //   population: 20013,

  // },
  // {
  //   coordinates: [
  //           40.73333, 44.63333],

  //   name: "Лабинск",
  //   population: 62822,

  // },
  // {
  //   coordinates: [
  //           66.38389, 66.65806],

  //   name: "Лабытнанги",
  //   population: 26948,

  // },
  // {
  //   coordinates: [
  //           47.355, 45.3925],

  //   name: "Лагань",
  //   population: 14323,

  // },
  // {
  //   coordinates: [
  //           20.16667, 54.56667],

  //   name: "Ладушкин",
  //   population: 3788,

  // },
  // {
  //   coordinates: [
  //           49.55, 55.4],

  //   name: "Лаишево",
  //   population: 7735,

  // },
  // {
  //   coordinates: [
  //           39.94944, 56.01694],

  //   name: "Лакинск",
  //   population: 15707,

  // },
  // {
  //   coordinates: [
  //           75.16667, 61.25],

  //   name: "Лангепас",
  //   population: 41675,

  // },
  // {
  //   coordinates: [
  //           30.2, 61.51667],

  //   name: "Лахденпохья",
  //   population: 7818,

  // },
  // {
  //   coordinates: [
  //           39.1281167, 53.0115528],

  //   name: "Лебедянь",
  //   population: 20991,

  // },
  // {
  //   coordinates: [
  //           52.4422722, 54.5988694],

  //   name: "Лениногорск",
  //   population: 64145,

  // },
  // {
  //   coordinates: [
  //           86.16667, 54.65],

  //   name: "Ленинск-Кузнецкий",
  //   population: 101666,

  // },
  // {
  //   coordinates: [
  //           45.2, 48.7],

  //   name: "Ленинск",
  //   population: 15527,

  // },
  // {
  //   coordinates: [
  //           114.9, 60.71667],

  //   name: "Ленск",
  //   population: 24955,

  // },
  // {
  //   coordinates: [
  //           42.97167, 44.10528],

  //   name: "Лермонтов",
  //   population: 22540,

  // },
  // {
  //   coordinates: [
  //           59.78333, 58.63333],

  //   name: "Лесной",
  //   population: 52464,

  // },
  // {
  //   coordinates: [
  //           133.4, 45.46667],

  //   name: "Лесозаводск",
  //   population: 36975,

  // },
  // {
  //   coordinates: [
  //           92.48333, 58.23333],

  //   name: "Лесосибирск",
  //   population: 61146,

  // },
  // {
  //   coordinates: [
  //           37.608306, 52.425306],

  //   name: "Ливны",
  //   population: 50430,

  // },
  // {
  //   coordinates: [
  //           38.95778, 55.71528],

  //   name: "Ликино-Дулёво",
  //   population: 31331,

  // },
  // {
  //   coordinates: [
  //           39.6, 52.61667],

  //   name: "Липецк",
  //   population: 508124,

  // },
  // {
  //   coordinates: [
  //           37.7, 53.95],

  //   name: "Липки",
  //   population: 8741,

  // },
  // {
  //   coordinates: [
  //           39.49944, 50.98222],

  //   name: "Лиски",
  //   population: 55864,

  // },
  // {
  //   coordinates: [
  //           35.46667, 57.11667],

  //   name: "Лихославль",
  //   population: 12259,

  // },
  // {
  //   coordinates: [
  //           37.47444, 56.01194],

  //   name: "Лобня",
  //   population: 74350,

  // },
  // {
  //   coordinates: [
  //           33.543183, 60.734305],

  //   name: "Лодейное Поле",
  //   population: 21053,

  // },
  // {
  //   coordinates: [
  //           38.2, 55.86667],

  //   name: "Лосино-Петровский",
  //   population: 22550,

  // },
  // {
  //   coordinates: [
  //           29.85, 58.73333],

  //   name: "Луга",
  //   population: 36409,

  // },
  // {
  //   coordinates: [
  //           47.28333, 60.61667],

  //   name: "Луза",
  //   population: 11262,

  // },
  // {
  //   coordinates: [
  //           44.49778, 55.03833],

  //   name: "Лукоянов",
  //   population: 14949,

  // },
  // {
  //   coordinates: [
  //           39.025, 54.96667],

  //   name: "Луховицы",
  //   population: 29849,

  // },
  // {
  //   coordinates: [
  //           45.02528, 56.01278],

  //   name: "Лысково",
  //   population: 21882,

  // },
  // {
  //   coordinates: [
  //           57.8043278, 58.1003806],

  //   name: "Лысьва",
  //   population: 67712,

  // },
  // {
  //   coordinates: [
  //           37.90556, 55.58361],

  //   name: "Лыткарино",
  //   population: 55147,

  // },
  // {
  //   coordinates: [
  //           35.26667, 51.66667],

  //   name: "Льгов",
  //   population: 21452,

  // },
  // {
  //   coordinates: [
  //           31.25, 59.35],

  //   name: "Любань",
  //   population: 4188,

  // },
  // {
  //   coordinates: [
  //           37.89389, 55.68139],

  //   name: "Люберцы",
  //   population: 171978,

  // },
  // {
  //   coordinates: [
  //           40.7, 58.35],

  //   name: "Любим",
  //   population: 5553,

  // },
  // {
  //   coordinates: [
  //           34.46667, 53.86667],

  //   name: "Людиново",
  //   population: 40550,

  // },
  // {
  //   coordinates: [
  //           72.16667, 61.61667],

  //   name: "Лянтор",
  //   population: 38922,

  // },
  // {
  //   coordinates: [
  //           150.8, 59.56667],

  //   name: "Магадан",
  //   population: 95925,

  // },
  // {
  //   coordinates: [
  //           44.81667, 43.16667],

  //   name: "Магас",
  //   population: 2505,

  // },
  // {
  //   coordinates: [
  //           59.03333, 53.38333],

  //   name: "Магнитогорск",
  //   population: 408401,

  // },
  // {
  //   coordinates: [
  //           40.111, 44.611],

  //   name: "Майкоп",
  //   population: 144055,

  // },
  // {
  //   coordinates: [
  //           44.067733, 43.630508],

  //   name: "Майский",
  //   population: 26755,

  // },
  // {
  //   coordinates: [
  //           142.78333, 48.61667],

  //   name: "Макаров",
  //   population: 6788,

  // },
  // {
  //   coordinates: [
  //           43.8, 57.88333],

  //   name: "Макарьев",
  //   population: 7114,

  // },
  // {
  //   coordinates: [
  //           67.25, 55.2],

  //   name: "Макушино",
  //   population: 8337,

  // },
  // {
  //   coordinates: [
  //           32.21667, 58.85],

  //   name: "Малая Вишера",
  //   population: 12461,

  // },
  // {
  //   coordinates: [
  //           44.585563, 43.508882],

  //   name: "Малгобек",
  //   population: 31076,

  // },
  // {
  //   coordinates: [
  //           50.68083, 56.52278],

  //   name: "Малмыж",
  //   population: 8265,

  // },
  // {
  //   coordinates: [
  //           36.5, 52.4],

  //   name: "Малоархангельск",
  //   population: 3872,

  // },
  // {
  //   coordinates: [
  //           36.46667, 55],

  //   name: "Малоярославец",
  //   population: 30401,

  // },
  // {
  //   coordinates: [
  //           51.4, 55.7],

  //   name: "Мамадыш",
  //   population: 14432,

  // },
  // {
  //   coordinates: [
  //           19.93333, 54.46667],

  //   name: "Мамоново",
  //   population: 7757,

  // },
  // {
  //   coordinates: [
  //           44.76667, 58.33333],

  //   name: "Мантурово",
  //   population: 17479,

  // },
  // {
  //   coordinates: [
  //           87.75, 56.21667],

  //   name: "Мариинск",
  //   population: 40522,

  // },
  // {
  //   coordinates: [
  //           47.71667, 56.11667],

  //   name: "Мариинский Посад",
  //   population: 10186,

  // },
  // {
  //   coordinates: [
  //           46.75, 51.7],

  //   name: "Маркс",
  //   population: 31535,

  // },
  // {
  //   coordinates: [
  //           47.5, 42.98333],

  //   name: "Махачкала",
  //   population: 577990,

  // },
  // {
  //   coordinates: [
  //           32.84833, 53.06111],

  //   name: "Мглин",
  //   population: 7916,

  // },
  // {
  //   coordinates: [
  //           76.10972, 61.03306],

  //   name: "Мегион",
  //   population: 49471,

  // },
  // {
  //   coordinates: [
  //           34.45, 62.91667],

  //   name: "Медвежьегорск",
  //   population: 15536,

  // },
  // {
  //   coordinates: [
  //           57.595296, 51.422085],

  //   name: "Медногорск",
  //   population: 27253,

  // },
  // {
  //   coordinates: [
  //           35.86667, 54.96667],

  //   name: "Медынь",
  //   population: 8298,

  // },
  // {
  //   coordinates: [
  //           57.96778, 54.24167],

  //   name: "Межгорье",
  //   population: 17353,

  // },
  // {
  //   coordinates: [
  //           88.05, 53.68333],

  //   name: "Междуреченск",
  //   population: 101995,

  // },
  // {
  //   coordinates: [
  //           44.23333, 65.85],

  //   name: "Мезень",
  //   population: 3599,

  // },
  // {
  //   coordinates: [
  //           41.63333, 55.33333],

  //   name: "Меленки",
  //   population: 15208,

  // },
  // {
  //   coordinates: [
  //           55.93333, 52.95],

  //   name: "Мелеуз",
  //   population: 61408,

  // },
  // {
  //   coordinates: [
  //           52.31667, 55.9],

  //   name: "Менделеевск",
  //   population: 22075,

  // },
  // {
  //   coordinates: [
  //           53.08333, 55.71667],

  //   name: "Мензелинск",
  //   population: 16474,

  // },
  // {
  //   coordinates: [
  //           35.28333, 54.31667],

  //   name: "Мещовск",
  //   population: 4101,

  // },
  // {
  //   coordinates: [
  //           60.1, 55.05],

  //   name: "Миасс",
  //   population: 151812,

  // },
  // {
  //   coordinates: [
  //           50.06667, 62.35],

  //   name: "Микунь",
  //   population: 10732,

  // },
  // {
  //   coordinates: [
  //           40.4, 48.91667],

  //   name: "Миллерово",
  //   population: 36493,

  // },
  // {
  //   coordinates: [
  //           43.1125, 44.20083],

  //   name: "Минеральные Воды",
  //   population: 76715,

  // },
  // {
  //   coordinates: [
  //           91.68333, 53.7],

  //   name: "Минусинск",
  //   population: 71171,

  // },
  // {
  //   coordinates: [
  //           57.55, 55.06667],

  //   name: "Миньяр",
  //   population: 10195,

  // },
  // {
  //   coordinates: [
  //           40.33528, 62.76028],

  //   name: "Мирный",
  //   population: 30259,

  // },
  // {
  //   coordinates: [
  //           113.95, 62.53333],

  //   name: "Мирный",
  //   population: 37179,

  // },
  // {
  //   coordinates: [
  //           39.03333, 54.23333],

  //   name: "Михайлов",
  //   population: 11783,

  // },
  // {
  //   coordinates: [
  //           43.23333, 50.06667],

  //   name: "Михайловка",
  //   population: 59153,

  // },
  // {
  //   coordinates: [
  //           59.11667, 56.43333],

  //   name: "Михайловск",
  //   population: 9215,

  // },
  // {
  //   coordinates: [
  //           42.027487, 45.130012],

  //   name: "Михайловск",
  //   population: 71018,

  // },
  // {
  //   coordinates: [
  //           40.49278, 52.89222],

  //   name: "Мичуринск",
  //   population: 98758,

  // },
  // {
  //   coordinates: [
  //           119.76667, 53.73333],

  //   name: "Могоча",
  //   population: 13228,

  // },
  // {
  //   coordinates: [
  //           36.03333, 55.5],

  //   name: "Можайск",
  //   population: 31388,

  // },
  // {
  //   coordinates: [
  //           52.21667, 56.45],

  //   name: "Можга",
  //   population: 47959,

  // },
  // {
  //   coordinates: [
  //           44.65694, 43.74722],

  //   name: "Моздок",
  //   population: 38748,

  // },
  // {
  //   coordinates: [
  //           32.91556, 67.93944],

  //   name: "Мончегорск",
  //   population: 45381,

  // },
  // {
  //   coordinates: [
  //           41.83333, 48.35],

  //   name: "Морозовск",
  //   population: 27644,

  // },
  // {
  //   coordinates: [
  //           41.8, 53.45],

  //   name: "Моршанск",
  //   population: 41550,

  // },
  // {
  //   coordinates: [
  //           34.98333, 54.48333],

  //   name: "Мосальск",
  //   population: 4285,

  // },
  // {
  //   coordinates: [
  //           37.61778, 55.75583],

  //   name: "Москва",
  //   population: 12655050,

  // },
  // {
  //   coordinates: [
  //           74.49722, 63.79444],

  //   name: "Муравленко",
  //   population: 33401,

  // },
  // {
  //   coordinates: [
  //           48.96667, 59.38333],

  //   name: "Мураши",
  //   population: 6752,

  // },
  // {
  //   coordinates: [
  //           30.44861, 60.04583],

  //   name: "Мурино",
  //   population: 19775,

  // },
  // {
  //   coordinates: [
  //           33.08333, 68.96667],

  //   name: "Мурманск",
  //   population: 307664,

  // },
  // {
  //   coordinates: [
  //           42.05139, 55.5725],

  //   name: "Муром",
  //   population: 116078,

  // },
  // {
  //   coordinates: [
  //           36.575, 53.27833],

  //   name: "Мценск",
  //   population: 43216,

  // },
  // {
  //   coordinates: [
  //           87.81667, 53.7],

  //   name: "Мыски",
  //   population: 43029,

  // },
  // {
  //   coordinates: [
  //           37.73333, 55.91667],

  //   name: "Мытищи",
  //   population: 173341,

  // },
  // {
  //   coordinates: [
  //           38.45, 57.78333],

  //   name: "Мышкин",
  //   population: 5932,

  // },
  // {
  //   coordinates: [
  //           52.33333, 55.7],

  //   name: "Набережные Челны",
  //   population: 513242,

  // },
  // {
  //   coordinates: [
  //           42.2, 55.53333],

  //   name: "Навашино",
  //   population: 16413,

  // },
  // {
  //   coordinates: [
  //           41.96667, 57.46667],

  //   name: "Наволоки",
  //   population: 10207,

  // },
  // {
  //   coordinates: [
  //           72.51667, 65.53333],

  //   name: "Надым",
  //   population: 46550,

  // },
  // {
  //   coordinates: [
  //           90.39139, 56.00639],

  //   name: "Назарово",
  //   population: 52829,

  // },
  // {
  //   coordinates: [
  //           44.76667, 43.21667],

  //   name: "Назрань",
  //   population: 93357,

  // },
  // {
  //   coordinates: [
  //           71.35, 55.56667],

  //   name: "Называевск",
  //   population: 12119,

  // },
  // {
  //   coordinates: [
  //           43.607072, 43.485259],

  //   name: "Нальчик",
  //   population: 240095,

  // },
  // {
  //   coordinates: [
  //           47.85, 46.68333],

  //   name: "Нариманов",
  //   population: 11386,

  // },
  // {
  //   coordinates: [
  //           36.73333, 55.38333],

  //   name: "Наро-Фоминск",
  //   population: 64640,

  // },
  // {
  //   coordinates: [
  //           43.862222, 43.556734],

  //   name: "Нарткала",
  //   population: 31679,

  // },
  // {
  //   coordinates: [
  //           53.00667, 67.63778],

  //   name: "Нарьян-Мар",
  //   population: 21296,

  // },
  // {
  //   coordinates: [
  //           132.88333, 42.81667],

  //   name: "Находка",
  //   population: 159695,

  // },
  // {
  //   coordinates: [
  //           29.93333, 56.01667],

  //   name: "Невель",
  //   population: 16324,

  // },
  // {
  //   coordinates: [
  //           141.86667, 46.65],

  //   name: "Невельск",
  //   population: 11682,

  // },
  // {
  //   coordinates: [
  //           41.93333, 44.63333],

  //   name: "Невинномысск",
  //   population: 118351,

  // },
  // {
  //   coordinates: [
  //           60.2, 57.48333],

  //   name: "Невьянск",
  //   population: 25147,

  // },
  // {
  //   coordinates: [
  //           32.78333, 56.21667],

  //   name: "Нелидово",
  //   population: 22886,

  // },
  // {
  //   coordinates: [
  //           22.03333, 55.03333],

  //   name: "Неман",
  //   population: 11794,

  // },
  // {
  //   coordinates: [
  //           40.58333, 57.45],

  //   name: "Нерехта",
  //   population: 22817,

  // },
  // {
  //   coordinates: [
  //           116.58333, 51.98333],

  //   name: "Нерчинск",
  //   population: 14976,

  // },
  // {
  //   coordinates: [
  //           124.725, 56.65833],

  //   name: "Нерюнгри",
  //   population: 61746,

  // },
  // {
  //   coordinates: [
  //           22.56667, 54.63333],

  //   name: "Нестеров",
  //   population: 4584,

  // },
  // {
  //   coordinates: [
  //           51.16667, 52.8],

  //   name: "Нефтегорск",
  //   population: 18732,

  // },
  // {
  //   coordinates: [
  //           54.24639, 56.08889],

  //   name: "Нефтекамск",
  //   population: 121757,

  // },
  // {
  //   coordinates: [
  //           44.97972, 44.75056],

  //   name: "Нефтекумск",
  //   population: 27700,

  // },
  // {
  //   coordinates: [
  //           72.6, 61.1],

  //   name: "Нефтеюганск",
  //   population: 123276,

  // },
  // {
  //   coordinates: [
  //           43.87806, 58.29444],

  //   name: "Нея",
  //   population: 9827,

  // },
  // {
  //   coordinates: [
  //           76.58111, 60.93389],

  //   name: "Нижневартовск",
  //   population: 251860,

  // },
  // {
  //   coordinates: [
  //           51.81667, 55.63333],

  //   name: "Нижнекамск",
  //   population: 234108,

  // },
  // {
  //   coordinates: [
  //           99.01667, 54.9],

  //   name: "Нижнеудинск",
  //   population: 37056,

  // },
  // {
  //   coordinates: [
  //           59.3, 56.66667],

  //   name: "Нижние Серги",
  //   population: 11217,

  // },
  // {
  //   coordinates: [
  //           43.68333, 53.53333],

  //   name: "Нижний Ломов",
  //   population: 22678,

  // },
  // {
  //   coordinates: [
  //           44.0075, 56.32694],

  //   name: "Нижний Новгород",
  //   population: 1244254,

  // },
  // {
  //   coordinates: [
  //           59.96667, 57.91667],

  //   name: "Нижний Тагил",
  //   population: 361883,

  // },
  // {
  //   coordinates: [
  //           60.71667, 58.08333],

  //   name: "Нижняя Салда",
  //   population: 17969,

  // },
  // {
  //   coordinates: [
  //           59.84778, 58.62083],

  //   name: "Нижняя Тура",
  //   population: 21596,

  // },
  // {
  //   coordinates: [
  //           140.73333, 53.15],

  //   name: "Николаевск-на-Амуре",
  //   population: 22773,

  // },
  // {
  //   coordinates: [
  //           45.46306, 50.02722],

  //   name: "Николаевск",
  //   population: 15081,

  // },
  // {
  //   coordinates: [
  //           45.45, 59.53333],

  //   name: "Никольск",
  //   population: 8515,

  // },
  // {
  //   coordinates: [
  //           46.08333, 53.71667],

  //   name: "Никольск",
  //   population: 22471,

  // },
  // {
  //   coordinates: [
  //           30.78333, 59.7],

  //   name: "Никольское",
  //   population: 19345,

  // },
  // {
  //   coordinates: [
  //           32.316183, 60.106401],

  //   name: "Новая Ладога",
  //   population: 8890,

  // },
  // {
  //   coordinates: [
  //           60.6, 59.05],

  //   name: "Новая Ляля",
  //   population: 12400,

  // },
  // {
  //   coordinates: [
  //           41.21694, 45.49333],

  //   name: "Новоалександровск",
  //   population: 26759,

  // },
  // {
  //   coordinates: [
  //           83.93333, 53.4],

  //   name: "Новоалтайск",
  //   population: 73134,

  // },
  // {
  //   coordinates: [
  //           42.66667, 50.51667],

  //   name: "Новоаннинский",
  //   population: 17911,

  // },
  // {
  //   coordinates: [
  //           39.21667, 51.31667],

  //   name: "Нововоронеж",
  //   population: 32635,

  // },
  // {
  //   coordinates: [
  //           40.81667, 64.41667],

  //   name: "Новодвинск",
  //   population: 40612,

  // },
  // {
  //   coordinates: [
  //           31.93333, 52.53333],

  //   name: "Новозыбков",
  //   population: 40552,

  // },
  // {
  //   coordinates: [
  //           41.05, 45.1],

  //   name: "Новокубанск",
  //   population: 34847,

  // },
  // {
  //   coordinates: [
  //           87.08333, 53.73333],

  //   name: "Новокузнецк",
  //   population: 547885,

  // },
  // {
  //   coordinates: [
  //           49.91667, 53.1],

  //   name: "Новокуйбышевск",
  //   population: 108449,

  // },
  // {
  //   coordinates: [
  //           39.75, 54.03333],

  //   name: "Новомичуринск",
  //   population: 19309,

  // },
  // {
  //   coordinates: [
  //           38.26667, 54.03333],

  //   name: "Новомосковск",
  //   population: 131227,

  // },
  // {
  //   coordinates: [
  //           43.63944, 43.96361],

  //   name: "Новопавловск",
  //   population: 26556,

  // },
  // {
  //   coordinates: [
  //           29.33333, 57.03333],

  //   name: "Новоржев",
  //   population: 3695,

  // },
  // {
  //   coordinates: [
  //           37.76667, 44.71667],

  //   name: "Новороссийск",
  //   population: 241788,

  // },
  // {
  //   coordinates: [
  //           82.91667, 55.01667],

  //   name: "Новосибирск",
  //   population: 1620162,

  // },
  // {
  //   coordinates: [
  //           37.05, 52.96667],

  //   name: "Новосиль",
  //   population: 3799,

  // },
  // {
  //   coordinates: [
  //           30.15, 56.33333],

  //   name: "Новосокольники",
  //   population: 8119,

  // },
  // {
  //   coordinates: [
  //           58.32806, 51.20667],

  //   name: "Новотроицк",
  //   population: 97914,

  // },
  // {
  //   coordinates: [
  //           48.15, 50.45],

  //   name: "Новоузенск",
  //   population: 17015,

  // },
  // {
  //   coordinates: [
  //           48.38333, 54.15],

  //   name: "Новоульяновск",
  //   population: 16032,

  // },
  // {
  //   coordinates: [
  //           60.08333, 57.25],

  //   name: "Новоуральск",
  //   population: 91813,

  // },
  // {
  //   coordinates: [
  //           41.61667, 51.1],

  //   name: "Новохопёрск",
  //   population: 6849,

  // },
  // {
  //   coordinates: [
  //           47.4925, 56.12194],

  //   name: "Новочебоксарск",
  //   population: 124094,

  // },
  // {
  //   coordinates: [
  //           40.09861, 47.43583],

  //   name: "Новочеркасск",
  //   population: 169039,

  // },
  // {
  //   coordinates: [
  //           39.91667, 47.76667],

  //   name: "Новошахтинск",
  //   population: 111087,

  // },
  // {
  //   coordinates: [
  //           37.86667, 50.76667],

  //   name: "Новый Оскол",
  //   population: 19530,

  // },
  // {
  //   coordinates: [
  //           76.67889, 66.08472],

  //   name: "Новый Уренгой",
  //   population: 104144,

  // },
  // {
  //   coordinates: [
  //           38.43333, 55.85],

  //   name: "Ногинск",
  //   population: 99762,

  // },
  // {
  //   coordinates: [
  //           49.93417, 57.55722],

  //   name: "Нолинск",
  //   population: 9556,

  // },
  // {
  //   coordinates: [
  //           88.21667, 69.33333],

  //   name: "Норильск",
  //   population: 175301,

  // },
  // {
  //   coordinates: [
  //           75.45167, 63.20167],

  //   name: "Ноябрьск",
  //   population: 110572,

  // },
  // {
  //   coordinates: [
  //           50.8, 54.43333],

  //   name: "Нурлат",
  //   population: 32600,

  // },
  // {
  //   coordinates: [
  //           55.33333, 57.93333],

  //   name: "Нытва",
  //   population: 19041,

  // },
  // {
  //   coordinates: [
  //           118.33333, 63.28333],

  //   name: "Нюрба",
  //   population: 10156,

  // },
  // {
  //   coordinates: [
  //           65.38333, 62.13333],

  //   name: "Нягань",
  //   population: 54903,

  // },
  // {
  //   coordinates: [
  //           59.6, 56.05],

  //   name: "Нязепетровск",
  //   population: 12452,

  // },
  // {
  //   coordinates: [
  //           40.2, 61.66667],

  //   name: "Няндома",
  //   population: 22354,

  // },
  // {
  //   coordinates: [
  //           131.05, 49],

  //   name: "Облучье",
  //   population: 9379,

  // },
  // {
  //   coordinates: [
  //           36.61667, 55.1],

  //   name: "Обнинск",
  //   population: 104798,

  // },
  // {
  //   coordinates: [
  //           36.27639, 51.21111],

  //   name: "Обоянь",
  //   population: 13562,

  // },
  // {
  //   coordinates: [
  //           82.7125, 54.99167],

  //   name: "Обь",
  //   population: 26137,

  // },
  // {
  //   coordinates: [
  //           37.27333, 55.67333],

  //   name: "Одинцово",
  //   population: 139021,

  // },
  // {
  //   coordinates: [
  //           22.01667, 54.41667],

  //   name: "Озёрск",
  //   population: 4740,

  // },
  // {
  //   coordinates: [
  //           60.71667, 55.75],

  //   name: "Озёрск",
  //   population: 82268,

  // },
  // {
  //   coordinates: [
  //           38.5438194, 54.857875],

  //   name: "Озёры",
  //   population: 25788,

  // },
  // {
  //   coordinates: [
  //           48.66667, 53.16667],

  //   name: "Октябрьск",
  //   population: 27244,

  // },
  // {
  //   coordinates: [
  //           53.48333, 54.48333],

  //   name: "Октябрьский",
  //   population: 109379,

  // },
  // {
  //   coordinates: [
  //           33.3, 58.38333],

  //   name: "Окуловка",
  //   population: 12464,

  // },
  // {
  //   coordinates: [
  //           33.28333, 68.15],

  //   name: "Оленегорск",
  //   population: 23079,

  // },
  // {
  //   coordinates: [
  //           32.96667, 60.98333],

  //   name: "Олонец",
  //   population: 9060,

  // },
  // {
  //   coordinates: [
  //           120.43333, 60.38333],

  //   name: "Олёкминск",
  //   population: 9487,

  // },
  // {
  //   coordinates: [
  //           73.38333, 54.96667],

  //   name: "Омск",
  //   population: 1139897,

  // },
  // {
  //   coordinates: [
  //           52.18333, 58.66667],

  //   name: "Омутнинск",
  //   population: 23618,

  // },
  // {
  //   coordinates: [
  //           38.08333, 63.91667],

  //   name: "Онега",
  //   population: 21359,

  // },
  // {
  //   coordinates: [
  //           28.65, 56.71667],

  //   name: "Опочка",
  //   population: 11601,

  // },
  // {
  //   coordinates: [
  //           55.1, 51.76667],

  //   name: "Оренбург",
  //   population: 570329,

  // },
  // {
  //   coordinates: [
  //           38.96667, 55.8],

  //   name: "Орехово-Зуево",
  //   population: 120620,

  // },
  // {
  //   coordinates: [
  //           48.89861, 58.53889],

  //   name: "Орлов",
  //   population: 6959,

  // },
  // {
  //   coordinates: [
  //           58.61667, 51.2],

  //   name: "Орск",
  //   population: 238006,

  // },
  // {
  //   coordinates: [
  //           36.08333, 52.96667],

  //   name: "Орёл",
  //   population: 317854,

  // },
  // {
  //   coordinates: [
  //           55.45, 57.28333],

  //   name: "Оса",
  //   population: 22420,

  // },
  // {
  //   coordinates: [
  //           87.33333, 53.61667],

  //   name: "Осинники",
  //   population: 45997,

  // },
  // {
  //   coordinates: [
  //           33.1, 57.15],

  //   name: "Осташков",
  //   population: 18073,

  // },
  // {
  //   coordinates: [
  //           28.35, 57.33333],

  //   name: "Остров",
  //   population: 21670,

  // },
  // {
  //   coordinates: [
  //           39.51306, 68.05306],

  //   name: "Островной",
  //   population: 2177,

  // },
  // {
  //   coordinates: [
  //           39.06667, 50.86667],

  //   name: "Острогожск",
  //   population: 33842,

  // },
  // {
  //   coordinates: [
  //           30.794553, 59.77409],

  //   name: "Отрадное",
  //   population: 23874,

  // },
  // {
  //   coordinates: [
  //           51.35, 53.36667],

  //   name: "Отрадный",
  //   population: 47709,

  // },
  // {
  //   coordinates: [
  //           142.95, 53.58333],

  //   name: "Оха",
  //   population: 23007,

  // },
  // {
  //   coordinates: [
  //           55.38333, 57.71667],

  //   name: "Оханск",
  //   population: 7597,

  // },
  // {
  //   coordinates: [
  //           54.71667, 57.88333],

  //   name: "Очёр",
  //   population: 15003,

  // },
  // {
  //   coordinates: [
  //           43.09, 55.96194],

  //   name: "Павлово",
  //   population: 60699,

  // },
  // {
  //   coordinates: [
  //           40.06667, 50.45],

  //   name: "Павловск",
  //   population: 25126,

  // },
  // {
  //   coordinates: [
  //           38.65, 55.78333],

  //   name: "Павловский Посад",
  //   population: 63771,

  // },
  // {
  //   coordinates: [
  //           46.88333, 50.05],

  //   name: "Палласовка",
  //   population: 15984,

  // },
  // {
  //   coordinates: [
  //           133.13333, 43.13333],

  //   name: "Партизанск",
  //   population: 38648,

  // },
  // {
  //   coordinates: [
  //           170.31667, 69.7],

  //   name: "Певек",
  //   population: 4161,

  // },
  // {
  //   coordinates: [
  //           45, 53.2],

  //   name: "Пенза",
  //   population: 519592,

  // },
  // {
  //   coordinates: [
  //           43.8, 54.86667],

  //   name: "Первомайск",
  //   population: 14567,

  // },
  // {
  //   coordinates: [
  //           59.95, 56.91667],

  //   name: "Первоуральск",
  //   population: 149800,

  // },
  // {
  //   coordinates: [
  //           44.55, 55.6],

  //   name: "Перевоз",
  //   population: 9201,

  // },
  // {
  //   coordinates: [
  //           38.18333, 56.41667],

  //   name: "Пересвет",
  //   population: 14142,

  // },
  // {
  //   coordinates: [
  //           38.8561528, 56.7381333],

  //   name: "Переславль-Залесский",
  //   population: 41923,

  // },
  // {
  //   coordinates: [
  //           56.24889, 58.01389],

  //   name: "Пермь",
  //   population: 1049199,

  // },
  // {
  //   coordinates: [
  //           35.81667, 58.6],

  //   name: "Пестово",
  //   population: 15911,

  // },
  // {
  //   coordinates: [
  //           45.21667, 50.13333],

  //   name: "Петров Вал",
  //   population: 13264,

  // },
  // {
  //   coordinates: [
  //           108.83333, 51.28333],

  //   name: "Петровск-Забайкальский",
  //   population: 18555,

  // },
  // {
  //   coordinates: [
  //           45.38333, 52.31667],

  //   name: "Петровск",
  //   population: 31158,

  // },
  // {
  //   coordinates: [
  //           34.34917, 61.79611],

  //   name: "Петрозаводск",
  //   population: 263540,

  // },
  // {
  //   coordinates: [
  //           158.65, 53.01667],

  //   name: "Петропавловск-Камчатский",
  //   population: 179526,

  // },
  // {
  //   coordinates: [
  //           67.88333, 55.06667],

  //   name: "Петухово",
  //   population: 11291,

  // },
  // {
  //   coordinates: [
  //           39.46667, 55.93333],

  //   name: "Петушки",
  //   population: 15167,

  // },
  // {
  //   coordinates: [
  //           57.11667, 65.11667],

  //   name: "Печора",
  //   population: 43458,

  // },
  // {
  //   coordinates: [
  //           27.6, 57.81667],

  //   name: "Печоры",
  //   population: 12308,

  // },
  // {
  //   coordinates: [
  //           34.17589, 59.51324],

  //   name: "Пикалёво",
  //   population: 21567,

  // },
  // {
  //   coordinates: [
  //           20.21667, 54.95],

  //   name: "Пионерский",
  //   population: 11017,

  // },
  // {
  //   coordinates: [
  //           31.48333, 61.56667],

  //   name: "Питкяранта",
  //   population: 11484,

  // },
  // {
  //   coordinates: [
  //           37.3, 53.7],

  //   name: "Плавск",
  //   population: 16248,

  // },
  // {
  //   coordinates: [
  //           60.81667, 54.36667],

  //   name: "Пласт",
  //   population: 17344,

  // },
  // {
  //   coordinates: [
  //           41.5, 57.45],

  //   name: "Плёс",
  //   population: 2341,

  // },
  // {
  //   coordinates: [
  //           42.25, 51.2],

  //   name: "Поворино",
  //   population: 17692,

  // },
  // {
  //   coordinates: [
  //           37.54444, 55.42972],

  //   name: "Подольск",
  //   population: 187956,

  // },
  // {
  //   coordinates: [
  //           34.167952, 60.912097],

  //   name: "Подпорожье",
  //   population: 18729,

  // },
  // {
  //   coordinates: [
  //           75.58333, 61.75],

  //   name: "Покачи",
  //   population: 17053,

  // },
  // {
  //   coordinates: [
  //           39.175, 55.91778],

  //   name: "Покров",
  //   population: 17762,

  // },
  // {
  //   coordinates: [
  //           129.15, 61.48333],

  //   name: "Покровск",
  //   population: 9495,

  // },
  // {
  //   coordinates: [
  //           60.18333, 56.45],

  //   name: "Полевской",
  //   population: 64316,

  // },
  // {
  //   coordinates: [
  //           21.1, 54.86667],

  //   name: "Полесск",
  //   population: 7580,

  // },
  // {
  //   coordinates: [
  //           86.28333, 54.6],

  //   name: "Полысаево",
  //   population: 27624,

  // },
  // {
  //   coordinates: [
  //           32.49806, 67.36583],

  //   name: "Полярные Зори",
  //   population: 15106,

  // },
  // {
  //   coordinates: [
  //           33.45611, 69.19833],

  //   name: "Полярный",
  //   population: 17304,

  // },
  // {
  //   coordinates: [
  //           143.1, 49.21667],

  //   name: "Поронайск",
  //   population: 16461,

  // },
  // {
  //   coordinates: [
  //           29.55, 57.76667],

  //   name: "Порхов",
  //   population: 10608,

  // },
  // {
  //   coordinates: [
  //           52.13333, 53.65],

  //   name: "Похвистнево",
  //   population: 28181,

  // },
  // {
  //   coordinates: [
  //           33.45, 52.93333],

  //   name: "Почеп",
  //   population: 17933,

  // },
  // {
  //   coordinates: [
  //           32.45, 54.4],

  //   name: "Починок",
  //   population: 8776,

  // },
  // {
  //   coordinates: [
  //           39.11667, 58.5],

  //   name: "Пошехонье",
  //   population: 6085,

  // },
  // {
  //   coordinates: [
  //           21.01667, 54.45],

  //   name: "Правдинск",
  //   population: 4323,

  // },
  // {
  //   coordinates: [
  //           41.28333, 57.38333],

  //   name: "Приволжск",
  //   population: 16749,

  // },
  // {
  //   coordinates: [
  //           20, 54.73333],

  //   name: "Приморск",
  //   population: 1956,

  // },
  // {
  //   coordinates: [
  //           28.61667, 60.36667],

  //   name: "Приморск",
  //   population: 6122,

  // },
  // {
  //   coordinates: [
  //           38.18333, 46.05],

  //   name: "Приморско-Ахтарск",
  //   population: 32253,

  // },
  // {
  //   coordinates: [
  //           30.11667, 61.03333],

  //   name: "Приозерск",
  //   population: 18929,

  // },
  // {
  //   coordinates: [
  //           86.71667, 53.88333],

  //   name: "Прокопьевск",
  //   population: 210150,

  // },
  // {
  //   coordinates: [
  //           41.71917, 46.70306],

  //   name: "Пролетарск",
  //   population: 20267,

  // },
  // {
  //   coordinates: [
  //           37.21389, 54.87944],

  //   name: "Протвино",
  //   population: 37308,

  // },
  // {
  //   coordinates: [
  //           44.033333, 43.750055],

  //   name: "Прохладный",
  //   population: 59595,

  // },
  // {
  //   coordinates: [
  //           28.33333, 57.81667],

  //   name: "Псков",
  //   population: 203974,

  // },
  // {
  //   coordinates: [
  //           48.8, 52.01667],

  //   name: "Пугачёв",
  //   population: 41705,

  // },
  // {
  //   coordinates: [
  //           36.53333, 61.8],

  //   name: "Пудож",
  //   population: 9698,

  // },
  // {
  //   coordinates: [
  //           29.36667, 56.33333],

  //   name: "Пустошка",
  //   population: 4619,

  // },
  // {
  //   coordinates: [
  //           43.16667, 56.98333],

  //   name: "Пучеж",
  //   population: 8583,

  // },
  // {
  //   coordinates: [
  //           37.85, 56.01667],

  //   name: "Пушкино",
  //   population: 102840,

  // },
  // {
  //   coordinates: [
  //           37.61667, 54.83333],

  //   name: "Пущино",
  //   population: 20263,

  // },
  // {
  //   coordinates: [
  //           27.91667, 57.06667],

  //   name: "Пыталово",
  //   population: 5826,

  // },
  // {
  //   coordinates: [
  //           72.78333, 60.75],

  //   name: "Пыть-Ях",
  //   population: 41453,

  // },
  // {
  //   coordinates: [
  //           43.0600548, 44.0499664],

  //   name: "Пятигорск",
  //   population: 142397,

  // },
  // {
  //   coordinates: [
  //           40.32972, 55.99778],

  //   name: "Радужный",
  //   population: 18212,

  // },
  // {
  //   coordinates: [
  //           77.46667, 62.13333],

  //   name: "Радужный",
  //   population: 43394,

  // },
  // {
  //   coordinates: [
  //           129.4, 49.8],

  //   name: "Райчихинск",
  //   population: 20499,

  // },
  // {
  //   coordinates: [
  //           38.21667, 55.56667],

  //   name: "Раменское",
  //   population: 96355,

  // },
  // {
  //   coordinates: [
  //           41.88333, 52.66667],

  //   name: "Рассказово",
  //   population: 45484,

  // },
  // {
  //   coordinates: [
  //           59.91667, 56.8],

  //   name: "Ревда",
  //   population: 61713,

  // },
  // {
  //   coordinates: [
  //           61.4, 57.36667],

  //   name: "Реж",
  //   population: 38709,

  // },
  // {
  //   coordinates: [
  //           37.86667, 55.76667],

  //   name: "Реутов",
  //   population: 87195,

  // },
  // {
  //   coordinates: [
  //           34.3275694, 56.2655833],

  //   name: "Ржев",
  //   population: 62026,

  // },
  // {
  //   coordinates: [
  //           41.73333, 57.1],

  //   name: "Родники",
  //   population: 26318,

  // },
  // {
  //   coordinates: [
  //           32.85694, 53.94917],

  //   name: "Рославль",
  //   population: 54898,

  // },
  // {
  //   coordinates: [
  //           39.58333, 50.2],

  //   name: "Россошь",
  //   population: 62865,

  // },
  // {
  //   coordinates: [
  //           39.71056, 47.24056],

  //   name: "Ростов-на-Дону",
  //   population: 1137704,

  // },
  // {
  //   coordinates: [
  //           39.41667, 57.18333],

  //   name: "Ростов",
  //   population: 31791,

  // },
  // {
  //   coordinates: [
  //           39.865, 55.66361],

  //   name: "Рошаль",
  //   population: 21265,

  // },
  // {
  //   coordinates: [
  //           43.78333, 52.25],

  //   name: "Ртищево",
  //   population: 41295,

  // },
  // {
  //   coordinates: [
  //           81.218806, 51.52722],

  //   name: "Рубцовск",
  //   population: 146386,

  // },
  // {
  //   coordinates: [
  //           31.06667, 54.95],

  //   name: "Рудня",
  //   population: 10029,

  // },
  // {
  //   coordinates: [
  //           36.19528, 55.69889],

  //   name: "Руза",
  //   population: 13495,

  // },
  // {
  //   coordinates: [
  //           44.95, 54.06667],

  //   name: "Рузаевка",
  //   population: 47529,

  // },
  // {
  //   coordinates: [
  //           38.83333, 58.05],

  //   name: "Рыбинск",
  //   population: 200771,

  // },
  // {
  //   coordinates: [
  //           39.51667, 54.73333],

  //   name: "Рыбное",
  //   population: 18378,

  // },
  // {
  //   coordinates: [
  //           34.68333, 51.56667],

  //   name: "Рыльск",
  //   population: 15667,

  // },
  // {
  //   coordinates: [
  //           40.06667, 53.71667],

  //   name: "Ряжск",
  //   population: 21676,

  // },
  // {
  //   coordinates: [
  //           39.71667, 54.61667],

  //   name: "Рязань",
  //   population: 525062,

  // },
  // {
  //   coordinates: [
  //           33.57722, 45.13361],

  //   name: "Саки",
  //   population: 25146,

  // },
  // {
  //   coordinates: [
  //           55.93333, 53.36667],

  //   name: "Салават",
  //   population: 156085,

  // },
  // {
  //   coordinates: [
  //           85.8, 54.23333],

  //   name: "Салаир",
  //   population: 8263,

  // },
  // {
  //   coordinates: [
  //           66.63333, 66.53333],

  //   name: "Салехард",
  //   population: 42494,

  // },
  // {
  //   coordinates: [
  //           41.53333, 46.48333],

  //   name: "Сальск",
  //   population: 61312,

  // },
  // {
  //   coordinates: [
  //           50.11667, 53.18333],

  //   name: "Самара",
  //   population: 1144759,

  // },
  {
    coordinates: [30.31667, 59.95],

    name: "Санкт-Петербург",
    population: 5384342,
  },
  {
    coordinates: [45.18333, 54.18333],

    name: "Саранск",
    population: 318841,
  },
  // {
  //   coordinates: [
  //           53.8, 56.46667],

  //   name: "Сарапул",
  //   population: 101390,

  // },
  // {
  //   coordinates: [
  //           46, 51.53333],

  //   name: "Саратов",
  //   population: 836900,

  // },
  // {
  //   coordinates: [
  //           43.31667, 54.93333],

  //   name: "Саров",
  //   population: 92073,

  // },
  // {
  //   coordinates: [
  //           41.91667, 54.35],

  //   name: "Сасово",
  //   population: 28117,

  // },
  // {
  //   coordinates: [
  //           59.05, 55.05],

  //   name: "Сатка",
  //   population: 45465,

  // },
  // {
  //   coordinates: [
  //           33.25, 55.1],

  //   name: "Сафоново",
  //   population: 46116,

  // },
  // {
  //   coordinates: [
  //           91.4, 53.1],

  //   name: "Саяногорск",
  //   population: 49889,

  // },
  // {
  //   coordinates: [
  //           102.16667, 54.11667],

  //   name: "Саянск",
  //   population: 40786,

  // },
  // {
  //   coordinates: [
  //           20.15, 54.93333],

  //   name: "Светлогорск",
  //   population: 10775,

  // },
  // {
  //   coordinates: [
  //           42.85111, 45.33083],

  //   name: "Светлоград",
  //   population: 38520,

  // },
  // {
  //   coordinates: [
  //           20.13333, 54.68333],

  //   name: "Светлый",
  //   population: 21380,

  // },
  // {
  //   coordinates: [
  //           28.85833, 61.10833],

  //   name: "Светогорск",
  //   population: 15973,

  // },
  // {
  //   coordinates: [
  //           103.33333, 53.08333],

  //   name: "Свирск",
  //   population: 13649,

  // },
  // {
  //   coordinates: [
  //           128.13333, 51.38333],

  //   name: "Свободный",
  //   population: 58594,

  // },
  // {
  //   coordinates: [
  //           28.48333, 56.28333],

  //   name: "Себеж",
  //   population: 6375,

  // },
  // {
  //   coordinates: [
  //           33.53333, 44.6],

  //   name: "Севастополь",
  //   population: 393304,

  // },
  // {
  //   coordinates: [
  //           156.11667, 50.66667],

  //   name: "Северо-Курильск",
  //   population: 2381,

  // },
  // {
  //   coordinates: [
  //           109.31667, 55.63333],

  //   name: "Северобайкальск",
  //   population: 23673,

  // },
  // {
  //   coordinates: [
  //           39.85, 64.56667],

  //   name: "Северодвинск",
  //   population: 192265,

  // },
  // {
  //   coordinates: [
  //           33.41667, 69.06917],

  //   name: "Североморск",
  //   population: 50076,

  // },
  // {
  //   coordinates: [
  //           59.93333, 60.15],

  //   name: "Североуральск",
  //   population: 29279,

  // },
  // {
  //   coordinates: [
  //           84.85, 56.6],

  //   name: "Северск",
  //   population: 108466,

  // },
  // {
  //   coordinates: [
  //           34.49389, 52.15],

  //   name: "Севск",
  //   population: 7282,

  // },
  // {
  //   coordinates: [
  //           34.31667, 63.73333],

  //   name: "Сегежа",
  //   population: 29660,

  // },
  // {
  //   coordinates: [
  //           34.1, 53.36944],

  //   name: "Сельцо",
  //   population: 17933,

  // },
  // {
  //   coordinates: [
  //           40.8, 47.51667],

  //   name: "Семикаракорск",
  //   population: 23884,

  // },
  // {
  //   coordinates: [
  //           39.03333, 51.68333],

  //   name: "Семилуки",
  //   population: 26025,

  // },
  // {
  //   coordinates: [
  //           44.49056, 56.78944],

  //   name: "Семёнов",
  //   population: 24472,

  // },
  // {
  //   coordinates: [
  //           48.8, 53.96667],

  //   name: "Сенгилей",
  //   population: 6959,

  // },
  // {
  //   coordinates: [
  //           42.73333, 49.58333],

  //   name: "Серафимович",
  //   population: 9368,

  // },
  // {
  //   coordinates: [
  //           45.46667, 55.53333],

  //   name: "Сергач",
  //   population: 21387,

  // },
  // {
  //   coordinates: [
  //           38.13333, 56.3],

  //   name: "Сергиев Посад",
  //   population: 110878,

  // },
  // {
  //   coordinates: [
  //           44.21667, 52.46667],

  //   name: "Сердобск",
  //   population: 35393,

  // },
  // {
  //   coordinates: [
  //           60.56667, 59.58333],

  //   name: "Серов",
  //   population: 99381,

  // },
  // {
  //   coordinates: [
  //           37.4, 54.91667],

  //   name: "Серпухов",
  //   population: 126496,

  // },
  // {
  //   coordinates: [
  //           30.211879, 60.141613],

  //   name: "Сертолово",
  //   population: 47854,

  // },
  // {
  //   coordinates: [
  //           58.65, 52.7],

  //   name: "Сибай",
  //   population: 62732,

  // },
  // {
  //   coordinates: [
  //           57.68333, 54.98333],

  //   name: "Сим",
  //   population: 14465,

  // },
  // {
  //   coordinates: [
  //           34.10417, 44.94806],

  //   name: "Симферополь",
  //   population: 332317,

  // },
  // {
  //   coordinates: [
  //           123.93333, 53.98333],

  //   name: "Сковородино",
  //   population: 9561,

  // },
  // {
  //   coordinates: [
  //           39.55, 53.81667],

  //   name: "Скопин",
  //   population: 30374,

  // },
  // {
  //   coordinates: [
  //           78.65, 53],

  //   name: "Славгород",
  //   population: 30370,

  // },
  // {
  //   coordinates: [
  //           21.66667, 55.05],

  //   name: "Славск",
  //   population: 4614,

  // },
  // {
  //   coordinates: [
  //           38.12472, 45.25861],

  //   name: "Славянск-на-Кубани",
  //   population: 63768,

  // },
  // {
  //   coordinates: [
  //           28.08333, 59.11667],

  //   name: "Сланцы",
  //   population: 33587,

  // },
  // {
  //   coordinates: [
  //           50.161167, 58.724167],

  //   name: "Слободской",
  //   population: 33983,

  // },
  // {
  //   coordinates: [
  //           103.7, 51.66667],

  //   name: "Слюдянка",
  //   population: 18542,

  // },
  // {
  //   coordinates: [
  //           32.04528, 54.78278],

  //   name: "Смоленск",
  //   population: 326863,

  // },
  // {
  //   coordinates: [
  //           60.73333, 56.08333],

  //   name: "Снежинск",
  //   population: 48896,

  // },
  // {
  //   coordinates: [
  //           33.23306, 69.19417],

  //   name: "Снежногорск",
  //   population: 12698,

  // },
  // {
  //   coordinates: [
  //           40.01667, 55.99],

  //   name: "Собинка",
  //   population: 19482,

  // },
  // {
  //   coordinates: [
  //           21.88333, 55.08333],

  //   name: "Советск",
  //   population: 41709,

  // },
  // {
  //   coordinates: [
  //           48.938611, 57.601306],

  //   name: "Советск",
  //   population: 16592,

  // },
  // {
  //   coordinates: [
  //           37.63333, 53.93333],

  //   name: "Советск",
  //   population: 7537,

  // },
  // {
  //   coordinates: [
  //           140.2811111, 48.9575],

  //   name: "Советская Гавань",
  //   population: 27712,

  // },
  // {
  //   coordinates: [
  //           63.56667, 61.36667],

  //   name: "Советский",
  //   population: 26434,

  // },
  // {
  //   coordinates: [
  //           40.11667, 59.46667],

  //   name: "Сокол",
  //   population: 38454,

  // },
  // {
  //   coordinates: [
  //           42.28333, 59.08333],

  //   name: "Солигалич",
  //   population: 6438,

  // },
  // {
  //   coordinates: [
  //           56.76667, 59.63333],

  //   name: "Соликамск",
  //   population: 97239,

  // },
  // {
  //   coordinates: [
  //           36.995, 56.18444],

  //   name: "Солнечногорск",
  //   population: 52996,

  // },
  // {
  //   coordinates: [
  //           54.98333, 51.16667],

  //   name: "Соль-Илецк",
  //   population: 26308,

  // },
  // {
  //   coordinates: [
  //           46.91667, 61.33333],

  //   name: "Сольвычегодск",
  //   population: 2460,

  // },
  // {
  //   coordinates: [
  //           30.31667, 58.11667],

  //   name: "Сольцы",
  //   population: 10317,

  // },
  // {
  //   coordinates: [
  //           53.15, 52.43333],

  //   name: "Сорочинск",
  //   population: 30136,

  // },
  // {
  //   coordinates: [
  //           90.25, 54],

  //   name: "Сорск",
  //   population: 12140,

  // },
  // {
  //   coordinates: [
  //           30.66667, 61.7],

  //   name: "Сортавала",
  //   population: 19215,

  // },
  // {
  //   coordinates: [
  //           35.96667, 54.05],

  //   name: "Сосенский",
  //   population: 12394,

  // },
  // {
  //   coordinates: [
  //           51.2812, 56.2543],

  //   name: "Сосновка",
  //   population: 11960,

  // },
  // {
  //   coordinates: [
  //           93.36667, 56.13333],

  //   name: "Сосновоборск",
  //   population: 33090,

  // },
  // {
  //   coordinates: [
  //           29.08611, 59.9],

  //   name: "Сосновый Бор",
  //   population: 65901,

  // },
  // {
  //   coordinates: [
  //           53.93333, 63.58333],

  //   name: "Сосногорск",
  //   population: 27809,

  // },
  // {
  //   coordinates: [
  //           39.72028, 43.58528],

  //   name: "Сочи",
  //   population: 343285,

  // },
  // {
  //   coordinates: [
  //           34.03333, 54.41667],

  //   name: "Спас-Деменск",
  //   population: 4904,

  // },
  // {
  //   coordinates: [
  //           40.16667, 55.13333],

  //   name: "Спас-Клепики",
  //   population: 5917,

  // },
  // {
  //   coordinates: [
  //           132.81667, 44.6],

  //   name: "Спасск-Дальний",
  //   population: 44166,

  // },
  // {
  //   coordinates: [
  //           40.38333, 54.4],

  //   name: "Спасск-Рязанский",
  //   population: 7745,

  // },
  // {
  //   coordinates: [
  //           43.18333, 53.93333],

  //   name: "Спасск",
  //   population: 7442,

  // },
  // {
  //   coordinates: [
  //           153.706, 67.458],

  //   name: "Среднеколымск",
  //   population: 3525,

  // },
  // {
  //   coordinates: [
  //           60.46667, 56.98333],

  //   name: "Среднеуральск",
  //   population: 20357,

  // },
  // {
  //   coordinates: [
  //           117.71667, 52.25],

  //   name: "Сретенск",
  //   population: 6850,

  // },
  // {
  //   coordinates: [
  //           41.96667, 45.03333],

  //   name: "Ставрополь",
  //   population: 398266,

  // },
  // {
  //   coordinates: [
  //           38.18333, 55.8],

  //   name: "Старая Купавна",
  //   population: 21859,

  // },
  // {
  //   coordinates: [
  //           31.35, 57.98333],

  //   name: "Старая Русса",
  //   population: 32235,

  // },
  // {
  //   coordinates: [
  //           34.93333, 56.51667],

  //   name: "Старица",
  //   population: 8610,

  // },
  // {
  //   coordinates: [
  //           32.76667, 52.58333],

  //   name: "Стародуб",
  //   population: 19010,

  // },
  // {
  //   coordinates: [
  //           35.08861, 45.02917],

  //   name: "Старый Крым",
  //   population: 9277,

  // },
  // {
  //   coordinates: [
  //           37.835, 51.29806],

  //   name: "Старый Оскол",
  //   population: 221163,

  // },
  // {
  //   coordinates: [
  //           55.95, 53.63333],

  //   name: "Стерлитамак",
  //   population: 273432,

  // },
  // {
  //   coordinates: [
  //           77.58333, 60.73333],

  //   name: "Стрежевой",
  //   population: 42216,

  // },
  // {
  //   coordinates: [
  //           36.48333, 50.78333],

  //   name: "Строитель",
  //   population: 23933,

  // },
  // {
  //   coordinates: [
  //           38.585, 56.37333],

  //   name: "Струнино",
  //   population: 14372,

  // },
  // {
  //   coordinates: [
  //           38.07722, 54.88694],

  //   name: "Ступино",
  //   population: 66942,

  // },
  // {
  //   coordinates: [
  //           36.5, 54.11667],

  //   name: "Суворов",
  //   population: 18975,

  // },
  // {
  //   coordinates: [
  //           34.9725, 44.85139],

  //   name: "Судак",
  //   population: 16492,

  // },
  // {
  //   coordinates: [
  //           35.27083, 51.190694],

  //   name: "Суджа",
  //   population: 6036,

  // },
  // {
  //   coordinates: [
  //           40.86667, 55.95],

  //   name: "Судогда",
  //   population: 11848,

  // },
  // {
  //   coordinates: [
  //           40.44889, 56.42111],

  //   name: "Суздаль",
  //   population: 10535,

  // },
  // {
  //   coordinates: [
  //           45.051581, 43.313475],

  //   name: "Сунжа",
  //   population: 64493,

  // },
  // {
  //   coordinates: [
  //           32.36667, 62.08333],

  //   name: "Суоярви",
  //   population: 9763,

  // },
  // {
  //   coordinates: [
  //           32.4, 53.01667],

  //   name: "Сураж",
  //   population: 11640,

  // },
  // {
  //   coordinates: [
  //           73.43333, 61.25],

  //   name: "Сургут",
  //   population: 306703,

  // },
  // {
  //   coordinates: [
  //           42.85, 48.6],

  //   name: "Суровикино",
  //   population: 20527,

  // },
  // {
  //   coordinates: [
  //           45.7, 53.08333],

  //   name: "Сурск",
  //   population: 7032,

  // },
  // {
  //   coordinates: [
  //           148.15, 62.78333],

  //   name: "Сусуман",
  //   population: 5865,

  // },
  // {
  //   coordinates: [
  //           35.35, 54.1],

  //   name: "Сухиничи",
  //   population: 16295,

  // },
  // {
  //   coordinates: [
  //           62.03417, 56.90583],

  //   name: "Сухой Лог",
  //   population: 34836,

  // },
  // {
  //   coordinates: [
  //           48.46667, 53.16667],

  //   name: "Сызрань",
  //   population: 178773,

  // },
  // {
  //   coordinates: [
  //           50.81667, 61.66667],

  //   name: "Сыктывкар",
  //   population: 235006,

  // },
  // {
  //   coordinates: [
  //           60.81667, 56.5],

  //   name: "Сысерть",
  //   population: 20594,

  // },
  // {
  //   coordinates: [
  //           34.28333, 55.83333],

  //   name: "Сычёвка",
  //   population: 8111,

  // },
  // {
  //   coordinates: [
  //           32.561279, 60.137057],

  //   name: "Сясьстрой",
  //   population: 13747,

  // },
  // {
  //   coordinates: [
  //           65.26667, 58.05],

  //   name: "Тавда",
  //   population: 35421,

  // },
  // {
  //   coordinates: [
  //           38.88333, 47.23917],

  //   name: "Таганрог",
  //   population: 257692,

  // },
  // {
  //   coordinates: [
  //           85.61667, 56.06667],

  //   name: "Тайга",
  //   population: 25330,

  // },
  // {
  //   coordinates: [
  //           98.01667, 55.93333],

  //   name: "Тайшет",
  //   population: 35481,

  // },
  // {
  //   coordinates: [
  //           37.53333, 56.73333],

  //   name: "Талдом",
  //   population: 13819,

  // },
  // {
  //   coordinates: [
  //           63.72917, 57.0125],

  //   name: "Талица",
  //   population: 18339,

  // },
  // {
  //   coordinates: [
  //           41.43333, 52.71667],

  //   name: "Тамбов",
  //   population: 280457,

  // },
  // {
  //   coordinates: [
  //           74.37079, 56.902383],

  //   name: "Тара",
  //   population: 26664,

  // },
  // {
  //   coordinates: [
  //           77.77278, 64.91472],

  //   name: "Тарко-Сале",
  //   population: 20372,

  // },
  // {
  //   coordinates: [
  //           37.18333, 54.71667],

  //   name: "Таруса",
  //   population: 9656,

  // },
  // {
  //   coordinates: [
  //           75.96667, 55.21667],

  //   name: "Татарск",
  //   population: 26114,

  // },
  // {
  //   coordinates: [
  //           87.86667, 52.76667],

  //   name: "Таштагол",
  //   population: 23114,

  // },
  {
    coordinates: [35.9219278, 56.8578278],

    name: "Тверь",
    population: 403726,
  },
  // {
  //   coordinates: [
  //           41.74382, 43.449437],

  //   name: "Теберда",
  //   population: 9097,

  // },
  // {
  //   coordinates: [
  //           40.55, 56.85],

  //   name: "Тейково",
  //   population: 34993,

  // },
  // {
  //   coordinates: [
  //           43.21667, 54.63333],

  //   name: "Темников",
  //   population: 7247,

  // },
  // {
  //   coordinates: [
  //           37.38333, 45.26667],

  //   name: "Темрюк",
  //   population: 38014,

  // },
  // {
  //   coordinates: [
  //           44.13889, 43.48333],

  //   name: "Терек",
  //   population: 19170,

  // },
  // {
  //   coordinates: [
  //           48.83333, 54.93333],

  //   name: "Тетюши",
  //   population: 11596,

  // },
  // {
  //   coordinates: [
  //           38.93333, 45.61667],

  //   name: "Тимашёвск",
  //   population: 53921,

  // },
  // {
  //   coordinates: [
  //           33.5, 59.63333],

  //   name: "Тихвин",
  //   population: 58843,

  // },
  // {
  //   coordinates: [
  //           40.11667, 45.85],

  //   name: "Тихорецк",
  //   population: 61825,

  // },
  // {
  //   coordinates: [
  //           68.25806, 58.19528],

  //   name: "Тобольск",
  //   population: 99698,

  // },
  // {
  //   coordinates: [
  //           84.38333, 55.23333],

  //   name: "Тогучин",
  //   population: 21531,

  // },
  // {
  //   coordinates: [
  //           49.41667, 53.51667],

  //   name: "Тольятти",
  //   population: 719484,

  // },
  // {
  //   coordinates: [
  //           142.06667, 47.76667],

  //   name: "Томари",
  //   population: 4537,

  // },
  // {
  //   coordinates: [
  //           126.26667, 58.96667],

  //   name: "Томмот",
  //   population: 8054,

  // },
  // {
  //   coordinates: [
  //           84.95222, 56.48861],

  //   name: "Томск",
  //   population: 522940,

  // },
  // {
  //   coordinates: [
  //           85.61667, 55.28333],

  //   name: "Топки",
  //   population: 28642,

  // },
  // {
  //   coordinates: [
  //           34.96667, 57.03333],

  //   name: "Торжок",
  //   population: 47702,

  // },
  // {
  //   coordinates: [
  //           31.63333, 56.5],

  //   name: "Торопец",
  //   population: 13018,

  // },
  // {
  //   coordinates: [
  //           30.875006, 59.541179],

  //   name: "Тосно",
  //   population: 39127,

  // },
  // {
  //   coordinates: [
  //           42.76667, 59.98333],

  //   name: "Тотьма",
  //   population: 9784,

  // },
  // {
  //   coordinates: [
  //           61.56667, 54.08333],

  //   name: "Троицк",
  //   population: 78637,

  // },
  // {
  //   coordinates: [
  //           33.76667, 52.58333],

  //   name: "Трубчевск",
  //   population: 15014,

  // },
  // {
  //   coordinates: [
  //           58.45, 54.8],

  //   name: "Трёхгорный",
  //   population: 33678,

  // },
  // {
  //   coordinates: [
  //           39.08333, 44.1],

  //   name: "Туапсе",
  //   population: 63233,

  // },
  // {
  //   coordinates: [
  //           53.7, 54.6],

  //   name: "Туймазы",
  //   population: 66849,

  // },
  // {
  //   coordinates: [
  //           37.61667, 54.2],

  //   name: "Тула",
  //   population: 501129,

  // },
  // {
  //   coordinates: [
  //           100.56667, 54.56667],

  //   name: "Тулун",
  //   population: 44603,

  // },
  // {
  //   coordinates: [
  //           93.9181, 52.1446],

  //   name: "Туран",
  //   population: 4988,

  // },
  // {
  //   coordinates: [
  //           63.7, 58.03333],

  //   name: "Туринск",
  //   population: 17990,

  // },
  // {
  //   coordinates: [
  //           39.53333, 57.88333],

  //   name: "Тутаев",
  //   population: 41001,

  // },
  // {
  //   coordinates: [
  //           124.71667, 55.15],

  //   name: "Тында",
  //   population: 35574,

  // },
  // {
  //   coordinates: [
  //           42.9189065, 43.3892664],

  //   name: "Тырныауз",
  //   population: 21000,

  // },
  // {
  //   coordinates: [
  //           72.2, 55.86667],

  //   name: "Тюкалинск",
  //   population: 12050,

  // },
  // {
  //   coordinates: [
  //           65.53333, 57.15],

  //   name: "Тюмень",
  //   population: 581758,

  // },
  // {
  //   coordinates: [
  //           42.26667, 51.98333],

  //   name: "Уварово",
  //   population: 26829,

  // },
  // {
  //   coordinates: [
  //           142.03333, 49.06667],

  //   name: "Углегорск",
  //   population: 11880,

  // },
  // {
  //   coordinates: [
  //           38.33333, 57.53333],

  //   name: "Углич",
  //   population: 34505,

  // },
  // {
  //   coordinates: [
  //           112.3, 66.4],

  //   name: "Удачный",
  //   population: 12611,

  // },
  // {
  //   coordinates: [
  //           35.01667, 57.88333],

  //   name: "Удомля",
  //   population: 31048,

  // },
  // {
  //   coordinates: [
  //           89.81667, 55.31667],

  //   name: "Ужур",
  //   population: 16079,

  // },
  // {
  //   coordinates: [
  //           38.1600833, 53.9791417],

  //   name: "Узловая",
  //   population: 55282,

  // },
  // {
  //   coordinates: [
  //           107.61667, 51.83333],

  //   name: "Улан-Удэ",
  //   population: 431922,

  // },
  // {
  //   coordinates: [
  //           48.36667, 54.31667],

  //   name: "Ульяновск",
  //   population: 613793,

  // },
  // {
  //   coordinates: [
  //           32.68333, 52.85],

  //   name: "Унеча",
  //   population: 26196,

  // },
  // {
  //   coordinates: [
  //           64.78333, 60.13333],

  //   name: "Урай",
  //   population: 39435,

  // },
  // {
  //   coordinates: [
  //           45.78333, 57.46667],

  //   name: "Урень",
  //   population: 12311,

  // },
  // {
  //   coordinates: [
  //           50, 57.11667],

  //   name: "Уржум",
  //   population: 10213,

  // },
  // {
  //   coordinates: [
  //           45.54167, 43.129123],

  //   name: "Урус-Мартан",
  //   population: 49071,

  // },
  // {
  //   coordinates: [
  //           42.01667, 50.8],

  //   name: "Урюпинск",
  //   population: 41594,

  // },
  // {
  //   coordinates: [
  //           57.557139, 65.995028],

  //   name: "Усинск",
  //   population: 41100,

  // },
  // {
  //   coordinates: [
  //           39.73333, 52.05],

  //   name: "Усмань",
  //   population: 18752,

  // },
  // {
  //   coordinates: [
  //           103.65, 52.75],

  //   name: "Усолье-Сибирское",
  //   population: 83364,

  // },
  // {
  //   coordinates: [
  //           56.68333, 59.41667],

  //   name: "Усолье",
  //   population: 5694,

  // },
  // {
  //   coordinates: [
  //           131.95, 43.8],

  //   name: "Уссурийск",
  //   population: 157946,

  // },
  // {
  //   coordinates: [
  //           41.97194, 44.08611],

  //   name: "Усть-Джегута",
  //   population: 30602,

  // },
  // {
  //   coordinates: [
  //           102.66667, 58],

  //   name: "Усть-Илимск",
  //   population: 86591,

  // },
  // {
  //   coordinates: [
  //           58.16667, 54.93333],

  //   name: "Усть-Катав",
  //   population: 23586,

  // },
  // {
  //   coordinates: [
  //           105.83333, 56.8],

  //   name: "Усть-Кут",
  //   population: 45061,

  // },
  // {
  //   coordinates: [
  //           39.68944, 45.21528],

  //   name: "Усть-Лабинск",
  //   population: 43268,

  // },
  // {
  //   coordinates: [
  //           36.43333, 58.83333],

  //   name: "Устюжна",
  //   population: 9478,

  // },
  // {
  //   coordinates: [
  //           55.96667, 54.73333],

  //   name: "Уфа",
  //   population: 1125933,

  // },
  // {
  //   coordinates: [
  //           53.7, 63.56667],

  //   name: "Ухта",
  //   population: 99642,

  // },
  // {
  //   coordinates: [
  //           59.38333, 54.31667],

  //   name: "Учалы",
  //   population: 37771,

  // },
  // {
  //   coordinates: [
  //           94.31667, 55.81667],

  //   name: "Уяр",
  //   population: 12666,

  // },
  // {
  //   coordinates: [
  //           35.85889, 52.08944],

  //   name: "Фатеж",
  //   population: 5404,

  // },
  // {
  //   coordinates: [
  //           35.37917, 45.04889],

  //   name: "Феодосия",
  //   population: 69038,

  // },
  // {
  //   coordinates: [
  //           34.41667, 53.45],

  //   name: "Фокино",
  //   population: 13874,

  // },
  // {
  //   coordinates: [
  //           132.4, 42.96667],

  //   name: "Фокино",
  //   population: 23683,

  // },
  // {
  //   coordinates: [
  //           43.65, 49.76667],

  //   name: "Фролово",
  //   population: 39489,

  // },
  // {
  //   coordinates: [
  //           38.05, 55.95],

  //   name: "Фрязино",
  //   population: 55449,

  // },
  // {
  //   coordinates: [
  //           41.1, 57.25],

  //   name: "Фурманов",
  //   population: 36149,

  // },
  // {
  //   coordinates: [
  //           135.06667, 48.48333],

  //   name: "Хабаровск",
  //   population: 577668,

  // },
  // {
  //   coordinates: [
  //           39.53722, 44.42389],

  //   name: "Хадыженск",
  //   population: 21580,

  // },
  // {
  //   coordinates: [
  //           69, 61],

  //   name: "Ханты-Мансийск",
  //   population: 79410,

  // },
  // {
  //   coordinates: [
  //           47.25, 47.4],

  //   name: "Харабали",
  //   population: 18209,

  // },
  // {
  //   coordinates: [
  //           40.2, 59.95],

  //   name: "Харовск",
  //   population: 10078,

  // },
  // {
  //   coordinates: [
  //           46.58333, 43.25],

  //   name: "Хасавюрт",
  //   population: 133929,

  // },
  // {
  //   coordinates: [
  //           48.1, 52.48333],

  //   name: "Хвалынск",
  //   population: 13199,

  // },
  // {
  //   coordinates: [
  //           110.45, 51.35],

  //   name: "Хилок",
  //   population: 11530,

  // },
  // {
  //   coordinates: [
  //           37.445, 55.88917],

  //   name: "Химки",
  //   population: 207125,

  // },
  // {
  //   coordinates: [
  //           31.18333, 57.15],

  //   name: "Холм",
  //   population: 3829,

  // },
  // {
  //   coordinates: [
  //           142.04306, 47.04028],

  //   name: "Холмск",
  //   population: 30936,

  // },
  // {
  //   coordinates: [
  //           37.98333, 56.25],

  //   name: "Хотьково",
  //   population: 21612,

  // },
  // {
  //   coordinates: [
  //           47.48333, 55.86667],

  //   name: "Цивильск",
  //   population: 13478,

  // },
  // {
  //   coordinates: [
  //           42.09472, 47.64667],

  //   name: "Цимлянск",
  //   population: 15029,

  // },
  // {
  //   coordinates: [
  //           128.121175, 51.7602528],

  //   name: "Циолковский",
  //   population: 6208,

  // },
  // {
  //   coordinates: [
  //           91.56667, 51.28333],

  //   name: "Чадан",
  //   population: 9037,

  // },
  // {
  //   coordinates: [
  //           54.11667, 56.76667],

  //   name: "Чайковский",
  //   population: 82933,

  // },
  // {
  //   coordinates: [
  //           49.71667, 52.98333],

  //   name: "Чапаевск",
  //   population: 72689,

  // },
  // {
  //   coordinates: [
  //           39.96667, 53.24167],

  //   name: "Чаплыгин",
  //   population: 12656,

  // },
  // {
  //   coordinates: [
  //           60.37, 54.97778],

  //   name: "Чебаркуль",
  //   population: 43405,

  // },
  // {
  //   coordinates: [
  //           47.23333, 56.11667],

  //   name: "Чебоксары",
  //   population: 447929,

  // },
  // {
  //   coordinates: [
  //           43.583325, 43.566657],

  //   name: "Чегем",
  //   population: 17988,

  // },
  // {
  //   coordinates: [
  //           36.25, 54.1],

  //   name: "Чекалин",
  //   population: 994,

  // },
  {
    coordinates: [61.40306, 55.16222],

    name: "Челябинск",
    population: 1187960,
  },
  // {
  //   coordinates: [
  //           56.48333, 60.4],

  //   name: "Чердынь",
  //   population: 4920,

  // },
  // {
  //   coordinates: [
  //           103.06667, 53.15],

  //   name: "Черемхово",
  //   population: 52650,

  // },
  // {
  //   coordinates: [
  //           83.36667, 54.21667],

  //   name: "Черепаново",
  //   population: 19346,

  // },
  // {
  //   coordinates: [
  //           37.9, 59.11667],

  //   name: "Череповец",
  //   population: 312311,

  // },
  // {
  //   coordinates: [
  //           42.04431, 44.213888],

  //   name: "Черкесск",
  //   population: 121439,

  // },
  // {
  //   coordinates: [
  //           38.38972, 56.01472],

  //   name: "Черноголовка",
  //   population: 20986,

  // },
  // {
  //   coordinates: [
  //           91.28333, 53.81667],

  //   name: "Черногорск",
  //   population: 72117,

  // },
  // {
  //   coordinates: [
  //           56.08333, 56.5],

  //   name: "Чернушка",
  //   population: 33275,

  // },
  // {
  //   coordinates: [
  //           21.81667, 54.63333],

  //   name: "Черняховск",
  //   population: 40464,

  // },
  // {
  //   coordinates: [
  //           37.45556, 55.145],

  //   name: "Чехов",
  //   population: 60677,

  // },
  // {
  //   coordinates: [
  //           50.63333, 55.36667],

  //   name: "Чистополь",
  //   population: 60703,

  // },
  // {
  //   coordinates: [
  //           113.5, 52.03333],

  //   name: "Чита",
  //   population: 323964,

  // },
  // {
  //   coordinates: [
  //           43.25, 56.76667],

  //   name: "Чкаловск",
  //   population: 12371,

  // },
  // {
  //   coordinates: [
  //           31.65917, 59.12806],

  //   name: "Чудово",
  //   population: 16148,

  // },
  // {
  //   coordinates: [
  //           80.96667, 55.1],

  //   name: "Чулым",
  //   population: 11964,

  // },
  // {
  //   coordinates: [
  //           57.81667, 58.28333],

  //   name: "Чусовой",
  //   population: 46740,

  // },
  // {
  //   coordinates: [
  //           42.7, 58.75],

  //   name: "Чухлома",
  //   population: 5209,

  // },
  // {
  //   coordinates: [
  //           56.15, 58.78333],

  //   name: "Чёрмоз",
  //   population: 4017,

  // },
  // {
  //   coordinates: [
  //           92.9, 51.53333],

  //   name: "Шагонар",
  //   population: 10958,

  // },
  // {
  //   coordinates: [
  //           63.63333, 56.08333],

  //   name: "Шадринск",
  //   population: 77744,

  // },
  // {
  //   coordinates: [
  //           45.903847, 43.145],

  //   name: "Шали",
  //   population: 47715,

  // },
  // {
  //   coordinates: [
  //           89.2, 55.525],

  //   name: "Шарыпово",
  //   population: 38570,

  // },
  // {
  //   coordinates: [
  //           45.5, 58.36667],

  //   name: "Шарья",
  //   population: 23668,

  // },
  // {
  //   coordinates: [
  //           39.5446333, 55.5776722],

  //   name: "Шатура",
  //   population: 32836,

  // },
  // {
  //   coordinates: [
  //           40.2083694, 47.7122111],

  //   name: "Шахты",
  //   population: 240152,

  // },
  // {
  //   coordinates: [
  //           46.62083, 57.67472],

  //   name: "Шахунья",
  //   population: 21337,

  // },
  // {
  //   coordinates: [
  //           41.7, 54.03333],

  //   name: "Шацк",
  //   population: 6562,

  // },
  // {
  //   coordinates: [
  //           36.89694, 50.40778],

  //   name: "Шебекино",
  //   population: 44277,

  // },
  // {
  //   coordinates: [
  //           104.1, 52.2],

  //   name: "Шелехов",
  //   population: 47960,

  // },
  // {
  //   coordinates: [
  //           42.9, 62.1],

  //   name: "Шенкурск",
  //   population: 5702,

  // },
  // {
  //   coordinates: [
  //           116.03333, 51.85],

  //   name: "Шилка",
  //   population: 13947,

  // },
  // {
  //   coordinates: [
  //           127.66667, 52],

  //   name: "Шимановск",
  //   population: 19815,

  // },
  // {
  //   coordinates: [
  //           47.199229, 52.1137809],

  //   name: "Шиханы",
  //   population: 6067,

  // },
  // {
  //   coordinates: [
  //           31.034754, 59.944959],

  //   name: "Шлиссельбург",
  //   population: 13305,

  // },
  // {
  //   coordinates: [
  //           46.41667, 55.5],

  //   name: "Шумерля",
  //   population: 33412,

  // },
  // {
  //   coordinates: [
  //           63.28333, 55.23333],

  //   name: "Шумиха",
  //   population: 17821,

  // },
  // {
  //   coordinates: [
  //           41.36667, 56.85],

  //   name: "Шуя",
  //   population: 58528,

  // },
  // {
  //   coordinates: [
  //           36.90306, 51.88111],

  //   name: "Щигры",
  //   population: 17043,

  // },
  // {
  //   coordinates: [
  //           62.76667, 55.21667],

  //   name: "Щучье",
  //   population: 10971,

  // },
  // {
  //   coordinates: [
  //           37.51667, 54],

  //   name: "Щёкино",
  //   population: 58154,

  // },
  // {
  //   coordinates: [
  //           35.81861, 45.42361],

  //   name: "Щёлкино",
  //   population: 10620,

  // },
  // {
  //   coordinates: [
  //           38, 55.91667],

  //   name: "Щёлково",
  //   population: 110380,

  // },
  // {
  //   coordinates: [
  //           38.78333, 55.88333],

  //   name: "Электрогорск",
  //   population: 22120,

  // },
  // {
  //   coordinates: [
  //           38.45, 55.8],

  //   name: "Электросталь",
  //   population: 155324,

  // },
  // {
  //   coordinates: [
  //           38.21667, 55.71667],

  //   name: "Электроугли",
  //   population: 20120,

  // },
  // {
  //   coordinates: [
  //           44.26667, 46.31667],

  //   name: "Элиста",
  //   population: 103728,

  // },
  // {
  //   coordinates: [
  //           46.11667, 51.46667],

  //   name: "Энгельс",
  //   population: 202838,

  // },
  // {
  //   coordinates: [
  //           40.8, 51.83333],

  //   name: "Эртиль",
  //   population: 11387,

  // },
  // {
  //   coordinates: [
  //           63.35, 61.31667],

  //   name: "Югорск",
  //   population: 34066,

  // },
  // {
  //   coordinates: [
  //           42.01667, 56.58333],

  //   name: "Южа",
  //   population: 14170,

  // },
  // {
  //   coordinates: [
  //           142.73333, 46.95],

  //   name: "Южно-Сахалинск",
  //   population: 181727,

  // },
  // {
  //   coordinates: [
  //           45.65, 44.66667],

  //   name: "Южно-Сухокумск",
  //   population: 10048,

  // },
  // {
  //   coordinates: [
  //           61.25, 54.45],

  //   name: "Южноуральск",
  //   population: 37890,

  // },
  // {
  //   coordinates: [
  //           84.9, 55.73333],

  //   name: "Юрга",
  //   population: 81536,

  // },
  // {
  //   coordinates: [
  //           39.68333, 56.5],

  //   name: "Юрьев-Польский",
  //   population: 19588,

  // },
  // {
  //   coordinates: [
  //           43.1, 57.31667],

  //   name: "Юрьевец",
  //   population: 10205,

  // },
  // {
  //   coordinates: [
  //           58.43333, 54.86667],

  //   name: "Юрюзань",
  //   population: 12568,

  // },
  // {
  //   coordinates: [
  //           35.23333, 54.75],

  //   name: "Юхнов",
  //   population: 7056,

  // },
  // {
  //   coordinates: [
  //           46.2, 55.95],

  //   name: "Ядрин",
  //   population: 9614,

  // },
  // {
  //   coordinates: [
  //           129.73194, 62.02722],

  //   name: "Якутск",
  //   population: 269486,

  // },
  // {
  //   coordinates: [
  //           34.15528, 44.49944],

  //   name: "Ялта",
  //   population: 76746,

  // },
  // {
  //   coordinates: [
  //           66.3, 56.65],

  //   name: "Ялуторовск",
  //   population: 36494,

  // },
  // {
  //   coordinates: [
  //           54.93333, 56.26667],

  //   name: "Янаул",
  //   population: 26988,

  // },
  // {
  //   coordinates: [
  //           47.868806, 57.303306],

  //   name: "Яранск",
  //   population: 17252,

  // },
  // {
  //   coordinates: [
  //           78.58333, 52.93333],

  //   name: "Яровое",
  //   population: 18085,

  // },
  // {
  //   coordinates: [
  //           39.85, 57.61667],

  //   name: "Ярославль",
  //   population: 591486,

  // },
  // {
  //   coordinates: [
  //           32.68333, 55.06667],

  //   name: "Ярцево",
  //   population: 47853,

  // },
  // {
  //   coordinates: [
  //           37.6933556, 54.4793833],

  //   name: "Ясногорск",
  //   population: 16804,

  // },
  // {
  //   coordinates: [
  //           59.86667, 51.03333],

  //   name: "Ясный",
  //   population: 16082,

  // },
  // {
  //   coordinates: [
  //           37.48333, 56.28333],

  //   name: "Яхрома",
  //   population: 13248,

  // }
];

export default CITIES;
