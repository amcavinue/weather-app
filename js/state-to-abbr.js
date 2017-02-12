// USAGE:
// abbrState('ny', 'name');
// --> 'New York'
// abbrState('New York', 'abbr');
// --> 'NY'
//
// https://gist.github.com/CalebGrove/c285a9510948b633aa47
module.exports = function (input, to){
    var states = [
        ['Arizona', 'az'],
        ['Alabama', 'al'],
        ['Alaska', 'ak'],
        ['Arkansas', 'ar'],
        ['California', 'ca'],
        ['Colorado', 'co'],
        ['Connecticut', 'ct'],
        ['Delaware', 'de'],
        ['Florida', 'fl'],
        ['Georgia', 'ga'],
        ['Hawaii', 'hi'],
        ['Idaho', 'id'],
        ['Illinois', 'il'],
        ['Indiana', 'in'],
        ['Iowa', 'ia'],
        ['Kansas', 'ks'],
        ['Kentucky', 'ky'],
        ['Louisiana', 'la'],
        ['Maine', 'me'],
        ['Maryland', 'md'],
        ['Massachusetts', 'ma'],
        ['Michigan', 'mi'],
        ['Minnesota', 'mn'],
        ['Mississippi', 'ms'],
        ['Missouri', 'mo'],
        ['Montana', 'mt'],
        ['Nebraska', 'ne'],
        ['Nevada', 'nv'],
        ['New Hampshire', 'nh'],
        ['New Jersey', 'nj'],
        ['New Mexico', 'nm'],
        ['New York', 'ny'],
        ['North Carolina', 'nc'],
        ['North Dakota', 'nd'],
        ['Ohio', 'oh'],
        ['Oklahoma', 'ok'],
        ['Oregon', 'or'],
        ['Pennsylvania', 'pa'],
        ['Rhode Island', 'ri'],
        ['South Carolina', 'sc'],
        ['South Dakota', 'sd'],
        ['Tennessee', 'tn'],
        ['Texas', 'tx'],
        ['Utah', 'ut'],
        ['Vermont', 'vt'],
        ['Virginia', 'va'],
        ['Washington', 'wa'],
        ['West Virginia', 'wv'],
        ['Wisconsin', 'wi'],
        ['Wyoming', 'wy'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(var i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(var i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
};