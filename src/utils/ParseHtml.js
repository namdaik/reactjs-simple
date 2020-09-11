import axios from 'axios';
import * as Config from './../const';
import callApi from './apiCaller';

export default class ParseHtml {
	constructor(path = '') {
		this.path = path;
	}
 	parseAll() {
 		callApi(this.path).then(res => {
    	var html = new DOMParser().parseFromString(res.data, 'text/html');
    	var htmlBody = html.getElementsByTagName('body')[0];
    	var headingElement = this.parseHeadingElements(htmlBody);
    	var pElement = this.getTextElementsByTag(htmlBody, 'p');
    	var linkInfo = this.getLinkPage(htmlBody);
    	console.log(headingElement, pElement,linkInfo);
    	return res.data;
	 	});
 	}
    parseHeadingElements(htmlBody) {
    	let Headings = {};
    	for (let i = 6; i >= 1; i--) {
    		let hLength = htmlBody.getElementsByTagName('h' + i).length;
    		Headings['h' + i] = this.getTextElementsByTag(htmlBody, 'h' + i);
    	}
    	return Headings;
    }

    getParaGraphElements(htmlBody) {
    	let pLength = htmlBody.getElementsByTagName('p').length;
		let pElement = [];
		for (let j = pLength - 1; j >= 0; j--) {
			let innerText = htmlBody.getElementsByTagName('p')[j].innerText;
			console.log(innerText);
			pElement.push(innerText);
		}
    	return pElement;
    }
    getLinkPage(htmlBody) {
    	let pLength = htmlBody.getElementsByTagName('a').length;
		let linkInfo = [];
		for (let j = pLength - 1; j >= 0; j--) {
			let tagA = htmlBody.getElementsByTagName('a')[j];
			linkInfo.push({href : tagA.href, 'text' : tagA.innerText});
		}
    	return linkInfo;
    }
    getTextElementsByTag(htmlBody, tagName) {
    	let elementLength = htmlBody.getElementsByTagName(tagName).length;
		let pElement = [];
		for (let j = elementLength - 1; j >= 0; j--) {
			let innerText = htmlBody.getElementsByTagName(tagName)[j].innerText;
			console.log(innerText);
			pElement.push(innerText);
		}
    	return pElement;
    }

}