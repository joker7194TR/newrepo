// **********************************************
	// LIGHTBOX
	// **********************************************
    function openLightbox() {
        document.getElementById("lightbox").style.display = "flex";
    }

    function closeLightbox() {
        document.getElementById("lightbox").style.display = "none";
    }

    function stopPropagation(event) {
        event.stopPropagation();
    }

    function submitForm() {
        // Your form submission logic goes here
        alert("Form submitted!"); // Replace this with your actual form submission code
        closeLightbox();
    }

    // **********************************************
	// Services Tabs
	// **********************************************

	function showService(serviceId) {
    var titleElement = document.getElementById('service-title');
    var infoElement = document.getElementById('service-info');
    var imageElement1 = document.getElementById('service-image1');
    var imageElement2 = document.getElementById('service-image2');
    var imageElement3 = document.getElementById('service-image3');
    var imageElement4 = document.getElementById('service-image4');

    var descriptionElement = document.querySelector('.service-description');
    var imageHiddenClass = 'hidden';

    descriptionElement.classList.add(imageHiddenClass);

    setTimeout(function() {
      switch (serviceId) {
        case 'service1':
          titleElement.textContent = 'Studio service';
          infoElement.textContent = 'In the intimate setting of a studio, we recognize the importance of a clutter-free and pristine environment. Our expert cleaners are dedicated to meticulously cleaning and organizing your space, from the cozy sleeping nook to the multifunctional living area. We understand that studios demand a unique approach, and our team is well-equipped to tackle the challenges of maximizing cleanliness in limited square footage.\r\n\r\nImmerse yourself in the convenience of our cleaning service. We go beyond the basics, addressing the nuances of studio living. Whether its efficiently managing storage solutions, dusting off high shelves, or ensuring a streak-free finish on glass surfaces.';         
          imageElement1.src = 'img/studio1.jpg'; 
          imageElement2.src = 'img/studio1.jpg'; 
          imageElement3.src = 'img/studio1.jpg'; 
          imageElement4.src = 'img/studio1.jpg'; 
          break;
        case 'service2':
          titleElement.textContent = 'One bedroom cleaning';
          infoElement.textContent = 'Our expert team is committed to providing a comprehensive cleaning experience for your one-bedroom space. From meticulously dusting surfaces to sanitizing high-touch areas, we ensure that every nook and cranny is given the attention it deserves. Your satisfaction is our priority, and our service is personalized to meet your unique preferences.\r\n\r\n A clean bedroom is not only visually appealing but also contributes to a healthier living environment. We prioritize the removal of allergens, dust mites, and germs to create a space that promotes well-being.';
          imageElement1.src = 'img/studio1.jpg'; 
          imageElement2.src = 'img/studio1.jpg'; 
          imageElement3.src = 'img/studio1.jpg'; 
          imageElement4.src = 'img/studio1.jpg'; 
          break;
        case 'service3':
          titleElement.textContent = 'Two bedrooms cleaning';
          infoElement.textContent = 'We understand that a two-bedroom home is a dynamic space, and our dedicated team is committed to ensuring every corner is cleaned and rejuvenated. Embrace a home where cleanliness meets luxury with our personalized and comprehensive cleaning service.\r\n\r\n Efficiency is at the core of our service without compromising on the thoroughness required for a complete clean. We work diligently to sanitize surfaces, eliminate dust, and address high-traffic areas, creating a living space that is not only visually appealing but also conducive to a healthier and more comfortable lifestyle.';
          imageElement1.src = 'img/studio1.jpg'; 
          imageElement2.src = 'img/studio1.jpg'; 
          imageElement3.src = 'img/studio1.jpg'; 
          imageElement4.src = 'img/studio1.jpg'; 
          break;
        case 'service4':
          titleElement.textContent = 'Commercial';
          infoElement.textContent = 'TABYS INC is your partner in maintaining a spotless and professional business environment. Our commercial cleaning service is meticulously crafted to cater to the unique needs of businesses, ensuring that your workspace reflects the high standards and attention to detail that define your brand.\r\n\r\n We understand that different industries have distinct cleaning requirements. Our skilled professionals bring industry-grade expertise to ensure that your space not only meets but exceeds the hygiene standards relevant to your business sector.';
          imageElement1.src = 'img/studio1.jpg'; 
          imageElement2.src = 'img/studio1.jpg'; 
          imageElement3.src = 'img/studio1.jpg'; 
          imageElement4.src = 'img/studio1.jpg'; 
          break;
        case 'service5':
          titleElement.textContent = 'Move in/out cleaning';
          infoElement.textContent = 'Moving can be both exciting and challenging, and our Move-In & Move-Out Cleaning Service is designed to alleviate the stress associated with the process. We provide a thorough cleaning of every inch of your space, from top to bottom, ensuring it welcomes you or the next occupants with a fresh and revitalized atmosphere.\r\n\r\n Moving involves tight schedules, and our team is committed to efficiency without compromising on quality. We work diligently to ensure that your space is move-in ready or left in impeccable condition for the next occupants, contributing to a smooth and hassle-free transition.';
          imageElement1.src = 'img/studio1.jpg'; 
          imageElement2.src = 'img/studio1.jpg'; 
          imageElement3.src = 'img/studio1.jpg'; 
          imageElement4.src = 'img/studio1.jpg'; 
          break;
        case 'service6':
          titleElement.textContent = 'Extra services';
          infoElement.innerHTML = "<b>Post-Construction Cleanup:</b> <br>Embarking on a renovation or construction project? Our post-construction cleanup service is designed to rid your space of construction debris, dust, and any lingering mess. Enjoy your newly transformed space without the hassle of cleanup<br><br> <b>Appliance Detailing for Kitchen Brilliance:</b><br> Upgrade your kitchens hygiene with our appliance detailing service. From ovens and microwaves to refrigerators, we meticulously clean and sanitize your appliances, ensuring they not only look pristine but also function at their best.<br><br> <b>Window Washing for Crystal-Clear Views:</b><br> Let natural light flood into your space with our meticulous window washing service. We ensure streak-free, crystal-clear windows that not only enhance the aesthetics of your property but also offer unobstructed views of the outdoors.";
          imageElement1.src = 'img/studio1.jpg'; 
          imageElement2.src = 'img/studio1.jpg'; 
          imageElement3.src = 'img/studio1.jpg'; 
          imageElement4.src = 'img/studio1.jpg'; 
          break;
        
      }

      descriptionElement.classList.remove(imageHiddenClass);
    }, 300); // This delay should match the transition duration in CSS
  }
  showService('service1')


    // **********************************************
    // Questions and Answers
    // **********************************************


	function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  	}

     var elements = document.getElementsByClassName("item");
     var l_reg = document.getElementById("list_reg");
     var l_gen = document.getElementById("list_gen");
     var l_ubor = document.getElementById("list_ubor");
   
            for(var i = 0; i < elements.length; i++)
            {
                elements[i].onclick = function(){       
                    var el = elements[0];
                    while(el)
                    {
                        if(el.tagName === "LI"){
                            el.classList.remove("active"); }
                        el = el.nextSibling;
                    }      
                  this.classList.add("active"); 

                  if(this.matches(".active.item-gen")){
                  	l_reg.classList.remove("list-active");
                  	l_gen.classList.add("list-active");
                  	l_ubor.classList.remove("list-active");
                  }
                  else if(this.matches(".active.item-ubor")){
                  		l_reg.classList.remove("list-active");
                  	l_gen.classList.remove("list-active");
                  	l_ubor.classList.add("list-active");
                  }
                  else{
                  	l_reg.classList.add("list-active");
                  	l_gen.classList.remove("list-active");
                  	l_ubor.classList.remove("list-active");
                  }
     
                };

            }