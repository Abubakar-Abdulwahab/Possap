import numeral from 'numeral';
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

}
export default new HelperService();
