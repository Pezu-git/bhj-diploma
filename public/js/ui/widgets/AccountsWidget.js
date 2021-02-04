

/**
 * Класс AccountsWidget управляет блоком
 * отображения счетов в боковой колонке
 * */
class AccountsWidget {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Вызывает AccountsWidget.update() для получения
   * списка счетов и последующего отображения
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    this.element = element
    if (this.element === undefined) {
      console.log('error')
    } else {
      
      this.registerEvents()
      this.update()
    }
    
  }

  /**
   * При нажатии на .create-account открывает окно
   * #modal-new-account для создания нового счёта
   * При нажатии на один из существующих счетов
   * (которые отображены в боковой колонке),
   * вызывает AccountsWidget.onSelectAccount()
   * */
  registerEvents() {
    // const createAcount = document.getElementById('.create-account');
    const createAcount = document.querySelector('.create-account');
    createAcount.addEventListener('click', (e) => {
      App.getModal('createAccount').open(); 
    })
    
    // console.log(this.element)
    // for (let i = 0; i < accountS.length; i++) {
    //   accountS[i].addEventListener('click', (e) => {
    //     console.log(accountS[i])
        this.onSelectAccount()
    //   })
    // }
  }

  /**
   * Метод доступен только авторизованным пользователям
   * (User.current()).
   * Если пользователь авторизован, необходимо
   * получить список счетов через Account.list(). При
   * успешном ответе необходимо очистить список ранее
   * отображённых счетов через AccountsWidget.clear().
   * Отображает список полученных счетов с помощью
   * метода renderItem()
   * */
  update() {
    if (User.current()) {
      Account.list(User.current(), (err, response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.renderItem(response.data[i]);
        }
      });
    }
  }

  /**
   * Очищает список ранее отображённых счетов.
   * Для этого необходимо удалять все элементы .account
   * в боковой колонке
   * */
  clear() {

  }

  /**
   * Срабатывает в момент выбора счёта
   * Устанавливает текущему выбранному элементу счёта
   * класс .active. Удаляет ранее выбранному элементу
   * счёта класс .active.
   * Вызывает App.showPage( 'transactions', { account_id: id_счёта });
   * */
  onSelectAccount(element) {
    console.log(element)
    // console.log(this.element)
    // console.log(this.element)
    // const deleteActive = document.querySelector('.active') 
    // if (deleteActive) {
    //   deleteActive.classList.remove('active')
    // }
    // const active = [...this.element.querySelectorAll('.account')]
    // console.log(active)
    // for (let i = 0; i < active.length; i++) {
    //   active[i].addEventListener('click', () => {
    //     active[i].classList.add('active')
    //   }) 
    // }
    // App.showPage( 'transactions', { account_id: this.element.id })
  }

  /**
   * Возвращает HTML-код счёта для последующего
   * отображения в боковой колонке.
   * item - объект с данными о счёте
   * */
  getAccountHTML(item) {
    return `
    <li class="active account" data-id="35">
      <a href="#">
          <span>${item.name}</span> /
          <span>${item.sum}</span>
      </a>
    </li>`
  }

  /**
   * Получает массив с информацией о счетах.
   * Отображает полученный с помощью метода
   * AccountsWidget.getAccountHTML HTML-код элемента
   * и добавляет его внутрь элемента виджета
   * */
  renderItem(item) {
    this.element.insertAdjacentHTML('beforeEnd', this.getAccountHTML(item))
  }
}


