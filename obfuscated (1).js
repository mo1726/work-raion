const _0x1f4561=_0x5e91;(function(_0x2f20e9,_0x33e8cf){const _0x24d35f=_0x5e91,_0x1926fd=_0x2f20e9();while(!![]){try{const _0x107a60=parseInt(_0x24d35f(0x177))/0x1+-parseInt(_0x24d35f(0x17a))/0x2*(-parseInt(_0x24d35f(0x14f))/0x3)+-parseInt(_0x24d35f(0x1bc))/0x4*(-parseInt(_0x24d35f(0x147))/0x5)+parseInt(_0x24d35f(0x132))/0x6+parseInt(_0x24d35f(0x134))/0x7+-parseInt(_0x24d35f(0x141))/0x8*(-parseInt(_0x24d35f(0x182))/0x9)+parseInt(_0x24d35f(0x19b))/0xa*(-parseInt(_0x24d35f(0x180))/0xb);if(_0x107a60===_0x33e8cf)break;else _0x1926fd['push'](_0x1926fd['shift']());}catch(_0x1e36bd){_0x1926fd['push'](_0x1926fd['shift']());}}}(_0x3db3,0xe9ae6));function _0x3db3(){const _0x14c0ed=['Iran','Switzerland','toUpperCase','Ukraine','3gWdKVL','Mali','Ghana','Cameroon','Uzbekistan','Belgium','United\x20Arab\x20Emirates','Malaysia','parse','Zambia','textContent','countries','Botswana','PointerEvent','Serbia','Czech\x20Republic','ctrlKey','Cyprus','key','Italy','El\x20Salvador','Trinidad\x20and\x20Tobago','Kenya','Russia','click','Kuwait','touchmove','imges','keydown','forEach','Nepal','mousedown','United\x20Kingdom','preventDefault','Thailand','South\x20Korea','Cuba','Sri\x20Lanka','Belarus','firstImg','1155639SyToPW','Panama','Senegal','3707098TeerFS','insertCell','Israel','style','New\x20Zealand','length','220vArfLV','Qatar','9ZyWsKf','Australia','Iraq','random','Madagascar','Chile','Dominican\x20Republic','addEventListener','Denmark','United\x20States','Uganda','Saudi\x20Arabia','Oman','Spain','Kazakhstan','dblclick','Leaderboard\x20table\x20not\x20found!','score','Lebanon','Azerbaijan','Bangladesh','Malta','display','block','sort','2187950ZZcuBp','Brazil','Morocco','Costa\x20Rica','Latvia','Lithuania','Libya','type','play','rows','Release\x20event:','Canada','totalClicks','secondImg','Total\x20clicked!','Norway','Croatia','Turkey','Algeria','Estonia','Bulgaria','innerHTML','Jamaica','getItem','Argentina','deleteRow','Vietnam','getElementById','totalMiaw','Colombia','Peru','Mozambique','Bahrain','299836EpZcpA','Slovenia','name','Ireland','Myanmar','2067870sruADv','Japan','9221681QyvRwA','Sweden','Portugal','Leaderboard\x20element:','contextmenu','floor','Uruguay','Total\x20element:','France','setItem','Netherlands','Greece','none','4095392UcuaLM','leaderboardTable','Albania','Romania','Finland','log','10fblHkE','Austria','Indonesia','error'];_0x3db3=function(){return _0x14c0ed;};return _0x3db3();}let score=localStorage['getItem']('score')?parseInt(localStorage[_0x1f4561(0x1b2)](_0x1f4561(0x193))):0x0,totalClicks=localStorage[_0x1f4561(0x1b2)]('totalClicks')?parseInt(localStorage[_0x1f4561(0x1b2)](_0x1f4561(0x1a7))):0x493e0;const audio=document[_0x1f4561(0x1b6)]('audio'),imagesContainer=document[_0x1f4561(0x1b6)](_0x1f4561(0x16a)),firstImg=document[_0x1f4561(0x1b6)](_0x1f4561(0x176)),secondImg=document[_0x1f4561(0x1b6)](_0x1f4561(0x1a8)),scoreElement=document[_0x1f4561(0x1b6)](_0x1f4561(0x193)),totalMiawElement=document[_0x1f4561(0x1b6)](_0x1f4561(0x1b7)),total=document[_0x1f4561(0x1b6)]('TOTAL'),leaderboardElement=document['getElementById']('leaderboard'),CA=document[_0x1f4561(0x1b6)]('CA');CA[_0x1f4561(0x159)]=CA[_0x1f4561(0x159)][_0x1f4561(0x14d)](),totalMiawElement['textContent']=totalClicks,scoreElement[_0x1f4561(0x159)]=score,leaderboardElement['style'][_0x1f4561(0x198)]='none';let isPressed=![];firstImg[_0x1f4561(0x17d)]['display']=_0x1f4561(0x199),secondImg[_0x1f4561(0x17d)][_0x1f4561(0x198)]='none';function pressHandler(_0xca1ca7){const _0xef2651=_0x1f4561;if(isPressed)return;isPressed=!![],_0xca1ca7['preventDefault'](),console[_0xef2651(0x146)]('Press\x20event:',_0xca1ca7[_0xef2651(0x1a2)]),firstImg[_0xef2651(0x17d)][_0xef2651(0x198)]='none',secondImg[_0xef2651(0x17d)][_0xef2651(0x198)]=_0xef2651(0x199),audio[_0xef2651(0x1a3)](),score++,totalClicks++,localStorage[_0xef2651(0x13d)](_0xef2651(0x193),score),localStorage['setItem'](_0xef2651(0x1a7),totalClicks),scoreElement['textContent']=score,totalMiawElement[_0xef2651(0x159)]=totalClicks;}function releaseHandler(_0x2566c7){const _0x5d654b=_0x1f4561;if(!isPressed)return;isPressed=![],console['log'](_0x5d654b(0x1a5),_0x2566c7[_0x5d654b(0x1a2)]),firstImg['style'][_0x5d654b(0x198)]=_0x5d654b(0x199),secondImg[_0x5d654b(0x17d)][_0x5d654b(0x198)]=_0x5d654b(0x140);}function _0x5e91(_0x32a8c9,_0x5d69c3){const _0x3db3e7=_0x3db3();return _0x5e91=function(_0x5e910c,_0x3922ef){_0x5e910c=_0x5e910c-0x130;let _0x3b58a4=_0x3db3e7[_0x5e910c];return _0x3b58a4;},_0x5e91(_0x32a8c9,_0x5d69c3);}document[_0x1f4561(0x15c)]?(imagesContainer['addEventListener']('pointerdown',pressHandler),document[_0x1f4561(0x189)]('pointerup',releaseHandler)):(imagesContainer[_0x1f4561(0x189)]('touchstart',pressHandler,{'passive':![]}),imagesContainer['addEventListener'](_0x1f4561(0x16e),pressHandler),document[_0x1f4561(0x189)]('touchend',releaseHandler,{'passive':![]}),document['addEventListener']('mouseup',releaseHandler));const storedCountries=localStorage['getItem'](_0x1f4561(0x15a)),countries=storedCountries?JSON[_0x1f4561(0x157)](storedCountries):[{'name':_0x1f4561(0x166),'score':0x0},{'name':_0x1f4561(0x18b),'score':0x0},{'name':_0x1f4561(0x16f),'score':0x0},{'name':'China','score':0x0},{'name':_0x1f4561(0x19d),'score':0x0},{'name':'Germany','score':0x0},{'name':_0x1f4561(0x13c),'score':0x0},{'name':_0x1f4561(0x162),'score':0x0},{'name':_0x1f4561(0x18f),'score':0x0},{'name':_0x1f4561(0x1a6),'score':0x0},{'name':_0x1f4561(0x183),'score':0x0},{'name':_0x1f4561(0x19c),'score':0x0},{'name':'India','score':0x0},{'name':_0x1f4561(0x133),'score':0x0},{'name':_0x1f4561(0x172),'score':0x0},{'name':'Mexico','score':0x0},{'name':_0x1f4561(0x149),'score':0x0},{'name':_0x1f4561(0x13e),'score':0x0},{'name':_0x1f4561(0x1ac),'score':0x0},{'name':_0x1f4561(0x18d),'score':0x0},{'name':_0x1f4561(0x14c),'score':0x0},{'name':_0x1f4561(0x1b3),'score':0x0},{'name':_0x1f4561(0x135),'score':0x0},{'name':'Poland','score':0x0},{'name':_0x1f4561(0x154),'score':0x0},{'name':_0x1f4561(0x171),'score':0x0},{'name':_0x1f4561(0x14b),'score':0x0},{'name':_0x1f4561(0x148),'score':0x0},{'name':_0x1f4561(0x1aa),'score':0x0},{'name':_0x1f4561(0x155),'score':0x0},{'name':_0x1f4561(0x17c),'score':0x0},{'name':'Singapore','score':0x0},{'name':_0x1f4561(0x156),'score':0x0},{'name':'Philippines','score':0x0},{'name':'South\x20Africa','score':0x0},{'name':_0x1f4561(0x18a),'score':0x0},{'name':_0x1f4561(0x1b8),'score':0x0},{'name':'Egypt','score':0x0},{'name':_0x1f4561(0x130),'score':0x0},{'name':_0x1f4561(0x1b5),'score':0x0},{'name':_0x1f4561(0x187),'score':0x0},{'name':_0x1f4561(0x145),'score':0x0},{'name':'Pakistan','score':0x0},{'name':_0x1f4561(0x13f),'score':0x0},{'name':_0x1f4561(0x136),'score':0x0},{'name':_0x1f4561(0x184),'score':0x0},{'name':_0x1f4561(0x1b9),'score':0x0},{'name':_0x1f4561(0x17e),'score':0x0},{'name':_0x1f4561(0x181),'score':0x0},{'name':_0x1f4561(0x190),'score':0x0},{'name':_0x1f4561(0x15e),'score':0x0},{'name':_0x1f4561(0x1ad),'score':0x0},{'name':_0x1f4561(0x168),'score':0x0},{'name':'Hungary','score':0x0},{'name':_0x1f4561(0x14e),'score':0x0},{'name':_0x1f4561(0x196),'score':0x0},{'name':_0x1f4561(0x144),'score':0x0},{'name':_0x1f4561(0x18e),'score':0x0},{'name':'Venezuela','score':0x0},{'name':_0x1f4561(0x174),'score':0x0},{'name':_0x1f4561(0x175),'score':0x0},{'name':_0x1f4561(0x188),'score':0x0},{'name':_0x1f4561(0x131),'score':0x0},{'name':'Slovakia','score':0x0},{'name':'Tunisia','score':0x0},{'name':_0x1f4561(0x1af),'score':0x0},{'name':_0x1f4561(0x15d),'score':0x0},{'name':_0x1f4561(0x1a1),'score':0x0},{'name':_0x1f4561(0x194),'score':0x0},{'name':_0x1f4561(0x1ab),'score':0x0},{'name':_0x1f4561(0x153),'score':0x0},{'name':'Jordan','score':0x0},{'name':_0x1f4561(0x165),'score':0x0},{'name':_0x1f4561(0x151),'score':0x0},{'name':_0x1f4561(0x173),'score':0x0},{'name':_0x1f4561(0x16d),'score':0x0},{'name':'Ecuador','score':0x0},{'name':_0x1f4561(0x195),'score':0x0},{'name':_0x1f4561(0x178),'score':0x0},{'name':_0x1f4561(0x18c),'score':0x0},{'name':_0x1f4561(0x19e),'score':0x0},{'name':_0x1f4561(0x1a0),'score':0x0},{'name':_0x1f4561(0x1bd),'score':0x0},{'name':_0x1f4561(0x13a),'score':0x0},{'name':_0x1f4561(0x1bb),'score':0x0},{'name':_0x1f4561(0x152),'score':0x0},{'name':_0x1f4561(0x19f),'score':0x0},{'name':'Paraguay','score':0x0},{'name':_0x1f4561(0x158),'score':0x0},{'name':_0x1f4561(0x1ae),'score':0x0},{'name':_0x1f4561(0x163),'score':0x0},{'name':'Iceland','score':0x0},{'name':_0x1f4561(0x160),'score':0x0},{'name':_0x1f4561(0x164),'score':0x0},{'name':_0x1f4561(0x179),'score':0x0},{'name':_0x1f4561(0x15b),'score':0x0},{'name':_0x1f4561(0x1b1),'score':0x0},{'name':'Namibia','score':0x0},{'name':_0x1f4561(0x143),'score':0x0},{'name':_0x1f4561(0x150),'score':0x0},{'name':_0x1f4561(0x197),'score':0x0},{'name':_0x1f4561(0x186),'score':0x0},{'name':_0x1f4561(0x1ba),'score':0x0}];if(!storedCountries){const totalClicksToDistribute=0x2dc6c0,baseClicks=0x7d0,maxBonus=0x1770,totalCountries=countries[_0x1f4561(0x17f)];let remainingClicks=totalClicksToDistribute;countries['forEach'](_0x3b57d3=>{const _0x589c20=_0x1f4561,_0x581ac1=Math['floor'](Math[_0x589c20(0x185)]()*(maxBonus-baseClicks+0x1))+baseClicks;_0x3b57d3[_0x589c20(0x193)]=_0x581ac1,remainingClicks-=_0x581ac1;});while(remainingClicks>0x0){let randomIndex=Math[_0x1f4561(0x139)](Math[_0x1f4561(0x185)]()*totalCountries);countries[randomIndex][_0x1f4561(0x193)]++,remainingClicks--;}localStorage[_0x1f4561(0x13d)](_0x1f4561(0x15a),JSON['stringify'](countries));}function renderLeaderboard(){const _0x49dc25=_0x1f4561,_0x6eb51=document[_0x49dc25(0x1b6)](_0x49dc25(0x142));if(!_0x6eb51){console[_0x49dc25(0x14a)](_0x49dc25(0x192));return;}while(_0x6eb51[_0x49dc25(0x1a4)][_0x49dc25(0x17f)]>0x1)_0x6eb51[_0x49dc25(0x1b4)](0x1);countries[_0x49dc25(0x19a)]((_0x2c6dd6,_0x4127fd)=>_0x4127fd[_0x49dc25(0x193)]-_0x2c6dd6[_0x49dc25(0x193)])[_0x49dc25(0x16c)]((_0x381dd5,_0x5209a9)=>{const _0x5abef5=_0x49dc25,_0x4db597=_0x6eb51['insertRow'](-0x1);_0x4db597[_0x5abef5(0x17b)](0x0)['textContent']=_0x5209a9+0x1,_0x4db597['insertCell'](0x1)[_0x5abef5(0x159)]=_0x381dd5[_0x5abef5(0x1be)],_0x4db597[_0x5abef5(0x17b)](0x2)[_0x5abef5(0x159)]=_0x381dd5[_0x5abef5(0x193)];});}setInterval(()=>{const _0x2380b5=_0x1f4561;totalClicks+=0x28,localStorage[_0x2380b5(0x13d)]('totalClicks',totalClicks),totalMiawElement['textContent']=totalClicks;},0x3e8),renderLeaderboard(),document[_0x1f4561(0x189)](_0x1f4561(0x191),function(_0x110626){_0x110626['preventDefault']();},{'passive':![]}),document['addEventListener'](_0x1f4561(0x169),function(_0x2b41ef){_0x2b41ef['scale']!==0x1&&_0x2b41ef['preventDefault']();},{'passive':![]}),console['log'](_0x1f4561(0x13b),total),console[_0x1f4561(0x146)](_0x1f4561(0x137),leaderboardElement),total['addEventListener'](_0x1f4561(0x167),()=>{const _0x4379a6=_0x1f4561;console[_0x4379a6(0x146)](_0x4379a6(0x1a9)),leaderboardElement['style'][_0x4379a6(0x198)]===_0x4379a6(0x140)||leaderboardElement[_0x4379a6(0x17d)]['display']===''?leaderboardElement[_0x4379a6(0x17d)][_0x4379a6(0x198)]=_0x4379a6(0x199):leaderboardElement[_0x4379a6(0x17d)][_0x4379a6(0x198)]='none';}),total['addEventListener'](_0x1f4561(0x167),()=>{const _0xfb609f=_0x1f4561;!leaderboardTable[_0xfb609f(0x1b0)]&&renderLeaderboard();}),document[_0x1f4561(0x189)](_0x1f4561(0x16b),function(_0x2e1267){const _0x4daf6e=_0x1f4561;_0x2e1267[_0x4daf6e(0x15f)]&&(_0x2e1267[_0x4daf6e(0x161)]==='u'||_0x2e1267[_0x4daf6e(0x161)]==='U'||_0x2e1267[_0x4daf6e(0x161)]==='I'||_0x2e1267['key']==='i')&&_0x2e1267[_0x4daf6e(0x170)]();}),document['addEventListener'](_0x1f4561(0x138),function(_0xfec83c){_0xfec83c['preventDefault']();});