<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>The Quadratic equation</title>
        <style>
            body {
                background-color: #000000; 
                color: #00FF00;
            }
        </style>
    </head>
    <body>
        <script type="text/javascript">
            alert("Enter numbers a, b and c to solve the quadratic equation ax2 + bx + c = 0:");
            var x = prompt("Enter the first number a");
            var y = prompt("Enter the second number b");
            var z = prompt("Enter the third number c");
            var a = parseInt(x);
            var b = parseInt(y);
            var c = parseInt(z);
            var discriminant = (Math.pow(b,2) - 4 * a * c);
            if(discriminant == 0){
            x = - b / 2;
            document.write("The equation has one root x " + x);
            } else if(discriminant < 0) {
            document.write("The equation doesn't have solution.");
            } else {
            var x1 = (- b + Math.sqrt(discriminant)) / (2 * a);
            var x2 = (- b - Math.sqrt(discriminant)) / (2 * a);
            document.write("The equation has two roots x1 = " + x1 + " and " + "x2 = " + x2 + ".");
            }
    
        </script>
    </body>
</html>
