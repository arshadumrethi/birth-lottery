const myList = document.getElementById("my-list")
const mySentence = document.getElementById("my-sentence")
const myBtn = document.getElementById("run-sim")

const countries = ['India', 'China', 'Nigeria', 'Pakistan', 'Indonesia', 'Ethiopia', 'United States', 'Bangladesh', 'DR Congo', 'Egypt', 'Brazil', 'Philippines','Mexico', 'Tanzania', 'Uganda', 'Russia', 'Sudan', 'Afghanistan', 'Vietnam', 'Angola', 'Iran', 'Turkey', 'Kenya', 'Iraq', 'Mozambique', 'South Africa', 'Niger', 'Japan', 'Myanmar', 'Algeria', 'Ghana', 'Cameroon', 'Mali', 'Madagascar', 'Yemen', 'United Kingdom', 'Ivory Coast', 'Colombia', 'Malawi', 'Burkina Faso', 'France', 'Zambia', 'Thailand', 'Argentina', 'Chad', 'Germany', 'Morocco', 'Somalia','Malaysia', 'Peru', 'Nepal', 'Senegal', 'Uzbekistan', 'Saudi Arabia', 'Venezuela', 'Zimbabwe', 'Italy', 'Burundi', 'Guinea', 'Guatemala', 'Ukraine', 'Benin', 'South Korea', 'Spain', 'South Sudan', 'Rwanda', 'Canada','Cambodia', 'Syria', 'North Korea', 'Poland', 'Kazakhstan', 'Sri Lanka', 'Ecuador', 'Australia', 'Sierra Leone', 'Togo', 'Haiti', 'Chile', 'Bolivia', 'Jordan', 'Tajikistan', 'Honduras', 'Papua New Guinea', 'Tunisia', 'Dominican Republic', 'Liberia','Taiwan', 'Republic of the Congo', 'Netherlands', 'Laos', 'Central African Republic', 'Romania', 'Israel', 'Azerbaijan', 'Kyrgyzstan', 'Mauritania', 'Belgium', 'Oman', 'Sweden', 'Cuba', 'Paraguay', 'Libya', 'Nicaragua', 'Turkmenistan', 'El Salvador', 'Eritrea', 'Czech Republic', 'United Arab Emirates', 'Lebanon', 'Belarus', 'Switzerland', 'Greece', 'Austria', 'Hungary', 'Portugal', 'Kuwait', 'Costa Rica', 'Serbia', 'Panama', 'Guinea-Bissau', 'Namibia', 'Ireland', 'Norway', 'Hong Kong', 'New Zealand', 'Denmark', 'Mongolia', 'Finland', 'Bulgaria', 'Slovakia', 'Lesotho', 'Botswana', 'Singapore', 'Jamaica', 'Georgia', 'Equatorial Guinea', 'Uruguay', 'Moldova', 'Timor-Leste', 'Albania', 'Armenia', 'Croatia', 'Bosnia and Herzegovina', 'Qatar', 'Lithuania', 'Djibouti', 'Bahrain', 'North Macedonia', 'Comoros', 'Slovenia', 'Latvia', 'Trinidad and Tobago', 'Solomon Islands', 'Fiji', 'Mauritius', 'Bhutan', 'Estonia', 'Guyana', 'Cape Verde', 'Belize', 'Suriname', 'Maldives', 'Montenegro', 'Brunei', 'Vanuatu', 'Luxembourg', 'Sao Tome and Principe', 'Macau', 'Iceland', 'Malta', 'New Caledonia', 'French Polynesia', 'Samoa', 'Barbados', 'Guam', 'Kiribati', 'Saint Lucia', 'Tonga', 'Micronesia', 'Grenada', 'Antigua and Barbuda', 'Saint Vincent and the Grenadines', 'Marshall Islands', 'Seychelles', 'Aruba', 'United States Virgin Islands', 'American Samoa', 'Isle of Man', 'Northern Mariana Islands', 'Greenland', 'Cayman Islands', 'Faroe Islands', 'Bermuda', 'Saint K']
const myWeights = [0.1807,0.1212,0.0516,0.0337,0.0305,0.0294,0.0286,0.0215,0.021,0.0208,0.0206,0.018,0.0164,0.0151,0.0139,0.0108,0.0107,0.0104,0.0103,0.0103,0.0103,0.0091,0.0086,0.0086,0.0084,0.0083,0.0076,0.007,0.0067,0.0067,0.0066,0.0066,0.0062,0.0061,0.0058,0.0057,0.0056,0.0056,0.0055,0.0055,0.0055,0.0054,0.0053,0.0052,0.005,0.005,0.0045,0.0045,0.0043,0.0041,0.0039,0.0039,0.0039,0.0038,0.0037,0.0036,0.0036,0.0035,0.0034,0.0031,0.003,0.003,0.003,0.0029,0.0029,0.0027,0.0027,0.0026,0.0026,0.0026,0.0024,0.0023,0.0022,0.0022,0.0021,0.002,0.0019,0.0018,0.0018,0.0018,0.0017,0.0015,0.0015,0.0015,0.0014,0.0014,0.0014,0.0014,0.0013,0.0013,0.0012,0.0012,0.0012,0.0011,0.0011,0.001,0.001,0.0009,0.0009,0.0009,0.0008,0.0008,0.0008,0.0008,0.0008,0.0007,0.0007,0.0007,0.0007,0.0007,0.0007,0.0006,0.0006,0.0006,0.0006,0.0006,0.0006,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0004,0.0004,0.0004,0.0004,0.0004,0.0004,0.0004,0.0004,0.0004,0.0003,0.0003,0.0003,0.0003,0.0003,0.0003,0.0003,0.0003,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.00009,0.00009,0.00009,0.00009,0.00008,0.00008,0.00008,0.00007,0.00007,0.00007,0.00006,0.00006,0.00006,0.00005,0.00005,0.00005,0.00004,0.00004,0.00004,0.00003,0.00003,0.00003,0.00002,0.00002,0.00002,0.00001,0.00001,0.00001];

myBtn.addEventListener('click', function () {   
    render()
})

function render() {
    myList.innerHTML = ""
    mySentence.textContent = `The 4 children were born in`
    myList.innerHTML += `<li id="first">${weighted_random(countries, myWeights)}</li>
                        <li id="second">${weighted_random(countries, myWeights)}</li>
                        <li id="third">${weighted_random(countries, myWeights)}</li>
                        <li id="fourth">${weighted_random(countries, myWeights)}</li>`              
    
}

function weighted_random(items, weights) {
    var i;

    for (i = 0; i < weights.length; i++)
        weights[i] += weights[i - 1] || 0;

    var random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;

    return items[i];
}



