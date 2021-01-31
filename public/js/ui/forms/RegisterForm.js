

/**
 * Класс RegisterForm управляет формой
 * регистрации
 * Наследуется от AsyncForm
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(options) {
    User.register(options, () => {
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