//Nav Bar Logic

const menuIcon = document.getElementById("navIcon");
const navlist = document.getElementsByTagName("span")[0]

let navtoggle = true;

menuIcon.addEventListener("click", function() {

console.log("testing 5")


navtoggle = !navtoggle;

if (navtoggle == true){

navlist.className = "";

} else if ( navtoggle == false)
{
    navlist.className = "disapear";
}

});





let contentProducer = [ {
    pfp: "https://pbs.twimg.com/profile_images/1479260227149176833/pO5uOqa6_400x400.jpg",
    ProducerID: 206519,
    Username: "gogoDiego",
    Name: "Diego Torres",
    DOB: "sep 4 2004",
    Banking: "000-000-000",

}, ];


let contentconsumer = [

    {    
    pfp: "https://pbs.twimg.com/profile_images/1479260227149176833/pO5uOqa6_400x400.jpg",
    ConsumerID: 206519,
    Username: "gogoDiego",
    Name: "Diego Torres",
    DOB: "sep 4 2004",
    Banking: "000-000-000",
},
{    
    pfp: "https://pbs.twimg.com/profile_images/1378852200332558342/ixUMST1I_400x400.jpg",
    ConsumerID: 112233,
    Username: "MoeMoe_13",
    Name: "Moe",
    DOB: "mar 10 1993",
    Banking: "999-999-999",
},
{    
    pfp: "https://pbs.twimg.com/profile_images/1520776623972356097/DKttTgse_400x400.jpg",
    ConsumerID: 998877,
    Username: "BNBdabest",
    Name: "Changpeng Zhao",
    DOB: "sep 10 1977",
    Banking: "55-555-555",
},

{    
    pfp: "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg",
    ConsumerID: 893212,
    Username: "ETHBoy",
    Name: "Vitalik Buterin",
    DOB: "jan 31 1994",
    Banking: "032-130-983",
},

{    
    pfp: "https://pbs.twimg.com/profile_images/1548643932711657472/up1Xs2x5_400x400.jpg",
    ConsumerID: 314312,
    Username: "Defiguy",
    Name: "jake thompson",
    DOB: "feb 12 1990",
    Banking: "123-230-308",
},


];












//producer profile 
const producerPFP = document.getElementById("producerpfp");
const producerid = document.getElementById("producerid");
const producerusername = document.getElementById("producerusername");
const producername = document.getElementById("producername");
const producerDOB = document.getElementById("producerDOB");
const producerbank = document.getElementById("producerbank");

//consumer profile 
const consumerPFP = document.getElementById("consumerpfp");
const consumerid = document.getElementById("consumerid");
const consumerusername = document.getElementById("consumerusername");
const consumername = document.getElementById("consumername");
const consumerDOB = document.getElementById("consumerDOB");
const consumerbank = document.getElementById("consumerbank");





let contentConsumerPicker = 1;
consumerSlideLogic(contentConsumerPicker);

let contentProducerPicker = 0;
producerSlideLogic(contentProducerPicker);


const leftProfileSlideBtn = document.getElementById("left");
const rightProfileSlideBtn = document.getElementById("right");


leftProfileSlideBtn.onclick = function(){
  
 contentConsumerPicker -= 1;

    if (contentConsumerPicker <= -1){
        contentConsumerPicker = contentconsumer.length - 1;
    }
    consumerSlideLogic(contentConsumerPicker);

    console.log(contentConsumerPicker)



}

rightProfileSlideBtn.onclick = function(){

    contentConsumerPicker += 1;

    if (contentConsumerPicker > contentconsumer.length - 1){
        contentConsumerPicker = 0
    }
    consumerSlideLogic(contentConsumerPicker);

}

function consumerSlideLogic (ccp) {

    //ccp stands for contentConsumerPicker

    consumerPFP.src = contentconsumer[ccp].pfp;
    consumerid.innerHTML = "Consumer ID: " + contentconsumer[ccp].ConsumerID;
    consumerusername.innerHTML = "Username: " + contentconsumer[ccp].Username;
    consumername.innerHTML = "Name: " + contentconsumer[ccp].Name;
    consumerDOB.innerHTML = "Date of Birth: " + contentconsumer[ccp].DOB;
    consumerbank.innerHTML = "Banking Info: " + contentconsumer[ccp].Banking;
}


function producerSlideLogic (contentProducerPicker) {

    producerPFP.src = contentProducer[contentProducerPicker].pfp;
    producerid.innerHTML = "Producer ID: " + contentProducer[contentProducerPicker].ProducerID;
    producerusername.innerHTML = "Username: " + contentProducer[contentProducerPicker].Username;
    producername.innerHTML = "Name: " + contentProducer[contentProducerPicker].Name;
    producerDOB.innerHTML = "Date of Birth: " + contentProducer[contentProducerPicker].DOB;
    producerbank.innerHTML = "Banking Info: " + contentProducer[contentProducerPicker].Banking;
}



//display original producer copy (pre-freon modification)
var imageLoader = document.getElementById("imageLoader");
var consumerContent = "";

imageLoader.addEventListener("change", function (){

    let reader = new FileReader();

    reader.addEventListener("load", () => {

      const uploaded_image = reader.result;
      document.getElementById("producerdisplay").style.backgroundImage = `url(${uploaded_image})`;

    });

    reader.readAsDataURL(this.files[0]);
    
});















// var imageLoader = document.getElementById('imageLoader'); this is already declared for the first image to load


    imageLoader.addEventListener('change', handleImage, false);


var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');

//edit message here 



let messageInput = contentconsumer[((contentConsumerPicker))].ConsumerID;

var textCanvas = document.getElementById('textCanvas');
var tctx = textCanvas.getContext('2d');


function messagereseter (){

    return messageInput = contentconsumer[((contentConsumerPicker))].ConsumerID;

    }





function handleImage(e){


messagereseter();

    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            textCanvas.width= img.width;
            textCanvas.height= img.height;
            tctx.font = "30px Arial";
    var messageText = (messageInput) ? messageInput : 'Hello';
            tctx.fillText(messageText,10,50);
            ctx.drawImage(img,0,0);
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var textData = tctx.getImageData(0, 0, canvas.width, canvas.height);
            var pixelsInMsg = 0;
                pixelsOutMsg = 0;
            for (var i = 0; i < textData.data.length; i += 4) {
                if (textData.data[i+3] !== 0) {
                    if (imgData.data[i+1]%10 == 7) {
                        //do nothing, we're good
                    }
                    else if (imgData.data[i+1] > 247) {
                        imgData.data[i+1] = 247;
                    }
                    else {
                        while (imgData.data[i+1] % 10 != 7) {
                            imgData.data[i+1]++;
                        }
                    }
                    pixelsInMsg++;
                }
                else {
                    if (imgData.data[i+1]%10 == 7) {
                        imgData.data[i+1]--;
                    }
                    pixelsOutMsg++;
                }
            }
            console.log('pixels within message borders: '+ pixelsInMsg);
            console.log('pixels outside of message borders: '+ pixelsOutMsg);
            ctx.putImageData(imgData, 0, 0);
        };
        img.src = event.target.result;
    };



    reader.readAsDataURL(e.target.files[0]);




    console.log(messageInput)
    console.log("encoding successful")


}













//we need the event listener to trigger the masterencoding function, to trigger it for every event







// //handle decoding
var decodeCanvas = document.getElementById('imageCanvas2');
var dctx = decodeCanvas.getContext('2d');
var imageLoader2 = document.getElementById('imageLoader2');
    imageLoader2.addEventListener('change', handleImage2, false);




function handleImage2(e){
    console.log('handle image 2');
    var reader2 = new FileReader();
    reader2.onload = function(event){
        console.log('reader2 loaded');
        var img2 = new Image();
        img2.onload = function(){
            console.log('img2 loaded');
            decodeCanvas.width = img2.width;
            decodeCanvas.height = img2.height;
            dctx.drawImage(img2,0,0);
            var decodeData = dctx.getImageData(0, 0, decodeCanvas.width, decodeCanvas.height);
            for (var i = 0; i < decodeData.data.length; i += 4) {
                if (decodeData.data[i+1] % 10 == 7) {
                    decodeData.data[i] = 0;
                    decodeData.data[i+1] = 0;
                    decodeData.data[i+2] = 0;
                    decodeData.data[i+3] = 255;
                }
                else {
                    decodeData.data[i+3] = 0;
                }
            }
            dctx.putImageData(decodeData, 0, 0);
        };
        img2.src = event.target.result;
    };
    reader2.readAsDataURL(e.target.files[0]);
}
