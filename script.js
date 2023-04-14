const topText = document.querySelector('input.top');
const bottomText = document.querySelector('input.bottom');
const image = document.querySelector('input.image');
const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');


const submit = document.querySelector('input.submit');
submit.addEventListener('click', function() {
    if (checkInputs()) {
        generateMeme();
        form.reset();
    }
})


function generateMeme() {
    const newMeme = document.createElement('div');
    const top = document.createElement('div');
    const bottom = document.createElement('div');
    const remove = document.createElement('button');

    remove.addEventListener('click', function(event) {
        event.target.parentElement.remove();
    })

    top.classList.add('topText');
    bottom.classList.add('bottomText');
    remove.classList.add('remove');

    newMeme.style.backgroundImage = `url(${image.value})`;
    top.innerText = topText.value;
    bottom.innerText = bottomText.value;
    remove.innerText = 'Delete';
    newMeme.append(remove);
    newMeme.append(top);
    newMeme.append(bottom);
    gallery.append(newMeme);
}


function checkInputs() {
    if (topText.value === '' ||
        bottomText.value === '' ||
        image.value === '') {
            alert('Make sure all fields are populated before attempting to generate a meme!');
            return false;
        } else {
            return true;
        }
}



