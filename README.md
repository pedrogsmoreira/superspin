# SuperSpin

## Installation Instructions (Using Docker with Laravel Sail)

1. **Clone the repository**  
   `git clone https://github.com/pedrogsmoreira/superspin.git`

2. **Navigate to the project directory**  
   cd superspin

3. **Rename .env.example to .env**  
   cp .env.example .env

4. **Install PHP dependencies**  
   composer install

5. **Install JavaScript dependencies**  
   npm install

6. **Build frontend assets**  
   npm run dev

7. **Start Docker containers with Sail**  
   ./vendor/bin/sail up

8. **Run database migrations**  
   ./vendor/bin/sail artisan migrate:refresh

9. **Seed the database**  
   ./vendor/bin/sail artisan db:seed

The application should now be running. Access it at:

- Vanilla version: [http://localhost](http://localhost)
- Vue version: [http://localhost/vue](http://localhost/vue)

## Backend Implementation

To enhance flexibility and align with one of the stretch goals, I opted to store coaches' data in a database instead of using a hardcoded list. For API development, I utilized Laravel Sanctum, which streamlined the process significantly.

### Key Steps

1. **Database Integration**

    - Created a `Coaches` model, migration, and controller.
    - The `index` method in the controller was implemented as the sole API endpoint required for this feature.

2. **Data Seeding**

    - Developed a `CoachFactory` to seed the `coaches` table, simplifying testing and populating sample data.

3. **Feature Testing**
    - Wrote comprehensive feature tests for the `CoachController` to ensure robust functionality:
        - Validated that the API returns a list of coaches.
        - Tested search and sorting capabilities.
        - Confirmed the API returns an empty response when no coaches are found.

This approach ensures maintainability, scalability, and ease of testing while providing the necessary functionality for managing coaches.

## Frontend Implementation

For the frontend, I leveraged Laravel's Blade templating system, which made organizing my code more straightforward. Here's an overview of the decisions and tools I used:

### Styling

- **TailwindCSS**:
    - Pre-installed with Laravel, making setup seamless.
    - Eliminates the need for repetitive semantic class names.
    - Showcases my proficiency in CSS, similar to working with vanilla CSS.

### JavaScript Organization

- **Folder Structure**:
    - Created a `render` folder for UI rendering logic and a `handlers` folder for event handlers.
        - This separation improves code maintainability and readability.
    - Kept API interactions decoupled to maintain flexibility and reuse in the Vue.js version.

### Animations

- **GSAP Animations**:
    - Developed two animations:
        1. Smooth scroll to the top of the window.
        2. Staggered animations for `coachCard` elements.
    - Separated animation code from the vanilla JavaScript to ensure reusability in the Vue.js implementation.

### Vue.js Version

- Simplified the code by leveraging Vue's ability to bind event handlers directly within component logic.
- The result is cleaner, more concise code that is easier to maintain.
