function calculateCirclePointsBresenhamReduxed(context, x, y, r) {
    let x1 = 0;
    let y1 = r;
    let d = 0;
    let signY = true; // Inicialización de signY antes del bucle

    while (x1 <= y1) {
        let j = 0;

        for (let i = 0; i <= 8; i++) {
            let signX = i % 2 === 0;
            signY = j < 2 ? signY : !signY;
            j = j++ > 1 ? 0 : j++;

            let newX = genericPoint(x, x1, y1, i, signX);
            let newY = genericPoint(y, y1, x1, i, signY);
            context.fillRect(newX, newY, 1, 1);
        }

        if (d > 0) {
            d -= y1--;
        }
        d += x1++;
    }
}


function genericPoint(i, j, k, h, oppMinus) {
    let calc = (h < 4) ? j : k;
    calc = oppMinus ? -1 * calc : calc;
    return i + calc;
}

window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

     calculateCirclePointsBresenhamReduxed(context, 200, 200, 200);

    for (let i = 300; i >= 100; i -= 200) {
        calculateCirclePointsBresenhamReduxed(context, i, 200, 100);
    }

    for (let i = 350; i >= 50; i -= 100) {
        calculateCirclePointsBresenhamReduxed(context, i, 200, 50);
    }

    for (let i = 375; i >= 25; i -= 50) {
        calculateCirclePointsBresenhamReduxed(context, i, 200, 25);
    }

    for (let i = 388; i >= 12; i -= 25) {
        calculateCirclePointsBresenhamReduxed(context, i, 200, 12);
    }
};

