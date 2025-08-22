# DevMovies

## Presentation

Developed a single-page application using **React** (functional components + hooks) and **TypeScript**, integrated with the **OMDb API** to enable users to search, and explore movies' data.

### Key Contributions
- **Architecture & State Management:** Designed a modular component architecture. Implemented **Redux Toolkit** with slices.  
- **Type Safety & Scalability:** Applied strict **TypeScript** typing across components, Redux slices, and API contracts, reducing runtime bugs and ensuring maintainability.  
- **Accessibility (a11y):** Ensured **WCAG 2.2 compliance** with semantic HTML, ARIA roles, keyboard navigation, and validated color contrast, and tested them with screen readers.  
- **Performance Optimization:** Implemented **debounced search inputs** to minimize API calls, applied **memoization** (`React.memo`, `useMemo`) for expensive renders, leading on faster page load.  

**Outcome:** Delivered a **production-grade, accessible movie search app** showcasing modern React + Redux best practices, type-driven development, and inclusive UI/UX principles.

## Screen Shots

### Mobile

![Mobile Version of DevMovies](../devMovies/public/Captura%20de%20pantalla%202025-08-21%20-%2023.42.07.png)

### Tablet

![Tablet Version of DevMovies](../devMovies/public/Screenshot%202025-08-21%20at%2023-46-13%20Home%20-%20DevMovies.png)

![Tablet Version of DevMovies, showing movie information page](../devMovies/public/Screenshot%202025-08-21%20at%2023-46-47%20Movie%20Page.png)

### Desktop Version

![Desktop Version of DevMovies, with menu opened and pagination in place](../devMovies/public/Screenshot%202025-08-21%20at%2023-47-25%20Home%20-%20DevMovies.png)

## DevMovies – Setup & Run Instructions

This project is a **React + TypeScript** application bootstrapped with **Vite**.  
It leverages **Redux Toolkit** for state management, **React Router** for routing, and is styled with **Tailwind CSS**.  
Testing is implemented with **Vitest** and **React Testing Library**.  

###  Prerequisites
- **Node.js** ≥ 18.x (LTS recommended)  
- **npm** ≥ 9.x or **pnpm** / **yarn** (optional)

Check your versions:

```node -v```

```npm -v```

### Install project dependencies:

```npm install```

### Development

Start the development server with hot-module replacement:

```npm run dev```

The app will be available at:

http://localhost:5173

### Build

Generate an optimized production build:

```npm run build```

Preview the production build locally:

```npm run preview```

### Testing

Execute the full test suite:

```npm run test```

### Tech Highlights

- React 19 (latest stable APIs, functional components + hooks)

- Redux Toolkit for predictable and scalable state management

- React Router 7 for declarative navigation

- Tailwind CSS with PostCSS/Autoprefixer for styling

- Accessibility (a11y): tested with semantic HTML, ARIA roles, and keyboard navigation

## Architectural Considerations

![Representation of project files](../devMovies/public/2025-08-22_00h19_22.png)

The idea behind this architecture is the reusability and scalability.

Each folder depics what is inside, for its own name or by convention (store for the React Toolkit´s store or features for the slices).

So all views depend on a main layout (could be used more than one, but for this case one was fine), then a view layout that holds each components that are used to depict the main characteristics for that view. 

Components are gathered on a folder, where form elements and forms have their own folder. Difference from a component to regular element (paragraph, subtitles, links) are mainly two:

- Configuration: Get some information to be reused
- Have enough complexity of having simple elements to render inside

Some components are highly configurable, as example is Btn.tsx, could be use as submit button, regular button or a button with an icon.

Global state is handle using React toolkit and a single slice with data needed from search movies from the API, in order to avoid prop drilling among components and improving the components reusability.

## Tecnical Decitions

Appart of the architectural considerations depicted on previous section, some decisions were made based on experience:

- Color Palette: a color palette was taken and double checked against [Webaim color contrast checker]: https://webaim.org/resources/contrastchecker/. Mainly all the  picked colors convination  have a color contrast superior to 4.5:1, the minimum AA requirement for WCAG 2.2. Colors are "white" #FCFCFC (tailwind zinc-50),  "black" #2E3532 (tailwind zinc-800), "blue" #14558A (tailwind sky-800), "color for borders" #343D33 (tailwind newtral-700) and "green" #05DF72 (tailwind green-400). The only concern is not mixing the content with "white" color with the "green" one.
- All interactive elements have their accessible name for screen readers and can be triggered using keyboard.
- There is an [skip-link] https://webaim.org/techniques/skipnav/ implemented.
- Result.tsx is using aria-live polite in order to inform the user that the search has a positive or a negative search.
- On MoviesSearched.tsx grid is used a ul list, so users who are navigating throught assistive technologies (screen readers, braille keyboars, etc.) can see how many results are displayed.
- There is custom hook for changing page title called useChangeTitle.ts, since it is required to keep page title descriptive from [WCAG principles] https://webaim.org/techniques/pagetitle/ 
- When a page is loading an aria live polite is placed on App in order to announce any assistive technology user which page is loading.
- Pagination is achieved using a plugin.
- In order to keep components and elements as simple as possible, and considering that Tailwind is quite verbose, all styling are held in "styles" folder, where styles are divided in three categories ( components, elements, and layouts ). Styles are held in an object which can imported. This technique appart of making components more legible, it is flexible enough to add strings to the className in order to achieve a custom style for special purposes. For maintenability purposes, all styling can be seen on a single place for global modification.
- As it was observed, API returned pictures with broken images, an image component with a fallback image was implemented, that component is FallbackImage.tsx.
- Responsive design was kept minimalistic for time development reasons, it could be more complex if development time could be extended on more hours applied daily. The strategy was keep things centered on mobile and from tablet on, apply a full width till 1440px.

## Todo

Regarding todos, the list is:

- Unit testing.
- Dark template implementation.
- Aria-live of total elements consulted on MoviesSearched.tsx
- Favorite page, based on a functionality that would depend on localstorage to save a list of favorites movies on that page.
- 404 styling page.
 