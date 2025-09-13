# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

- #### Step 2: Use an LLM to help expand your perspective.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Functionality: Quoted Fields & Line Breaks (from the LLM)
    As a developer, I can parse CSV rows that include quoted fields and line breaks inside values, so I don’t lose or corrupt data when working with files exported from Excel or other tools.

    Functionality: Flexible Input Sources (from the LLM)
    As a developer, I can parse CSV data from strings, file paths, or streams, so I can reuse the parser in both Node.js and browser based apps without rewriting logic.

    Extensibility: Custom Row Mapping (from me)
    As a developer, I can provide a mapping function when parsing rows, so I can directly transform raw CSV rows into domain specific objects without extra code afterward.

    Extensibility: Configurable Header Handling (from me)
    As a developer, I can control how headers are treated (ignore headers, enforce unique headers, make them case-insensitive), so I can adapt the parser to different CSV formats easily.

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.)
    
    My initial ideas focused more on extensibility, such as letting developers customize row mapping and handle headers flexibly. The LLM emphasized edge cases in CSV parsing (quoted fields, embedded newlines) and making input sources more broad to make the library more universally useful. I appreciate how its suggestions pushed me to think beyond just developer convenience and into reliability for real-world files. The combination of my ideas and the LLM’s (more parsing + multiple input types) gave a well-rounded approach ti improvements. What didn’t resonate with me as much were things like "automatic type inference." I think I’d prefer leaving type decisions to developers for flexibility. 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
