\# COLORS LAMP Application



\## Description



The COLORS application is a full-stack web application built using the LAMP stack (Linux, Apache, MySQL, PHP). The application allows users to log in and manage a personalized list of colors. Users can add new colors and search for existing colors through PHP API endpoints connected to a MySQL database.



This project demonstrates backend API development, database integration, and frontend interaction using JavaScript.



---



\## Technologies Used



\- Linux (Ubuntu 20.04)

\- Apache Web Server

\- MySQL

\- PHP

\- HTML

\- CSS

\- JavaScript

\- DigitalOcean (for remote hosting)



---



\## High-Level Setup Instructions



1\. Set up a LAMP environment (local machine or DigitalOcean droplet).

2\. Create a MySQL database named `COP4331`.

3\. Create the required `Users` and `Colors` tables.

4\. Insert sample data for testing.

5\. Update database credentials inside the PHP files located in the `api/` directory.

6\. Place the project files inside your web server directory (e.g., `/var/www/html` or `htdocs/`).



---



\## How to Run and Access the Application



1\. Start Apache and MySQL services.

2\. Open a web browser.

3\. Navigate to:



```

http://localhost/colors-lamp/public/index.html

```



If deployed remotely:



```

http://your-domain/public/index.html

```



API endpoints can be accessed at:



```

/api/Login.php

/api/AddColor.php

/api/SearchColors.php

```



All endpoints use POST requests with JSON input and return JSON responses.



---



\## Assumptions \& Limitations



\- Designed for educational use.

\- Assumes a properly configured LAMP environment.

\- No production-level security hardening included.

\- Database credentials are not stored in this repository.

\- Passwords are hashed using MD5 before storage.



---



\## AI Usage



AI tools were used to assist with documentation formatting and repository organization in accordance with course policy.



--

