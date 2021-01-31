/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  /**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */


  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback = f => f) {
    return createRequest({
      data,
      url: '' + '/account',
      method: 'GET',
      responseType: 'json',
      callback: (err, response) => {
        if (response.success) {
          console.log(response);
        } else {
          console.log(err); 
        }
        callback();
      }
    })  
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback = f => f) {
    data = Object.assign({ _method: 'PUT' }, data);
    return createRequest({
      data,
      url: '' + '/account',
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response.success) {
          console.log(response);
          return response.data;
        } else {
          console.log(err);
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
      id,
      url: '' + '/account',
      method: 'GET',
      responseType: 'json',
      callback: (err, response) => {
        console.log(response);
        if (response.success) {
          console.log(response);
        } else {
          console.log(err);
        }
        callback();
      } 
    })
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(id = '', data, callback = f => f) {
    return createRequest({
      data,
      id,
      url: '' + '/account',
      method: 'GET',
      responseType: 'json',
      callback: (err, response) => {
        console.log(response);
        if (response.success) {
          console.log(response);
        } else {
          console.log(err);
        }
        callback();
      } 
    })
  }
}


  

