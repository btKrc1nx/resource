/*by Karcyril*/


var ap = new APlayer({
  element: document.getElementById('aplayer'),         // Optional, player element
  narrow: false,         // Optional, narrow style
  autoplay: true,              // Optional, autoplay song(s), not supported by mobile browsers
  showlrc: 0,     // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
  mutex: false,                 // Optional, pause other players when this player playing
  theme: '#e6d0b2',          // Optional, theme color, default: #b7daff
  order: 'random',      // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
  preload: 'none',               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
  listmaxheight: '256px',      // Optional, max height of play list
  fixed: true,
  music: [{
    title: 'ロキ - (ROKI)',
    author: '鏡音リン/みきとP',
    url: 'http://music.163.com/song/media/outer/url?id=546724682',
    pic: 'http://p2.music.126.net/scCoTzSWV14xl_9ZGecCQA==/109951164192574921.jpg?param=130y130',
  },{
    title: 'えれくとりっく',
    author: '初音ミク/ヤスオP',
    url: 'http://music.163.com/song/media/outer/url?id=22677533',
    pic: 'http://p2.music.126.net/byXQIhAT-iS6xd6icx8EiA==/560750930187412.jpg?param=130y130',
  },{
    title: 'トルコ行進曲',
    author: '96猫',
    url: 'http://music.163.com/song/media/outer/url?id=28403160',
    pic: 'http://p1.music.126.net/vrOG0hAhslI4djtZdMgE6g==/6044015418094303.jpg?param=130y130',
  },{
    title: 'Conqueror',
    author: 'IA / Sendra',
    url: 'http://music.163.com/song/media/outer/url?id=551337683',
    pic: 'http://p2.music.126.net/PZSATAuqF4Uk9JAzgStp4Q==/109951163244804271.jpg?param=130y130',
  },{
    title: 'ちるちる',
    author: 'REOL',
    url: 'http://music.163.com/song/media/outer/url?id=436016476',
    pic: 'http://p2.music.126.net/cu1sEIDxXOJm5huZ3Wjs0Q==/18833534672880379.jpg?param=130y130',
  },{
    title: 'ふわふわ♪',
    author: '樹莓蛋奶酥',
    url: 'http://music.163.com/song/media/outer/url?id=440767322',
    pic: 'http://p1.music.126.net/9Tp9wWekfaBSimmba6ftLA==/109951165599339491.jpg?param=130y130',
  },{
    title: '热爱105°C的你',
    author: '早稻叽',
    url: 'http://music.163.com/song/media/outer/url?id=1853354153',
    pic: 'http://p2.music.126.net/0WoTZP423UPR1UCt-cY9Fg==/109951166087945459.jpg?param=130y130',
  },{
    title: '恋は渾沌の隷也',
    author: '後ろから這いより隊G',
    url: 'http://music.163.com/song/media/outer/url?id=31967343',
    pic: 'http://p2.music.126.net/IAMMhbg3RZ0boK9j3LQFfQ==/18788454697228143.jpg?param=130y130',
  },{
    title: '「交织together」',
    author: 'DMYoung / Hanser / 泠鸢yousa',
    url: 'http://music.163.com/song/media/outer/url?id=460478768',
    pic: 'http://p1.music.126.net/JBo0QEBpHlzUNpTd5P4zuw==/109951162861954189.jpg?param=130y130',
  },{
    title: 'カサネテク',
    author: 'Sakanya',
    url: 'http://music.163.com/song/media/outer/url?id=1490050203',
    pic: 'http://p2.music.126.net/jH2eR2gKvW5oDCe56UPVhA==/109951165415325309.jpg?param=130y130',
  },{
    title: '深海少女',
    author: '初音ミク',
    url: 'http://music.163.com/song/media/outer/url?id=31140699',
    pic: 'http://p2.music.126.net/8jr6ElaxvntFk8LkKM4j2A==/7880199836870994.jpg?param=130y130',
  },{
    title: '花月成双',
    author: '泠鸢yousa / 朽木素 / 魂喵喵',
    url: 'http://music.163.com/song/media/outer/url?id=1838510557',
    pic: 'http://p1.music.126.net/LhYYzZT-V_n4eNDNsOu0GQ==/109951165696869592.jpg?param=130y130',
  },{
    title: '永夜のパレード',
    author: 'ケーキ姫☆優海 / JUMA',
    url: 'http://music.163.com/song/media/outer/url?id=692193',
    pic: 'http://p1.music.126.net/_0EPPAiKLQqddTZ5eKSqBw==/109951163136011717.jpg?param=130y130',
  },{
    title: 'tutu',
    author: '鎖那',
    url: 'http://music.163.com/song/media/outer/url?id=1854628391',
    pic: 'http://p2.music.126.net/vQQham0ok6MLeY2GRIQNLA==/109951166101594087.jpg?param=130y130',
  },{
    title: '约会宣言',
    author: 'iKz / Hanser',
    url: 'http://music.163.com/song/media/outer/url?id=1358213099',
    pic: 'http://p2.music.126.net/25XBZMlTz8bZBq6N54ei4g==/109951163891882131.jpg?param=130y130',
  },{
    title: '勾指起誓',
    author: '泠鸢yousa',
    url: 'http://music.163.com/song/media/outer/url?id=1350160463',
    pic: 'http://p1.music.126.net/fxI_iAsaRU9M5ZGE-Pu7iw==/109951164479032071.jpg?param=130y130',
  },{
    title: '【洛天依】影子小姐',
    author: '著小生zoki / 洛天依',
    url: 'http://music.163.com/song/media/outer/url?id=1298762936',
    pic: 'http://p1.music.126.net/xJmb740nKXk8paKRHg7Yqg==/109951163440366031.jpg?param=130y130',
  },{
    title: '化身星海',
    author: '中国绊爱',
    url: 'http://music.163.com/song/media/outer/url?id=1458786291',
    pic: 'http://p2.music.126.net/vBe87gzZIypoBIfr1Vh3eA==/109951165096412870.jpg?param=130y130',
  },]
});

/*切换音频*/
//ap.list.switch(0);
//ap.play();