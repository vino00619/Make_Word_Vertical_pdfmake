//Before using the below code, read the README.md

writeRotatedText = function(text) {
        var ctx, canvas = document.createElement('canvas');
        // I am using predefined dimensions so either make this part of the arguments or change at will 
        canvas.width = 70;
        canvas.height = 850;
        ctx = canvas.getContext('2d');
        ctx.font = '50pt Arial';
        ctx.save();
        ctx.translate(70,850);
        ctx.rotate(-0.5*Math.PI);
        ctx.fillStyle = '#000';
        ctx.fillText(text , 0, 0);
        ctx.restore();
        return canvas.toDataURL();
      };

var tableBody = [
 [{image: writeRotatedText('Sample Vertival Text'), fit:[100,130], alignment: 'center'}]
];
