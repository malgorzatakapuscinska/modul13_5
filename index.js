
process.stdin.setEncoding('utf-8');
var OSinfo = require('./modules/OSinfo');
var time = require('./modules/time');
var colors = require('colors');
console.log('Wpisz komendę: ');
console.log('/sysOSinfo - system info, /system-language, /exit - end app, node-version');

process.stdin.on('readable', function() {
	console.log('Wpisz komendę: ');
	console.log('/sysOSinfo - system info, /system-language, /exit - end app, node-version');
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
        	case 'node-version':
        		console.log(colors.green('Node version is: ') + process.versions.node);
        		break;
        	case '/system-language':
        		process.stdout.write('System language is ' + process.env.lang);
        		break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sysOSinfo':
            	OSinfo.print();
            	time.getUptime();
            	break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});


