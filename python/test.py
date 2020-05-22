#!/usr/bin/env python3

import tkinter as tk


def clicked():
    print('button clicked !')


top = tk.Tk()                   # 产生整体框架
btn = tk.Button()               # 生成按钮
btn.pack()                      # 设置按钮位置
btn['text'] = 'Click Me !'      # 按钮文本
btn['command'] = clicked       # 按钮点击动作


def none():
    return


while True:
    none()
