import { ONE, OTHER } from "./constants";

export default {
  rtl: false,

  pluralForm: function pluralForm(n) {
    if (n === 1) {
      return ONE;
    }
    return OTHER;
  }
};