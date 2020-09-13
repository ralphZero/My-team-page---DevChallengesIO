var data = [{
    'url':'photo',
    'role':'product owner',
    'name':'bill mahoney'
},{
    'url':'photo',
    'role':'art director',
    'name':'saba cabrera'
},{
    'url':'photo',
    'role':'tech lead',
    'name':'shae le'
},{
    'url':'photo',
    'role':'ux designer',
    'name':'skylah lu'
},{
    'url':'photo',
    'role':'developer',
    'name':'griff richards'
},{
    'url':'photo',
    'role':'developer',
    'name':'stan john'
}];

var row = document.querySelector('.row');
for(var i=0; c = data.length, i < c;i++){

    next = i + 1;
    
    var col = document.createElement('div');
    var img = document.createElement('img');
    var content = document.createElement('div');
    var img_box = document.createElement('div');
    var colName = document.createElement('span');
    var role = document.createElement('span');

    col.className = 'col';
    img_box.className = 'col-img-box';
    content.className = 'col-content';
    img.className = 'col-img';
    colName.className = 'col-img-name';
    role.className = 'col-img-role';

    colName.append(document.createTextNode(data[i]['name']));
    role.append(document.createTextNode(data[i]['role']));
    img.src = data[i]['url']+next+'.png';
    img_box.append(img);
    content.append(img_box);
    content.append(colName);
    col.append(content);
    col.append(role);
    row.append(col);
}