
function ReadJSON() {
    const search = document.getElementById('search').value;
    const locals = [];

    fetch('./travel_recommendation_api.json').then(response => {
        return response.json();
    }).then(data => {
        //console.log(data);
        data.countries.forEach(element => {
            //console.log(element);
            element.cities.forEach(citie => {
                //console.log(citie.name);
                if(citie.name.toLowerCase().includes('sydney'))
                {
                    locals.push(citie);
                }
            })
        });
        data.temples.forEach(element => {
            if(element.name.toLowerCase().includes('sydney'))
            {
                locals.push(citie);
            }
        });
        data.beaches.forEach(element => {
            if(element.name.toLowerCase().includes('sydney'))
            {
                locals.push(citie);
            }
        });
        //console.log(locals);
        const content2 = document.getElementById('content2');
        content2.innerHTML = '';

        locals.forEach(element => {
            console.log(element.name);
            console.log(element.description);
            content2.innerHTML = `<img src="${element.imageUrl}" style="width:800px;height:500px;">
                <div id='localDesc'>
                    <h1 style="padding-left: 20px;">${element.name}</h1>
                    <h3 style="padding-left: 20px;">${element.description}</h3>
                </div>
                </br>`;
        });

        

    }).catch(err => {
        console.log(err);
    });
};

ReadJSON();