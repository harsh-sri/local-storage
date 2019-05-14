exports.localStorage = {
    /**
     * Desc: Save object into Local Storage
     * @param {*} key : key name for object
     * @param {*} value :  object
     */
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

    /**
     * Desc: Get the object from local storage 
     * @param {*} key : Pass the keyname 
     */
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

    /**
     * Desc: To save values into Local Storage
     * @param {*} key : name of the key
     * @param {*} value : value of the key
     */
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

    /**
     * Desc: Get the value from Local Storage
     * @param {*} key : Name of the key
     * @param {*} value : value of the key
     */
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

    /**
     * Desc: Remove the specific key and associated value from local storage
     * @param {*} key : name of the key to be removed
     */
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

    /**
     * Desc: This function will remove the entire Local Storage
     */
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