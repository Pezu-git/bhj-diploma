/**
 * Класс Transaction наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/transaction'
 * */
class Transaction extends Entity {
    static list(data, callback = f => f) {
    console.log(data)
        return createRequest({
          data,
          url: 'transaction',
          method: 'GET',
          responseType: 'json',
          callback: (err, response) => {
            console.log(response);
            if (response & response.user) {
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
          url: 'transaction',
          method: 'POST',
          responseType: 'json',
          callback: (err, response) => {
            console.log(response);
            console.log(response.user);
            if (response & response.user) {
              console.log(response);
            } else {
              console.log(err);
            }
            callback();
          } 
        })
      }


}
