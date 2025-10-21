 export const QUESTIONS = [
  {
    id: 1,
    category: "Auth",
    q: "What is the Difference between JWT authentication and session based authentication?",
    a: "JWT -> Data is stored in token itself on client-side. Sessions -> Server stores user data and cookie holds session Id.",
  },
  {
    id: 2,
    category: "Node",
    q: "Difference Between require and import?",
    a: "Require -> Used in CommonJS, synchronous and older Node.js syntax. Import -> Used in ES6 modules, asynchronous and used with modern JS syntax.",
  },
  {
    id: 3,
    category: "React",
    q: "What are React hooks?",
    a: "React hooks are functions to use React features in functional components. Common hooks: useState, useEffect, useContext, useReducer, useRef.",
  },
  {
    id: 4,
    category: "React",
    q: "What is Context API and when to use it?",
    a: "Context API allows sharing data across components without passing props at every level. Use it for user auth, theme toggling, etc.",
  },
  {
    id: 5,
    category: "React",
    q: "Difference between Props and State?",
    a: "Props -> Read-only and passed from parent to child. State -> Local to the component and mutable via useState or setState.",
  },
  {
    id: 6,
    category: "React",
    q: "Difference Between controlled and uncontrolled components?",
    a: "Controlled -> React controls the input value via onChange. Uncontrolled -> The DOM controls the input; read via refs when needed.",
  },
  {
    id: 7,
    category: "Node",
    q: "What is Middleware in Node+Express? Explain different types of middleware and when would you use each?",
    a: "Middleware is a function that sits between request and response. Types: Application-level, Router-level, Error-handling, Built-in (express.json), Third-party (cors).",
  },
  {
    id: 8,
    category: "Node",
    q: "In Node.js what is the difference between synchronous and asynchronous code execution? How does the event loop handle async tasks?",
    a: "Synchronous code runs line by line and blocks. Asynchronous starts tasks and continues; callbacks/promises handle results. Event loop manages completed async tasks and runs their callbacks from the queue.",
  },
  {
    id: 9,
    category: "Express",
    q: "In Express.js why would you need an error handling middleware?",
    a: "It catches errors from routes or other middlewares and sends proper responses instead of crashing the server. Signature: (err, req, res, next).",
  },
  {
    id: 10,
    category: "HTTP",
    q: "Difference between Params, query and body in a request?",
    a: "Params -> URL path variables (/users/:id). Query -> URL query strings (?role=admin). Body -> Data sent in POST/PUT requests (JSON).",
  },
  {
    id: 11,
    category: "Express",
    q: "What is the difference between app.use() and app.get()?",
    a: "app.use() defines middleware and runs for all HTTP methods; app.get() handles GET requests to a specific route.",
  },
  {
    id: 12,
    category: "DB",
    q: "In MongoDB what are indexes and why do we use them? Explain one drawback of using too many indexes.",
    a: "Indexes are data structures that make reads faster. Drawback: use extra disk/memory and slow down inserts/updates because indexes must be updated.",
  },
  {
    id: 13,
    category: "Auth",
    q: "How would you protect your API routes in Express using JWT authentication and middleware?",
    a: "Use middleware that checks the Authorization header for a token, verifies it, attaches user info to req and proceeds, else responds with 401.",
  },
  {
    id: 14,
    category: "Architecture",
    q: "How does an MVC architecture work in a web application and why is it useful?",
    a: "MVC splits the app into Model (data), View (UI), Controller (request handler). It improves separation of concerns, maintainability and testability.",
  },
  {
    id: 15,
    category: "Auth",
    q: "What is the difference between an access token and a refresh token and why do we need both?",
    a: "Access token -> short lived, sent with API requests. Refresh token -> long lived, stored securely to request new access tokens without re-login.",
  },
  {
    id: 16,
    category: "API",
    q: "What is a REST API in brief?",
    a: "REST is an architectural style using HTTP methods (GET, POST, PUT, PATCH, DELETE) to operate on resources; responses usually JSON and status codes indicate results.",
  },
  {
    id: 17,
    category: "Rendering",
    q: "Difference between SSR and CSR? When to use each?",
    a: "CSR: browser builds the DOM from JS (good for dynamic apps). SSR: server sends fully rendered HTML (better SEO and first-load). Use SSR for SEO pages and CSR for app-like experiences.",
  },
  {
    id: 18,
    category: "Auth",
    q: "Why JWT authentication?",
    a: "JWTs are stateless, portable across services, and easy to use between frontend and backend.",
  },
  {
    id: 19,
    category: "Browser",
    q: "Difference between Local Storage, Session Storage and Cookies?",
    a: "LocalStorage persists until cleared; SessionStorage exists per tab session; Cookies are sent with HTTP requests (useful for authentication when httpOnly).",
  },
  {
    id: 20,
    category: "CSS",
    q: "Difference between Flexbox vs Grid?",
    a: "Flexbox is 1D (row or column). Grid is 2D (rows & columns). Use Flexbox for alignment, Grid for complex layouts.",
  },
  {
    id: 21,
    category: "HTML",
    q: "Difference Between HTML vs HTML5?",
    a: "HTML is the older version used for structuring content. HTML5 introduced modern features like semantic tags, video/audio support, local and session storage.",
  },
  {
    id: 22,
    category: "CORS",
    q: "What is CORS and How to solve it?",
    a: "Cross-Origin Resource Sharing occurs when frontend and backend run on different domains. Solved by enabling CORS middleware in Express backend.",
  },
  {
    id: 23,
    category: "React",
    q: "What is reconciliation?",
    a: "Process by which React updates the DOM efficiently by comparing the Virtual DOM with previous DOM.",
  },
  {
    id: 24,
    category: "React",
    q: "What is Client side routing?",
    a: "Instead of fetching a new page from server, React Router swaps components for different paths (SPA). Only updated parts reload.",
  },
  {
    id: 25,
    category: "React",
    q: "What is code splitting in React?",
    a: "Code splitting is breaking apps into smaller bundles for faster initial loads. Achieved with React.lazy & Suspense.",
  },
  {
    id: 26,
    category: "React",
    q: "What is Lazy Loading?",
    a: "Components get loaded only when needed (e.g., lecture pages load only when users open a lecture).",
  },
  {
    id: 27,
    category: "React",
    q: "How did you handle API calls in frontend?",
    a: "Used fetch/axios inside useEffect. Data is stored in context or component state.",
  },
  {
    id: 28,
    category: "Auth",
    q: "How do you handle Authentication on frontend?",
    a: "When user logs in, store JWT token in local storage. Attach it in headers for every API call for backend validation.",
  },
  {
    id: 29,
    category: "React",
    q: "Difference Between Pages and Components?",
    a: "Pages -> Full screens mapped to routes (Home, Courses, Dashboard). Components -> Smaller reusable UI blocks (Header, Footer).",
  },
  {
    id: 30,
    category: "Auth",
    q: "Difference Between Authentication and Authorization?",
    a: "Authentication -> Verifies identity using credentials. Authorization -> Grants access rights and defines allowed actions.",
  },
  {
    id: 31,
    category: "Express",
    q: "What is Express.js?",
    a: "Express.js is a lightweight Node.js framework for building APIs and backend services with routing, middleware, and HTTP handling.",
  },
  {
    id: 32,
    category: "API",
    q: "Difference Between REST API and GraphQL?",
    a: "REST -> multiple endpoints, fixed structure. GraphQL -> single endpoint, client defines the shape of data.",
  },
  {
    id: 33,
    category: "React",
    q: "How do you test React components?",
    a: "Using Jest and sometimes React Testing Library (or Enzyme).",
  },
  {
    id: 34,
    category: "React",
    q: "What are Error boundaries in React?",
    a: "Components that catch JS errors and display fallback UI.",
  },
  {
    id: 35,
    category: "React",
    q: "What are portals in React?",
    a: "Portals let you render a component outside its normal parent DOM while keeping React connection.",
  },
  {
    id: 36,
    category: "React",
    q: "What are React fragments?",
    a: "<> </> used to group children without extra DOM nodes.",
  },
  {
    id: 37,
    category: "React",
    q: "What is Hydration?",
    a: "Process of attaching React events to server-rendered HTML.",
  },
  {
    id: 38,
    category: "React",
    q: "What are Higher Order Components (HOC)?",
    a: "Function that takes a component and returns a new component with added props.",
  },
  {
    id: 39,
    category: "React",
    q: "How does React Router work?",
    a: "Performs client-side routing using <BrowserRouter>, <Route>, <Link>.",
  },
  {
    id: 40,
    category: "React",
    q: "How do you optimize React performance?",
    a: "Use React.memo, lazy loading, code splitting, and avoid unnecessary re-renders.",
  },
  {
    id: 41,
    category: "React",
    q: "What is diffing?",
    a: "It’s how React figures out what changed in the UI.",
  },
  {
    id: 42,
    category: "Redux",
    q: "What is Redux?",
    a: "Redux is a central storage box for app data. Components get or update data from this one box instead of passing props everywhere.",
  },
  {
    id: 43,
    category: "Redux",
    q: "Difference Between Context API and Redux?",
    a: "Context API -> simple, best for small apps. Redux -> powerful, manages complex state with clear control (actions, reducers, store).",
  },
  {
    id: 44,
    category: "React",
    q: "What is Virtual DOM?",
    a: "Lightweight copy of real DOM used for efficient updates.",
  },
  {
    id: 45,
    category: "React",
    q: "Explain React Lifecycle methods?",
    a: "Mounting (componentDidMount), updating (componentDidUpdate), unmounting (componentWillUnmount).",
  },
  {
    id: 46,
    category: "React",
    q: "Difference between useMemo and useCallback?",
    a: "useMemo -> memoizes values. useCallback -> memoizes functions.",
  },
  {
    id: 47,
    category: "React",
    q: "What is useContext?",
    a: "Used for global state management without prop drilling.",
  },
  {
    id: 48,
    category: "React",
    q: "Difference between functional and class components?",
    a: "Functional -> function that returns JSX, uses hooks for state. Class -> old style with this.state and lifecycle methods.",
  },
  {
    id: 49,
    category: "React",
    q: "What is React and why did you choose it?",
    a: "React is a JS library for building UIs with reusable components. Chosen for performance (Virtual DOM) and modular, maintainable UI development.",
  },
  {
    id: 50,
    category: "React",
    q: "What is Prop Drilling in React.js?",
    a: "Passing data (props) from a parent component down through multiple nested children.",
  },


  // ... If you want, you can include the rest of the questions from the list. This starter includes many of them already.
];

export const PROJECT_QUESTIONS = [
  {
    id: 1,
    q: "Give a short summary of Project BrainFrame and the problem it solves?",
    a: "BrainFrame is an AI-powered SAAS platform that helps users transform raw ideas into structured outputs. Instead of using separate tools for content-writing, image-generation, and resume feedback, it provides an all-in-one solution. Users can generate articles of different lengths, create blog titles, produce/edit images, and review resumes with strengths and weaknesses clearly highlighted. Tech stack: MERN, NeonDB (PostgreSQL), Cloudinary for media, Clerk for authentication and billing, Gemini API for text tasks, ClipDrop API for image processing."
  },
  {
    id: 2,
    q: "Why did you choose Gemini API over OpenAI?",
    a: "I chose Gemini for better structured outputs and smooth API integration. It handles multi-step prompts well, which helps with articles, blog titles, and resumes. Trade-offs: limited community support, occasional inconsistent outputs, and rate limits. I added validations and backend error handling to manage API errors gracefully."
  },
  {
    id: 3,
    q: "In Resume-Review, how do you ensure the model doesn’t miss critical info?",
    a: "Currently using PDF-parse to extract plain text, which can lose formatting. To address this, I instruct Gemini to format outputs in Markdown with headings and bullet points. Future improvement: use PDFPlumber or Google Docs API to preserve tables/layout for better analysis."
  },
  {
    id: 4,
    q: "Explain image processing workflow and object removal component.",
    a: "User uploads image → Multer stores it temporarily → Backend sends it to Cloudinary or ClipDrop for processing → Cloudinary returns secure URL → URL and user info stored in NeonDB → Frontend displays processed image and allows download."
  },
  {
    id: 5,
    q: "How do you secure your APIs and prevent abuse?",
    a: "Clerk handles authentication. Frontend uses useAuth and useUser to protect routes. Backend uses JWT verification via Clerk middleware. API keys for Gemini, ClipDrop, and Cloudinary remain on backend. Unauthorized direct API calls return errors."
  },
  {
    id: 6,
    q: "How do you handle scaling for high traffic or large uploads?",
    a: "Backend scales horizontally on Vercel. Heavy tasks handled via a job queue to prevent overload. Optimize NeonDB queries and index frequently used fields. Compress/resize images before sending to APIs. Implement per-user rate limits to avoid quota hits."
  },
  {
    id: 7,
    q: "How do you engineer prompts for consistent outputs?",
    a: "Break tasks into clear instructions. Example: Instead of 'review this resume', prompt: 'Analyze the resume, list strengths, weaknesses, and suggest improvements in Markdown.' This reduces ambiguity and ensures structured responses."
  },
  {
    id: 8,
    q: "How do you handle API failures?",
    a: "Implement retries and graceful error messages. If Gemini or ClipDrop fails, frontend shows clear message and backend logs the error. For premium users, fallback models may be implemented to maintain uptime."
  },
  {
    id: 9,
    q: "How do you prevent AI misuse?",
    a: "Filter inputs to block harmful or sensitive content. Resume feedback focuses only on skills and experience. Users get disclaimers that AI-generated advice is for guidance, and personal data is not processed outside the account unless explicitly saved."
  },
  {
    id: 10,
    q: "Monetization and differentiation in BrainFrame?",
    a: "BrainFrame follows a freemium model with limited free usage for text and image generation. Premium unlocks unlimited requests and advanced features. Differentiation: all-in-one solution with human-like outputs."
  },
  {
    id: 11,
    q: "How would you measure improvements or success in AI outputs?",
    a: "Log all user interactions and API responses in NeonDB. Review user feedback to check accuracy and relevance. Over time, fine-tune prompts or switch models based on outputs users engage with most."
  },
  {
    id: 12,
    q: "What would you improve next?",
    a: "Better PDF parsing for resumes, batch processing for images, adaptive prompt templates for different article styles, and analytics for users to track generated content performance."
  },
  {
    id: 13,
    q: "How do you handle hallucinations or incorrect outputs from Gemini?",
    a: "Mitigate hallucinations by structuring prompts clearly, providing context, and using deterministic settings like lower temperature for critical tasks. Validate outputs before storing and provide clear disclaimers that AI suggestions are advisory."
  },
  {
    id: 14,
    q: "Explain temperature, max tokens, and top-p settings in your project.",
    a: "Temperature controls randomness: lower = predictable, higher = creative. Max tokens limit response length. Top-P controls token selection probability mass, another way to manage creativity. Tuned per task."
  },
  {
    id: 15,
    q: "How would you fine-tune or customize Gemini for domain-specific outputs?",
    a: "Currently rely on prompt engineering. Advanced option: fine-tune on custom datasets like sample resumes, blog styles, or marketing content, so the model adapts to the user base and generates accurate industry-specific outputs."
  },
  {
    id: 16,
    q: "How would you handle ambiguity in user inputs?",
    a: "Structure prompts with clarifying instructions. Example: if user provides a short article prompt, instruct Gemini to assume target audience, word count, length, and style. Reduces randomness and improves usefulness."
  },
  {
    id: 17,
    q: "How do you handle API rate limits?",
    a: "Track per-user usage in NeonDB. Free users have limited requests, premium users have unlimited quotas. Backend prevents exceeding third-party API quotas by rejecting or queuing excess requests."
  }
];
