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
        tgt_latex = request.form.get('tgt_latex')
        ans_latex = sym(tgt_latex)
        return render_template('integral.html', tgt=tgt_latex, ans=ans_latex)