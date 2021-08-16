# rePORTable: An rich-text reporting application for collaborative reporting
rePORTable is a rich-text reporting application. It is built on a React framework with core rich-text creation and rendering functionality coming from TipTap (https://www.tiptap.dev/). 

A working demo of the application can be viewed at:
https://6119fe33835c8e0008fcc77e--reportable.netlify.app/#/

## Author
github.com/daniel-gregg

## Motivation
rePORTable is motivated by the unique problems facing the creation of lengthy, complex scientific/academic reports. The core issues faced in this situation are:
- Potentially large numbers of collaborators that can create version control and report integrity issues
- The need for reporting/engagement activities before the final report is completed
- The lack of integration between current approaches to reporting (pdf/text documents held on local computers) and current approaches to consumption of information (through dynamic, beautiful websites). 

In addition, there is potential to improve the efficiency and impact of reporting by taking advantage of modern digital technologies. rePORTable is a foray into this realm: A test-run of what might be possible with modern online rich-text applications. 

## Description
rePORTable v0.1 is a simple document creation application. It allows:
- The creation of a user profile
- Adding other users to your team
- Creating new 'reports' that comprise a title, synopsis, and content section and allow multiple authors
- Adding contributors from your team to a report to allow them also to edit the report
- Removing contributors from your report and users from your team
- Removing reports from your record
- Viewing and updating your bio

rePORTable is a MERN (Mongo-Express-React-Node) framework application with a relational database powered by the Mongoose (npm) framework. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Vision](#vision)

## Installation
- You must have Node installed on your computer. See here https://nodejs.org/en/download/. 
- Clone the github repositories for the front end and back end:
  - https://github.com/daniel-gregg/rePORTable-fe
  - https://github.com/daniel-gregg/rePORTable-be
- Initialise and connect your DB: look at the .env.example file in both the front end and back end repositories for guidance. 
- npm must first be initialised using 'npm init' in your working directory
- dependencies can then be installed using 'npm install PACKAGE' where 'PACKAGE' refers to the relevant dependency. 
- When ready start the back end using 'npm run watch' on your local machine
- When ready start the front end using 'npm run start' on your local machine

### Dependencies include:
- mongoose
- react
- dotenv
- and more: see package.json for the full list

### Set up your local environment
A .envexample file is included in the github repository - use this as a guide if you wish to install on your local computer by replacing it with your own .env file. 

## Usage
You must sign up to be able to use rePORTable. 
Once signed up you can create reports, add other users to your team, add content to your reports, and undertake other actions associated with managing your team/contributors/reports

## Features
The application currently uses TipTap to both generate and render rich text. Target near-term features include:
- Rendering reports to HTML and LaTeX
- Providing for direct linkages to established CMS platforms and/or integrating those into rePORTable directly
- Invite new users through an email invite approach
- Allow invited team members to confirm/reject a team invitation
- Ensure only report 'owners' have administrative priveledges (add/remove contributors, delete report)

## Vision
The vision for rePORTable is an application that allows:
- real-time collaboration
- finely-detailed permissioning
- collaboration through messaging and commenting
- rapid and effect publishing of documents/partial documents to CMS platforms

In addition, there may be potential to establish rePORTable as a centralised market place for writing services allowing:
- customers to procure targeted writing expertise
- customers to review prospective writing services providers based on their key areas of expertise, reviews, CV, and writing samples
- writers to sell writing services, with a focus on technical writing capability
- customers and writers to be able to review potential providers/clients respectively prior to services engagement
- documents to be guaranteed 'original' using integrations with plagiarism checking software and recording of materials submitted by writers over time
- secure document tracking and contracting through the use of a Merkle Tree hasing implementation to ensure security of contracting and payments for writing services

## Screenshots
Home screen:
![homescreen view](./public/homepage.png?raw=true "Homescreen view")
