import React from 'react';
import './App.css';

function App() {

  return (
    <div className="container">
        <div className="header">
            <h1 className="title">Devanee Reid</h1>
                <p className="title-p">Software Engineering Student</p>
                <h3 className="border"></h3>
                < br />
        </div>
        < br />

        <h2 className="projects">Projects</h2>

    <section class="content">
        
		<div className="content1">

            {/* <img src="images/sfrecipes.png" alt="" /> */}
            
			    <h2>Secret Family Recipes - Website</h2>
				<p>This project was from my first build week at Lambda. I created and wrote all of the HTML and CSS from scratch.</p>
     
                    <a href="https://sfrecipes.netlify.com" class="button" target="_blank">Check It Out</a>
            
		</div>


			<div class="content2">
				<h2>Water My Plants - Website</h2>
					<p>This project was from my first build week at Lambda. I created and wrote all of the HTML and CSS from scratch.</p>
                
                    <a href="https://watermyplants10.netlify.com" class="button" target="_blank">Check It Out</a>
            
            </div>
            <div class="image">
                <img src="images/plant-logo.jpg" alt="" />
            </div>

            <div class="content3">
                <h2>Advanced CSS - Sprint Challenge</h2>
                    <p>We displayed knowledge and techniques of using responsive designs during this sprint. This is not my design, it's just to practice deploying our apps in Zeit.</p>
            <a href="https://sprint-challenge-advanced-css-alpha-swart.now.sh/" class="button" target="_blank">Check It Out</a>
                    
            </div>
                
            <img src="images/space.jpg" alt="" />
        

            <div className="content4">
				<h2>Harry Potter Resume - Preprocessing</h2>
					<p>This project was to display our knowledge of JavaScript.</p>
				       <a href="https://preprocessing-i-self-chi.now.sh/" class="button" target="blank">Check It Out</a>
					  
			</div>
                <div class="image">
                    <img src="images/js.jpg" alt="" />
                </div>
        </section>   
        <div className="contact">
            <h3>Get In Touch</h3>
                <form method="post" action="#">
                    <div class="fields">
                        <div class="field">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" value="" />
                        </div>
                        <div class="field">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" value="" />
                        </div>
                        <div class="field">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="6"></textarea>
                        </div>
                    </div>
                
                        <input type="submit" name="submit" id="submit" value="Send Message" />
              
                </form>
        </div>
    </div>
  );
}

export default App;
