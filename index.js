// +----------------------------------------------------------------------
// | cookie
// +----------------------------------------------------------------------
// | HomePage : http://git.husor.com/fe-base/cookie
// +----------------------------------------------------------------------
// | Author: qian.zhao <qian.zhao@husor.com>
// +----------------------------------------------------------------------
/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
'use strict';

let formatValue = (key, val, options) => {
    let value = options.raw ? val : encodeURIComponent(val);
    let expires = options.expires ? `; expires=${options.expires.toUTCString()}` : '';
    let path = options.path ? `; path=${options.path}` : '; path=/';
    let domain = options.domain ? `; domain=${options.domain}` : '';
    let secure = options.secure ? '; secure' : '';
    return [encodeURIComponent(key), '=', value, expires, path, domain, secure];
};

let cookie = (key, value, options) => {
    let days;
    let time;
    let result;
    let decode;

    options = options || {};

    // A key and value were given. Set cookie.
    if (typeof value !== 'undefined') {
        // Delete cookie
        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            days = (options.expires * 24 * 60 * 60 * 1000);
            options.expires = new Date();
            time = options.expires;

            time.setTime(time.getTime() + days);
        }

        value = String(value);

        return (document.cookie = formatValue(key, value, options).join(''));
    }
    // Key and possibly options given, get cookie
    decode = options.raw ? function (val) {
        return val;
    } : decodeURIComponent;

    return (result = new RegExp(`(?:^|; )${encodeURIComponent(key)}=([^;]*)`).exec(document.cookie)) ? decode(result[1]) : null;
};

export default cookie;
