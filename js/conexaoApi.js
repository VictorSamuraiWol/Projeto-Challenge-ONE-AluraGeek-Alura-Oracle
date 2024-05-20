async function conectionApi() {
    const listaApi = await fetch('http://localhost:3000/products');
    if (!listaApi.ok) {
        throw new Error("Não foi possível conectar com a API.")
    }
    const listaApiJson = await listaApi.json();

    return listaApiJson;
}

async function addItemApi(nome, valor, imagem) {
    const listaApi = await fetch("http://localhost:3000/products", 
    { 
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: nome,
            valor: `R$ ${valor}`,
            imagem: imagem
        })
    });
    if (!listaApi.ok) {
        throw new Error("Não foi possível adicionar o produto na API.")
    }
    const listaApiJson = listaApi.json();

    return listaApiJson;
}

async function deleteProducts(id) {
     const listaApi = await fetch(`http://localhost:3000/products/${id}`, 
    { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            //  'Accept': 'application/json',
            //  'Access-Control-Allow-Origin': '*'
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
    //outra forma:
    // if (!listaApi.ok) {
    //     throw new Error("Não foi possível excluir o produto da API.")
    // }
    // const listaApiJson = listaApi.json();
    
    // return listaApiJson;
};

export const objectApi = {
    conectionApi,
    addItemApi,
    deleteProducts
}
