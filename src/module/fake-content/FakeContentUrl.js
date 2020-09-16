import ParseHtml from '../parse-html/ParseHtml';

export default class FakeContentUrl {
    heading = [];
    pElement = [];
    linkInfo = [];
    
	constructor(path = '') {
		this.path = path;
	}
 	parseAll() {
 		var partHtml1 = new ParseHtml();
        partHtml1.parseAll().then(result => {
            var headings, p, linkInfo;
            [headings, p, linkInfo] = result;
            this.fakeHeading(linkInfo);
            this.fakeP();
            this.fakeLinkInfo();
            return [this.heading, this.pElement, this.linkInfo];
        });
 	}
    fakeHeading(headings) {
        let headingFake = {} 
        for (const htag in headings) {
            var arrayH = [];
            headings[htag].forEach(itemdata => {
                arrayH.push(itemdata);
            });
            headingFake[htag] = arrayH;
        }
        this.heading = headingFake;
    }
    fakeP(pElement) {
        this.pElement = pElement;
    }
    fakeLinkInfo(linkInfo) {
        this.linkInfo = linkInfo;
    }
}