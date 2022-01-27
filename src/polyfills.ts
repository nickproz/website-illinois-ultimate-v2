import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

/*
 Standard polyfills we require to run Angular applications in modern browsers
*/
if (process.env.ENV === 'prod') {
    // Production
} else {
    // Development

    // Stack trace tools
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
