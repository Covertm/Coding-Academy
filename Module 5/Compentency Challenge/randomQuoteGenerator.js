var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getRandomQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        let apiString = "https://api.quotable.io/random?";
        let QuoteLengthInput = document.getElementById("quoteLength").value;
        let QuoteType = document.getElementById("Tags").value;
        let maxLength;
        if (parseInt(QuoteLengthInput) == 50) {
            maxLength = 99;
        }
        else if (parseInt(QuoteLengthInput) == 100) {
            maxLength = 199;
        }
        else {
            maxLength = 500;
        }
        apiString = apiString + "minLength=" + QuoteLengthInput + "&maxLength=" + maxLength + "&tags=" + QuoteType;
        const response = yield fetch(apiString);
        const jsonData = yield response.json();
        document.getElementById("Random-Quote").innerHTML = "";
        document.getElementById("Author").innerHTML = "";
        if (typeof (JSON.stringify(jsonData.content)) == "undefined") {
            document.getElementById("Random-Quote").innerHTML = "No quotes meet input criteria!";
            document.getElementById("Author").innerHTML = "";
        }
        else {
            document.getElementById("Random-Quote").innerHTML = JSON.stringify(jsonData.content);
            let Author = JSON.stringify(jsonData.author);
            let AuthorNoQ = Author.replace(/['"]+/g, "");
            document.getElementById("Author").innerHTML = "Author ~ " + AuthorNoQ;
        }
        return;
    });
}
function GetQuoteTypes() {
    return __awaiter(this, void 0, void 0, function* () {
        let apiString = "https://api.quotable.io/tags";
        const response = yield fetch(apiString);
        const jsonData = yield response.json();
        let tableref = document.getElementById("QuoteTypes");
        for (let i = 0; i < tableref.rows.length; i++) {
            document.getElementById("QuoteTypes").innerHTML = "";
        }
        for (let i = 0; i < jsonData.length; i++) {
            let QuoteType = jsonData[i].name;
            (tableref.insertRow(tableref.rows.length)).innerHTML = QuoteType;
        }
        return;
    });
}
export {};
