# EasyRM

# Welcome to EasyRM

Welcome to EasyRM, your comprehensive solution for creating Entity-Relationship Models (ERMs) and seamlessly converting them into SQL queries.
With EasyRM, you can effortlessly sketch out complex relationships between entities, attributes, and their interactions, thanks to intuitive drag-and-drop functionality and a robust set of tools. Whether you're conceptualizing a new database schema or refining an existing one, our application provides the flexibility and precision you need to bring your vision to life.

But we don't stop there. Once your ER model is finalized, EasyRM automates the translation process, generating SQL queries tailored to your specifications.


# What is an ER Model

An ER Model, or Entity Relationship Model, is a model for identifying entities to be represented in 
the database and representation of how those entities are related. 

The Entity Relationship Diagram explains the relationship among the entities present in the database. ER models are used to model real-world objects like a person, a car, or a company and the relation between these real-world objects. In short, the ER Diagram is the structural format of the database. 

More Information to the ER Model:  
https://www.geeksforgeeks.org/introduction-of-er-model/

# What is SQL

SQL, or Structured Query Language, is a programming language used to communicate with and manage databases. 

It allows users to interact with databases by performing various operations such as querying data, inserting new records, updating existing records, and deleting records.

More Information to SQL:
https://de.ryte.com/wiki/SQL#:~:text=SQL%20ist%20die%20Abkürzung%20für,miteinander%20verknüpft%20und%20editiert%20werden.

# How do you create ERM using EasyRM

To create an ERM just place your Entities, Relations and Attributes via Drag'n'Drop into the Diagram.
At your fingertips, you'll find a sidebar housing three essential objects: the Relation Object, the Attribute Object, and the Entity Object. Each of these objects plays a vital role in defining the relationships, attributes, and entities within your database schema.

With EasyRM, you have the freedom to name these objects. Whether you're creating entities like "Customer," "Product," or "Order," defining attributes such as "Name," "Price," or "Quantity," or establishing relationships like "belongs to," "purchases," or "related to," EasyRM empowers you to shape your data structure with precision.

Simply drag the desired object from the sidebar onto the dashboard, arrange them according to your desired layout, and effortlessly connect them to visualize the intricate relationships within your database.

# Converting ERM to SQL

In EasyRM, transitioning from Entity-Relationship Models (ERMs) to SQL queries is as simple as clicking a button. When you're ready to convert your designed model into SQL statements, just hit the "Convert SQL" button.

Upon clicking this button, EasyRM opens a new popup window, providing you with an overview of the SQL statement generated based on your ERM. This SQL statement reflects the structure and relationships defined in your model.

But that's not all. In addition to displaying the SQL statement, the popup also offers a visual representation of how the resulting database tables would look like based on the conversion. This depiction gives you a clear understanding of how your model translates into tangible database structures, helping you validate and refine your design as needed.

# Additional functionalities

## Export ERM 

In EasyRM, users can easily export their Entity-Relationship Models (ERMs) for further use or sharing with others. This functionality is accessible through the "Export" button located in the navigation bar.

Upon clicking the "Export" button, users are presented with three options for exporting their ERMs in different formats:

PDF: Choosing the PDF option allows users to generate a downloadable PDF document containing a visual representation of their ERM. This format is useful for printing, documentation, or sharing the model in a universally readable format.

PNG: Selecting the PNG option generates a downloadable image file (in PNG format) representing the ERM. PNG files are widely supported and can be easily shared, embedded in documents, or used in presentations.

SVG: Opting for the SVG (Scalable Vector Graphics) format provides users with a downloadable vector-based image file. SVG files are ideal for scalability without loss of quality, making them suitable for resizing or editing the ERM in vector graphic software.

## Saving and Loading the created ERM

In EasyRM, users have the convenience of saving and loading their Entity-Relationship Models (ERMs) as files, thanks to the "Load" and "Save" buttons located in the navigation bar.

Save Button: When users click on the "Save" button, EasyRM prompts them to save their current ERM as a file on their device. Users can choose the location and provide a filename for the saved file. This file typically contains all the necessary information to reconstruct the ERM, including entity definitions, attribute details, and relationship configurations.

Load Button: Conversely, clicking on the "Load" button allows users to retrieve a previously saved ERM file from their device. Upon selecting a file, EasyRM reads the stored data and reconstructs the ERM within the application interface, allowing users to continue working on their design seamlessly from where they left off.

These functionalities offer users the flexibility to save their work for later editing or sharing and to reload their designs whenever needed.

## Export the SQL

In EasyRM, users can export the SQL generated from their Entity-Relationship Models (ERMs) with ease using the "Export SQL" button. Upon clicking this button, a new popup window appears, providing users with additional options for exporting their SQL.

Within the popup window, users have the opportunity to enter a desired name for the SQL file they are about to export.

Once the user has entered the desired name for the SQL file, they can proceed by clicking the "Download" button within the popup. As a result, EasyRM generates the SQL script based on the converted ERM and saves it as a .SQL file in the download directory of the user's device.
