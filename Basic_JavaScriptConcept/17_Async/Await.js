async function loadData() {

    try {

        const data =
            await getData();

        console.log(data);

    } catch(error) {

        console.log(error);

    }

}