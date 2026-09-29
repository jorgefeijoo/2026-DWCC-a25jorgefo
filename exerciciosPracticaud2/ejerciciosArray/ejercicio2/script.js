const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];

froitas.splice(1, 1);

console.log(froitas.join(', '));

froitas.splice(3, 0, 'laranxas', 'sandia');

console.log(froitas.join(', '));

froitas.splice(1, 1, 'cereixas', 'nesperas');

console.log(froitas.join(', '));
