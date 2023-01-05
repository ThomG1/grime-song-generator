# Grime-Song-Generator

The Grime Song Generator is a tool for music producers, makers and fans to explore the sounds of the 'Grime' genre. This application provides a sketchpad for users to quickly create melodies and compositions, with the option of doing so over a wide choice of backing tracks in order to get a feel for the genre, as well as the creative and techical processes involved in the creation of music. 

![Mock Up](documentation/screenshots/mockups1.jpg)


The application consists of four sections: the instructions section, the sound selection section, the playground section, and the loop player section.

## User Experience (UX)

- __Design Choices__

The overall feel of the site design is gritty, dark and minimal as this matches the style and aethetic of the 'Grime' genre.  

- __Font__
The font used throughout the site is Chakra Petch to give the site an urban feel, 
- __Icons__
The icons used from font awesome were chosen for their simplicity to ensure all users can identify them.

- __Colours__

The primary colours used in the background are black backgrounds and a contrasting bright orange. The image used as a central background does not have any distinctive colours itself, but fades from a light white centre to darker sides, covered in graffiti.  


![Site Colours](documentation/screenshots/site-colours.png)

- __First Time Users__

1.As a first time user, I want to easily understand the main purpose of the site as a basic music making, and listening tool. 

2.As a first time user, I want to be able to get an understanding of how to use the site and all of it's features. 

3.As a first time user, I want clear and distinguishable sections that are easy to find and move between. 

4.As a first time user, I want to be able to enjoy the clean but eye catching design of the site, even before I have started using it. 

5. As a first time user, I want to be able to quickly and easily start making music. 

- __Returning Users__

1. As a returning user, I want to change the sound I used to create with the first time to create a different style of music. 

2. As a returning user, I want to be able to choose from a variety of different backing music to play melodies over. 

3. As a returning user, I want to know how to contact the page, and am able to send a link to music that can potentially be included in the sites audio player. 

## Wireframes

As part of the planning, I completed the below Wireframes using Balsamiq: 

![Wireframes](documentation/wireframes/allwireframes.png)



## Features 

### Existing Features

- __Navigation Bar__

  - Featured on all pages, the full responsive navigation bar includes links to the Home page and contact page and  is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 


![Nav Bar](documentation/screenshots/navbar.png)


  

- __Title Section__

  - The title section sits on the opposite side to the Navbar, stating the title of the page in a clear and noticable way. 
 

![Home Page](documentation/screenshots/homepage.png)

- __Instructions Section__

  - The 'Instructions' section will allow the user to quickly understand how to get the most from the site, depending on their device. It will outline the keys or actions needed to trigger sounds, or how selecting a different soundset will give them access to multiple options. 
  - This section will remain stylistically in tune with the rest of the site, including clear orange writing. The instructions section itself is easy to find, and the user will be able to return to the site, either by clicking close, or clicking off the instructions window.  

  ![About](documentation/screenshots/about-screenshot.png)

- __Sound Selector Section__

  - This section will allow the user to choose from a selection of sounds to use. At present, there are three distinct sound sets to choose from, all stylistically different from each other, to provide the user with a range of tones to begin creating music with. 
  - This section provides the user with a slick dropdown menu, making it simple and effective for the user to choose.  

    ![Latest](documentation/screenshots/latest-screenshot.png)
  
  - __Playground Section__

  - This section will allow the user to press certain keys, or if on a phone or tablet to click the pads to trigger the sounds. This was built so that whatever device was being used, it would retain a 'playable' approach for the user, keeping the site intuitive and fresh for users, by allowing them to improvise and to apply different speeds, rhythms to thier melodies. 
  - This section contains 4 pads the user can play per sound set. The pads are black, and flash orange when played, providing an immersive experience when the audio and visual effects work together.  


     ![Releases](documentation/screenshots/releases-screenshot.png)

- __The Loop Player__ 

  - The loop player section allows the user to play audio tracks, to advance and embelish the melodies they make in the playground. This allows the user to hear music in a wider context. 
  - The loop player is designed to imitate a vinyl player, including a spinning image in the centre. 
  - The loop player includes a play / pause button, and a button to skip forwards or backwards if needed. This provides the user with a large amount of choice and control over the site. 
  - The loop player feautures 5 original tracks with individual artworks. 

  - __The Credits Section__ 
  
  - The credits section provides the user with information on the creators of the loops used in the loop player, alongside a closer look at the individual images used. 
  - The aim of this section is to firstly provide credit to the creators of the content used, and secondly to encourage potential creators to submit thier own ideas for potential use in the loop player, via the contact page. 

![Footer](documentation/screenshots/footer.png)



- __Contact Page__

  - This page will allow the user to directly contact the page administrators. It also provides an oppurtunity for potential creators to submit music to be featured in the loop player section, and subsequently be credited in the credits section. 
  - This page has used emailJS to provide contact requests to the page administration. 

![Demo Page](documentation/screenshots/demopage.png)

- __Confirmation Page__

  - This page will confirm to the user that their email has been sent. This will also notify the user that they will be redirected to the home page in ten seconds


![Demo Page](documentation/screenshots/demopage.png)

### Future Features

Additional features that are currently being considered for future implementation include: 

- Additional Pads
    - In future, the aim is for the playground to have up to 8 pads, to allow for more variation and advanced compositions. 
- Additional Sound Sets
    - In future, the aim of for the sound selector to have several additional sound sets to allow for more choice. 
- Sequencer
    - In future, the aim would be to build a step sequencer, to allow users to arrange their compositions and lisaten back to them, without having to play in the melody themselves. Save and Export features would also be beneficial here. 

## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5) - Used for page content
- [CSS](https://en.wikipedia.org/wiki/CSS) - Used for design and layout
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)- Used for interactive features and email API
- [EmailJS](https://www.emailjs.com/) - Used for email feature
- [Bootstrap](https://getbootstrap.com) - Used for responsiveness
- [Git](https://git-scm.com/) - Used for version control
- [GitHub](https://github.com/) - Used for online storage of code
- [Gitpod](https://www.gitpod.io)- Used for cloud-based IDE editor
- [Balsamiq](https://balsamiq.com/) - Used for wireframes



## Testing 


### Validator Testing 

- HTML
 No errors were returned when passing through the official [W3C validator for index.html](https://validator.w3.org/nu/?doc=https://thomg1.github.io/Replica-Recordings/index.html)

  ![Index-validation](documentation/screenshots/index-val.png)

  [W3C validator for artists.html](https://validator.w3.org/nu/?doc=https://thomg1.github.io/Replica-Recordings/artists.html)

  ![Artists-validation](documentation/screenshots/artists-val.png)

    [W3C validator for demos.html](https://validator.w3.org/nu/?doc=https://thomg1.github.io/Replica-Recordings/demos.html)
  ![Demos-validation](documentation/screenshots/demos-val.png)


- CSS
  
  Some errors were found when passing through the official CSS validator, although on investigation, it appears the errors displayed are a result of bootstrap, rather than errors in the CSS code itself
   [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fthomg1.github.io%2FReplica-Recordings)
  ![css-validation](documentation/screenshots/css-val.png)

  When the code itself is copied and pasted into the validator, this displays no errors: 

    ![css-validation](documentation/screenshots/css-val-2.png)

  ### Responsiveness

  - The site has been tested for responsiveness on desktop, tablet and phone sized screens.
 
  - Home Page

    ![Home-desktop](documentation/screenshots/firefox-home.png)
   
    ![Home-tablet](documentation/screenshots/home-tablet.png)
   
    ![Home-phone](documentation/screenshots/home-phone.jpeg)


  - Contact Page

    ![Demos-desktop](documentation/screenshots/firefox-demos.png)

    ![Demos-tablet](documentation/screenshots/demos-tablet.png)

    ![Demos-phone](documentation/screenshots/demos-phone.jpeg)

  ### Browser Compatability

  All pages of the site have been tested on the browsers Chrome, Firefox and Safari: 

  - Chrome

     ![Chrome-home](documentation/screenshots/chrome-home.png)

     ![Chrome-contact](documentation/screenshots/chrome-demos.png)


  - Firefox 

     ![Firefox-home](documentation/screenshots/firefox-home.png)

     ![Firefox-contact](documentation/screenshots/firefox-demos.png)

  - Safari

     ![Safari-Home](documentation/screenshots/safari-home.png)

     ![Safari-Contact](documentation/screenshots/safari-demos.png)

  ### Bugs

  There are no bugs that I am aware of. 

  ### Testing User Stories

  - __First Time Users__

1.As a first time user, I easily understand the main purpose of the site as a basic music making, and listening tool.


 ![About](documentation/screenshots/about-screenshot.png)

2.As a first time user, I quickly get an understanding of how to use the site and all of it's features. This is due to the sites clear layout, and features such as the instructions button.

 ![Releases](documentation/screenshots/releases-screenshot.png)

3.As a first time user, I have clear and distinguishable sections that are easy to find and move between.

![Nav Bar](documentation/screenshots/navbar.png)

4.As a first time user, I am able able to enjoy the design and look of the site, even before I have started using it.

![Footer](documentation/screenshots/footer.png)

5. As a first time user, I am able to quickly and easily start making music.

![Footer](documentation/screenshots/footer.png)

- __Returning Users__

1. As a returning user, I am able to change the sound I used to create with the first time to create a different style of music.

2. As a returning user, I am able to choose from a variety of different backing music to play melodies over.

 ![Latest](documentation/screenshots/latest-screenshot.png)

3. As a returning user, I am able to to contact the page, and am able to send a link to music that can potentially be included in the sites audio player and credits section.  

![Demo Page](documentation/screenshots/demopage.png)




## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/ThomG1/grime-song-generator), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://github.com/ThomG1/grime-song-generator)

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/ThomG1/grime-song-generator.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ThomG1/grime-song-generator)


## Credits 



### Content 
- The 'playground' section with playable pads uses partial code from and was inspired by [Wes Bos](https://www.youtube.com/watch?v=VuN8qwZoego&t=166s)
- [Bootstrap](https://getbootstrap.com) version 5.2 has been used throughout for responsiveness.
- Partial sections of the code were taken from Code Institute's [Love Running](https://codeinstitute.net/full-stack-software-development-diploma/?utm_term=code%20institute&utm_campaign=CI+-+UK+-+Search+-+Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=8983321581&hsa_cam=1578649861&hsa_grp=62188641240&hsa_ad=581730217381&hsa_src=g&hsa_tgt=kwd-319867646331&hsa_kw=code%20institute&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIzrnC7PL5-gIVjYFQBh3IeAm_EAAYASAAEgIoHvD_BwE) and Resume Projects.
- The icons in the audio player were taken from [Font Awesome](https://fontawesome.com/)


### Media

- All images used throughout the website are owned by https://github.com/ThomG1. 
- All sounds and music used throughout the website are owned by https://github.com/ThomG1. (Names used during the credit section are used for the purpose of making the site appear real )
