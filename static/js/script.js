// let tgt_latex = {{ tgt | tojson }};
let tgt_latex;

const greece_dict = {
    'α':'\alpha',
    'β':'\beta',
}

const $tgt_input = document.getElementById('tgt_input');

$tgt_input.addEventListener('input', (e) => {
    tgt_latex = `preview:\\begin\{align\} ${ e.target.value } \\end\{align\}`;
    console.log(tgt_latex);
    document.getElementById('preview').textContent = tgt_latex;
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"quMain"]);
});

// キーボード入力
document.addEventListener('keyup', (e) => {
    switch(e.which){
        // "/"入力でカーソル合わせ
        case 191:
            $tgt_input.focus();
            $tgt_input.setSelectionRange(-1,-1)
        break;
    }
});

// textarea選択で全選択
document.querySelector('textarea').addEventListener('click', () => {
    this.select();
});

//clipboardへの関与は現状不可か
// $(function(){
//     $('#preview-latex_button').on('click', function(){
//         navigator.clipboard.writeText(tgt_latex).then(
//             ()=>{alert("クリップボードにコピーしました")},
//             ()=>{alert("コピーに失敗しました")}
//          );
//     })
// });