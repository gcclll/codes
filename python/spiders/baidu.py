from urllib.request import urlopen, urlretrieve
from bs4 import BeautifulSoup as bf

html = urlopen('http://www.baidu.com/')


obj = bf(html.read(), 'html.parser')
title = obj.head.title

# 找到 class 名为 `index-logo-src' 的 img 元素
pics = obj.find_all('img', class_='index-logo-src')

# 取第一个 img 的属性 src
logo_url = 'https:' + pics[0]['src']

# 下载图片
urlretrieve(logo_url, 'logo.png')
print(title, '\n', logo_url)
