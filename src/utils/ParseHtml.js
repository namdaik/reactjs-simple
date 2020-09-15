import axios from 'axios';
import * as Config from './../const';
import callApi from './apiCaller';

export default class ParseHtml {
	constructor(path = '') {
		this.path = path;
	}
 	parseAll() {
 		callApi(this.path).then(res => {
    	   this.parse(res.data)
    	return res.data;
	 	});
 	}
    parse(html) {
        var html = new DOMParser().parseFromString(html, 'text/html');
        this.htmlBody = html.getElementsByTagName('body')[0];
        var headingElement = this.parseHeadingElements();
        var pElement = this.getTextElementsByTag('p');
        var linkInfo = this.getLinkPage();
        console.log(headingElement, pElement, linkInfo);
    }
    parseHeadingElements() {
    	let Headings = {};
    	for (let i = 6; i >= 1; i--) {
    		let hLength = this.htmlBody.getElementsByTagName('h' + i).length;
    		Headings['h' + i] = this.getTextElementsByTag('h' + i);
    	}
    	return Headings;
    }
    getParaGraphElements() {
    	let pLength = this.htmlBody.getElementsByTagName('p').length;
		let pElement = [];
		for (let j = pLength - 1; j >= 0; j--) {
			let innerText = this.htmlBody.getElementsByTagName('p')[j].innerText;
			console.log(innerText);
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
			console.log(innerText);
			pElement.push(innerText);
		}
    	return pElement;
    }

}