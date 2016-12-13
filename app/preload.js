'use strict';
//  Disable eval and Buffer.
window.eval = global.eval = global.Buffer = function() {
    throw new Error("Can't use eval and Buffer.");
}

