# /utils :

*   All the utility/helper methods, validations, etc. that can be shared across our entire project are added here.
*   “dropConsole.js” is one of the utilities I have added. This is completely optional. Simple import this file as below in our app.js:
*   Intention is to override all the console statements throughout the project without ejecting the react app. Also, hiding errors and other console methods is as per preference or client requirement. The “process.env.***” will be covered in “Environment variables” section below.
*   pastebin link for above code: https://rentry.co/y3qav/raw
*   Here we are dropping the console’s ‘logs’ & ‘warnings’ only. You can add scripts to drop tables and other methods as well.
*   Note we have logged out a line “CAUTION:….” This is to warn end users to not use console so as to mitigate potential attacks.