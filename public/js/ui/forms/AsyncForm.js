// const e = require("express");
/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor( element ) {
    this.element = element;
    if (this.element === undefined) {
      alert('error');
    } else {
      this.registerEvents()
    }
  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    const btn = document.querySelector(`[form=${this.element.id}] `);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.submit();
    })
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
    const forma = document.getElementById(this.element.id);
    const inp = [...forma.querySelectorAll('input')];
    let data = {};
    for (let i = 0; i < inp.length; i++) {
      data[inp[i].name] = inp[i].value;
    }
    return data;
    
  } 

  onSubmit(options) {
  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    this.onSubmit(this.getData());
  }
}