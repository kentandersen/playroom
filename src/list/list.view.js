import BaseView from "../base/view"


class ListView extends BaseView {

  template(data) {
    var {navn} = data;

    var arr = [];
    for (var i = 0; i < 10; i++) {
      arr.push(`<li><a href="#">focus</a> string ${navn} text line 1
           string text line</li>`);
    };

    return `<ul> ${arr.join("")} </ul>`;
  }

  get events() {
    return {
      "click a": "clickhandler"
    }
  }

  render() {
    this.el.querySelector("a").focus();
    this.renderTemplate({navn: "Kenten"});
  }

  clickhandler() {
    console.log("ueee");
  }
}

export default ListView;
