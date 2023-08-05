onload = function(){
    checkMobile();
}



function checkMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

        console.log("mobile device");
        return false;
      }else{

        console.log("not mobile device");
        window.location.href = "./graduate-page.html";
        return true;
      }
}

var txt = {
  en: {
      'golovna': "Main Page",
      'graduates': "Graduates",
      'students': "Hackers",
      'contacts': "Contacts",
      'about':"About academy",
      'academy': "VINNITSIA IT ACADEMY",
      'learn': "Learn with us",
      'reach': "Achieve professional success - guaranteed!",
      'toCall': "Call",
      'event': "Academy events with student's participation",
      'eventName': "IT-weekend",
      'eventDesc': "A wonderful Sunday holiday from the teachers of the academy. Warm company, goodies and board games awaited the students. Thank you to everyone who participated and had a good time in our society. We hope you will come to our other future events as well.",
      'studentsText': "Students",
      'moreStudent': "More",
      'diplomas':"Diplomas/Certificates",
      'contact': "We will contact you",
      'inputName': "Write your name...",
      'inputSurname': "Write your surname...",
      'inputPhone': "Phone number",
      'timeCall': "A convenient time for you",
      'sendCall': "Send",
      'graduatesText': "Graduates",
      'achivment': "Acvivments:",
      'moreGraduates': "More",
      'locationText': "Location",
      'email': "email: intitavn@gmail.com",
      'groupa':"Group",
      'creed':"Creed",
      'feed':"Feedback about training",
      'work':"Workplace",
      'data':"Date of completion of studies"
      

  },
  
  ua: {
      'golovna': "Головна",
      'graduates': "Випускники",
      'students': "Хакери",
      'contacts': "Контакти",
      'about':"Про академію",
      'academy': "ВІННИЦЬКА IT-АКАДЕМІЯ",
      'learn': "Навчайся разом з нами",
      'reach': "Досягай професійного успіху - гарантовано!",
      'toCall': "Зателефонувати",
      'event': "Заходи академії з часттю студента",
      'eventName': "Айтішний вікенд",
      'eventDesc': "Чудове недільне свято від викладачів академії. На студентів чекала тепла компанія, смаколики та настільні ігри. Дякуємо усім, хто взяв участь та гарно провів час у нашому товаристві. Сподіваємось, ви завітаєте і на інші наші подальші заходи.",
      'studentsText': "Студенти",
      'moreStudent': 'Більше',
      'diplomas':"Дипломи/Сертифікати",
      'contact': "Зв’яжемось з вами",
      'inputName': "Введіть ім’я...",
      'inputSurname': "Введіть прізвище...",
      'inputPhone': "Номер телефону",
      'timeCall': "Зручний для вас час",
      'sendCall': "Надіслати",
      'graduatesText': "Випускники",
      'achivment': "Досягнення:",
      'moreGraduates': "Більше",
      'locationText': "Локація",
      'email': "пошта: intitavn@gmail.com",
      'groupa':"Група",
      'creed':"Кредо",
      'feed':"Відгук про навчання",
      'work':"Місце роботи",
      'data':"Дата завершення навчання"




  }
};

function setLang(lang){
if(lang == 'en'){
    const el = document.getElementsByClassName('lang');
    document.getElementById('uaBut').style.background="none";
    document.getElementById('enBut').style.background="#30CFD0";
    for(var i = 0; i < el.length; i++){
        if (txt[lang][el[i].id]) {
            el[i].innerHTML = txt[lang][el[i].id];
        }
    }
}
if(lang == 'ua'){
    const el = document.getElementsByClassName('lang');
    document.getElementById('uaBut').style.background="#30CFD0";
    document.getElementById('enBut').style.background="none";
    for(var i = 0; i < el.length; i++){
        if (txt[lang][el[i].id]) {
            el[i].innerHTML = txt[lang][el[i].id];
        }
    }
}
}