class HelperService {
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    fNumber(number){
        return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(number)
    }

}
export default new HelperService();
