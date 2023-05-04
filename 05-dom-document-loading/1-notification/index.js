export default class NotificationMessage {
  static currentNotification;

  element;
  timerId;

  constructor(
    message = "",
    {
      duration = 2000,
      type = "success"
    } = {}) {
    this.message = message;
    this.type = type;
    this.duration = duration;
    this.durationInSec = duration / 1000;

    this.render();
  }

  get template() {
    return `
      <div class="notification ${this.type}" style="--value:${this.durationInSec}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
            <div class="notification-header">${this.type}</div>
            <div class="notification-body">
                ${this.message}
            </div>
        </div>
      </div>
    `;
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;
  }

  show(parentNode = document.body) {
    if (NotificationMessage.currentNotification) {
      NotificationMessage.currentNotification.remove();
    }

    parentNode.append(this.element);

    this.timerId = setTimeout(() => {
      this.remove();
    }, this.duration);

    NotificationMessage.currentNotification = this;

  }

  remove() {
    clearTimeout(this.timerId);

    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
    NotificationMessage.currentNotification = null;

  }

}

