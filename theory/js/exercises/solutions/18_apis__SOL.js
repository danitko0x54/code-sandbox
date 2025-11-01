// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log("Lista de publicaciones:", data))
    .catch(error => console.log("Error al obtener publicaciones:", error))

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status} ${response.statusText}`)
        }
        return response.json()
    })
    .then(data => console.log("Lista de publicaciones con verificación:", data))
    .catch(error => console.log("Error:", error.message))

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log("Lista de publicaciones con async/await:", data)
    } catch (error) {
        console.log("Error al obtener publicaciones:", error)
    }
}

getPosts()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function createPost() {
    const newPost = {
        userId: 1,
        title: "Mi nueva publicación",
        body: "Este es el contenido de mi nueva publicación creada con JSONPlaceholder"
    }

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })

        const data = await response.json()
        console.log("Publicación creada:", data)
    } catch (error) {
        console.log("Error al crear la publicación:", error)
    }
}

createPost()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function updatePost() {
    const updatedPost = {
        userId: 1,
        id: 1,
        title: "Publicación completamente actualizada",
        body: "Este es el nuevo contenido que reemplaza completamente la publicación anterior"
    }

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        })

        const data = await response.json()
        console.log("Publicación actualizada con PUT:", data)
    } catch (error) {
        console.log("Error al actualizar la publicación:", error)
    }
}

updatePost()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function partialUpdatePost() {
    const partialUpdate = {
        title: "Sólo actualizamos el título con PATCH"
    }

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(partialUpdate)
        })

        const data = await response.json()
        console.log("Publicación parcialmente actualizada con PATCH:", data)
    } catch (error) {
        console.log("Error al actualizar parcialmente la publicación:", error)
    }
}

partialUpdatePost()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deletePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        })

        // Las respuestas DELETE generalmente no tienen contenido o retornan un objeto vacío
        if (response.ok) {
            console.log("Publicación eliminada correctamente. Estado:", response.status)
            const data = await response.json()
            console.log("Respuesta:", data)
        } else {
            console.log("Error al eliminar la publicación. Estado:", response.status)
        }
    } catch (error) {
        console.log("Error al eliminar la publicación:", error)
    }
}

deletePost()

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function getWeather(city) {
    // Normalmente necesitarías registrarte en OpenWeatherMap para obtener una API key
    // Esta es una API key de ejemplo, no funcionará realmente
    const apiKey = "tu_api_key_de_openweathermap"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`

    try {
        const response = await fetch(url)
        
        if (!response.ok) {
            throw new Error(`Error al obtener el clima: ${response.status}`)
        }
        
        const data = await response.json()
        console.log(`Clima en ${city}:`, data)
        console.log(`Temperatura: ${data.main.temp}°C`)
        console.log(`Descripción: ${data.weather[0].description}`)
    } catch (error) {
        console.log("Error:", error.message)
        console.log("Para usar esta función, necesitas obtener una API key válida de OpenWeatherMap")
    }
}

// Descomentar y agregar tu API key para probar
// getWeather("Madrid")

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokemonEvolutionChain(pokemonName) {
    try {
        // Paso 1: Obtener los datos básicos del Pokémon
        console.log(`Buscando información de ${pokemonName}...`)
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        
        if (!pokemonResponse.ok) {
            throw new Error(`No se encontró el Pokémon ${pokemonName}`)
        }
        
        const pokemonData = await pokemonResponse.json()
        console.log(`Datos básicos de ${pokemonData.name}:`)
        console.log(`Número: ${pokemonData.id}`)
        console.log(`Altura: ${pokemonData.height / 10} m`)
        console.log(`Peso: ${pokemonData.weight / 10} kg`)
        
        // Paso 2: Obtener los detalles de la especie
        const speciesUrl = pokemonData.species.url
        const speciesResponse = await fetch(speciesUrl)
        const speciesData = await speciesResponse.json()
        
        console.log(`\nDetalles de la especie de ${pokemonData.name}:`)
        const spanishDescription = speciesData.flavor_text_entries.find(
            entry => entry.language.name === "es"
        )
        console.log(`Descripción: ${spanishDescription ? spanishDescription.flavor_text : "No disponible en español"}`)
        
        // Paso 3: Obtener la cadena evolutiva
        const evolutionChainUrl = speciesData.evolution_chain.url
        const evolutionResponse = await fetch(evolutionChainUrl)
        const evolutionData = await evolutionResponse.json()
        
        console.log(`\nCadena evolutiva de ${pokemonData.name}:`)
        
        // Recorrer la cadena evolutiva
        let evoChain = []
        let currentEvolution = evolutionData.chain
        
        do {
            evoChain.push({
                name: currentEvolution.species.name,
                min_level: currentEvolution.evolution_details[0]?.min_level || 1
            })
            
            currentEvolution = currentEvolution.evolves_to[0]
        } while (currentEvolution && currentEvolution.hasOwnProperty("evolves_to"))
        
        // Mostrar la cadena evolutiva
        evoChain.forEach((evo, index) => {
            if (index === 0) {
                console.log(`Forma básica: ${evo.name}`)
            } else {
                console.log(`Evoluciona a: ${evo.name} (nivel ${evo.min_level || "?"})`) 
            }
        })
        
    } catch (error) {
        console.log("Error:", error.message)
    }
}

getPokemonEvolutionChain("pikachu")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API

// Para este ejercicio, necesitarías usar una herramienta externa como Postman o Thunder Client.
// Instrucciones:
// 1. Instala Postman (https://www.postman.com/downloads/) o la extensión Thunder Client en VSCode
// 2. Crea una nueva solicitud para probar estos endpoints de JSONPlaceholder:
//    - GET https://jsonplaceholder.typicode.com/posts
//    - POST https://jsonplaceholder.typicode.com/posts (con body JSON)
//    - PUT https://jsonplaceholder.typicode.com/posts/1 (con body JSON)
//    - DELETE https://jsonplaceholder.typicode.com/posts/1
// 3. Para el POST y PUT, usa un body como:
//    {
//      "title": "Título de prueba",
//      "body": "Contenido de prueba",
//      "userId": 1
//    }
// 4. Examina las respuestas, los códigos de estado y las cabeceras
