from lib.latex2sympy.process_latex import process_sympy

def sym(tgt_latex):
    ans = process_sympy(tgt_latex).doit()
    return ans