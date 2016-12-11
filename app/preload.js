'use strict';
//  Disable eval and Buffer.
window.eval = global.eval = function() {
    throw new Error("Can't use eval().");
}
delete global.Buffer;

