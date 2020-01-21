# Job Portal (Decision Tree Helper)

Created JobPortal (DecisionTreeHelper) Project with *.Net Core* and *AngularJS*. 
User can explore different open positions and answer Yes/No questions and based on answers user will get next questions. 
While answering questions, user can see already selected answers.
After submitting result, it will get stored in text file in JSON format. 
When user click on Last Explored Position, he will be able to get Last Interaction Details.

## Getting Started

Clone and DOwnload Project on your local machine. Please follow instructions under Delpoyment section for running the Project.

### Prerequisites

1. Install .Net Core SDK
Windows Server configured with the Web Server (IIS) server role. If your server isn't configured to host websites with IIS, follow the guidance in the IIS configuration section of the [Host ASP.NET Core on Windows with IIS](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-3.1#iis-configuration) article and then return to this tutorial.

2. Install [.Net Core Windows Server Hosting](https://dotnet.microsoft.com/download/dotnet-core/thank-you/runtime-aspnetcore-3.1.1-windows-hosting-bundle-installer)

## Deployment

*Quickly run the application without Deployment.*

1. Clone and download copy of the Git Repo. 

2. Open with Visual Studio 2017.

3. Build the Solution from Build Solution options under Build Top menu item.

4. Hit F5 for Quickly run the application.

*IIS Deployment*

1. As I have already made changes in Program.cs and Startup.cs files, no need to make changes.

2. Create Application Pool in IIS with .Net Framework version as 'No Managed Code' and Manage pipelined mode as 'Integrated'.

3. Publish Application in specific folder and copy contents viz. wwwroot folder. DLLs and web.config files in newly created folder under wwwroot.

4. Create Website using already created App Pool and specify newly created folder path.

## Project snapshots

![1. Job Portal Home screen](https://github.com/maheshdwaghmare/DecisionTreeHelper/blob/master/Projects%20snapshots/1.%20Job%20Portal%20Home%20screen.JPG)

![2. Explore Open Positions](https://github.com/maheshdwaghmare/DecisionTreeHelper/blob/master/Projects%20snapshots/2.%20Explore%20Open%20Positions.JPG)

![3. Explored Open Positions](https://github.com/maheshdwaghmare/DecisionTreeHelper/blob/master/Projects%20snapshots/3.%20Explored%20Open%20Positions.JPG)

![4. Last Explored Position](https://github.com/maheshdwaghmare/DecisionTreeHelper/blob/master/Projects%20snapshots/4.%20Last%20Explored%20Position.JPG)

## Built With

* [.Net Core Framework 2.1](https://dotnet.microsoft.com/download/dotnet-core/2.1) - The web framework used
* Angular JS 1.0.8

## Authors

* **Mahesh Waghmare**
