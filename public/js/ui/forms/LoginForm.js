/**
 * Класс LoginForm управляет формой
 * входа в портал
 * Наследуется от AsyncForm
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(options) {
    User.login(options, () => {
      if (localStorage.length > 0) {
        App.setState('user-logged');
        for (let element in App.modals) {
          if (this.element.id.includes(element)) {
            App.getModal(element).close();
            for (let i = 0; i < this.element.length; i++) {
              this.element[i].value = '';
            }
          }
        }
      }
    })
  }  
}

