var intervalId;

function tick() {
    $('elso').szamlalo.value = Number($('elso').szamlalo.value) + 1;
    intervalId = setTimeout(tick, $('elso').time.value);
}

window.onload = () => {
    $('elso').start.addEventListener('click', () => {
        if ($('elso').nulla.checked) { $('elso').szamlalo.value = 0; }
        if (!intervalId) { intervalId = setTimeout(tick, $('elso').time.value); }
    });
    $('elso').stop.addEventListener('click', () => {
        clearTimeout(intervalId);
        intervalId = null;
    });
}