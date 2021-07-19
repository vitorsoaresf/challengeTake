const axios = require('axios');

// var express() = require('express');

axios.get('https://api.github.com/users/takenet/repos', {})
    .then((response,res) => {
        // console.log(response['data'][0]['language'])
        let repositorios = [];
        let repositoriosCsharp = [];
        for (let i = 0; i < response['data'].length; i++) {
            if (response['data'][i]['language'] === "C#") {
                repositorios.push(response['data'][i]);
            }
        }
        if (repositorios.length - 5 < 0) {
            return JSON.stringify(repositorios);
        } else {
            let i2 = 0;
            for (let i = 0; i < 5; i++) {
                repositoriosCsharp[i] = repositorios.pop();
            }
            // return JSON.stringify(repositoriosCsharp);
        }
        console.log(repositoriosCsharp);
    })
    .catch(error => {
        console.log(error)
    })
