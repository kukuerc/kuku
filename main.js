$(function(){

    changeLanguage('en');

    $(".menu-lang").click(function(){
        const lang = $(this).data('lang');
        changeLanguage(lang);
    });

    
    $(".changeImage").click(function(){
        $(".memesblock").css("display", "none");
        $(".img-wall").css("display", "table");
    });

    $(".changeMedia").click(function(){
        $(".memesblock").css("display", "none");
        $(".media-wall").css("display", "flex");
    });

    $(".changeWriting").click(function(){
        $(".memesblock").css("display", "none")
    });

})

function changeLanguage(lang) {
    const translations = getTranslations();

    var data = translations[lang];
    $("[data-translate]").each(function() {
        var key = $(this).data('translate');
        if(data.hasOwnProperty(key)) {
            $(this).text(data[key]);
        }
    });
}
function getTranslations(){

    var translations = {
        'en': {
            "welcome": "Hi, I'm KuKu",
            "me1": "The world's first cryptocurrency with the most zeros in its history",
            "me2": "The only token to apply for a Guinness World Record",
            "me3": "KuKu is be showcased on the large screen in Times Square, New York.",
            "me4": "The most united community",
            "me5": "Contract: 0x27206f5a9afd0c51da95f20972885545d3b33647",
            "meme": "The MEME created by the KUKU community",
            "ecology": "kuku Ecology",
            "ecologytext": "A new ecological gameplay composed of $KuKu $QoQo KuKu NFT",
            "soon": "Coming Soon"
        },
        'zh': {
            "welcome": "嗨，我是KuKu",
            "me1": "史上零最多的首個加密貨幣",
            "me2": "唯一一個申請金氏世界紀錄的代幣",
            "me3": "KuKu在紐約時代廣場的大屏幕上展示",
            "me4": "最團結的社群",
            "me5": "合約: 0x27206f5a9afd0c51da95f20972885545d3b33647",
            "meme": "由KUKU社群創建的MEME",
            "ecology": "kuku Ecology",
            "ecologytext": "由$KuKu $QoQo KuKu NFT組成的全新生態玩法",
            "soon": "不久後將會推出 Coming Soon"
        },
        'jp': {
            "welcome": "こんにちは、私はKuKuです",
            "me1": "史上で最もゼロの多い最初の暗号通貨",
            "me2": "ギネス世界記録を申請する唯一のトークン",
            "me3": "KuKuはニューヨークのタイムズスクエアの大画面で展示されています",
            "me4": "最も団結したコミュニティ",
            "me5": "契約: 0x27206f5a9afd0c51da95f20972885545d3b33647",
            "meme": "KUKUコミュニティによって作成されたMEME",
            "ecology": "kuku Ecology",
            "ecologytext": "$KuKu $QoQo KuKu NFTから成る新しいエコロジーゲーム",
            "soon": "近日公開"
        },
        'kr': {
            "welcome": "안녕하세요, 나는 KuKu입니다",
            "me1": "역사상 가장 많은 제로를 가진 첫 번째 암호화폐",
            "me2": "기네스 세계 기록에 지원하는 유일한 토큰",
            "me3": "KuKu는 뉴욕 타임스 스퀘어의 큰 화면에 전시되어 있습니다",
            "me4": "가장 단결된 커뮤니티",
            "me5": "계약: 0x27206f5a9afd0c51da95f20972885545d3b33647",
            "meme": "KUKU 커뮤니티가 만든 MEME",
            "ecology": "kuku Ecology",
            "ecologytext": "$KuKu $QoQo KuKu NFT로 구성된 새로운 생태 게임",
            "soon": "곧 출시될 예정"
        },
        'cn': {
            "welcome": "嗨，我是KuKu",
            "me1": "历史上零最多的第一个加密货币",
            "me2": "唯一一个申请吉尼斯世界纪录的代币",
            "me3": "KuKu在纽约时代广场的大屏幕上展示",
            "me4": "最团结的社群",
            "me5": "合约: 0x27206f5a9afd0c51da95f20972885545d3b33647",
            "meme": "由KUKU社区创建的MEME",
            "ecology": "kuku Ecology",
            "ecologytext": "由$KuKu $QoQo KuKu NFT组成的全新生态玩法",
            "soon": "不久后将会推出 Coming Soon"
        }
    };

    return translations
}