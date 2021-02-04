/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {

  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback = f => f) {
   
    createRequest({
      data,
      url: this.url,
      method: 'GET',
      responseType: 'json',
     callback: (err, response) => {
      // AccountsWidget.getAccountHTML(response)
       callback(err, response)
     }
    })  
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback = f => f) {
    // console.log(data)
    data = Object.assign({ _method: 'PUT' }, data);
    console.log(data)
    return createRequest({
      data,
      url: this.url,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response) {

          console.log(response)
        } else {
          callback(err)
        }
        callback();
      } 
    })
  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get(id = '', data, callback = f => f) {
    return createRequest({
      data,
      url: this.url,
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response) {
          callback(response)
        } else {
          callback(err)
        }
        callback();
      } 
    })
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
    console.log(data)
  }
}

