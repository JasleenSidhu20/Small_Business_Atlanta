public class Store{
    
    private String name;
    private String address;
    private String url;
    private String description;
    
    Store(String name, String address, String url, String description) {
        this.name = name;
        this.address = address;
        this.url = url;
        this.description = description;
    }

    public String getName() {
        return name;
    }
    public String getAddress() {
        return address;
    }
    public String getUrl() {
        return url;
    }
    public String getDescription() {
        return description;
    }
}