/* ==========================================================================
   СХЕМА ПРОЕКТА «МОМЕНТ» ДЛЯ ЯДРА ПАНЕЛИ (panel-core.js).

   Ядро одинаковое во всех витринах и про формат data.js ничего не знает.
   Здесь сказано только: какие у карточки поля и как разложить общий вид
   обратно в файл, который читает сайт: SITE / CATEGORIES / OFFERS.

   Порядок полей карточки = порядок полей в форме панели.
   ========================================================================== */

window.ADMIN = {
  brand: 'МОМЕНТ',
  dataFile: 'data.js',
  draftKey: 'moment_admin_draft',
  preview: 'index.html?draft=1',

  /* Ссылки партнёрок приходят без erid — маркировку печатаем только если
     она реально есть в ссылке, выдумывать её нельзя. */
  requireErid: false,

  /* Блок «Логотип»: либо готовый файл, либо цветная плашка с инициалами.
     Цвет плашки сайт при необходимости затемняет сам, так что испортить
     контраст через панель невозможно. */
  logo: true,

  /* Карточка на сайте белая — от неё ядро считает контраст плашки. */
  surface: '#FFFFFF',
  defaultTone: { bg: '#1F3FD8', ink: '#FFFFFF' },

  /* Готовые логотипы из img/logos. Список шире каталога нарочно: когда
     добавите дебетовые и кредитные карты, логотип банка уже будет под рукой.
     Своя картинка грузится кнопкой «Выбрать файл…» в карточке. */
  presets: [
    { label: 'МФО и займы', items: [
      { name: 'А-Деньги', value: 'img/logos/adengi.png' },
      { name: 'Быстроденьги', value: 'img/logos/bistrodengi.png' },
      { name: 'Деньги на дом', value: 'img/logos/denginadom.png' },
      { name: 'Деньги сразу', value: 'img/logos/dengisrazu.png' },
      { name: 'До зарплаты', value: 'img/logos/dozarplati.png' },
      { name: 'Займер', value: 'img/logos/zaymer.png' },
      { name: 'Лайм-Займ', value: 'img/logos/limezaim.png' },
      { name: 'МигКредит', value: 'img/logos/migcredit.png' },
      { name: 'Надо денег', value: 'img/logos/nadodeneg.svg' },
      { name: 'Привет, сосед', value: 'img/logos/privet-sosed.png' },
      { name: 'Свои люди', value: 'img/logos/svoiludi.png' },
      { name: 'СМС Финанс', value: 'img/logos/smsfinance.png' },
      { name: 'Срочно деньги', value: 'img/logos/srochnodengi.png' },
      { name: 'Турбозайм', value: 'img/logos/turbozaim.png' },
      { name: 'Умные наличные', value: 'img/logos/umnye-nalichnye.png' },
      { name: 'Центрофинанс', value: 'img/logos/centrofinans.png' },
      { name: 'JoyMoney', value: 'img/logos/joymoney.png' },
      { name: 'Max.Credit', value: 'img/logos/maxcredit.png' },
      { name: 'MoneyMan', value: 'img/logos/moneyman.png' },
      { name: 'OneClickMoney', value: 'img/logos/oneclickmoney.png' },
      { name: 'Platiza', value: 'img/logos/platiza.png' },
      { name: 'Rocketman', value: 'img/logos/rocketman.png' },
      { name: 'Webbankir', value: 'img/logos/webbankir.png' },
      { name: 'Zaymigo', value: 'img/logos/zaymigo.png' }
    ] },
    { label: 'Банки (для карт)', items: [
      { name: 'АК Барс Банк', value: 'img/logos/akbars.png' },
      { name: 'Альфа-Банк', value: 'img/logos/alfabank.png' },
      { name: 'Банк Санкт-Петербург', value: 'img/logos/bspb.png' },
      { name: 'ВТБ', value: 'img/logos/vtb.png' },
      { name: 'Газпромбанк', value: 'img/logos/gazprombank.png' },
      { name: 'Зенит Банк', value: 'img/logos/zenit.png' },
      { name: 'Кредит Европа Банк', value: 'img/logos/crediteurope.svg' },
      { name: 'МТС Банк', value: 'img/logos/mtsbank.png' },
      { name: 'Модульбанк', value: 'img/logos/modulbank.png' },
      { name: 'ОТП Банк', value: 'img/logos/otp.png' },
      { name: 'Почта Банк', value: 'img/logos/pochtabank.png' },
      { name: 'ПСБ', value: 'img/logos/psb.png' },
      { name: 'Райффайзен Банк', value: 'img/logos/raiffeisen.png' },
      { name: 'Ренессанс Банк', value: 'img/logos/rencredit.png' },
      { name: 'Россельхозбанк', value: 'img/logos/rshb.png' },
      { name: 'Русский Стандарт', value: 'img/logos/rsb.png' },
      { name: 'Сбербанк', value: 'img/logos/sberbank.png' },
      { name: 'Совкомбанк', value: 'img/logos/sovcombank.png' },
      { name: 'Совкомбанк Халва', value: 'img/logos/halva.png' },
      { name: 'Т-Банк', value: 'img/logos/tbank.png' },
      { name: 'УБРиР', value: 'img/logos/ubrir.png' },
      { name: 'Уралсиб', value: 'img/logos/uralsib.png' },
      { name: 'Фора-Банк', value: 'img/logos/forabank.svg' },
      { name: 'Хоум Банк', value: 'img/logos/homecredit.png' },
      { name: 'Kviku', value: 'img/logos/kviku.png' },
      { name: 'Ozon Банк', value: 'img/logos/ozon.png' }
    ] }
  ],

  /* Только то, что сайт действительно показывает. */
  site: [
    { key: 'brand',   label: 'Название сайта', required: true,
      hint: 'Стоит в шапке, в подвале и в заголовке вкладки браузера.' },
    { key: 'tagline', label: 'Строка над заголовком',
      hint: 'Мелкая строка с точкой на первом экране: «24 микрофинансовые организации в одном списке».' },
    { key: 'lead',    label: 'Абзац под заголовком', type: 'textarea',
      hint: 'Два-три предложения о том, что человек получит на сайте.' },
    { key: 'updated', label: 'Дата обновления условий',
      hint: 'Печатается в подвале: «Условия проверены 14.09.2026».' }
  ],

  groups: [
    { key: 'title', label: 'Название раздела', required: true,
      hint: 'У карт — заголовок блока на сайте и пункт в меню. У первого раздела (займы) на сайте свой заголовок «Каталог займов», это название видно только здесь.' },
    { key: 'cta',   label: 'Надпись на кнопках', required: true,
      hint: 'Одна на все карточки раздела: «Получить деньги», «Оформить карту».' },
    { key: 'sub',   label: 'Подзаголовок раздела', textarea: true,
      hint: 'Одно-два предложения под заголовком. У первого раздела (займы) не печатается — там свой текст.' },
    { key: 's1', label: 'Подпись 1-й строки карточки',
      hint: 'Крупная строка. У займов — «Сумма», у карт — «Выгода» или «Кешбэк». Пусто — подставится само.' },
    { key: 's2', label: 'Подпись 2-й строки', hint: 'У займов — «Ставка», у карт — «Оформление».' },
    { key: 's3', label: 'Подпись 3-й строки', hint: 'У займов — «Срок», у карт — «Получение».' },
    { key: 's4', label: 'Подпись 4-й строки', hint: 'Обычно «Возраст». Строка видна, только если в карточке она заполнена.' }
  ],

  card: [
    { key: 'partner', label: 'Компания', required: true,
      hint: 'Крупная надпись рядом с логотипом: «Займер», «MoneyMan».' },
    { key: 'tag',     label: 'Тип продукта',
      hint: 'Мелкая подпись под названием: «микрозайм», «дебетовая карта».' },
    { key: 'sum',     label: 'Строка 1: сумма / выгода', required: true,
      hint: 'Крупная строка на карточке. У займа — сумма, сайт берёт из неё последнее число для ползунка: «до 100 000 ₽» → 100 000. У карты — главная выгода: «Кешбэк рублями».' },
    { key: 'rate',    label: 'Строка 2: ставка / оформление', required: true,
      hint: 'У займа — «0% первый займ» или «до 0,8% в день» (с «0%» карточка попадает в фильтр «Первый займ 0%»). У карты — «онлайн за пару минут».' },
    { key: 'term',    label: 'Строка 3: срок / получение', required: true,
      hint: 'У займа — «7–30 дней», последнее число работает ползунком «Срок». У карты — «курьером или в отделении».' },
    { key: 'age',     label: 'Строка 4: возраст', hint: 'Например «от 18 лет». Пусто — строки на карточке не будет.' },
    { key: 'note',    label: 'Описание', type: 'textarea',
      hint: 'Одно-два предложения о компании. Видно под условиями.' },
    { key: 'badges',  label: 'Плашки', type: 'lines',
      hint: 'По одной в строке: «Первый займ 0%», «Круглосуточно». Ими же работают кнопки-фильтры над каталогом.' },
    { key: 'url',     label: 'Партнёрская ссылка', type: 'url',
      hint: 'Вставьте ссылку из партнёрки целиком, вместе с метками и erid. Пока пусто — вместо кнопки на карточке стоит надпись «Скоро».' }
  ],

  /* ---------------------------------------------- чтение --------------- */

  load: function () {
    var groups = CATEGORIES.map(function (c) {
      var sp = c.specs || [];
      return { key: c.id, title: c.label, cta: c.cta, sub: c.sub || '',
               s1: sp[0] || '', s2: sp[1] || '', s3: sp[2] || '', s4: sp[3] || '' };
    });

    var seen = {};
    var cards = OFFERS.map(function (o, i) {
      /* Устойчивый ключ: в файле его нет, а ядру он нужен, чтобы не путать
         карточки при перестановке. Считаем от названия компании. */
      var base = String(o.partner || '').toLowerCase()
        .replace(/[^a-zа-я0-9]+/gi, '-').replace(/^-|-$/g, '').slice(0, 40) || ('c' + i);
      var uid = base, n = 2;
      while (seen[uid]) uid = base + '-' + (n++);
      seen[uid] = true;

      return {
        uid: uid,
        group: o.cat,
        hidden: !!o.hidden,
        partner: o.partner || '',
        tag: o.tag || '',
        sum: o.sum || '',
        rate: o.rate || '',
        term: o.term || '',
        age: o.age || '',
        note: o.note || '',
        badges: (o.badges || []).slice(),
        url: o.url || '',
        logo: o.logo || '',
        /* Цвета плашки читаем всегда: даже у карточки с логотипом они
           переживают круговорот, иначе следующее сохранение затрёт выбор. */
        tone: { bg: (o.tone && o.tone.bg) || '#1F3FD8', ink: (o.tone && o.tone.ink) || '#FFFFFF' }
      };
    });

    return {
      SITE: JSON.parse(JSON.stringify(SITE)),
      GROUPS: groups,
      CARDS: cards
    };
  },

  /* ---------------------------------------------- сборка файла --------- */

  build: function (m) {
    function js(v) { return JSON.stringify(v, null, 2); }
    function t(v) { return String(v == null ? '' : v).trim(); }

    var categories = m.GROUPS.map(function (g) {
      return { id: g.key, label: t(g.title), cta: t(g.cta) || 'Получить деньги',
               sub: t(g.sub), specs: [t(g.s1), t(g.s2), t(g.s3), t(g.s4)] };
    });

    var offers = m.CARDS.map(function (c) {
      var o = {
        cat: c.group,
        partner: t(c.partner),
        tag: t(c.tag),
        logo: t(c.logo),
        tone: { bg: t(c.tone && c.tone.bg) || '#1F3FD8', ink: t(c.tone && c.tone.ink) || '#FFFFFF' },
        sum: t(c.sum),
        rate: t(c.rate),
        term: t(c.term),
        age: t(c.age),
        note: t(c.note),
        badges: (c.badges || []).map(t).filter(Boolean),
        url: t(c.url)
      };
      if (c.hidden) o.hidden = true;
      return o;
    });

    return [
      '/* ═════════════════════════════════════════════════════════════════════════',
      '   КАТАЛОГ «МОМЕНТ» — единственный файл с предложениями.',
      '   Собран панелью ' + new Date().toLocaleString('ru-RU') + '.',
      '',
      '   Правится через panel.html. Руками тоже можно, но при следующем',
      '   сохранении из панели правки будут перезаписаны.',
      '',
      '   url    — партнёрская ссылка. Пусто — вместо кнопки надпись «Скоро».',
      '   sum    — сумма; последнее число в строке работает ползунком «Сумма».',
      '   term   — срок; последнее число — максимум дней.',
      '   badges — плашки на карточке, они же кнопки-фильтры над каталогом.',
      '   У карт те же поля: sum — главная выгода, rate — оформление,',
      '   term — получение; age можно оставить пустым.',
      '',
      '   ВАЖНО ПРО ЦИФРЫ: суммы, ставки и сроки ставьте только те, что',
      '   подтверждены вашей партнёркой. Цифра «на глаз» — недостоверная',
      '   реклама: партнёрка может снять оффер, а ФАС — оштрафовать.',
      '   ═════════════════════════════════════════════════════════════════════════ */',
      '',
      'const SITE = ' + js(m.SITE) + ';',
      '',
      '/* cta — надпись на кнопке карточек этого раздела.',
      '   specs — подписи строк карточки: к sum, rate, term, age по порядку.',
      '   Первый раздел — займы с подбором; остальные идут отдельными блоками ниже. */',
      'const CATEGORIES = ' + js(categories) + ';',
      '',
      'const OFFERS = ' + js(offers) + ';',
      ''
    ].join('\n');
  }
};
