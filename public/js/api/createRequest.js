/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    let formData = new FormData()
    
    for (let key in options.data.data) {
        formData.append(key, options.data.data[`${key}`])
    }
    xhr.open(options.method, options.url);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(this.responseText)
            const err = response.error
            options.callback(err, response)
        }
    }
    xhr.send(formData)
};
