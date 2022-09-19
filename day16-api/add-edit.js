const submitBtn = document.querySelector('.submit-button');
const REQUEST_URL = 'https://js-post-api.herokuapp.com/api';

function showErr(selector, textErr) {
    const element = document.querySelector(selector);
    element.style.display = 'block';
    element.innerText = textErr;
}


function handleAddPost(event) {
    // cancel những cái sự kiện default
    event.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const description = document.querySelector('#description');

    console.log(title.value);

    if (!title.value) {
        showErr('.title-err', 'Title cannot empty');
    }
    if (!author.value) {
        showErr('.author-err', 'Author cannot empty');
    }
    if (!description.value) {
        showErr('.description-err', 'Description cannot empty');
    }
    try {
        const newPost = {
            author: author.value,
            title: title.value,
            description: description.value
        }

        fetch(`${REQUEST_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }).then(function (jsonData) {
            return jsonData.json();
        }).then(function (data) {
            console.log(data);
            window.location.href = 'detail.html?postId=' + data.id;
        })

    } catch (error) {
        console.log('error');
    }
    console.log('no error');
}

submitBtn.addEventListener('click', handleAddPost);