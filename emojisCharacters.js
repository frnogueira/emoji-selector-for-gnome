/* http://unicode.org/emoji/charts/full-emoji-list.html */

let ALL = [
	[
		'😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
		'😋','😎','😍','😘','😗','😙','😚','☺','🙂','🤗',
		'🤩','🤔','🤨','😐','😑','😶','🙄','😏','😣','😥',
		'😮','🤐','😯','😪','😫','😴','😌','😛','😜','😝',
		'🤤','😒','😓','😔','😕','🙃','🤑','😲','☹','🙁',
		'😖','😞','😟','😤','😢','😭','😦','😧','😨','😩',
		'🤯','😬','😰','😱','😳','🤪','😵','😡','😠','🤬',
		'😷','🤒','🤕','🤢','🤮','🤧','😇','🤠','🤡','🤥',
		'🤫','🤭','🧐','🤓','😈','👿','👹','👺','💀','☠',
		'👻','👽','👾','🤖','💩','😺','😸','😹','😻','😼',
		'😽','🙀','😿','😾','🙈','🙉','🙊','👶',/*skins skipped*/'👦','👧',
		'👨','👩','👴','👵',/*'👨‍⚕️'etc.,*/'👮','🕵','💂','👷','🤴',
		'👸','👳','👲','🧕','👱','🤵','👰','🤰','👼','🎅',
		'🤶',/*skip*/'🙍','🙎','🙅','🙆','💁','🙋','🙇','🤦','🤷',
		'💆','💇','🚶','🏃','💃','🕺','👯',/**/'🛀','🛌','🕴',
		'🗣','👤','👥',
		//-----family
		'👫','👬','👭','💏','💑','👪',
		//-----body
		'🤳','💪',
		'👈','👉','☝','👆','🖕','👇','✌','🤞','🖖','🤘',
		'🤙','🖐','✋','👌','👍','👎','✊','👊','🤛','🤜',
		'🤚','👋','✍','👏','👐','🙌','🙏','🤝','💅','👂',
		'👃','👣','👀','👁','👁️‍🗨️','👅','👄',
		//-----clothing
		'👓','🕶','👔',
		'👕','👖','👗','👘','👙','👚','👛','👜','👝','🛍',
		'🎒','👞','👟','👠','👡','👢','👑','👒','🎩','🎓',
		'⛑','📿','💄','💍','💎'
	], [			
		//-----animal
		'🐵','🐒','🦍','🐶','🐕',
		'🐩','🐺','🦊','🐱','🐈','🦁','🐯','🐅','🐆','🐴',
		'🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖',
		'🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦒','🐘','🦏',
		'🐭','🐁','🐀','🐹','🐰','🐇','🐿','🦔','🦇','🐻',
		'🐨','🐼','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦',
		'🐧','🕊','🦅','🦆','🦉','🐸','🐊','🐢','🦎','🐍',
		'🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟','🐠','🐡',
		'🦈','🐙','🐚','🦀','🦐','🦑','🐌','🦋','🐛','🐜',
		'🐝','🐞','🦗','🕷','🕸','🦂',
		//-----plant
		'💐','🌸','💮','🏵',
		'🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴',
		'🌵','🌾','🌿','☘','🍀','🍁','🍂','🍃',
		//-----sky & weather
		'🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘',
		'🌙','🌚','🌛','🌜','🌡','☀','🌝','🌞','⭐','🌟',
		'🌠','☁','⛅','⛈','🌤','🌥','🌦','🌧','🌨','🌩',
		'🌪','🌫','🌬','🌀','🌈','🌂','☂','☔','⛱','⚡',
		'❄','☃','⛄','☄','🔥','💧','🌊'
	], [
		//-----food-fruit
		'🍇','🍈',
		'🍉','🍊','🍋','🍌','🍍','🍎','🍏','🍐','🍑','🍒',
		'🍓','🥝','🍅','🥥',
		//-----food-vegetable
		'🥑','🍆','🥔','🥕','🌽','🌶',
		'🥒','🥦','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥞',
		'🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪',
		'🌮','🌯','🥙','🥚','🍳','🥘','🍲','🥣','🥗','🍿',
		'🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢',
		'🍣','🍤','🍥','🍡','🥟','🥠','🥡','🍦','🍧','🍨',
		'🍩','🍪','🎂','🍰','🥧','🍫','🍬','🍭','🍮','🍯',
		//-----drink
		'🍼','🥛','☕','🍵','🍶','🍾','🍷','🍸','🍹','🍺',
		'🍻','🥂','🥃','🥤',
		//-----dishware
		'🥢','🍽','🍴','🥄','🔪','🏺'
	], [
		//-----place-map
		'🌍','🌎','🌏','🌐','🗺','🗾',
		//-----place-geographic
		'🏔','⛰','🌋','🗻',
		'🏕','🏖','🏜','🏝','🏞',
		//-----place-building
		'🏟','🏛','🏗','🏘','🏙',
		'🏚','🏠','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩',
		'🏪','🏫','🏬','🏭','🏯','🏰','💒','🗼','🗽','⛪',
		'🕌','🕍','⛩','🕋',
		//-----place-other
		'⛲','⛺','🌁','🌃','🌄','🌅',
		'🌆','🌇','🌉','♨','🌌','🎠','🎡','🎢','💈','🎪',
		'🎭','🖼','🎨','🎰',
		//-----transport-ground
		'🚂','🚃','🚄','🚅','🚆','🚇',
		'🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍','🚎','🚐',
		'🚑','🚒','🚓','🚔','🚕','🚖','🚗','🚘','🚙','🚚',
		'🚛','🚜','🚲','🛴','🛵','🚏','🛣','🛤','⛽','🚨',
		'🚥','🚦','🚧','🛑',
		//-----transport-water
		'⚓','⛵','🛶','🚤','🛳','⛴',
		'🛥','🚢',
		//-----transport-air
		'✈','🛩','🛫','🛬','💺','🚁','🚟','🚠',
		'🚡','🛰','🚀','🛸',
		//-----hotel
		'🛎','🚪','🛏','🛋','🚽','🚿',
		'🛁'
	], [
		//-----activities
		'🎃','🎄','🎆',
		'🎇','✨','🎈','🎉','🎊','🎋','🎍','🎎','🎏','🎐',
		'🎑','🎀','🎁','🎗','🎟','🎫',
		//-----
		'🎖','🏆','🏅','🥇',
		'🥈','🥉',
		//-----
		'⚽','⚾','🏀','🏐','🏈','🏉','🎾','🎱',
		'🎳','🏏','🏑','🏒','🏓','🏸','🥊','🥋','🥅','🎯',
		'⛳','⛸','🎣','🎽','🎿','🛷','🥌',
		//-----game
		'🎮','🕹','🎲',
		'♠','♥','♦','♣','🃏','🀄','🎴',
		//-----music
		'🎼','🎙',
		'🎚','🎛','🎤','🎧','📻','🎷','🎸','🎹','🎺','🎻',
		'🥁','📯',
		//-----person-sport
		'🤺','🏇','⛷','🏂','🏌','🏄','🚣',
		'🏊','⛹','🏋','🚴','🚵','🏎','🏍','🤸','🤼','🤽',
		'🤾','🤹'
	], [
		//-----Objects
		//-----phone & computer & video & light
		'📱','📲','☎','📞','📟','📠','🔋','🔌','💻',
		'🖥','🖨','⌨','🖱','🖲','💽','💾','💿','📀','🎥',
		'🎞','📽','🎬','📺','📷','📸','📹','📼','🔍','🔎',
		'🔬','🔭','📡','🕯','💡','🔦','🏮',
		//time			
		'⌛','⏳','⌚','⏰','⏱','⏲','🕰',
		//-----book & paper
		'📔','📕','📖',
		'📗','📘','📙','📚','📓','📒','📃','📜','📄','📰',
		'🗞','📑','🔖','🏷',
		//-----money
		'💰','💴','💵','💶','💷','💸',
		'💳','💹','💱','💲',
		//-----mail
		'✉','📧','📨','📩','📤','📥',
		'📦','📫','📪','📬','📭','📮','🗳',
		//-----writing
		'✏','✒','🖋',
		'🖊','🖌','🖍','📝',
		//-----office
		'💼','📁','📂','🗂','📅','📆',
		'🗒','🗓','📇','📈','📉','📊','📋','📌','📍','📎',
		'🖇','📏','📐','✂','🗃','🗄','🗑',
		//-----lock
		'🔒','🔓','🔏',
		'🔐','🔑','🗝',
		//-----tool
		'🔨','⛏','⚒','🛠','🗡','⚔','🔫',
		'🏹','🛡','🔧','🔩','⚙','🗜','⚗','⚖','🔗','⛓',
		//-----medical&other-object
		'💉','💊','🚬','⚰','⚱','🗿','🛢','🔮','🛒'
	], [
		//-----Symbols
		//-----emotion
		'💋','💘','❤',
		'💓','💔','💕','💖','💗','💙','💚','💛','💜','🖤',
		'💝','💞','💟','❣','💌','💤','💢','💣','💥','💦',
		'💨','💫','💬','🗨','🗯','💭','🕳',
		//music and sound
		'🎵','🎶',
		'🔇','🔈','🔉',
		'🔊','📢','📣','🔔','🔕',
		//-----
		'🏧',
		'🚮','🚰','♿','🚹','🚺','🚻','🚼','🚾','🛂','🛃',
		'🛄','🛅',
		//-----warning
		'⚠','🚸','⛔','🚫','🚳','🚭','🚯','🚱',
		'🚷','📵','🔞','☢','☣',
		//-----arrow
		'⬆','↗','➡','↘','⬇',
		'↙','⬅','↖','↕','↔','↩','↪','⤴','⤵','🔃',
		'🔄','🔙','🔚','🔛','🔜','🔝',
		//-----religion
		'🛐','⚛','🕉','✡',
		'☸','☯','✝','☦','☪','☮','🕎','🔯',
		//-----zodiac
		'♈','♉',
		'♊','♋','♌','♍','♎','♏','♐','♑','♒','♓',
		'⛎',
		//-----av-symbol
		'🔀','🔁','🔂','▶','⏩','⏭','⏯','◀','⏪',
		'⏮','🔼','⏫','🔽','⏬','⏸','⏹','⏺','⏏','🎦',
		'🔅','🔆','📶','📳','📴',
		//-----other-symbol
		'♀','♂','⚕','♻','⚜',
		'🔱','📛','🔰','⭕','✅','☑','✔','✖','❌','❎',
		'➕','➖','➗','➰','➿','〽','✳','✴','❇','‼',
		'⁉','❓','❔','❕','❗','〰','©','®','™',/*'#️⃣',
		'*️⃣','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣',
		'9️⃣','🔟',*/
		//-----alphanum
		'💯','🔠','🔡','🔢','🔣','🔤','🅰','🆎',
		'🅱','🆑','🆒','🆓','ℹ','🆔','Ⓜ','🆕','🆖','🅾',
		'🆗','🅿','🆘','🆙','🆚','🈁','🈂','🈷','🈶','🈯',
		'🉐','🈹','🈚','🈲','🉑','🈸','🈴','🈳','㊗','㊙',
		'🈺','🈵',
		//-----geometric
		'▪','▫','◻','◼','◽','◾','⬛','⬜',
		'🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔲','🔳',
		'⚪','⚫','🔴','🔵',
		//-----time
		'🕛','🕧',
		'🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠',
		'🕕','🕡','🕖','🕢','🕗','🕣','🕘','🕤','🕙','🕥',
		'🕚','🕦'
	], [
		//-----flags
		'🏁','🚩','🎌','🏴','🏳',/*'🏳️‍🌈',*/
		'🇦🇨','🇦🇩','🇦🇪','🇦🇫',
		'🇦🇬','🇦🇮','🇦🇱','🇦🇲','🇦🇴','🇦🇶','🇦🇷','🇦🇸','🇦🇹','🇦🇺',
		'🇦🇼','🇦🇽','🇦🇿','🇧🇦','🇧🇧','🇧🇩',	'🇧🇪','🇧🇫','🇧🇬','🇧🇭',
		'🇧🇮','🇧🇯','🇧🇱','🇧🇲','🇧🇳','🇧🇴','🇧🇶','🇧🇷','🇧🇸','🇧🇹',
		'🇧🇻','🇧🇼','🇧🇾','🇧🇿','🇨🇦','🇨🇨','🇨🇩','🇨🇫','🇨🇬','🇨🇭',
		'🇨🇮','🇨🇰','🇨🇱','🇨🇲','🇨🇳','🇨🇴',
		'🇨🇵','🇨🇷','🇨🇺','🇨🇻','🇨🇼','🇨🇽','🇨🇾','🇨🇿','🇩🇪','🇩🇬',
		'🇩🇯','🇩🇰','🇩🇲','🇩🇴','🇩🇿','🇪🇦','🇪🇨','🇪🇪','🇪🇬','🇪🇭',
		'🇪🇷','🇪🇸','🇪🇹','🇪🇺','🇫🇮','🇫🇯','🇫🇰','🇫🇲','🇫🇴','🇫🇷',
		'🇬🇦','🇬🇧','🇬🇩','🇬🇪','🇬🇫','🇬🇬','🇬🇭','🇬🇮','🇬🇱','🇬🇲',
		'🇬🇳','🇬🇵','🇬🇶','🇬🇷','🇬🇸','🇬🇹','🇬🇺','🇬🇼','🇬🇾','🇭🇰',
		'🇭🇲','🇭🇳','🇭🇷','🇭🇹','🇭🇺','🇮🇨','🇮🇩','🇮🇪','🇮🇱','🇮🇲',
		'🇮🇳','🇮🇴','🇮🇶','🇮🇷','🇮🇸','🇮🇹','🇯🇪','🇯🇲','🇯🇴','🇯🇵',
		'🇰🇪','🇰🇬','🇰🇭','🇰🇮','🇰🇲','🇰🇳','🇰🇵','🇰🇷','🇰🇼','🇰🇾',
		'🇰🇿','🇱🇦','🇱🇧','🇱🇨','🇱🇮','🇱🇰','🇱🇷','🇱🇸','🇱🇹','🇱🇺',
		'🇱🇻','🇱🇾','🇲🇦','🇲🇨','🇲🇩','🇲🇪','🇲🇫','🇲🇬','🇲🇭','🇲🇰',
		'🇲🇱','🇲🇲','🇲🇳','🇲🇴','🇲🇵','🇲🇶','🇲🇷','🇲🇸','🇲🇹','🇲🇺',
		'🇲🇻','🇲🇼','🇲🇽','🇲🇾','🇲🇿','🇳🇦','🇳🇨','🇳🇪','🇳🇫','🇳🇬',
		'🇳🇮','🇳🇱','🇳🇴','🇳🇵','🇳🇷','🇳🇺','🇳🇿','🇴🇲','🇵🇦','🇵🇪',
		'🇵🇫','🇵🇬','🇵🇭','🇵🇰','🇵🇱','🇵🇲','🇵🇳','🇵🇷','🇵🇸','🇵🇹',
		'🇵🇼','🇵🇾','🇶🇦','🇷🇪','🇷🇴','🇷🇸','🇷🇺','🇷🇼','🇸🇦','🇸🇧',
		'🇸🇨','🇸🇩','🇸🇪','🇸🇬','🇸🇭','🇸🇮','🇸🇯','🇸🇰','🇸🇱','🇸🇲',
		'🇸🇳','🇸🇴','🇸🇷','🇸🇸','🇸🇹','🇸🇻','🇸🇽','🇸🇾','🇸🇿','🇹🇦',
		'🇹🇨','🇹🇩','🇹🇫','🇹🇬','🇹🇭','🇹🇯','🇹🇰','🇹🇱','🇹🇲','🇹🇳',
		'🇹🇴','🇹🇷','🇹🇹','🇹🇻','🇹🇼','🇹🇿','🇺🇦','🇺🇬','🇺🇲',/*'🇺🇳',*/
		'🇺🇸','🇺🇾','🇺🇿','🇻🇦','🇻🇨','🇻🇪','🇻🇬','🇻🇮','🇻🇳','🇻🇺',
		'🇼🇫','🇼🇸','🇽🇰','🇾🇪','🇾🇹','🇿🇦','🇿🇲','🇿🇼'
	]
];

	

