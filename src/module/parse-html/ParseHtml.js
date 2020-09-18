import callApi from '../api-call/apiCaller';

export default class ParseHtml {
    htmlBody = '';
    path = '';
    
	constructor(path = '') {
		this.path = path;
	}
 	parseAll() {
        return new Promise((resolve, reject) => {
            callApi(this.path).then(res => {
                resolve(this.parse(res.data));
            });
        });
 		
 	}
    parse(htmlText) {
        let html = new DOMParser().parseFromString(htmlText, 'text/html');
        this.htmlBody = html.getElementsByTagName('body')[0];
        let headings = this.parseHeadingElements();
        let p = this.getTextElementsByTag('p');
        let linkInfo = this.getLinkPage();
        return [headings, p, linkInfo];
    }
    parseHeadingElements() {
    	let Headings = {};
    	for (let i = 6; i >= 1; i--) {
    		Headings['h' + i] = this.getTextElementsByTag('h' + i);
    	}
    	return Headings;
    }
    getParaGraphElements() {
    	let pLength = this.htmlBody.getElementsByTagName('p').length;
		let pElement = [];
		for (let j = pLength - 1; j >= 0; j--) {
			let innerText = this.htmlBody.getElementsByTagName('p')[j].innerText;
			pElement.push(innerText);
		}
    	return pElement;
    }
    getLinkPage() {
    	let pLength = this.htmlBody.getElementsByTagName('a').length;
		let linkInfo = [];
		for (let j = pLength - 1; j >= 0; j--) {
			let tagA = this.htmlBody.getElementsByTagName('a')[j];
			linkInfo.push({href : tagA.href, 'text' : tagA.innerText});
		}
    	return linkInfo;
    }
    getTextElementsByTag(tagName) {
    	let elementLength = this.htmlBody.getElementsByTagName(tagName).length;
		let pElement = [];
		for (let j = elementLength - 1; j >= 0; j--) {
			let innerText = this.htmlBody.getElementsByTagName(tagName)[j].innerText;
			pElement.push(innerText);
		}
    	return pElement;
    }

}