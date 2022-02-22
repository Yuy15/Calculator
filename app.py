import os
from flask import Flask, render_template, url_for, redirect, request

from func import *

app = Flask(__name__)

# 変更反映
@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path, endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)
# 変更反映ここまで


@app.route("/")
def top(): 
    return render_template('top.html')
    
@app.route('/integral', methods=['GET', 'POST'])
def integral():
    if request.method == 'GET':
        return render_template('integral.html')
    else:
        tgt_latex = del_space_series( request.form.get('tgt_latex') )
        print(tgt_latex)
        # print(tgt_latex)
        tgt_latex = greece2latex(tgt_latex)
        # print(tgt_latex)
        ans_latex = solve_integral(tgt_latex)
        return render_template('integral.html', tgt=tgt_latex, ans=ans_latex)
    
@app.route('/equation', methods=['GET', 'POST'])
def equation():
    if request.method == 'GET':
        return render_template('equation.html')
    else:
        tgt_latex = del_space_series( request.form.get('tgt_latex') )
        tgt_latex = greece2latex(tgt_latex)
        
        ans_latex = solve_equation(tgt_latex)
        print(ans_latex)
        ans_latex = ans_latex.replace('\left[', '').replace(r'\right]', '')
        return render_template('equation.html', tgt=tgt_latex, ans=ans_latex)
