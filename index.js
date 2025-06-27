const fs = require('fs');
const superagent = require('superagent');

//CALLBACK HELL
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed:  ${data}`);

  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
    if (err) return console.log(err.message);
    console.log(res.body.message);

    fs.writeFile('dog-img.txt', res.body.message, (err) => {
      if (err) return console.log(err.message);
      console.log('dog image save to file');
    });
  });
});

/* EL PROBLEMA CON ESTE CÓDIGO ES QUE, AL NO MANEJAR JS ASYNCRONO, SE TIENEN CALLBACKS DENTRO
DE OTROS CALLBACKS Y ESO NO ES BUENO*/
