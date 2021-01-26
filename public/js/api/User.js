/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
   localStorage.setItem(
      'user', user
    );
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    localStorage.clear()
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {

  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch( data, callback = f => f ) {

  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback = f => f) {
    createRequest({
      data,
      url: '/user' + '/login',
      method: 'POST',
      responseType: 'json',
       callback: (err, response) => {
         if (response.success && response.user != undefined && response.user.email != '') {
           this.setCurrent(JSON.stringify(response));
         } else {
           console.log(err)
           localStorage.clear()
         }
         callback();
       }
    })
  }
  

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback = f => f) {
    createRequest({
      data,
      url: '/user' + '/register',
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response.success) {
          this.setCurrent(JSON.stringify(response));
        } else {
          console.log(err);
          localStorage.clear();
        }
        callback();
      }
    })  
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout( data, callback = f => f ) {
    createRequest({
      data,
      url: '/user' + '/register',
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response.success) {
          this.unsetCurrent();
        } else {
          console.log(err);
          // localStorage.clear();
        }
        callback();
      }
    })  
  }
}