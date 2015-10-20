import Delegate from "dom-delegate";

// lifted from backbone
var delegateEventSplitter = /^(\S+)\s*(.*)$/;

class BaseView {
  constructor(options) {
    if(options && options.el) {
      this.setElement(options.el);
    }
  }

  get events() {}

  template() {}

  setElement(el) {
    this.el = el;
    this.delegateEvents();
  }

  delegateEvents() {
    if(this.events) {
      this._delegate = new Delegate(this.el);
      for(var key in this.events) {
        let evt = delegateEventSplitter.exec(key);
        this._delegate.on(evt[1], evt[2], this[this.events[key]]);
      }
    }
  }

  undelegateEvents() {
    if(this._delegate) {
      this._delegate.destroy();
      delete this._delegate;
    }
  }

  render() {}

  renderTemplate(template, data) {
    if(!data) {
      data = template;
      template = this.template;
    }
    this.el.innerHTML = typeof template === "function" ? template(data) : template;
  }

  remove() {
    this.undelegateEvents();
    this.el.remove();
  }
}


export default BaseView;
