

export default class GotService{
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    };

    getAllCharacters(){
        return this.getResource("/characters?page=5&pageSize=10");
    }

    getCharacterById(id){
        return this.getResource(`/characters/${id}`);
    }

    getAllHouses(){
        return this.getResource("/api/houses");
    }

    getHouseById(id){
        return this.getResource(`/api/houses${id}`);
    }

    getAllBooks(){
        return this.getResource("/api/books");
    }

    getBookById(id){
        return this.getResource(`/api/books${id}`);
    }
}

const got = new GotService();

got.getAllCharacters()
    .then(res=>{
        res.forEach(item=>console.log(item.name));
    })

got.getCharacterById(130)
    .then(res=>console.log(res));
