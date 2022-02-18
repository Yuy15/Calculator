import sympy as sp
from lib.latex2sympy.process_latex import process_sympy

def sym(tgt_latex):
    ans_latex = sp.latex(process_sympy(tgt_latex).doit())
    return ans_latex