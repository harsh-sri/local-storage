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
    }

}