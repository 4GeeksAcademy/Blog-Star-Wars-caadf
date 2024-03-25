/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: null,
            planets: null,
            vehicles: null,
            favorites: [],

            details: null
        },
        actions: {
            getPeople: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(response => response.json())
                    .then(datos => setStore({ people: datos }))
            },
            getPlanets: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(response => response.json())
                    .then(datos => setStore({ planets: datos }))
            },
            getVehicles: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then(response => response.json())
                    .then(datos => setStore({ vehicles: datos }))
            },
            getDetailsPeople: (id) => {
                const urls =  `https://swapi.dev/api/people/${id}/`
                fetch(urls)
                .then(response => response.json())
                .then(datos => setStore({ details: datos }))
            },
            getDetailsPlanets: (url) => {
                let urls = "https://swapi.dev/api/planets/" + url
                fetch(urls)
                .then(response => response.json())
                .then(datos => setStore({ details: datos }))
            },
            getDetailsVehicles: (url) => {
                let urls = "https://swapi.dev/api/vehicles/" + url
                fetch(urls)
                .then(response => response.json())
                .then(datos => setStore({ details: datos }))
            },
            addFavorites: (name, id ) => {
                const store = getStore();
                const newFavorite = { name, id};
                const newFavorites = [...store.favorites, newFavorite];
                setStore({ favorites: newFavorites });
              },
            
        }
    }
}

export default getStore