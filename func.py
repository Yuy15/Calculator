from multiprocessing.connection import answer_challenge
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
    
def integral(tgt_latex):
    ans_latex = sp.latex(process_sympy(tgt_latex).doit())
    return ans_latex
    
def solve_equation(tgt_latex):
    ans_latex = sp.latex(sp.solve(process_sympy(tgt_latex)))
    return ans_latex
