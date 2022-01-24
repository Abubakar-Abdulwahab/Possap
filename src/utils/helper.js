import numeral from "numeral";
class HelperService {
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    fNumber(number){
        return numeral(number).format();
    }
    fCurrency(number) {
        return '₦'  + new Intl.NumberFormat('en-NG', { maximumSignificantDigits: 3 }).format(number);
    }
      
    fPercent(number) {
        return numeral(number / 100).format('0.0%');
    }
    arrayToColumn(array){
        return array.map(e => {
            return {
              dataField: e,
              text: this.capitalizeFirstLetter(e),
              sort: true
            }
          })
    }

  fPercent(number) {
    return numeral(number / 100).format("0.0%");
  }
  formArrayToObject(arr) {
    const objTemplate = {};
    arr.forEach((e) => {
      if (e.type === "select") {
        objTemplate[e.name] = {
          type: e.type,
          label: e.title,
          value: e.value,
          required: e.required ? true : false,
          options: e.options,
        };
      } else {
        objTemplate[e.name] = {
          type: e.type,
          label: e.title,
          value: e.value,
          required: e.required ? true : false,
          disabled: e.disabled ? true : false,
        };
      }
    });
    return objTemplate;
  }
}
export default new HelperService();
