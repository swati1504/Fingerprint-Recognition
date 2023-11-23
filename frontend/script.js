const callApi = async () => {
    const inputElem = document.getElementById("inputFile");
    const parentInput = document.getElementById("parent");
    const button = document.querySelector('button');
    if (inputElem.files.length === 1) {
        imageSrc = '../data/test/' + inputElem.files[0].name;

        const divElement1 = document.createElement('div');
        const imgElement1 = document.createElement('img');
        imgElement1.src = imageSrc;
        imgElement1.alt = '';
        imgElement1.style.height = '20vh';
        const paraElem1 = document.createElement('p');
        paraElem1.style.textAlign = 'center';
        paraElem1.style.fontSize = '18px';
        paraElem1.innerText = 'test/' + inputElem.files[0].name;
        divElement1.appendChild(imgElement1)
        divElement1.appendChild(paraElem1)

        parentInput.classList.add("loading");
        button.disabled = true;
        inputElem.disabled = true;
        const questionDiv = document.getElementById('question');
        questionDiv.appendChild(divElement1);
        try {
            const response = await fetch('http://localhost:3000/submit', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ imageName: inputElem.files[0].name })
            });
            if (response.status === 200) {
                const data = await response.json();

                imageSrc = '../data/train/' + data + ' (1).bmp';

                const divElement = document.createElement('div')
                const imgElement = document.createElement('img');
                imgElement.src = imageSrc;
                imgElement.alt = '';
                imgElement.style.height = '20vh';
                const paraElem = document.createElement('p');
                paraElem.style.textAlign = 'center';
                paraElem.style.fontSize = '18px';
                paraElem.innerText = 'UserId: ' + data;

                divElement.appendChild(imgElement)
                divElement.appendChild(paraElem)


                const answerDiv = document.getElementById('answer');
                answerDiv.appendChild(divElement);
            } else {
                alert("Some error occured.Make sure the file is only .bmp format.")
                const toBeRemoved = questionDiv.lastChild;
                questionDiv.removeChild(toBeRemoved)
            }
        } catch {
            alert("Internal Server error")
            const toBeRemoved = questionDiv.lastChild;
            questionDiv.removeChild(toBeRemoved)
        }
    } else {
        alert("Select only one file");

    }
    parentInput.classList.remove("loading")
    button.disabled = false;
    inputElem.disabled = false;
}
