

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    console.log(options)
    let xhr = new XMLHttpRequest();
    xhr.responseType = options.responseType;

    if (options.method === 'POST') {
        let formData = new FormData()
        for (let key in options.data) {
            formData.append(key, options.data[`${key}`]);
        }
        try { 
            xhr.onreadystatechange = function () {
                if (xhr.readyState == xhr.DONE && xhr.status == 200) {
                    const response = this.response;
                    const err = response;
                    options.callback(err, response);
                }
            }
            xhr.open('POST', options.url);
            xhr.withCredentials = true;
            xhr.send(formData);
        } catch (e) {
            options.callback(e);
        }
        
    }
    if (options.method == 'GET') {
        
        try {
            let dataGetmethod = [];
            for (let key in options.data) {
                dataGetmethod.push(`${key}=${options.data[`${key}`]}`);
            } 
            xhr.open('GET', `${options.url}?${dataGetmethod.join('&')}`)
            xhr.withCredentials = true;
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == xhr.DONE  && xhr.status == 200) {
                    const response = xhr.response
                    const err = response.error;
                    options.callback(err, response);
                }
            }
        } catch (e) {
            options.callback(e);
        }
    }  
};
