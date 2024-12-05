# Introduction
Brewing the perfect cup of espresso is both an art and a science. For many home baristas, the journey is often filled with trial and error, frustration, and an overwhelming array of variables to manage. **Pourfection** was born out of a desire to simplify this process, making high-quality espresso accessible to everyone—from beginners pulling their first shot to seasoned enthusiasts fine-tuning their craft.

![alt text](https://github.com/upenn-cis-4120/Pourfection/blob/main/images/action_shot.jpg?raw=true)

# Motivation
Home espresso brewing presents unique challenges. Achieving consistency across batches requires precise control over variables such as grind size, dose, tamp pressure, water temperature, and extraction time. However, most entry-level equipment lacks the feedback mechanisms needed to guide users in real time. This gap leaves many beginners guessing, leading to wasted coffee, time, and effort.

Existing tools and apps tend to focus either on professional-grade machines or post-brew analysis, which can feel out of reach or overly complex for beginners. We envisioned a solution that bridges this gap: a tool that not only provides actionable feedback during the brewing process but also empowers users to learn and improve with every shot.

# Our Solution: Pourfection
**Pourfection** is an innovative, user-friendly interface that transforms the way people approach home brewing. By integrating real-time feedback, intuitive visualizations, and a focus on accessibility, Pourfection allows users to:

- **Understand the Process:** Learn the why behind each step with clear explanations and visual aids.
- **Optimize Brewing Variables:** Receive immediate feedback on factors like grind size, shot timing, and pressure.
- **Achieve Consistency:** Use data-driven insights to replicate successful shots and refine their technique.

We designed Pourfection with accessibility and simplicity in mind, ensuring that even first-time users can feel confident in crafting exceptional espresso.

**Figure:** Our working demo of Pourfection being used to make an espresso drink in real time.

# Understanding the User

## User Research and Interviews
To create a solution that genuinely addresses the needs of home baristas, we began by immersing ourselves in their world. Our initial step was conducting in-depth interviews with ten individuals ranging from complete beginners to seasoned home espresso enthusiasts. The goals of these interviews were to:

- Identify common pain points in the home brewing process.
- Understand the learning curve associated with using espresso machines.
- Gather insights on what features users would find most helpful in a brewing assistant tool.

### Key Questions Asked:
- What challenges do you face when brewing espresso at home?
- How do you currently troubleshoot a bad shot?
- What tools or resources have you used to improve your brewing skills?
- What features would you find most helpful in a brewing assistant app?

### Findings from User Research
From our interviews, several common themes emerged:

- **Inconsistent Results:** Nearly all participants expressed frustration with the inconsistency of their espresso shots. Factors like grind size, tamp pressure, and shot timing were frequently mentioned as difficult to control.
- **Lack of Real-Time Feedback:** Users felt that there was a lack of immediate guidance when something went wrong. They often realized mistakes only after tasting the espresso or observing the shot too late in the process.
- **Overwhelming Information:** Beginners found the wealth of information and jargon in online forums and tutorials overwhelming, making it hard to know where to start.
- **Desire for Simplicity:** There was a strong desire for straightforward, actionable advice that could help improve their brewing without needing deep technical expertise.

**Quote from a Participant:**  
*"I watch the espresso pour, and sometimes it just doesn't look right, but I don't know what to adjust next time. Should I change the grind size or was the water too cold?"*

# Ideation

## Brainstorming Sessions
Armed with insights from our user research, we held several brainstorming sessions. Our objectives were to generate a wide range of ideas that could address the identified pain points and to think creatively about how technology could simplify the espresso brewing process.

### Techniques Used:
- **Mind Mapping:** We visualized the relationships between different brewing variables and user challenges.
- **Crazy Eights:** A rapid sketching exercise where each team member drew eight distinct ideas in eight minutes to encourage divergent thinking.
- **User Journey Mapping:** We mapped out the steps a user takes when brewing espresso to identify opportunities for intervention.

## Concept Development
From our brainstorming, we distilled our ideas into three primary concepts:

- **Customizable equipment:** Allow the user to select their own equipment including espresso machine, grinder, coffee beans/grounds, etc.
- **Interactive Brewing Guide:** An app that provides step-by-step instructions tailored to the user's equipment and experience level.
- **Customized Feedback System:** Allow the user to provide feedback and automatically suggest changes to brewing settings.

# Prototyping

## Low-Fidelity Prototypes
We began with hand-drawn sketches and basic wireframes to visualize how users would interact with Pourfection. These prototypes focused on:

- **User Interface Layout:** Placement of buttons, graphs, and feedback messages.
- **User Flow:** How a user would navigate through the app from start to finish.
- **Core Functionality:** How real-time feedback and data visualization would be presented.

![alt text](https://github.com/upenn-cis-4120/Pourfection/blob/main/images/lofi_1.jpg?raw=true)
![alt text](https://github.com/upenn-cis-4120/Pourfection/blob/main/images/lofi_2.jpg?raw=true)
![alt text](https://github.com/upenn-cis-4120/Pourfection/blob/main/images/lofi_3.jpg?raw=true)
**Figure:** Low-fidelity prototypes showing two potential designs. After interactive testing, we selected the design on the right for its cleaner interface and more intuitive flow.

## Mid-Fidelity Prototypes
Using Figma, we developed digital wireframes to refine our ideas further. These prototypes included:

- **Interactive Elements:** Clickable buttons and menus to simulate app navigation.
- **Sample Data Visualizations:** Mock timer to simulate interactive extraction time.
- **Feedback Messages:** Examples of real-time suggestions, such as "Your grind size may be too coarse."

## User Testing with Prototypes
We conducted usability testing sessions with five participants from our initial interviews. Each session involved:

- **Scenario Tasks:** Users were asked to perform specific tasks using the prototype, such as starting a new brew session or interpreting feedback messages.
- **Think-Aloud Protocol:** Participants narrated their thoughts while interacting with the prototype to uncover any confusion or difficulties.
- **Feedback Collection:** We gathered qualitative data on their experience, likes, dislikes, and suggestions for improvement.

### Key Insights:
- **Clarity is Crucial:** Users appreciated simple language and clear instructions over technical jargon.
- **Visual Feedback Helps:** Real-time graphs and visual cues were well-received, aiding in understanding the brewing process.
- **Avoid Overloading Information:** Too much data on the screen at once was overwhelming for some users.

# Iteration and Refinement

## Improving the Design Based on Feedback
Taking into account the user testing results, we made several refinements:

- **Simplified Interface:** Reduced clutter by prioritizing essential information and using collapsible menus for advanced data.
- **Enhanced Visual Aids:** Incorporated color-coded indicators (e.g., green for optimal ranges, red for warnings) to make feedback more intuitive.
- **Personalization Options:** Added settings to adjust the level of guidance based on the user's experience level.

## High-Fidelity Prototype
We developed a polished version of the prototype that closely resembled the intended final product. This included:

- **Responsive Design:** Ensured the interface worked seamlessly on various device sizes and orientations.
- **Refined Visual Elements:** Applied consistent typography, color schemes, and iconography to enhance usability.
- **Interactive Simulations:** Enabled users to experience the real-time feedback and data visualization features more authentically.

![alt text](https://github.com/upenn-cis-4120/Pourfection/blob/main/images/final_interface.png?raw=true)
**Figure:** Landing page for equipment selection and feedback page of our final implementation based on the high-fidelity prototype.

# Implementation

## Technical Development
With the design finalized, we moved into the development phase, which turned out to be a challenging but fulfilling learning experience since our team had no prior experience in front-end development. We built our app with the following key components:

- **Mobile Application Development:** Built using React Native for cross-platform compatibility on iOS and Android devices.
- **Data Processing Algorithms for Intelligent Backend:** Developed algorithms to interpret user feedback and with API calls to Gemini to generate actionable suggestions.

# Final User Evaluation

## Testing the Functional Prototype
Designing a user-friendly and informative interface to take feedback and provide suggestions presented the greatest challenge during the development process. To test our functional prototype, we conducted an A-B experiment on eleven users to gauge the usability of two feedback interfaces.

- **Interface A:** Consisted of five-point scales to rate several important aspects of coffee (e.g., smoothness, strength, acidity).
- **Interface B:** Consisted of a simple text box to allow users to type feedback as they saw fit.

## Results
The majority of users preferred Interface A and expressed less stress rating preset aspects rather than coming up with their own. However, a small number of users found the preset aspects limiting. Following this study, we decided to implement features from both, using a five-point scale with preset aspects as the main source of user feedback, but adding a small text box for optional comments.

# Insights and Learnings

## What Worked Well
- **User-Centered Design:** Focusing on the user's needs and continuously incorporating their feedback was critical to creating a useful tool.
- **Simplicity Over Complexity:** Prioritizing clear, actionable feedback made the app accessible to users of all levels.

## Challenges Faced
- **Balancing Detail and Simplicity:** Striking the right balance between providing enough information without overwhelming the user was an ongoing challenge.
- **Technical Limitations:** Balancing speed and accuracy of a functioning backend proved difficult. Using LLM-based suggestions required an internet connection, adding constraints for some users.

# Impact of the Design Process
The iterative design process allowed us to refine Pourfection effectively. By validating our assumptions through user testing at each stage, we ensured that the final product truly addressed the pain points identified during our initial research.

# Conclusion of the Design Process
Our journey in developing Pourfection underscored the importance of empathy and user engagement in design. By immersing ourselves in the experiences of home baristas, we were able to create a solution that not only simplifies the espresso brewing process but also enriches the user’s journey toward mastering their craft.

Through careful research, creative ideation, rigorous testing, and thoughtful implementation, Pourfection evolved from a concept into a functional tool poised to make a meaningful impact in the world of home espresso brewing.
