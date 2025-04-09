export namespace main {
	
	export class Notes {
	    title: string;
	    desc: string;
	
	    static createFrom(source: any = {}) {
	        return new Notes(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.desc = source["desc"];
	    }
	}

}

