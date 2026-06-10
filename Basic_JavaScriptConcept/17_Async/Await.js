async function loadData() {

    try {

        const data =
            await getData();

        console.log(data);

    } catch(error) {

        console.log(error);

    }

}

function getData() {

    return new Promise((resolve, reject) => {   

    });

}

loadData();
