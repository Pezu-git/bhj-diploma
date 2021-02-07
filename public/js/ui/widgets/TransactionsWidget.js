/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */
class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    this.element = element;
    this.registerEvents()
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const transactionsBtn = [...this.element.children];
    for (let i = 0; i < transactionsBtn.length; i++) {
      transactionsBtn[i].addEventListener('click', () => {
        if (transactionsBtn[i].classList.contains('create-income-button')) {
          App.getModal('newIncome').open();
        } else if (transactionsBtn[i].classList.contains('create-expense-button')) {
          App.getModal('newExpense').open();
        }
      })
    }
  }
}
