/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * Наследуется от AsyncForm
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно (в котором находится форма) в случае успеха,
   * а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(options) {
    console.log(options)
    Account.create(options, () => {
      for (let element in App.forms) {
        if (App.getForm(element).element === this.element) {
          App.getModal(element).close();
          const thisInput = this.element.querySelector('input');
          thisInput.value = '';
        }
      }
      App.update();
    }); 
  } 
}
