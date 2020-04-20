window.onload = function () {
    $("form").send.addEventListener("click", (event) => {
        let errors = [];
        let inputs = Array.from($("form").getElementsByTagName("input"));
        inputs.filter(i => i.required).forEach((i) => {
            if (i.type === 'text') {
                if (!new RegExp(i.getAttribute("pattern")).test(i.value)) {
                    const err = i.name;
                    errors.push(err);
                }
            }
            if (i.type === 'number') {
                if (!(i.getAttribute('min') <= i.value && i.value < i.getAttribute('max'))) {
                    const err = i.name;
                    errors.push(err);
                }
            }

            if(i.type === 'checkbox') {
                if (!i.checked) {
                    const err = i.name;
                    errors.push(err);
                }
            }
        })

        if($("form").haveAuto.checked) {
            if (!new RegExp($('form').autoId.getAttribute("pattern")).test($('form').autoId.value)) {
                errors.push('rendszam');
            }
        }


        if(errors.length === 0)
            $('form').submit();
        else
        $('hiba').innerText = errors.reduce((acc, err) => acc + " " + err, 'Hibás mezők:');

    });

    $("form").haveAuto.addEventListener('click', (event) => {
        if($("form").haveAuto.checked) $("form").autoId.style.display = 'inline-block';
        else $("form").autoId.style.display = 'none';
    })
}