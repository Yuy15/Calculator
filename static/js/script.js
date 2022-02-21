// let tgt_latex = {{ tgt | tojson }};
let tgt_latex;

const greece_dict = {
    'α':'\alpha',
    'β':'\beta',
}

$(function(){
    $(document).on('input', '#tgt_input', function(e) {
        tgt_latex = `preview:\\begin\{align\} ${ $('#tgt_input').val() } \\end\{align\}`;
        $('#preview').html(tgt_latex);
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,"quMain"]);
    });
});

// function greece2latex(str){
//     var result;
//     for (e in str){
//         const isGreece = greece_dict.some((g) => g.id == e);
//         if (isGreece){
//             result += greece_dict[e];
//         }
//     }
//     return result
// }

//clipboardへの関与は現状不可か
// $(function(){
//     $('#preview-latex_button').on('click', function(){
//         navigator.clipboard.writeText(tgt_latex).then(
//             ()=>{alert("クリップボードにコピーしました")},
//             ()=>{alert("コピーに失敗しました")}
//          );
//     })
// });