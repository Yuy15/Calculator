// let tgt_latex = {{ tgt | tojson }};

const $tgt_input = document.getElementById('tgt_input');
const $select_typeOfIntegral = document.getElementById('typeOfIntegral');

let tgt_latex = $tgt_input.value;
let tgt_latex_mj;

// previewの即時反映
for (let $input of document.querySelectorAll('input') ){
    $input.addEventListener('input', (e) => {
        tgt_latex = $tgt_input.value
        const $divs_detail = Array.prototype.slice.call( document.getElementsByClassName('detailOfIntegral'), 0, $select_typeOfIntegral.value);
        $divs_detail.map( ($div_detail) => {
            const u_lim = $div_detail.getElementsByClassName('u_lim')[0].value;
            const b_lim = $div_detail.getElementsByClassName('b_lim')[0].value;
            const d = $div_detail.getElementsByClassName('d')[0].value;
            tgt_latex = `\\int_{ ${ b_lim } }^{ ${ u_lim } }\ ` + tgt_latex + `d ${d}`;
        });
        reloadTarget();
    });
}

function reloadTarget() {
    tgt_latex_mj = `preview:\\begin\{align\} ${ tgt_latex } \\end\{align\}`;
    console.log(tgt_latex_mj);
    document.getElementById('preview').textContent = tgt_latex_mj;
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"quMain"]);
}

// $select_typeOfIntegral.addEventListener('change', (e) => {
//     const $divs_detail = Array.prototype.slice.call( document.getElementsByClassName('detailOfIntegral'), 0, e.target.value);
//     $divs_detail.map( ($div_detail) => {
//         const u_lim = $div_detail.getElementsByClassName('u_lim')[0].value;
//         const b_lim = $div_detail.getElementsByClassName('b_lim')[0].value;
//         tgt_latex = `\\int_{ ${ b_lim } }^{ ${ u_lim } }\ ` + tgt_latex
//     });
//     // tgt_latex = $tgt_input.target.value + $div_detail.getElementByClassName('d').value
//     reloadTarget();
// });


// 重積分入力補助
const $div_detail1 = document.getElementById('detail1')
const $div_detail2 = document.getElementById('detail2')
const $div_detail3 = document.getElementById('detail3')
$select_typeOfIntegral.addEventListener('change', () => {
    switch($select_typeOfIntegral.value){
        case 'none':
        $div_detail1.style.display = 'none';
        $div_detail2.style.display = 'none';
        $div_detail3.style.display = 'none';
        break;
        case '1':
        $div_detail1.style.display = 'block';
        $div_detail2.style.display = 'none';
        $div_detail3.style.display = 'none';
        break;
        case '2':
        $div_detail1.style.display = 'block';
        $div_detail2.style.display = 'block';
        $div_detail3.style.display = 'none';
        break;
        case '3':
        $div_detail1.style.display = 'block';
        $div_detail2.style.display = 'block';
        $div_detail3.style.display = 'block';
        break;
    }
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
document.querySelector('textarea').addEventListener('click', (e) => {
    e.select();
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