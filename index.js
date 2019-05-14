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
    }

}