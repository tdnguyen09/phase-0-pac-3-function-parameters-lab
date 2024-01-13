function introduction(name){
    let phrase = "";
    phrase =`Hi, my name is ${name}.`
    return phrase;
}
 function introductionWithLanguage(name, language){
    let phrase = "";
    phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return phrase;
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    let phrase = "";
    phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return phrase;
}