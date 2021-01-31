

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    console.log(options);
    let xhr = new XMLHttpRequest();
    if (options.method === 'POST') {
        
        let formData = new FormData()
        for (let key in options.data) {
            formData.append(key, options.data[`${key}`]);
        }
        try {
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                const err = response;
                options.callback(err, response);
            })
            xhr.open('POST', options.url);
            xhr.withCredentials = true;
            xhr.send(formData);
        } catch (e) {
            options.callback(e);
        }
        
    }
    if (options.method == 'GET') {
        try {
            let datas = [];
            for (let key in options.data) {
                datas.push(`${key}=${options.data[`${key}`]}`);
            } 
            xhr.open('GET', `${options.url}?${datas.join('&')}`)
            xhr.withCredentials = true;
            xhr.send();
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText)
                const err = response.error;
                options.callback(err, response);
            })
        } catch (e) {
            options.callback(e);
        }
    }  
};
