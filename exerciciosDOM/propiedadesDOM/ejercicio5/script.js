const li = document.getElementById('one')

const liDos = document.createElement('li')
liDos.append(document.createTextNode('2'))

const liTres = document.createElement('li')
liTres.append(document.createTextNode('3'))

li.after(liTres)
li.after(liDos)