var playlistData = [
    {
      "id": "1",
      "title": "Android ve Air",
      "thumbnail": "video/Android Uygulama Geliştirme Eğitimleri 1 1 android ve air.mp4"
    },
    {
      "id": "2",
      "title": "APK Dosyası Nedir",
      "thumbnail": "video/Android Uygulama Geliştirme Eğitimleri 1 2 apk dsyası nedir.mp4",
      
    },
    {
        "id": "3",
        "title": "Android SDK Kurulum",
        "thumbnail": "video/Android Uygulama Geliştirme Eğitimleri 1 3 android sdk.mp4"
      },
    
    {
      "id": "4",
      "title": "Hangi Cihazlarda AİR Kullanılabilir",
      "thumbnail": "video/Android Uygulama Geliştirme Eğitimleri 2 1 proje hangi cihazlarda air kullanılabilir.mp4"
    },
    {
      "id": "5",
      "title": "Mobil Cihaz İle Uygulamayı Test Etmek",
      "thumbnail": "video/Android Uygulama Geliştirme Eğitimleri 2 2 mobil cihaz ile uygulamayı test etmek.mp4"
    },
    {
      "id": "5",
      "title": "Mobil Cihazı USB İle Bağlamak Ve Gerekli Ayar",
      "thumbnail": "video/Android Uygulama Geliştirme Eğitimleri 2 3 mobil cihazı usb ile bağlamak ve gerekli ayar.mp4"
    }
  ]
  
  
  var videoPlaySectionData = [
    {
      "id": "1",
       "title": "Android ve Air",
      "description":"Android ve AİR anlatımı.",
      "views": 22500,
      "vimeoId": 190062231,
      "isLiked": "true",
      "isSaved": "true"
    },
    {
      "id": "2",
      "title": "APK Dosyası Nedir",
      "description": "Apk dosyasıu tanıtım.",
      "views": 22200,
      "vimeoId": 192650599,
      "isLiked": "false",
      "isSaved": "false"
    },
    {
      "id": "3",
        "title": "Android SDK Kurulum",
      "description": "Android sdk kurulum ve anlatımı.",
      "views": 6297820,
      "vimeoId": 192834629,
      "isLiked": "false",
      "isSaved": "true"
    },
    {
      "id": "4",
      "title": "Hangi Cihazlarda AİR Kullanılabilir",
      "description": "THangi cihazalrda AİR olacağına dair biligi",
      "views": 38600,
      "vimeoId": 166409731,
      "isLiked": false,
      "isSaved": "true"
    },
    {
      "id": "5",
      "title": "Mobil Cihaz İle Uygulamayı Test Etmek",
      "description": "Mobi cihazlar ile test etmek.",
      "views": 998110,
      "vimeoId": 191626548,
      "isLiked": true,
      "isSaved": true
    },
    {
      "id": "6",
      "title": "Mobil Cihazı USB İle Bağlamak Ve Gerekli Ayar",
      "description": "mobil cihazlar ile test etmek için USB bağlamak ve çalıştırmak",
      "views": 30210,
      "vimeoId": 140657270,
      "isLiked": true,
      "isSaved": true
    },
  ];
 
//   video set function
defaultData();
var mainVideo=document.getElementById('mainVideo');
function defaultData(){
  for(var i=0;i<=0;i++){
    var mainVideo=document.getElementById('mainVideo');
    var views=document.getElementById('views');
    var likes=document.getElementById('likes');
    mainVideo.src=playlistData[i].thumbnail;
    views.innerHTML=`${videoPlaySectionData[i].views} Views`;
    var content=document.getElementById('content');
    content.innerHTML=`<h2 class="mt-2">${videoPlaySectionData[i].title}</h2>
    <p class="mt-2">${videoPlaySectionData[i].description}</p>`;
  }
  
}
function viewVideo(e,event){
  var mainVideo=document.getElementById('mainVideo');
  var views=document.getElementById('views');
  var likes=document.getElementById('likes');
  if(videoPlaySectionData[e].isLiked==true){
    likes.style.color='red';
  }
  views.innerHTML=`${videoPlaySectionData[e].views} Views`;
  mainVideo.src=`${playlistData[e].thumbnail}`;
  var content=document.getElementById('content');
  content.innerHTML=`<h2 class="mt-2">${videoPlaySectionData[e].title}</h2>
  <p class="mt-2">${videoPlaySectionData[e].description}</p>`;
  var a=e+1;
  if( mainVideo.src===playlistData[e].thumbnail){
    
    var id=document.getElementById(`${a}`);
    id.style.boxShadow="0 0 7px #fad744";      
    bordersetter(`${e}`);
  }
}
function bordersetter(e){
  var a=e+1;
  if( mainVideo.src!==playlistData[e].thumbnail){
    alert("Not well")
    var id=document.getElementById(`${a}`);
    id.style.boxShadow="none";      
    // borderNone(`${e}`);
  }
}

function videoSet(data){
  var videoSetupload=document.getElementById('videoSetupload');
  var divSetter=document.createElement('div');
  divSetter.innerHTML=`
  <div class="card mb-2  " id="${data.id}" >
  <div class="w-100 rounded-top " onclick="viewVideo(${data.id}-1,event);borderNone(${data.id}-1);"  >
            <video  class="img-fluid rounded-top"  >
            <source src="${data.thumbnail}" type="video/mp4" >
            </video>
            </div>
            <div class="p-2">
            <b class=" p-0">${data.title}</b>
        </div>
        </div>`;
        
        videoSetupload.appendChild(divSetter);
            
      }

      for(var i=0; i<playlistData.length; i++){
        videoSet(playlistData[i]);
      }
function borderNone(e){    ;
    if(mainVideo.src!=playlistData[e-1].thumbnail){
      document.getElementById(e).style.boxShadow="none";
    }
}