import sympy as sp
from lib.latex2sympy.process_latex import process_sympy

greece_dict = {
    'α':r'\alpha',
    # '':r'',
}


def greece2latex(str):
    re = ''
    for e in str:
        try:
            re += greece_dict[e]
        except:
            re += e
    return re

def del_space_series(str):
    if str == '': return ''
    str = str.strip()
    result = str[0]
    pre = str[0]
    for e in str[1:]:
        if e == ' ':
            if pre != ' ':
                result += e
        else:
            result += e
        pre = e
    return result
    
def solve_integral(tgt_latex):
    try:
        ans_latex = sp.latex(process_sympy(tgt_latex).doit())
    except:
        ans_latex = ''
    return ans_latex
    
def solve_equation(tgt_latex):
    try:
        ans_latex = sp.latex(sp.solve(process_sympy(tgt_latex)))
    except:
        ans_latex = ''
    return ans_latex
