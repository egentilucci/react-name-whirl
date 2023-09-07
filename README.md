# react-name-whirl: a Name Spinner

### MVP

A name spinner that can rotate and select a single random name from a given list.

### Future updates

Users will have the ability to access a session through a provided link and enter their own usernames. When the spinner is activated, it will consider the usernames entered by users in the current session as part of the selection pool. The spinner will randomly choose a username from this pool.

---

### Maturity Level 1: Simple UI Application

**Objective**: Create a simple UI application with a wheel containing names, where a user can input names and randomize them.

#### Steps:
1. Set up the React Project
   - Create a new React project using Vite. ☑

2. Create UI Components
   - Build React components for name input and displaying the wheel with names. ☐
   - Implement the wheel with names, including initial static names. ☐

3. Implement Randomization Logic
   - Write JavaScript logic to randomly select a name from the wheel. ☐
   - Animate the wheel's rotation to display the selected name. ☐

4. Testing
   - Test the application to ensure it functions as expected. ☐
  
### Additional details:
The UI will look something like this:

— Header (possibly with the app's name, and later, at maturity level 2, a button to create a new instance)
— Body: with the wheel and an input field for names, and then the button to start/reset it
— Footer: a simple footer with copyright information and maybe a link to the repository and a button for light/dark theme at most.

It should be responsive, providing an excellent user experience on both mobile and PC devices, and it must work on all browsers.

---

### Maturity Level 2: Adding Shared Persistence

**Objective**: Expand the application to persist entered names, allow multiple users to access the same instance, and maintain the wheel functionality.

#### Steps:
1. React Router Integration
   - Configure React Router to create different pages for instances with unique URLs. ☐

2. State Management with Pinia
   - Implement Pinia to manage the application's state, including the names on the wheel. ☐
   - Create a Pinia store to store the list of names on the wheel. ☐

3. Backend API and Database
   - Create a backend API using Node.js, Express.js, or a similar technology. ☐
   - Set up routes to handle CRUD operations on names. ☐
   - Implement a database (e.g., MongoDB) to store and retrieve the list of names. ☐

4. URL Sharing
   - Generate random URLs for different instances. ☐
   - Teach users how to share these URLs with others. ☐

5. Testing
   - Test the application to ensure data persistence, URL sharing, and the wheel functionality work correctly. ☐

---

### Maturity Level 3: Microservices/Cloud Native Solutions

**Objective**: Explore advanced architectures, authentication, scalability, and maintain the wheel functionality.

#### Steps:
1. Enhance the Backend API
   - Expand the backend API to handle advanced features, including managing the state of the wheel with names. ☐
   - Implement authentication and authorization mechanisms. ☐

2. Containerization and Deployment
   - Dockerize the application for containerization. ☐
   - Deploy the application on a cloud platform (e.g., AWS, Azure, Google Cloud). ☐
   - Configure cloud resources and scalability options. ☐

3. Scalability Considerations
   - Discuss strategies for scaling the application as the number of users and instances increases while maintaining the smoothness of the wheel functionality. ☐

4. Testing and Security
   - Conduct thorough testing to ensure the security, scalability, and performance of the wheel functionality. ☐

---

Techstack:
- React, TypeScript, Vite etc...
- Unit-test: ...
- E2E test: Playwright
- Cloud: AWS
