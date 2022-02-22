// let tgt_latex = {{ tgt | tojson }};
let tgt_latex;

const greece_dict = {
    'α':'\alpha',
    'β':'\beta',
}

// inputを即時反映
$(function(){
    $(document).on('input', '#tgt_input', function(e) {
        tgt_latex = `preview:\\begin\{align\} ${ $('#tgt_input').val() } \\end\{align\}`;
        $('#preview').html(tgt_latex);
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,"quMain"]);
    });
});

// "/"入力でカーソル合わせ
$(function(){
    $('html').keyup(function(e){
        switch(e.which){
            case 191:
                $('#tgt_input').focus();
            break;
        }
    })
});

// textarea選択で全選択
$(function(){
    $(document).on('click', 'textarea', function(e) {
        $(this).select();
    });
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