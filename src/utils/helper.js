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

}
export default new HelperService();
