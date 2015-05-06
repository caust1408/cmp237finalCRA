

var x = new Date(2015,4,6).getTime();
print(x);
var temp = 86400000 * 30;
var real = new Date(temp + x);
var y = new Date(1430884800000);
print('This is the data before' + y);
print('This is the date after 30 days' + real);