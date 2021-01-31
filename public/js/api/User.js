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
    this.user = user;
    if (this.user != undefined) {
      localStorage['user'] = JSON.stringify(this.user);
    } 
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    localStorage.clear();
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    if (localStorage.user != undefined) {
      return JSON.parse(localStorage.user);
    } else {
      return undefined;
    }
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch(data, callback = f => f) {
    return createRequest({
      data,
      url: '/user' + '/current',
      method: 'GET',
      responseType: 'json',
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        } else {
          this.unsetCurrent()
          console.log(err);
        }
         callback();
       }
    })
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback = f => f) {
    return createRequest({
      data,
      url: '/user' + '/login',
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
         if (response && response.user != undefined && response.user.email != '') {
           this.setCurrent(response.user);
         } else {
           console.log(err);
           localStorage.clear();
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
    return createRequest({
      data,
      url: '/user' + '/register',
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
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
  static logout(data, callback = f => f) {
    return createRequest({
      data,
      url: '/user' + '/logout',
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response.success) {
          this.unsetCurrent();
        } else {
          console.log(err);
        }
        callback();
      }
    })  
  }
}