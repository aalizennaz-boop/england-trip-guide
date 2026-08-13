(() => {
  'use strict';

  const css = `
    .live-extra{margin:24px 0 32px;scroll-margin-top:90px}
    .live-title{margin:0 0 8px;font-size:26px;line-height:1.18}
    .live-lead{margin:0 0 18px;line-height:1.6;color:#3f4850}
    .live-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}
    .live-card{background:#fff;border:1px solid rgba(23,32,42,.12);border-radius:18px;padding:19px;box-shadow:0 8px 24px rgba(23,32,42,.055)}
    .live-card.wide{grid-column:1/-1}
    .live-card h3{margin:0 0 9px;font-size:20px;line-height:1.28}
    .live-card h4{margin:15px 0 6px;font-size:15px}
    .live-card p,.live-card li{line-height:1.55}
    .live-card p{margin:0 0 10px}
    .live-card ul,.live-card ol{margin:7px 0 10px;padding-left:20px}
    .live-kicker{font-size:11px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:#69727a;margin-bottom:7px}
    .live-route,.live-note{border-radius:12px;padding:11px 13px;margin:12px 0;font-size:14px;line-height:1.5}
    .live-route{background:#f4f2ec}.live-note{background:#fff6dc;border:1px solid #eadba9}
    .live-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}
    .live-actions a,.live-jump{display:inline-block;padding:9px 12px;border-radius:999px;text-decoration:none;font-size:13px;font-weight:700;border:1px solid rgba(23,32,42,.16);color:#17202a;background:#fff}
    .live-actions a:first-child,.live-jump{background:#17202a;color:#fff;border-color:#17202a}
    .live-jumps{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 20px}
    .live-subhead{margin:27px 0 12px;font-size:21px}
    .site-find-btn{margin-left:7px;padding:9px 13px;border-radius:999px;border:0;background:#17202a;color:#fff;font-weight:750;cursor:pointer}
    .search-count{font-size:12px;margin-left:8px;color:#69727a}
    @media(max-width:720px){.live-grid{grid-template-columns:1fr}.live-card.wide{grid-column:auto}.live-title{font-size:23px}.live-card{padding:16px}.site-find-btn{padding:8px 10px;margin-left:5px}}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const windsor = document.getElementById('windsor');
  if (windsor) {
    const head = windsor.querySelector('.section-head') || windsor.firstElementChild;
    if (head && !document.getElementById('windsor-live-jumps')) {
      const jumps = document.createElement('div');
      jumps.id = 'windsor-live-jumps';
      jumps.className = 'live-jumps';
      jumps.innerHTML = `<a class="live-jump" href="#bray-monkey">Bray + Monkey Island</a><a class="live-jump" href="#cookham-live">Cookham</a><a class="live-jump" href="#windsor-hidden-live">Легенды Windsor</a>`;
      head.insertAdjacentElement('afterend', jumps);
    }

    if (!document.getElementById('bray-monkey')) {
      const sec = document.createElement('div');
      sec.id = 'bray-monkey';
      sec.className = 'live-extra searchable';
      sec.dataset.search = 'bray monkey island floating spa boat лодка деревня темза 37 автобус fat duck hinds head waterside caldesi';
      sec.innerHTML = `<div class="live-kicker">Полдня из Windsor · прямой автобус №37</div><h2 class="live-title">Bray + Monkey Island: деревня на Темзе и остров с обезьянами</h2><p class="live-lead">Bray — тот случай, когда крошечная английская деревня оказывается интереснее многих городов: старые дома, церковь, тихая Темза и невероятная концентрация гастрономических адресов. Но для нашей поездки главный сюжет — пройти деревню насквозь и закончить на Monkey Island, частном острове посреди реки.</p><div class="live-grid">
      <article class="live-card wide searchable" data-search="bray route village hall church jesus hospital old mill lane monkey island"><div class="live-kicker">Маршрут внутри деревни · 2–3 км · 2–4 часа без ресторана</div><h3>Что делать после выхода из автобуса</h3><ol><li><strong>Bray Village Hall</strong> — выходите здесь из №37.</li><li>Идите по деревенской улице к <strong>St Michael’s Church</strong> и старой застройке.</li><li>Пройдите мимо <strong>The Hind’s Head</strong> и <strong>The Fat Duck</strong> — даже без брони интересно увидеть, как два знаменитых ресторана встроены в обычную деревню.</li><li>Загляните к <strong>Jesus Hospital</strong>, богадельне XVII века.</li><li>Дальше держите направление к Темзе и <strong>Old Mill Lane</strong>.</li><li>Оттуда идите к пешеходному мосту на <strong>Monkey Island Estate</strong>.</li></ol><div class="live-route"><strong>Из Windsor:</strong> автобус №37 напрямую до Bray Village Hall. Ориентир — около 30–35 минут. На ваши даты объезд Cookham поездке в Bray не мешает.</div><div class="live-actions"><a href="https://www.carouselbuses.co.uk/services/CSLB/37" target="_blank" rel="noopener">Автобус №37</a><a href="https://www.google.com/maps/dir/?api=1&origin=Windsor+Castle,+Windsor&destination=Bray+Village+Hall,+Bray,+Maidenhead&travelmode=transit" target="_blank" rel="noopener">Маршрут</a></div></article>
      <article class="live-card searchable" data-search="monkey island monkey room paintings de clermont 1738 fishing pavilion temple"><div class="live-kicker">1–2 часа · остров — территория отеля</div><h3>Monkey Island Estate: зачем вообще идти на остров</h3><p>Остров получил имя не из-за живых обезьян. Самая странная деталь спрятана в историческом павильоне: в <strong>Monkey Room</strong> сохранились французские росписи XVIII века, где обезьяны гребут, рыбачат и охотятся, пародируя человеческие занятия. Потолок завершили к 1738 году.</p><p>Сегодня остров занимает отель. Поэтому это не общественный парк, куда стоит просто прийти гулять: лучший формат — бронь напитка, еды, afternoon tea или спа, а затем небольшой круг по территории.</p><div class="live-route"><strong>Как попасть:</strong> от Bray идите к Monkey Island Lane; на остров ведёт пешеходный мост. От центра Bray ориентировочно 20–30 минут пешком.</div><div class="live-actions"><a href="https://www.monkeyislandestate.co.uk/" target="_blank" rel="noopener">Monkey Island Estate</a><a href="https://www.google.com/maps/dir/?api=1&origin=Bray+Village+Hall,+Bray,+Maidenhead&destination=Monkey+Island+Estate,+Bray,+Maidenhead&travelmode=walking" target="_blank" rel="noopener">Пешком</a></div></article>
      <article class="live-card searchable" data-search="floating spa monkey island spa water boat"><div class="live-kicker">По брони · на воде</div><h3>Floating Spa</h3><p>Спа расположен не просто «у реки», а на пришвартованном судне. Это одна из тех деталей, ради которых Monkey Island имеет смысл превратить из короткой прогулки в отдельный спокойный полдень.</p><div class="live-note"><strong>Бронь:</strong> нужна заранее. Цена зависит от процедуры; перед поездкой проверяем свободные слоты и текущий прайс.</div><div class="live-actions"><a href="https://www.monkeyislandestate.co.uk/pages/spa.html" target="_blank" rel="noopener">Floating Spa</a></div></article>
      <article class="live-card searchable" data-search="boat hire electric boat monkey island лодка аренда"><div class="live-kicker">От ≈ £100 за первый час · до 6 человек</div><h3>Электрическая лодка по Темзе</h3><p>Самый красивый способ завершить Bray — не возвращаться сразу к автобусу, а выйти на воду. У Monkey Island предлагают небольшие электрические лодки без капитана; ориентир цены — около £100 за первый час и около £70 за следующий.</p><div class="live-note">Наличие и цены меняются; бронировать лучше заранее, особенно в хорошую погоду.</div><div class="live-actions"><a href="https://www.monkeyislandestate.co.uk/" target="_blank" rel="noopener">Проверить лодки</a></div></article>
      <article class="live-card searchable" data-search="hinds head fat duck waterside inn caldesi restaurant bray food"><div class="live-kicker">Еда · от паба до высокой кухни</div><h3>Bray гастрономический</h3><p><strong>The Hind’s Head</strong> — исторический паб Heston Blumenthal: лучший вариант попробовать его кухню без многочасового спектакля The Fat Duck. <strong>The Fat Duck</strong> и <strong>The Waterside Inn</strong> — отдельные гастрономические события, куда едут ради самого ужина. <strong>Caldesi in Campagna</strong> — более расслабленный итальянский вариант.</p><div class="live-note">Для The Fat Duck и The Waterside Inn нужна предварительная бронь и отдельный вечер; для обычной прогулки по Bray я бы выбирала The Hind’s Head или оставляла еду на Monkey Island.</div><div class="live-actions"><a href="https://www.hindsheadbray.com/" target="_blank" rel="noopener">The Hind’s Head</a><a href="https://www.thefatduck.co.uk/" target="_blank" rel="noopener">The Fat Duck</a></div></article></div>`;
      windsor.appendChild(sec);
    }

    if (!document.getElementById('cookham-live')) {
      const sec = document.createElement('div');
      sec.id = 'cookham-live';
      sec.className = 'live-extra searchable';
      sec.dataset.search = 'cookham village heaven stanley spencer gallery holy trinity thames moor walk shuttle maidenhead 37';
      sec.innerHTML = `<div class="live-kicker">Отдельный полудневный выезд · 2,5–4 часа</div><h2 class="live-title">Cookham — «Village in Heaven» Stanley Spencer</h2><p class="live-lead">Cookham хорош не одной достопримечательностью, а ощущением, что деревня сама стала произведением искусства. Художник Stanley Spencer родился здесь и снова и снова переносил знакомые улицы, соседей, церковь и луга в свои картины. Поэтому после галереи обычная прогулка вдоль Темзы превращается в продолжение выставки.</p><div class="live-grid">
      <article class="live-card wide searchable" data-search="cookham route station high street stanley spencer holy trinity thames cookham moor"><div class="live-kicker">Пешком · около 1,5–3 миль в зависимости от круга</div><h3>Как пройти Cookham после приезда</h3><ol><li><strong>Cookham Station → High Street.</strong> Не спешите к реке: сама старая улица — часть удовольствия.</li><li><strong>Stanley Spencer Gallery.</strong> Маленькая галерея в бывшей методистской часовне; закладывайте 45–75 минут.</li><li><strong>Holy Trinity Church.</strong> Затем идите к церкви и старому ядру деревни.</li><li><strong>Берег Темзы.</strong> От церкви выходите к воде и идите вдоль реки.</li><li><strong>Cookham Moor.</strong> Если погода хорошая, сделайте петлю через луга перед возвращением.</li></ol><div class="live-route"><strong>Время:</strong> 2,5–4 часа. <strong>Цена:</strong> прогулка бесплатно; Stanley Spencer Gallery ориентировочно £9 для взрослого, до 18 лет с сопровождающим взрослым — бесплатно.</div><div class="live-actions"><a href="https://stanleyspencer.org.uk/visit/" target="_blank" rel="noopener">Stanley Spencer Gallery</a><a href="https://www.google.com/maps/search/?api=1&query=Cookham+Berkshire" target="_blank" rel="noopener">Карта Cookham</a></div></article>
      <article class="live-card searchable" data-search="cookham transport shuttle road closure pound 23 august maidenhead"><div class="live-kicker">Важно именно 12–20 августа 2026</div><h3>Как добираться в наши даты</h3><p>Из-за временного закрытия The Pound обычный №37 в период нашей поездки не проходит Cookham по стандартной схеме. Между Maidenhead Frascati Way и Cookham Railway Station работает отдельный шаттл примерно раз в час.</p><p>Поэтому для Cookham я бы не строила день вокруг прямого №37 из Windsor. Практичнее сначала добраться до Maidenhead, а уже там пересесть на шаттл или поезд до Cookham.</p><div class="live-actions"><a href="https://www.carouselbuses.co.uk/services/CSLB/37" target="_blank" rel="noopener">Проверить №37</a><a href="https://www.gwr.com/stations-and-destinations/stations/cookham" target="_blank" rel="noopener">GWR Cookham</a></div></article>
      <article class="live-card searchable" data-search="kenneth grahame wind in the willows cookham thames literary"><div class="live-kicker">Литературная деталь</div><h3>Темза как декорация к английской литературе</h3><p>Cookham и этот участок Темзы связаны с той самой речной Англией, из которой вырос мир <em>The Wind in the Willows</em>. Даже без специального маршрута берег здесь лучше воспринимать не как «ещё одну прогулку у воды», а как часть культурного пейзажа долины Темзы.</p></article></div>`;
      windsor.appendChild(sec);
    }

    if (!document.getElementById('windsor-hidden-live')) {
      const sec = document.createElement('div');
      sec.id = 'windsor-hidden-live';
      sec.className = 'live-extra searchable';
      sec.dataset.search = 'windsor legends hidden unusual herne hunter curfew tower sally port crooked house queen charlotte nell gwynne engine house last supper victoria street food oven rex non vietnamese 1423 dim sum';
      sec.innerHTML = `<div class="live-kicker">Windsor, который легко пропустить</div><h2 class="live-title">Городские легенды, тайные детали и локальная еда</h2><p class="live-lead">Не отдельный экскурсионный день, а второй слой города. Почти всё ниже можно встроить между замком, Eton и рекой без дополнительной логистики.</p><div class="live-grid">
      <article class="live-card searchable" data-search="crooked house queen charlotte old kings head nell gwynne engine house guildhall"><div class="live-kicker">25–40 минут · бесплатно</div><h3>Самый странный квартал вокруг Guildhall</h3><p>За парадным Castle Hill начинается Windsor, который гораздо интереснее сувенирных витрин: перекошенные деревянные дома, крошечные улицы и следы довольно непарадной городской истории.</p><ul><li><strong>Market Cross House / The Crooked House</strong> — знаменитый перекошенный дом XVIII века.</li><li><strong>Queen Charlotte Street</strong> — всего 51 ft 10 in, одна из самых коротких улиц Британии.</li><li><strong>The Old King’s Head</strong> — ищите табличку, связанную с приказом о казни Charles I.</li><li><strong>Burford House</strong> — местная история связывает дом с Nell Gwynne.</li><li><strong>Engine House</strong> — узкий проход и напоминание о старой городской пожарной службе.</li></ul><div class="live-route"><strong>Пешком:</strong> Henry VIII Gate → Guildhall → Crooked House → Queen Charlotte Street → Church Street → Church Lane. Меньше километра.</div><div class="live-actions"><a href="https://www.google.com/maps/search/?api=1&query=Market+Cross+House+Windsor" target="_blank" rel="noopener">Начать маршрут</a></div></article>
      <article class="live-card searchable" data-search="curfew tower sally port tunnel dungeon thames street"><div class="live-kicker">10–20 минут · бесплатно</div><h3>Curfew Tower и настоящий подземный выход</h3><p>Со стороны Thames Street в стене замка есть маленькое средневековое окно, освещающее <strong>sally port</strong> — подземный выход под High Street, задуманный как путь бегства во время осады. Рядом — Curfew Tower с гораздо более мрачной историей тюрьмы и наказаний.</p><div class="live-route"><strong>Как дойти:</strong> от Castle Hill спускайтесь по Thames Street вдоль западной стены замка — около 5 минут. Смотреть с улицы.</div><div class="live-actions"><a href="https://www.google.com/maps/search/?api=1&query=Curfew+Tower+Windsor" target="_blank" rel="noopener">Карта</a></div></article>
      <article class="live-card searchable" data-search="herne hunter ghost great park long walk legend"><div class="live-kicker">45–120 минут · бесплатно</div><h3>Herne the Hunter — призрак Windsor Great Park</h3><p>Главная местная легенда рассказывает о Herne the Hunter — рогатом охотнике, который появляется в Windsor Great Park. Знать эту историю стоит перед Long Walk: идеальная королевская перспектива сразу получает гораздо более тёмный фольклорный слой.</p><div class="live-route"><strong>Как дойти:</strong> через Park Street к началу Long Walk — 5–10 минут от замка.</div><div class="live-actions"><a href="https://www.google.com/maps/search/?api=1&query=The+Long+Walk+Windsor" target="_blank" rel="noopener">Long Walk</a></div></article>
      <article class="live-card searchable" data-search="last supper st john baptist church painting"><div class="live-kicker">15–25 минут · бесплатно</div><h3>«Тайная вечеря» в приходской церкви</h3><p>St John the Baptist легко пройти мимо. Внутри находится большая «Тайная вечеря» начала XVII века, связанная с придворным художником Francis de Cleyn. Это именно тот тип маленькой находки, который делает прогулку по Windsor менее очевидной.</p><div class="live-route"><strong>Как дойти:</strong> около 2 минут от Guildhall по High Street.</div><div class="live-actions"><a href="https://www.google.com/maps/search/?api=1&query=St+John+the+Baptist+Windsor" target="_blank" rel="noopener">Карта</a></div></article></div>
      <h3 class="live-subhead">Локальная быстрая еда вместо туристического паба</h3><div class="live-grid">
      <article class="live-card searchable" data-search="the oven lebanese manakeesh wraps windsor street food"><div class="live-kicker">Бюджетно · быстро</div><h3>The Oven</h3><p>Ливанские лепёшки, mana’eesh и wraps — хороший вариант, когда нужен настоящий обед на ходу, а не ещё один туристический паб. <strong>Ориентир £6–12.</strong></p><div class="live-actions"><a href="https://www.google.com/maps/search/?api=1&query=The+Oven+Windsor+Lebanese" target="_blank" rel="noopener">Карта</a></div></article>
      <article class="live-card searchable" data-search="1423 china kitchen dim sum chinese windsor"><div class="live-kicker">Китайская · ££</div><h3>1423 China Kitchen</h3><p>Для нашей компании интереснее обычной английской еды: dim sum и китайские блюда в историческом центре. Подходит как короткий полноценный обед между замком и рекой. <strong>Ориентир £15–30 на человека.</strong></p><div class="live-actions"><a href="https://www.google.com/maps/search/?api=1&query=1423+China+Kitchen+Windsor" target="_blank" rel="noopener">Карта</a></div></article>
      <article class="live-card searchable" data-search="rex artisan bakery windsor bakery pastries bread"><div class="live-kicker">Пекарня · £</div><h3>Rex Artisan Bakery</h3><p>Независимая пекарня для кофе, хорошего хлеба и выпечки. Лучше использовать как завтрак или перекус перед выездом. <strong>Ориентир £4–10.</strong></p><div class="live-actions"><a href="https://www.google.com/maps/search/?api=1&query=Rex+Artisan+Bakery+Windsor" target="_blank" rel="noopener">Карта</a></div></article>
      <article class="live-card searchable" data-search="non vietnamese windsor pho banh mi vietnam"><div class="live-kicker">Вьетнамская · £–££</div><h3>Nón</h3><p>Небольшой вьетнамский вариант — лёгкая еда, яркие вкусы и удобный формат для быстрого обеда. <strong>Ориентир £10–20.</strong></p><div class="live-actions"><a href="https://www.google.com/maps/search/?api=1&query=Non+Vietnamese+Windsor" target="_blank" rel="noopener">Карта</a></div></article></div>`;
      windsor.appendChild(sec);
    }
  }

  const bottomNav = document.querySelector('.bottom-nav');
  if (bottomNav) {
    const addNav = (href, label) => {
      if (!bottomNav.querySelector(`a[href="${href}"]`)) {
        const a = document.createElement('a'); a.href = href; a.textContent = label; bottomNav.appendChild(a);
      }
    };
    addNav('#bray-monkey', 'Bray');
    addNav('#cookham-live', 'Cookham');
  }

  const input = document.getElementById('globalSearch');
  const clear = document.getElementById('clearSearch');
  if (input) {
    let findBtn = document.getElementById('siteFindBtn');
    if (!findBtn) {
      findBtn = document.createElement('button');
      findBtn.id = 'siteFindBtn'; findBtn.type = 'button'; findBtn.className = 'site-find-btn'; findBtn.textContent = 'Найти';
      input.insertAdjacentElement('afterend', findBtn);
    }
    let count = document.getElementById('siteSearchCount');
    if (!count) {
      count = document.createElement('span'); count.id = 'siteSearchCount'; count.className = 'search-count'; findBtn.insertAdjacentElement('afterend', count);
    }
    const apply = (scrollFirst = false) => {
      const q = (input.value || '').trim().toLocaleLowerCase('ru-RU');
      const els = [...document.querySelectorAll('.searchable')];
      let hits = 0, first = null;
      for (const el of els) {
        const hay = `${el.dataset.search || ''} ${el.textContent || ''}`.toLocaleLowerCase('ru-RU');
        const ok = !q || hay.includes(q);
        el.classList.toggle('hidden-search', !ok);
        if (q && ok) { hits += 1; if (!first) first = el; }
      }
      count.textContent = q ? `Найдено: ${hits}` : '';
      if (scrollFirst && first) first.scrollIntoView({behavior:'smooth', block:'start'});
    };
    input.addEventListener('input', () => apply(false));
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); apply(true); } });
    findBtn.addEventListener('click', () => apply(true));
    if (clear) clear.addEventListener('click', () => { setTimeout(() => { input.value = ''; apply(false); input.focus(); }, 0); });
  }
})();