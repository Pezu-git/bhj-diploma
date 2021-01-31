/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    this.element = element;
    if (this.element === undefined) {
      alert('error');
    } else {
      this.registerEvents();
    }
    
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const thisModal = document.getElementById(`${this.element.id}`);
    const dismiss = thisModal.querySelectorAll('[data-dismiss="modal"]');
    for (let i = 0; i < dismiss.length; i++) {
      dismiss[i].addEventListener('click', (e) => {
        this.onClose(e);
      })
    }
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
    if (e.target.textContent == 'Закрыть' || 'x') {
      const formOnClose = this.element.querySelector('form')
      formOnClose.reset();
      this.close();
    }
  }
  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {

  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = 'block';
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.style.display = 'none';
  }
}
