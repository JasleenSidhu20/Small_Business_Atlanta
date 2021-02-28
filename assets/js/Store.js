class Store{
/** 
    var name;
    var address;
    var url;
    var description;
**/
    constructor(name, address, url, description) {
        if (name == null) {
            this.name = "";
        } else {
            this.name = name;
        }
        if (address == null) {
            this.address = "";
        } else {
            this.address = address;
        }
        if (url == null) {
            this.url = "";
        } else {
            this.url = url;
        }
        if (description == null) {
            this.description = "";
        } else {
            this.description = description;
        }  
    }
}