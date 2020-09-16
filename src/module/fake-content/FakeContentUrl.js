import ParseHtml from '../parse-html/ParseHtml';

export default class FakeContentUrl {
    headingFake = [];
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
            this.fakeHeading(headings);
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
        this.headingFake = headingFake;
    }
    fakeP(headings) {
        let headingFake = {} 
        for (const htag in headings) {
            var arrayH = [];
            headings[htag].forEach(itemdata => {
                arrayH.push(itemdata);
            });
            headingFake[htag] = arrayH;
        }
        this.headingFake = headingFake;
    }
}