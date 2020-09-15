import ParseHtml from '../parse-html/ParseHtml';

export default class FakeContentUrl {
    headingElement = [];
    pElement = [];
    linkInfo = [];
    
	constructor(path = '') {
		this.path = path;
	}
 	parseAll() {
 		var partHtml1 = new ParseHtml();
        
        partHtml1.parseAll().then(result => {
            var headingElement, pElement, linkInfo;
            [headingElement, pElement, linkInfo] = result;
            console.log(headingElement, pElement, linkInfo);
        });
 	}
}