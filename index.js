const countryList = [
  { key: "AED", name: "United Arab Emirates", flag: "AE" },
  { key: "AFN", name: "Afghanistan", flag: "AF" },
  { key: "XCD", name: "Antigua and Barbuda", flag: "AG" },
  { key: "ALL", name: "Albania", flag: "AL" },
  { key: "AMD", name: "Armenia", flag: "AM" },
  { key: "ANG", name: "Netherlands Antilles", flag: "AN" },
  { key: "AOA", name: "Angola", flag: "AO" },
  { key: "AQD", name: "Antarctica", flag: "AQ" },
  { key: "ARS", name: "Argentina", flag: "AR" },
  { key: "AUD", name: "Australia", flag: "AU" },
  { key: "AZN", name: "Azerbaijan", flag: "AZ" },
  { key: "BAM", name: "Bosnia and Herzegovina", flag: "BA" },
  { key: "BBD", name: "Barbados", flag: "BB" },
  { key: "BDT", name: "Bangladesh", flag: "BD" },
  { key: "XOF", name: "Belgium", flag: "BE" },
  { key: "BGN", name: "Bulgaria", flag: "BG" },
  { key: "BHD", name: "Bahrain", flag: "BH" },
  { key: "BIF", name: "Burundi", flag: "BI" },
  { key: "BMD", name: "Bermuda", flag: "BM" },
  { key: "BND", name: "Brunei", flag: "BN" },
  { key: "BOB", name: "Bolivia", flag: "BO" },
  { key: "BRL", name: "Brazil", flag: "BR" },
  { key: "BSD", name: "Bahamas", flag: "BS" },
  { key: "NOK", name: "Bouvet Island", flag: "BV" },
  { key: "BWP", name: "Botswana", flag: "BW" },
  { key: "BYR", name: "Belarus", flag: "BY" },
  { key: "BZD", name: "Belize", flag: "BZ" },
  { key: "CAD", name: "Canada", flag: "CA" },
  { key: "CDF", name: "Congo-Kinshasa", flag: "CD" },
  { key: "XAF", name: "Central African Republic", flag: "CF" },
  { key: "CHF", name: "Switzerland", flag: "CH" },
  { key: "CLP", name: "Chile", flag: "CL" },
  { key: "CNY", name: "China", flag: "CN" },
  { key: "COP", name: "Colombia", flag: "CO" },
  { key: "CRC", name: "Costa Rica", flag: "CR" },
  { key: "CUP", name: "Cuba", flag: "CU" },
  { key: "CVE", name: "Cape Verde", flag: "CV" },
  { key: "CYP", name: "Cyprus", flag: "CY" },
  { key: "CZK", name: "Czech Republic", flag: "CZ" },
  { key: "DJF", name: "Djibouti", flag: "DJ" },
  { key: "DKK", name: "Denmark", flag: "DK" },
  { key: "DOP", name: "Dominican Republic", flag: "DO" },
  { key: "DZD", name: "Algeria", flag: "DZ" },
  { key: "ECS", name: "Ecuador", flag: "EC" },
  { key: "EEK", name: "Estonia", flag: "EE" },
  { key: "EGP", name: "Egypt", flag: "EG" },
  { key: "ETB", name: "Ethiopia", flag: "ET" },
  { key: "EUR", name: "European Union", flag: "EU" },
  { key: "FJD", name: "Fiji", flag: "FJ" },
  { key: "FKP", name: "Falkland Islands", flag: "FK" },
  { key: "GBP", name: "United Kingdom", flag: "GB" },
  { key: "GEL", name: "Georgia", flag: "GE" },
  { key: "GGP", name: "Guernsey", flag: "GG" },
  { key: "GHS", name: "Ghana", flag: "GH" },
  { key: "GIP", name: "Gibraltar", flag: "GI" },
  { key: "GMD", name: "Gambia", flag: "GM" },
  { key: "GNF", name: "Guinea", flag: "GN" },
  { key: "GTQ", name: "Guatemala", flag: "GT" },
  { key: "GYD", name: "Guyana", flag: "GY" },
  { key: "HKD", name: "Hong Kong", flag: "HK" },
  { key: "HNL", name: "Honduras", flag: "HN" },
  { key: "HRK", name: "Croatia", flag: "HR" },
  { key: "HTG", name: "Haiti", flag: "HT" },
  { key: "HUF", name: "Hungary", flag: "HU" },
  { key: "IDR", name: "Indonesia", flag: "ID" },
  { key: "ILS", name: "Israel", flag: "IL" },
  { key: "INR", name: "India", flag: "IN" },
  { key: "IQD", name: "Iraq", flag: "IQ" },
  { key: "IRR", name: "Iran", flag: "IR" },
  { key: "ISK", name: "Iceland", flag: "IS" },
  { key: "JMD", name: "Jamaica", flag: "JM" },
  { key: "JOD", name: "Jordan", flag: "JO" },
  { key: "JPY", name: "Japan", flag: "JP" },
  { key: "KES", name: "Kenya", flag: "KE" },
  { key: "KGS", name: "Kyrgyzstan", flag: "KG" },
  { key: "KHR", name: "Cambodia", flag: "KH" },
  { key: "KMF", name: "Comoros", flag: "KM" },
  { key: "KPW", name: "North Korea", flag: "KP" },
  { key: "KRW", name: "South Korea", flag: "KR" },
  { key: "KWD", name: "Kuwait", flag: "KW" },
  { key: "KYD", name: "Cayman Islands", flag: "KY" },
  { key: "KZT", name: "Kazakhstan", flag: "KZ" },
  { key: "LAK", name: "Laos", flag: "LA" },
  { key: "LBP", name: "Lebanon", flag: "LB" },
  { key: "LKR", name: "Sri Lanka", flag: "LK" },
  { key: "LRD", name: "Liberia", flag: "LR" },
  { key: "LSL", name: "Lesotho", flag: "LS" },
  { key: "LTL", name: "Lithuania", flag: "LT" },
  { key: "LVL", name: "Latvia", flag: "LV" },
  { key: "LYD", name: "Libya", flag: "LY" },
  { key: "MAD", name: "Morocco", flag: "MA" },
  { key: "MDL", name: "Moldova", flag: "MD" },
  { key: "MGA", name: "Madagascar", flag: "MG" },
  { key: "MKD", name: "North Macedonia", flag: "MK" },
  { key: "MMK", name: "Myanmar", flag: "MM" },
  { key: "MNT", name: "Mongolia", flag: "MN" },
  { key: "MOP", name: "Macau", flag: "MO" },
  { key: "MRO", name: "Mauritania", flag: "MR" },
  { key: "MTL", name: "Malta", flag: "MT" },
  { key: "MUR", name: "Mauritius", flag: "MU" },
  { key: "MVR", name: "Maldives", flag: "MV" },
  { key: "MWK", name: "Malawi", flag: "MW" },
  { key: "MXN", name: "Mexico", flag: "MX" },
  { key: "MYR", name: "Malaysia", flag: "MY" },
  { key: "MZN", name: "Mozambique", flag: "MZ" },
  { key: "NAD", name: "Namibia", flag: "NA" },
  { key: "XPF", name: "New Caledonia", flag: "NC" },
  { key: "NGN", name: "Nigeria", flag: "NG" },
  { key: "NIO", name: "Nicaragua", flag: "NI" },
  { key: "NPR", name: "Nepal", flag: "NP" },
  { key: "NZD", name: "New Zealand", flag: "NZ" },
  { key: "OMR", name: "Oman", flag: "OM" },
  { key: "PAB", name: "Panama", flag: "PA" },
  { key: "PEN", name: "Peru", flag: "PE" },
  { key: "PGK", name: "Papua New Guinea", flag: "PG" },
  { key: "PHP", name: "Philippines", flag: "PH" },
  { key: "PKR", name: "Pakistan", flag: "PK" },
  { key: "PLN", name: "Poland", flag: "PL" },
  { key: "PYG", name: "Paraguay", flag: "PY" },
  { key: "QAR", name: "Qatar", flag: "QA" },
  { key: "RON", name: "Romania", flag: "RO" },
  { key: "RSD", name: "Serbia", flag: "RS" },
  { key: "RUB", name: "Russia", flag: "RU" },
  { key: "RWF", name: "Rwanda", flag: "RW" },
  { key: "SAR", name: "Saudi Arabia", flag: "SA" },
  { key: "SBD", name: "Solomon Islands", flag: "SB" },
  { key: "SCR", name: "Seychelles", flag: "SC" },
  { key: "SEK", name: "Sweden", flag: "SE" },
  { key: "SGD", name: "Singapore", flag: "SG" },
  { key: "SHP", name: "Saint Helena", flag: "SH" },
  { key: "SLL", name: "Sierra Leone", flag: "SL" },
  { key: "SLS", name: "Saint Lucia", flag: "LC" },
  { key: "SLL", name: "Sierra Leone", flag: "SL" },
  { key: "SLS", name: "Saint Lucia", flag: "LC" },
  { key: "SYP", name: "Syria", flag: "SY" },
  { key: "SZL", name: "Swaziland", flag: "SZ" },
  { key: "THB", name: "Thailand", flag: "TH" },
  { key: "TJS", name: "Tajikistan", flag: "TJ" },
  { key: "TMT", name: "Turkmenistan", flag: "TM" },
  { key: "TND", name: "Tunisia", flag: "TN" },
  { key: "TOP", name: "Tonga", flag: "TO" },
  { key: "TRY", name: "Turkey", flag: "TR" },
  { key: "TTD", name: "Trinidad and Tobago", flag: "TT" },
  { key: "TWD", name: "Taiwan", flag: "TW" },
  { key: "TZS", name: "Tanzania", flag: "TZ" },
  { key: "UAH", name: "Ukraine", flag: "UA" },
  { key: "UGX", name: "Uganda", flag: "UG" },
  { key: "USD", name: "United States", flag: "US" },
  { key: "UYU", name: "Uruguay", flag: "UY" },
  { key: "UZS", name: "Uzbekistan", flag: "UZ" },
  { key: "VEB", name: "Venezuela", flag: "VE" },
  { key: "VND", name: "Vietnam", flag: "VN" },
  { key: "VUV", name: "Vanuatu", flag: "VU" },
  { key: "WST", name: "Samoa", flag: "WS" },
  { key: "YER", name: "Yemen", flag: "YE" },
  { key: "ZAR", name: "South Africa", flag: "ZA" },
  { key: "ZMK", name: "Zambia", flag: "ZM" },
  { key: "ZWL", name: "Zimbabwe", flag: "ZW" },
];

const fromElement = document.querySelector("#from-currency");
const toElement = document.querySelector("#to-currency");
const userAmount = document.querySelector("#amount");
const convertedAmount = document.querySelector("#converted-amount");
const fromFlag = document.querySelector("#from-flag");
const toFlag = document.querySelector("#to-flag");
countryList.forEach((country) => {
  let option1 = document.createElement("option");
  option1.innerText = `${country.key} - (${country.name})`;
  option1.value = country.key;
  fromElement.appendChild(option1);

  let option2 = document.createElement("option");
  option2.innerText = `${country.key} - (${country.name})`;
  option2.value = country.key;
  toElement.appendChild(option2);
});

let updateflag = () => {
  const fromCurrency = fromElement.value;
  const toCurrency = toElement.value;

  const fromCountry = countryList.find(
    (country) => country.key === fromCurrency
  );
  const toCountry = countryList.find((country) => country.key === toCurrency);
  if (fromCountry) {
    fromFlag.src = `https://flagsapi.com/${fromCountry.flag}/flat/64.png`;
  }
  if (toCountry) {
    toFlag.src = `https://flagsapi.com/${toCountry.flag}/flat/64.png`;
  }
};

updateflag();

fromElement.addEventListener("change", updateflag);
toElement.addEventListener("change", updateflag);

const ExchangeRate = async () => {
  if (!userAmount.value) {
    swal("", "Plz Enter an Amount", "info");
    return;
  }
  const fromCurrency = fromElement.value;
  const toCurrency = toElement.value;
  const amount = parseFloat(userAmount.value);

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/53b77df65e2f8d8790100748/latest/${fromCurrency}`
    );

    const data = await response.json();
    const rate = data.conversion_rates[toCurrency];

    const convertAmount = (amount * rate).toFixed(2);
    convertedAmount.value = convertAmount;
  } catch (error) {
    console.log(error);
    swal("", "Something went wrong", "error");
  }
};

let swappedcountry = () => {
  const temp = fromElement.value;
  fromElement.value = toElement.value;
  toElement.value = temp;
  updateflag();
};
