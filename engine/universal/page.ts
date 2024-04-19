class Page {
    data: any = {};

    setData (data: any) {
        this.data = data;
    }

    getData () {
        return this.data;
    }
}

const page = new Page();
export default page;