exports.localStorage = {

    setObj: function (key, value) {
        try {
            if(window && window.localStorage) {
                return window.localStorage.setItem(key, JSON.stringify(value));
            }
        }
        catch(e) {
            console.error(e);
        }
    },

    getObj: function (key) {
        try {
            if(window && window.localStorage) {
                let obj = window.localStorage.getItem(key);
                return JSON.parse(obj);
            }
        }
        catch (e) {
            console.error(e);
        }
    },

    set: function (key, value) {
        try {
            if(window && window.localStorage) {
                window.localStorage.setItem(key, value);
            }
        }
        catch(e) {
            console.error(e);
        }
    },

    get: function (key, value) {
        try {
            if(window && window.localStorage) {
                return window.localStorage.getItem(key);
            }
        }
        catch(e) {
            console.error(e);
        }
    },

    remove: function (key) {
        try {
            if(window && window.localStorage) {
                return window.localStorage.removeItem(key);
            }
        }
        catch(e) {
            console.error(e);
        }
    },

    clear: function () {
        try {
            if(window && window.localStorage) {
                return window.localStorage.clear();
            }
        }
        catch(e) {
            console.error(e);
        }
    }

}